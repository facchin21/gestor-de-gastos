import { FaTiktok, FaLinkedin, FaInstagram } from 'react-icons/fa';

export interface itemsProps{
    id : string;
    name : string;
    link : string;
    logo : React.ComponentType;
}

export const itemsFront: itemsProps[] = [
    {
        id: "01",
        name : "Fermin Facchin Quiroga",
        link : "https://www.linkedin.com/in/ferminfacchin21/",
        logo : FaLinkedin,
    },
    {
        id : '02',
        name : "Programate",
        link : "https://www.instagram.com/programate__/",
        logo : FaInstagram,
    },
    {
        id : '03',
        name : "Programate",
        link : "https://www.tiktok.com/@programate_?lang=es",
        logo : FaTiktok,
    }
]

export const itemsBack : itemsProps[] = [
    {
        id: "01",
        name : "Roman Meclazcke",
        link : "https://www.linkedin.com/in/roman-meclazcke/",
        logo : FaLinkedin,
    },
    {
        id : '02',
        name : "mentesprogramadoras",
        link : "https://www.instagram.com/mentesprogramadoras/",
        logo : FaInstagram,
    },
    {
        id : '03',
        name : "mentesprogramadoras",
        link : "https://www.tiktok.com/@mentesprogramadoras",
        logo : FaTiktok,
    }
]


