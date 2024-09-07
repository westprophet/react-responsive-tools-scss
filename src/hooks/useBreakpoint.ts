import { useMediaQuery } from 'react-responsive';

import breakpoints from '../../scss/_horizontal.export.scss';
import { TBreakpoint } from '../interfaces/TBreakpoint';
import { TAdaptiveVariant } from '../interfaces/TAdaptiveVariant';
import useVariant from './useVariant';
import {getCSSBreakpoint} from "./getCSSVariable";

export default function useBreakpoint(b: TBreakpoint | number, variant: TAdaptiveVariant = 'MtF') {
  const _bp = typeof b === 'number' ? b + 'px' :  getCSSBreakpoint(b);
  const v = useVariant(variant);
  return useMediaQuery({ query: `(${v}-width: ${_bp})` });
}

export function useBreakpointMF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}

export function useBreakpointDF(b: TBreakpoint | number) {
  return useBreakpoint(b, 'MtF');
}
