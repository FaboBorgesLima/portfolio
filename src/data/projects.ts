import { Tech } from '@/types/tech'

export interface Project {
  title: string
  description: string
  techs: Tech[]
  repo?: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Kubernetes Load Testing',
    description: 'A project for load testing Kubernetes clusters.',
    techs: [Tech.Kubernetes, Tech.TypeScript, Tech.Python, Tech.Docker, Tech.Linux],
    repo: 'https://github.com/FaboBorgesLima/cluster-tester',
    link: 'https://faboborgeslima.github.io/cluster-tester',
  },
  {
    title: 'Edge ML Example',
    repo: 'https://github.com/FaboBorgesLima/edge-ml-devpr-example',
    description: 'An example project demonstrating edge machine learning for developers.',
    techs: [Tech.TailwindCSS, Tech.TypeScript],
    link: 'https://github.com/FaboBorgesLima/edge-ml-devpr-example',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with Vue 3 and TailwindCSS featuring dark mode and animations.',
    techs: [Tech.Vue, Tech.TailwindCSS, Tech.TypeScript],
    repo: 'https://github.com/FaboBorgesLima/portfolio/',
    link: 'https://faboborgeslima.github.io/portfolio/',
  },
  {
    title: 'Blog Platform',
    description:
      'A Simple blog platform built with Ruby on Rails, featuring user authentication, content management and CI/CD integration.',
    techs: [
      Tech.Rails,
      Tech.TailwindCSS,
      Tech.Kubernetes,
      Tech.PostgreSQL,
      Tech.Linux,
      Tech.Docker,
    ],
    repo: 'https://github.com/FaboBorgesLima/rails-blog/',
    link: 'https://blog.titanforgesystems.com.br/',
  },
  {
    title: 'Rust Server',
    description: 'A simple server built with Rust for high-performance applications.',
    techs: [Tech.Rust],
    repo: 'https://github.com/FaboBorgesLima/simple-rust-server',
    link: 'https://github.com/FaboBorgesLima/simple-rust-server',
  },
  {
    title: 'BarCoder Reader',
    description:
      'A barcode reader application built with modern mobile technologies and a backend service.',
    techs: [
      Tech.Kotlin,
      Tech.TypeScript,
      Tech.NodeJS,
      Tech.NestJS,
      Tech.Kubernetes,
      Tech.Docker,
      Tech.Linux,
    ],
    repo: 'https://github.com/FaboBorgesLima/barcoder-reader',
    link: 'https://github.com/FaboBorgesLima/barcoder-reader',
  },
  {
    title: 'Calculadora de Substâncias Quimicas (Chemical Substances Calculator)',
    description:
      'A web aplication for calculating molar masses and adjusting proportions of chemical substances.',
    techs: [Tech.Bootstrap, Tech.TypeScript],
    repo: 'https://github.com/FaboBorgesLima/calculadora-de-substancias-quimicas',
    link: 'https://faboborgeslima.github.io/calculadora-de-substancias-quimicas/app/pages/',
  },
]
