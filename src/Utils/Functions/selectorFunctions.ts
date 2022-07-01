import { INITIAL_STATE } from "../../Development/initialState";
import { IPersonalInfo } from "../../Model/IPersonalInfo";
import { ISocialLink } from "../../Model/ISocialLink";
import { IInitialState } from "../../Model/IInitalState";
import { ILangState } from "../../Model/ILangState";
import { IEducation } from "../../Model/IEducation";
import { IFooterBoxes } from "../../Model/IFooterBoxes";

export const getCurrentLang = (): string => INITIAL_STATE.currentLang;

export const getCurrentLangState = (): ILangState => {
    const currentLang = getCurrentLang();
    return (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState);
}

export const getStatePersonalInfo = (): IPersonalInfo => {
    const currentLang = getCurrentLang();
    return (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState).personalInfo;
}

export const getEducationState = (): IEducation => {
    const { education } = getCurrentLangState();
    return education;
}

export const getSocialLinks = (): ISocialLink[] => INITIAL_STATE.socialLinks;

export const getFooterBoxes = (): IFooterBoxes[] => {
    const currentLang = getCurrentLang();
    return (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState).footerBoxes;
}