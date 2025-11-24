/**
 * Created by westp on 15.05.2023
 */

import React, {Fragment} from "react";

import { TBreakpoint } from '../interfaces/TBreakpoint';
import { useBreakpoint, useBreakpointBetween} from '../hooks/useBreakpoint.js';

interface Props {
    children: React.ReactNode;
    p: TBreakpoint | number;
}

interface BetweenProps {
    children: React.ReactNode;
    max: TBreakpoint | number;
    min: TBreakpoint | number;
}


export function For({children, p}: Props) {
  const is = useBreakpoint(p, 'MtF');
  if (is) return <Fragment>{children}</Fragment>;
  return null;
}


export function Before({children ,p}: Props) {
  const is = useBreakpoint(p, 'DtF');
  if (is) return <Fragment>{children}</Fragment>;
  return null;
}

export function Between({children, min, max}: BetweenProps) {
    const is = useBreakpointBetween(min, max);
    if (is) return <Fragment>{children}</Fragment>;
    return null;
}
