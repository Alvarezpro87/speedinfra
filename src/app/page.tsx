'use client';

import { motion } from 'framer-motion';
import FeaturesGrid from './components/FeaturesGrid';
import { features } from '@/data/features';

export default function Home() {
  return (
    <div>
      {/* Seção Principal */}
      <section className=" max-w-5xl mx-auto px-4 text-center py-24 mt-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
        <motion.h2 
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforme sua Infraestrutura com speedInfra
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Obtenha rapidamente a arquitetura da sua aplicação respondendo algumas questões e utilizando modelos pré-definidos.
        </motion.p>
        <motion.button 
          className="bg-primary hover:bg-primary/80 text-white py-3 px-10 rounded-full shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Comece Agora
        </motion.button>
      </section>
      
      
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Nossos Recursos</h2>
        <FeaturesGrid features={features} />
      </section>
    </div>
  );
}
