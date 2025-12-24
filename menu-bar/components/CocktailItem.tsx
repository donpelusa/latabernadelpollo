'use client';

import { Cocktail } from '@/data/cocktails';
import Image from 'next/image';

interface CocktailItemProps {
  cocktail: Cocktail;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CocktailItem({ cocktail, isOpen, onToggle }: CocktailItemProps) {
  return (
    <div className="border border-secondary rounded-lg overflow-hidden transition-all duration-300 hover:border-accent">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`cocktail-${cocktail.id}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          {cocktail.name}
        </h2>
        <svg
          className={`w-6 h-6 text-accent transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id={`cocktail-${cocktail.id}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 bg-secondary/10 space-y-4">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-secondary/20">
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain"
              loading="lazy"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-accent">
              Ingredientes:
            </h3>
            <ul className="space-y-2">
              {cocktail.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start text-base md:text-lg text-foreground/90"
                >
                  <span className="text-accent mr-3">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed">
              {cocktail.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
