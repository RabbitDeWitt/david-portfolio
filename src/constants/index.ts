import {
  FiLinkedin,
  FiGithub
} from 'react-icons/fi'

type Tecnology = {
  icon: string,
  name: string
}

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
    href: '',
  },
  {
    icon: FiLinkedin,
    href: '',
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