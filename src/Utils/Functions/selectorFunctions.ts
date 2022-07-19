import { INITIAL_STATE } from "../../Development/initialState";
import { IPersonalInfo } from "../../Model/IPersonalInfo";
import { ISocialLink } from "../../Model/ISocialLink";
import { IInitialState } from "../../Model/IInitalState";
import { ILangState } from "../../Model/ILangState";
import { IEducation } from "../../Model/IEducation";
import { IContact } from "../../Model/IContact";
import { ILocation } from "../../Model/ILocation";
import { ISocial } from "../../Model/ISocial";

type FooterInfo = [IContact, ILocation, ISocial];

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




export const getFooterContent = (): FooterInfo => {
    const currentLang = getCurrentLang();
    const contact = (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState).contact;
    const location = (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState).location;
    const social = (INITIAL_STATE[currentLang as keyof IInitialState] as ILangState).social;
    return [contact, location, social];
}