import { IEducation } from "./IEducation";
import { IFooterBoxes } from "./IFooterBoxes";
import { IPersonalInfo } from "./IPersonalInfo";
import { ISkill } from "./ISkill";
import { IWorkExperience } from "./IWorkExperience";
export interface ILangState {
    aboutMe: string;
    bio: string;
    education: IEducation;
    footerBoxes: IFooterBoxes[];
    workExperience: IWorkExperience[];
    links: string;
    personalInfo: IPersonalInfo;
    personalSkills: string;
    skills: ISkill[];
    technicalSkills: string;
    workExperienceText: string;
}