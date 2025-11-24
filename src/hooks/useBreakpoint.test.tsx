import React from "react";
import { render } from "@testing-library/react";
import { useBreakpoint, useBreakpointBetween } from "./useBreakpoint";

jest.mock("react-responsive", () => ({
    useMediaQuery: jest.fn(),
}));

jest.mock("../breakpoints.config", () => ({
    __esModule: true,
    PREFERRED_VARIANT: "MtF",
}));

import { useMediaQuery } from "react-responsive";
import { PREFERRED_VARIANT } from "../breakpoints.config";

const mockedUseMediaQuery = useMediaQuery as jest.MockedFunction<
    typeof useMediaQuery
>;

function BreakpointTestComponent(props: { b: any; variant?: any }) {
    const value = useBreakpoint(props.b, props.variant);
    return <div data-testid="value">{String(value)}</div>;
}

function BreakpointBetweenTestComponent(props: {
    min: any;
    max: any;
    preferredVariant?: any;
}) {
    const value = useBreakpointBetween(
        props.min,
        props.max,
        props.preferredVariant
    );
    return <div data-testid="value">{String(value)}</div>;
}

describe("useBreakpoint", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("uses min-width for numeric breakpoint when variant === PREFERRED_VARIANT", () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointTestComponent b={768} variant={PREFERRED_VARIANT as any} />
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: "(min-width: 768px)",
        });
        expect(getByTestId("value").textContent).toBe("true");
    });

    it("decreases breakpoint by 1px when variant !== PREFERRED_VARIANT (numeric)", () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointTestComponent b={500} variant={"DtF"} />
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            query: "(max-width: 499px)",
        });
        expect(getByTestId("value").textContent).toBe("true");
    });
});

describe("useBreakpointBetween", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("uses min/max as-is but decreases max by 1px when preferredVariant === PREFERRED_VARIANT (numeric)", () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={PREFERRED_VARIANT as any}
            />
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 320,
            maxWidth: 767, // 768 - 1
        });
        expect(getByTestId("value").textContent).toBe("true");
    });

    it('when preferredVariant === "MtF" it only decreases max by 1px', () => {
        mockedUseMediaQuery.mockReturnValue(true);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={"MtF"}
            />
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 320,
            maxWidth: 767,
        });
        expect(getByTestId("value").textContent).toBe("true");
    });

    it('when preferredVariant === "DtF" it only decreases min by 1px', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        const { getByTestId } = render(
            <BreakpointBetweenTestComponent
                min={320}
                max={768}
                preferredVariant={"DtF"}
            />
        );

        expect(mockedUseMediaQuery).toHaveBeenCalledWith({
            minWidth: 319,
            maxWidth: 768,
        });
        expect(getByTestId("value").textContent).toBe("false");
    });
});
