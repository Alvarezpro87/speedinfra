// src/app/contato/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      setForm({ nome: '', email: '', mensagem: '' });
    } else {
      alert('Ocorreu um erro, tente novamente.');
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-primary mb-8"
      >
        Entre em Contato
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-300 mb-12"
      >
        Preencha o formulário abaixo e entraremos em contato em breve!
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 bg-gray-900 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 bg-gray-900 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-200 mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            value={form.mensagem}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 bg-gray-900 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          <span>{loading ? "Enviando..." : "Enviar"}</span>
          <PaperAirplaneIcon className="h-5  " />
        </motion.button>
      </motion.form>
    </section>
  );
}
