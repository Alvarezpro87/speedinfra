// src/app/sobre/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section className="py-16 space-y-16">
      {/* Seção Hero */}
      <motion.div 
        className="relative h-96 flex items-center justify-center  overflow-hidden max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-extrabold text-primary mb-4">Sobre a speedInfra</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Revolucione a forma de provisionar ambientes com uma plataforma moderna, automatizada e intuitiva.
          </p>
        </div>
      </motion.div>

      {/* Nossa História */}
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <img 
            src="devops2.png" 
            alt="Nossa História" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">Nossa História</h3>
          <p className="text-gray-300 mb-4">
            Fundada por especialistas em DevOps, a speedInfra nasceu da necessidade de simplificar e agilizar o provisionamento de ambientes complexos. 
            Combinamos tecnologia de ponta e processos ágeis para criar uma plataforma que entrega resultados rápidos e consistentes.
          </p>
          <p className="text-gray-300">
            Ao longo dos anos, evoluímos constantemente, integrando as melhores práticas do mercado e garantindo a satisfação dos nossos clientes com soluções inovadoras e eficientes.
          </p>
        </div>
      </motion.div>

      {/* Missão, Visão e Valores */}
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-center text-primary mb-8">Missão, Visão e Valores</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl font-semibold text-primary mb-2">Missão</h4>
            <p className="text-gray-300">
              Transformar a forma como você gerencia ambientes, simplificando processos e acelerando resultados.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl font-semibold text-primary mb-2">Visão</h4>
            <p className="text-gray-300">
              Ser a referência em automação DevOps, integrando tecnologia e inovação para impulsionar o sucesso dos nossos clientes.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl font-semibold text-primary mb-2">Valores</h4>
            <p className="text-gray-300">
              Inovação, agilidade, transparência e compromisso com a excelência em cada entrega.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Chamada Final */}
      <motion.div 
        className="max-w-6xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-xl">
          Descubra como a speedInfra pode transformar a maneira como você gerencia seus ambientes, impulsionando a produtividade da sua equipe para novos patamares.
        </p>
      </motion.div>
    </section>
  );
}
