import { IAvailableLanguage } from "./IAvailableLanguage";
import { ILangState } from "./ILangState";
import { ISocialLink } from "./ISocialLink";

export interface IInitialState {
    availableLangs: IAvailableLanguage[];
    currentLang: string;
    socialLinks: ISocialLink[];
    en: ILangState,
    pt?: ILangState,
    es?: ILangState,
}