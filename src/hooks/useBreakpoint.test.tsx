import React from 'react';
import { render } from '@testing-library/react';
import { useBreakpoint, useBreakpointBetween } from './useBreakpoint';

// Mock external dependencies
jest.mock('react-responsive', () => ({
    useMediaQuery: jest.fn(),
}));

jest.mock('./useVariant', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../functions/getBreakpoint', () => ({
    __esModule: true,
    getBreakpoint: jest.fn(),
}));

jest.mock('../breakpoints.config', () => ({
    __esModule: true,
    PREFERRED_VARIANT: 'MtF', // adjust to your real preferred variant if needed
}));

import { useMediaQuery } from 'react-responsive';
import useVariant from './useVariant';
import { getBreakpoint } from '../functions/getBreakpoint';
import { PREFERRED_VARIANT } from '../breakpoints.config';

const mockedUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;
const mockedUseVariant = useVariant as jest.MockedFunction<typeof useVariant>;
const mockedGetBreakpoint = getBreakpoint as jest.MockedFunction<typeof getBreakpoint>;

// Small test components to use hooks inside React
function BreakpointTestComponent(props: { b: any; variant?: any }) {
    const value = useBreakpoint(props.b, props.variant);
    return <div data-testid="value">{String(value)}</div>;
}

function BreakpointBetweenTestComponent(props: { min: any; max: any; preferredVariant?: any }) {
    const value = useBreakpointBetween(props.min, props.max, props.preferredVariant);
    return <div data-testid="value">{String(value)}</div>;
}

describe('useBreakpoint', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockedUseVariant.mockReturnValue('min' as any);
    });

    it('should call useMediaQuery with numeric breakpoint as-is when variant === PREFERRED_VARIANT', () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointTestComponent b={768} variant={PREFERRED_VARIANT as any} />,
        );

        expect(mockedUseVariant).toHaveBeenCalledWith(PREFERRED_VARIANT);
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: '(min-width: 768px)',
        });
        expect(getByTestId('value').textContent).toBe('true');
    });

    it('should convert named breakpoint using getBreakpoint', () => {
        mockedGetBreakpoint.mockReturnValue('1024' as any);
        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointTestComponent b={'lg'} variant={PREFERRED_VARIANT as any} />,
        );

        expect(mockedGetBreakpoint).toHaveBeenCalledWith('lg');
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: '(min-width: 1024px)',
        });
        expect(getByTestId('value').textContent).toBe('false');
    });

    it('should decrease breakpoint by 1px when variant !== PREFERRED_VARIANT (numeric)', () => {
        mockedUseVariant.mockReturnValue('max' as any);
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointTestComponent b={500} variant={'DtF'} />,
        );

        expect(mockedUseVariant).toHaveBeenCalledWith('DtF');
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: '(max-width: 499px)',
        });
        expect(getByTestId('value').textContent).toBe('true');
    });

    it('should also decrease named breakpoint by 1px when variant !== PREFERRED_VARIANT', () => {
        mockedGetBreakpoint.mockReturnValue('600' as any);
        mockedUseVariant.mockReturnValue('max' as any);
        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointTestComponent b={'md'} variant={'DtF'} />,
        );

        expect(mockedGetBreakpoint).toHaveBeenCalledWith('md');
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: '(max-width: 599px)',
        });
        expect(getByTestId('value').textContent).toBe('false');
    });
});

describe('useBreakpointBetween', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should use min and max as-is when preferredVariant === PREFERRED_VARIANT (numeric)', () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={PREFERRED_VARIANT as any}
            />,
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 320,
            maxWidth: 767, // 768 - 1 because PREFERRED_VARIANT === 'MtF'
        });
        expect(getByTestId('value').textContent).toBe('true');
    });

    it('should convert named min and max via getBreakpoint when preferredVariant === PREFERRED_VARIANT', () => {
        mockedGetBreakpoint
            .mockReturnValueOnce('320' as any) // for min
            .mockReturnValueOnce('768' as any); // for max

        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={'sm'}
                max={'md'}
                preferredVariant={PREFERRED_VARIANT as any}
            />,
        );

        expect(mockedGetBreakpoint).toHaveBeenNthCalledWith(1, 'sm');
        expect(mockedGetBreakpoint).toHaveBeenNthCalledWith(2, 'md');
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 320,
            maxWidth: 767, // 768 - 1 because PREFERRED_VARIANT === 'MtF'
        });
        expect(getByTestId('value').textContent).toBe('false');
    });

    it('for preferredVariant === "MtF" should decrease max by 1px', () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={'MtF'}
            />,
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 320,
            maxWidth: 767,
        });
        expect(getByTestId('value').textContent).toBe('true');
    });

    it('for preferredVariant === "DtF" should decrease min by 1px', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={'DtF'}
            />,
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 319,
            maxWidth: 768,
        });
        expect(getByTestId('value').textContent).toBe('false');
    });

    it('MtF + named values: should decrease max after getBreakpoint', () => {
        mockedGetBreakpoint
            .mockReturnValueOnce('400' as any) // min
            .mockReturnValueOnce('900' as any); // max

        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={'sm'}
                max={'xl'}
                preferredVariant={'MtF'}
            />,
        );

        expect(mockedGetBreakpoint).toHaveBeenNthCalledWith(1, 'sm');
        expect(mockedGetBreakpoint).toHaveBeenNthCalledWith(2, 'xl');
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 400,
            maxWidth: 899,
        });
        expect(getByTestId('value').textContent).toBe('true');
    });

    it('DtF + named values: should decrease min after getBreakpoint', () => {
        mockedGetBreakpoint
            .mockReturnValueOnce('400' as any) // min
            .mockReturnValueOnce('900' as any); // max

        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={'sm'}
                max={'xl'}
                preferredVariant={'DtF'}
            />,
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 399,
            maxWidth: 900,
        });
        expect(getByTestId('value').textContent).toBe('false');
    });
});
