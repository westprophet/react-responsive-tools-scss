/**
 * Created by westp on 15.05.2023
 */

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { useBreakpointDF, useBreakpointMF } from '../hooks/horizontal/useBreakpoint';

interface Props {
  children: any;
}

interface ForComponentProps extends Props {
  size: TBreakpoint;
}

export function ForMF(p: ForComponentProps) {
  const is = useBreakpointMF(p.size);
  if (is) return p.children;
  return null;
}

export function ForDF(p: ForComponentProps) {
  const is = useBreakpointDF(p.size);
  if (is) return p.children;
  return null;
}
