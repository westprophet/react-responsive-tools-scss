import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_horizontal.export.scss';
import { TBreakpoint } from '../../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../../interfaces/TAdaptiveVariant';
import useVariant from '../useVariant';

export default function useBreakpoint(b: TBreakpoint, variant: TAdaptiveVariant = 'MobToFirst') {
  const p = breakpoints[b];
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-width: ${p}px)` });
}

export function useBreakpointMF(b: TBreakpoint) {
  return useBreakpoint(b, 'MobToFirst');
}

export function useBreakpointDF(b: TBreakpoint) {
  return useBreakpoint(b, 'MobToFirst');
}
