    // src/hooks/__tests__/useBreakpoint.test.tsx
    import { renderHook } from '@testing-library/react';
    import useBreakpoint, { useBreakpointMF, useBreakpointDF } from './useBreakpoint';
    import breakpoints from '../../scss/_horizontal.export.scss';

    jest.mock('react-responsive', () => ({
      useMediaQuery: jest.fn(),
    }));

    jest.mock('../useVariant', () => jest.fn(() => 'min'));

    describe('useBreakpoint', () => {
      it('should return true for the media query that matches the breakpoint', () => {
        const mockedUseMediaQuery = require('react-responsive').useMediaQuery as jest.Mock;
        mockedUseMediaQuery.mockReturnValue(true);

        const { result } = renderHook(() => useBreakpoint('sm'));

        expect(result.current).toBe(true);
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({ query: `(min-width: ${breakpoints.sm}px)` });
      });

      it('should return false for the media query that does not match the breakpoint', () => {
        const mockedUseMediaQuery = require('react-responsive').useMediaQuery as jest.Mock;
        mockedUseMediaQuery.mockReturnValue(false);

        const { result } = renderHook(() => useBreakpoint('sm'));

        expect(result.current).toBe(false);
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({ query: `(min-width: ${breakpoints.sm}px)` });
      });
    });

    describe('useBreakpointMF', () => {
      it('should return true for the `MtF` variant', () => {
        const mockedUseMediaQuery = require('react-responsive').useMediaQuery as jest.Mock;
        mockedUseMediaQuery.mockReturnValue(true);

        const { result } = renderHook(() => useBreakpointMF('md'));

        expect(result.current).toBe(true);
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({ query: `(min-width: ${breakpoints.md}px)` });
      });
    });

    describe('useBreakpointDF', () => {
      it('should return true for the `DtF` variant', () => {
        const mockedUseMediaQuery = require('react-responsive').useMediaQuery as jest.Mock;
        mockedUseMediaQuery.mockReturnValue(true);

        const { result } = renderHook(() => useBreakpointDF('lg'));

        expect(result.current).toBe(true);
        expect(mockedUseMediaQuery).toHaveBeenCalledWith({ query: `(min-width: ${breakpoints.lg}px)` });
      });
    });
