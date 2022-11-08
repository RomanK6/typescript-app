import { TypedUseSelectorHook, useSelector } from "react-redux";
import { redusersType } from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<redusersType> = useSelector;