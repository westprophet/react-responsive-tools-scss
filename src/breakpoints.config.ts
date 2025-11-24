// src/breakpoints.config.ts

import {TAdaptiveVariant} from "./interfaces/TAdaptiveVariant";

/**
 * Preferred adaptive layout variant.
 *
 * 'DtF' stands for "Desktop To First" and is used as the default strategy
 * for resolving overlaps between "mobile-first" (`min-width`) and
 * "desktop-first" (`max-width`) breakpoints.
 *
 * When switching between these variants we shift the opposite boundary
 * by 1px to avoid cases when two ranges overlap at the exact same pixel.
 *
 * For example:
 *  - `min-width: 300px` includes 300px,
 *  - `max-width: 300px` also includes 300px,
 * which causes an overlap. By shifting one of them by 1px we guarantee
 * that a given pixel belongs to only one range.
 */
export const PREFERRED_VARIANT:TAdaptiveVariant = 'DtF' // DESKTOP_TO_FIRST


const HORIZONTAL_BREAKPOINTS: Record<string, string> = {
    "xs": "320px",
    "sm": "576px",
    "md": "768px",
    "lg": "992px",
    "lt": "1024px",
    "ltm": "1200px",
    "ltl": "1440px",
    "xl": "1920px",
    "xxl": "2560px",
    "qxl": "3840px"
};

const VERTICAL_BREAKPOINTS: Record<string, string> = {
    "xs": "600px",
    "sm": "800px",
    "md": "1000px",
    "lg": "1200px",
    "xl": "1600px",
    "xxl": "1601px"
};

export { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS };
