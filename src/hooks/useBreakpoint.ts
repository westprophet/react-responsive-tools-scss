import { useMediaQuery } from 'react-responsive';

import { TBreakpoint } from '../interfaces/TBreakpoint.js';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant.js';
import useVariant from './useVariant.js';
import getBreakpoint from "../functions/getBreakpoint.js";

export default function useBreakpoint(b: TBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const _bp = typeof b === 'number' ? b + 'px' :  getBreakpoint(b);
  const v = useVariant(variant);
  console.log('useMediaQuery', _bp, `(${v}-width: ${_bp})`);
  return useMediaQuery({ query: `(${v}-width: ${_bp})` });
}

export function useBreakpointMF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}

export function useBreakpointDF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'DtF');
}
