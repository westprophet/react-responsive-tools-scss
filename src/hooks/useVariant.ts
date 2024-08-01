import {TAdaptiveVariant} from "../interfaces/TAdaptiveVariant";

export default function useVariant(variant: TAdaptiveVariant){
    return variant === 'MobileToFirst' ? 'min': 'max';
}
