// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  RocketLaunchIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <RocketLaunchIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">speedInfra</h1>
        </div>        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <HomeIcon className="h-5 w-5" />
                  <span>Início</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <InformationCircleIcon className="h-5 w-5" />
                  <span>Sobre</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Contato</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-900/90 backdrop-blur-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <HomeIcon className="h-5 w-5" />
                  <span>Início</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={() => setMobileMenuOpen(false)}>
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <InformationCircleIcon className="h-5 w-5" />
                  <span>Sobre</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                <span className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Contato</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
