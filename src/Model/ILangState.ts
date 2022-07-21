import { IContact } from "./IContact";
import { IEducation } from "./IEducation";
import { ILocation } from "./ILocation";
import { IPersonalInfo } from "./IPersonalInfo";
import { ISkill } from "./ISkill";
import { ISocial } from "./ISocial";
import { IWorkExperience } from "./IWorkExperience";

export interface ILangState {
    aboutMe: string;
    bio: string;
    contact: IContact;
    education: IEducation;
    workExperience: IWorkExperience[];
    languages: string;
    links: string;
    location: ILocation;
    personalInfo: IPersonalInfo;
    personalSkills: string;
    skills: ISkill[];
    social: ISocial;
    technicalSkills: string;
    workExperienceText: string;
}