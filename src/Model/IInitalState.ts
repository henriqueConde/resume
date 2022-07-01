import { ILangState } from "./ILangState";
import { ISocialLink } from "./ISocialLink";

export interface IInitialState {
    currentLang: string;
    socialLinks: ISocialLink[];
    en: ILangState,
    pt?: ILangState,
    es?: ILangState,
}