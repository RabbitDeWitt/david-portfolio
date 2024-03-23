import React, { MouseEventHandler } from "react";

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

export interface ButtonProps {
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ProjectCardProps {
  project: Project
}