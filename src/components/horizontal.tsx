/**
 * Created by westp on 15.05.2023
 */


import React from 'react';

import TBreakpointSize from "../interfaces/TBreakpointSize";
import useBreakpoints from "../hooks/useBreakpoints";

interface Props{
    children: any;
}

interface ForComponentProps extends Props{
    size: TBreakpointSize;
}


export function For(p: ForComponentProps) {
    const b = useBreakpoints();
    if(b[p.size]) return p.children;
    else return null;
}
export function Before(p: ForComponentProps) {
    const b = useBreakpoints();
    if(!b[p.size]) return p.children;
    else return null;
}

export function ForXS(p: Props) {
    return <For {...p} size="xs" />;
}

export function ForSM(p: Props) {
    return <For {...p} size="sm" />;
}

export function ForLG(p: Props) {
    return <For {...p} size="lg" />;
}
export function ForMD(p: Props) {
    return <For {...p} size="md" />;
}

export function ForXL(p: Props) {
    return <For {...p} size="xl" />;
}

export function ForXXL(p: Props) {
    return <For {...p} size="xxl" />;
}

export function ForXXXL(p: Props) {
    return <For {...p} size="xxxl" />;
}


export function BeforeXS(p: Props) {
    return <Before {...p} size="xs" />;
}

export function BeforeSM(p: Props) {
    return <Before {...p} size="sm" />;
}

export function BeforeLG(p: Props) {
    return <Before {...p} size="lg" />;
}
export function BeforeMD(p: Props) {
    return <Before {...p} size="md" />;
}

export function BeforeXL(p: Props) {
    return <Before {...p} size="xl" />;
}

export function BeforeXXL(p: Props) {
    return <Before {...p} size="xxl" />;
}

export function BeforeXXXL(p: Props) {
    return <Before {...p} size="xxxl" />;
}
