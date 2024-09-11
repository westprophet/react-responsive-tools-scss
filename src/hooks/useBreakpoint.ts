import { useMediaQuery } from 'react-responsive';

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant';
import useVariant from './useVariant';
import getBreakpoint from "../functions/getBreakpoint";

export default function useBreakpoint(b: TBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const _bp = typeof b === 'number' ? b + 'px' :  getBreakpoint(b);
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-width: ${_bp})` });
}

export function useBreakpointMF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}

export function useBreakpointDF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}
