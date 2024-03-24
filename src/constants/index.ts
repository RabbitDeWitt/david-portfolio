import { ContactInfo, Project, Tecnology } from '@/types';

import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin
} from 'react-icons/fi'


export const navOptions = [
  {
    name: 'Home',
    href: 'home'
  },
  {
    name: 'Sobre',
    href: 'sobre'
  },
  {
    name: 'Tecnologias',
    href: 'tecnologias'
  },
  {
    name: 'Portfolio',
    href: 'portfolio'
  },
  {
    name: 'Contato',
    href: 'contato'
  },
]

export const socialMedias = [
  {
    icon: FiGithub,
    href: 'https://github.com/RabbitDeWitt',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/david-santos-de-oliveira-coelho/',
  },
];

export const tecnologies: Array<Tecnology> = [
  {
    icon: '/tecnologies-icons/html.svg',
    name: 'HTML'
  },
  {
    icon: '/tecnologies-icons/css.svg',
    name: 'CSS'
  },
  {
    icon: '/tecnologies-icons/js.svg',
    name: 'Javascript'
  },
  {
    icon: '/tecnologies-icons/typescript.svg',
    name: 'Typescript'
  },
  {
    icon: '/tecnologies-icons/bootstrap.svg',
    name: 'Bootstrap'
  },
  {
    icon: '/tecnologies-icons/tailwind.svg',
    name: 'Tailwind CSS'
  },
  {
    icon: '/tecnologies-icons/sass.svg',
    name: 'Sass'
  },
  {
    icon: '/tecnologies-icons/materialui.svg',
    name: 'Material UI'
  },
  {
    icon: '/tecnologies-icons/react.svg',
    name: 'React JS'
  },
  {
    icon: '/tecnologies-icons/next.svg',
    name: 'Next JS'
  },
  {
    icon: '/tecnologies-icons/java.svg',
    name: 'Java'
  },
  {
    icon: '/tecnologies-icons/spring.svg',
    name: 'Spring'
  },
  {
    icon: '/tecnologies-icons/mysql.svg',
    name: 'MySQL'
  },
  {
    icon: '/tecnologies-icons/git.svg',
    name: 'Git'
  },
]

export const projects: Array<Project> = [
  {
    name: 'Daviagens',
    thumb: '/projects-thumbs/daviagens.png',
    gitLink: 'https://github.com/RabbitDeWitt/Atividade-Modulo-2 ',
    demoLink: 'https://rabbitdewitt.github.io/daviagens/',
    tecnologies: [
      tecnologies[0],
      tecnologies[1],
      tecnologies[2],
      tecnologies[4],
    ]
  },
  {
    name: 'Carhub',
    thumb: '/projects-thumbs/carhub.png',
    gitLink: 'https://github.com/RabbitDeWitt/carhub',
    demoLink: 'https://carhub-nine-sigma.vercel.app/',
    tecnologies: [
      tecnologies[9],
      tecnologies[3],
      tecnologies[5],
    ]
  },
  {
    name: 'Evogym',
    thumb: '/projects-thumbs/evogym.png',
    gitLink: 'https://github.com/RabbitDeWitt/evogym',
    demoLink: 'https://rabbitdewitt.github.io/evogym/',
    tecnologies: [
      tecnologies[9],
      tecnologies[3],
      tecnologies[5]
    ]
  },
  {
    name: 'Captur',
    thumb: '/projects-thumbs/captur.png',
    gitLink: 'https://github.com/RabbitDeWitt/captur-project',
    demoLink: 'https://captur-project-seven.vercel.app/',
    tecnologies: [
      tecnologies[9],
      tecnologies[3],
      tecnologies[5]
    ]
  },
  {
    name: 'Hoobank',
    thumb: '/projects-thumbs/hoobank.png',
    gitLink: 'https://github.com/RabbitDeWitt/hoobank',
    demoLink: 'https://rabbitdewitt.github.io/hoobank/',
    tecnologies: [
      tecnologies[8],
      tecnologies[2],
      tecnologies[5]
    ]
  },
  {
    name: 'Data Finance',
    thumb: '/projects-thumbs/data-finance.png',
    gitLink: 'https://github.com/RabbitDeWitt/data-finance',
    demoLink: 'https://rabbitdewitt.github.io/data-finance/',
    tecnologies: [
      tecnologies[8],
      tecnologies[2],
      tecnologies[5]
    ]
  },
  {
    name: 'Defi',
    thumb: '/projects-thumbs/defi.png',
    gitLink: 'https://github.com/RabbitDeWitt/defi-project',
    demoLink: 'https://rabbitdewitt.github.io/defi-project/',
    tecnologies: [
      tecnologies[8],
      tecnologies[3],
      tecnologies[5]
    ]
  },
  {
    name: 'Beaches',
    thumb: '/projects-thumbs/beaches.png',
    gitLink: 'https://github.com/RabbitDeWitt/beaches',
    demoLink: 'https://rabbitdewitt.github.io/beaches/',
    tecnologies: [
      tecnologies[8],
      tecnologies[3],
      tecnologies[5]
    ]
  },
]

export const contactInfos: Array<ContactInfo> = [
  {
    icon: FiMail,
    value: 'davidsocoelho@outlook.com',
  },
  {
    icon: FiMapPin,
    value: 'Santo André - SP',
  }
]