import {TBreakpoint, TVerticalBreakpoint} from "../interfaces/TBreakpoint";

export function getCSSVariable(variableName: string) {
  const root = document.documentElement;
  const variableValue = getComputedStyle(root).getPropertyValue(variableName);
  return variableValue.trim();
}


export function getCSSBreakpoint(bp: TBreakpoint) {
  return getCSSVariable(`--bp-${bp}`)
}

export function getCSSVBreakpoint(bp: TVerticalBreakpoint) {
  return getCSSVariable(`--vbp-${bp}`)
}
