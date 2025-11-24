// breakpointConfig.js

import {TAdaptiveVariant} from "./interfaces/TAdaptiveVariant";

const PREFERRED_VARIANT:TAdaptiveVariant = 'MtF' // DESKTOP_TO_FIRST

const HORIZONTAL_BREAKPOINTS: Record<string, number> = {
    "xs": 320,
    "sm": 576,
    "md": 768,
    "lg": 992,
    "lt": 1024,
    "ltm": 1200,
    "ltl": 1440,
    "xl": 1920,
    "xxl": 2560,
    "qxl": 384,
};

const VERTICAL_BREAKPOINTS: Record<string, number> = {
    "xs": 600,
    "sm": 800,
    "md": 1000,
    "lg": 1200,
    "xl": 1600,
    "xxl": 160,
};

export { HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS, PREFERRED_VARIANT };
