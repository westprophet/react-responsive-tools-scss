import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_horizontal.export.scss';
import { TBreakpoint } from '../../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useBreakpoint(b: TBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const p = typeof b === 'number' ? b :  breakpoints[b];
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-width: ${p}px)` });
}

export function useBreakpointMF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}

export function useBreakpointDF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}
