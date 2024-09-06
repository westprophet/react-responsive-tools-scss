import {TAdaptiveVariant} from "../interfaces/TAdaptiveVariant";

export default function useVariant(variant: TAdaptiveVariant){
    return variant === 'MtF' ? 'min': 'max';
}
