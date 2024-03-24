import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export type Tecnology = {
  icon: string,
  name: string
}

export type Project = {
  thumb: string,
  name: string,
  gitLink: string,
  demoLink: string
  tecnologies: Array<Tecnology>
}

export type ContactInfo = {
  icon: IconType,
  value: string,
}

export interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ProjectCardProps {
  project: Project
}

export interface ContactItemProps {
  item: ContactInfo
}