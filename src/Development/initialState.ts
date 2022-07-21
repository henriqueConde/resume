import { IInitialState } from "../Model/IInitalState"

const BASE_URI = process.env.PUBLIC_URL;

export const INITIAL_STATE: IInitialState = {
    availableLangs: [{lang: 'en', flagImg: 'English'}, {lang: 'es', flagImg: 'Español'}],
    currentLang: 'en',
    socialLinks: [
        {
            icon: BASE_URI + 'imgs/linkedin.png',
            url: 'https://www.linkedin.com/in/henrique-conde/',
            text: 'LINKEDIN/henrique-conde'
        },
        {
            icon: BASE_URI + 'imgs/github.png',
            url: 'https://github.com/henriqueConde',
            text: 'GITHUB/henriqueConde'
        }
    ],
    en: {
        aboutMe: 'About Me',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. ',
        education: {
            title: 'Education',
            schools: [
                {
                    name: 'Assembler',
                    startYear: 2020,
                    finnishYear: 2021,
                    degree: 'Fullstack Development Bootcamp'
                },
                {
                    name: 'Caelum',
                    startYear: 2018,
                    finnishYear: 2019,
                    degree: 'Frontend Development Bootcamp'
                },
            ]
        },
        languages: 'Languages',
        location: {
            title: 'location',
            location: 'Porto, Portuga'
        },
        contact: {
            title: 'contact',
            email: 'henriquepenaconde@gmail.com',
            phone: '+351 936 532 632'
        },
        social: {
            title: 'social',
                socialLinks: [
                    {
                        url: 'https://www.linkedin.com/in/henrique-conde/',
                        text: 'LINKEDIN/henrique-conde'
                    },
                    {
                        url: 'https://github.com/henriqueConde',
                        text: 'GITHUB/henriqueConde'
                    }
                ],
        },
        workExperience: [
            {
                companyName: 'Farfetch',
                startYear: 2021,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
            {
                companyName: 'Porto Surgical',
                startYear: 2020,
                endYear: 2020,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
            {
                companyName: 'Freenlancer',
                startYear: 2019,
                endYear: 2020,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
        ],
        links: 'Links',
        personalInfo: {
            firstName: 'Henrique',
            lastName: 'Conde',
            profession: 'Frontend dev'
        },
        personalSkills: 'Personal Skills',
        skills: [
            {
                type: 'personal',
                name: 'teamwork',
                level: 'levelGreen',
            },
            {
                type: 'personal',
                name: 'communication',
                level: 'levelYellow',
            },
            {
                type: 'personal',
                name: 'organization',
                level: 'levelRed',
            },
            {
                type: 'technical',
                name: 'HTML',
                level: 'levelGreen',
            },
            {
                type: 'technical',
                name: 'CSS/SCSS',
                level: 'levelGreen',
            },
            {
                type: 'technical',
                name: 'javascript',
                level: 'levelYellow',
            },
            {
                type: 'technical',
                name: 'react.js',
                level: 'levelYellow',
            },
        ],
        technicalSkills: 'Technical Skills',
        workExperienceText: 'Work Experience'
    },
    es: {
        aboutMe: 'Sobre Mí',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. ',
        education: {
            title: 'Educación',
            schools: [
                {
                    name: 'Assembler',
                    startYear: 2020,
                    finnishYear: 2021,
                    degree: 'Fullstack Development Bootcamp'
                },
                {
                    name: 'Caelum',
                    startYear: 2018,
                    finnishYear: 2019,
                    degree: 'Frontend Development Bootcamp'
                },
            ]
        },
        languages: 'Idiomas',
        location: {
            title: 'Ubicación',
            location: 'Porto, Portugal'
        },
        contact: {
            title: 'Contacto',
            email: 'henriquepenaconde@gmail.com',
            phone: '+351 936 532 632'
        },
        social: {
            title: 'social',
                socialLinks: [
                    {
                        url: 'https://www.linkedin.com/in/henrique-conde/',
                        text: 'LINKEDIN/henrique-conde'
                    },
                    {
                        url: 'https://github.com/henriqueConde',
                        text: 'GITHUB/henriqueConde'
                    }
                ],
        },
        workExperience: [
            {
                companyName: 'Farfetch',
                startYear: 2021,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
            {
                companyName: 'Porto Surgical',
                startYear: 2020,
                endYear: 2020,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
            {
                companyName: 'Freenlancer',
                startYear: 2019,
                endYear: 2020,
                position: 'Frontend Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
                accomplishmentsList: ['created react interfaces', 'designed frontend architectures']
            },
        ],
        links: 'Links',
        personalInfo: {
            firstName: 'Henrique',
            lastName: 'Conde',
            profession: 'Frontend dev'
        },
        personalSkills: 'Soft Skills',
        skills: [
            {
                type: 'personal',
                name: 'teamwork',
                level: 'levelGreen',
            },
            {
                type: 'personal',
                name: 'communication',
                level: 'levelYellow',
            },
            {
                type: 'personal',
                name: 'organization',
                level: 'levelRed',
            },
            {
                type: 'technical',
                name: 'HTML',
                level: 'levelGreen',
            },
            {
                type: 'technical',
                name: 'CSS/SCSS',
                level: 'levelGreen',
            },
            {
                type: 'technical',
                name: 'javascript',
                level: 'levelYellow',
            },
            {
                type: 'technical',
                name: 'react.js',
                level: 'levelYellow',
            },
        ],
        technicalSkills: 'Hard Skills',
        workExperienceText: 'Experiencia Laboral'
    }
}