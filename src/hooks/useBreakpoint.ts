import { useMediaQuery } from 'react-responsive';
import { PREFERRED_VARIANT } from '../breakpoints.config';

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant';
import useVariant from './useVariant';
import { getBreakpoint } from "../functions/getBreakpoint";


export function useBreakpoint(b: TBreakpoint | number, variant: TAdaptiveVariant = PREFERRED_VARIANT): boolean | null {
    let _bp: number = typeof b === 'number' ? b : +getBreakpoint(b);
    const v = useVariant(variant);

    if (variant !== PREFERRED_VARIANT)
        _bp = _bp - 1;


    return useMediaQuery({query: `(${v}-width: ${_bp}px)`});
}

export function useBreakpointBetween(
    min: TBreakpoint | number,
    max: TBreakpoint | number,
    preferredVariant: TAdaptiveVariant = PREFERRED_VARIANT){
    let _min: number = typeof min === 'number' ? min : +getBreakpoint(min);
    let _max: number = typeof max === 'number' ? max : +getBreakpoint(max);

    switch (preferredVariant) {
        case 'MtF':
            _max = _max - 1;
            break;
        case 'DtF':
            _min = _min - 1;
            break;
    }

    return useMediaQuery({ minWidth: _min, maxWidth: _max});
}
