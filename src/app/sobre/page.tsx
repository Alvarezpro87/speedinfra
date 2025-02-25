// src/app/sobre/page.tsx
'use client';

import { motion } from 'framer-motion';
import { CloudIcon, CodeBracketIcon, Cog6ToothIcon, BoltIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

export default function Sobre() {
  const features = [
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

  return (
    <section className="py-16">
      {/* Cabeçalho da página */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-primary">Sobre a speedInfra</h2>
        <p className="text-lg text-gray-300 mb-12">
          A speedInfra é uma plataforma inovadora que revoluciona o provisionamento de ambientes com uma abordagem moderna e automatizada.
          Simplifique sua jornada DevOps com uma esteira completa que integra desde a criação de repositórios até a automação de deploys.
        </p>
      </motion.div>

      {/* Grid de recursos */}
      <div className="grid gap-8 max-w-5xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Seção final de missão */}
      <motion.div
        className="max-w-3xl mx-auto mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">
          Nossa missão é transformar a forma como você gerencia ambientes, eliminando a complexidade e aumentando a produtividade da sua equipe.
          Venha descobrir o futuro da automação DevOps com a speedInfra.
        </p>
      </motion.div>
    </section>
  );
}
