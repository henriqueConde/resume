import { ISocialLink } from "./ISocialLink";

export interface ILocation {
    title: string;
    location: string;
}

export interface IContact {
    title: string;
    email: string;
    phone: string;
}

export interface ISocial {
    title: string;
    socialLinks: ISocialLink[];
}

export type IFooterBoxes = ILocation | IContact | ISocial;