// src/data/features.ts
import { Feature } from '../app/components/FeaturesGrid';
import { CloudIcon, CodeBracketIcon, BoltIcon, Cog6ToothIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

export const features: Feature[] = [
  {
    title: "Provisionamento Ágil",
    description: "Implante máquinas virtuais e configure middlewares de forma rápida e eficiente.",
    icon: CloudIcon,
  },
  {
    title: "Infra-as-Code",
    description: "Gerencie repositórios e a infraestrutura com total integração.",
    icon: CodeBracketIcon,
  },
  {
    title: "CI/CD Automatizado",
    description: "Configure pipelines de integração e deploy contínuo com um único clique.",
    icon: BoltIcon,
  },
  {
    title: "Automação Completa",
    description: "Sincronize tarefas, configure hooks e garanta a consistência dos ambientes.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Gestão Centralizada",
    description: "Controle todos os ambientes de forma centralizada e dinâmica.",
    icon: ArrowPathIcon,
  },
];
