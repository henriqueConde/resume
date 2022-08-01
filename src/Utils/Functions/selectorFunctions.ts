import { INITIAL_STATE } from "../../Development/initialState";
import { IInitialState } from "../../Model/IInitalState";
import { ILangState } from "../../Model/ILangState";

export const getCurrentLangState = (): ILangState => {
    return (INITIAL_STATE[INITIAL_STATE.currentLang as keyof IInitialState] as ILangState);
}