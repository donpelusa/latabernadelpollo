'use client';

import { useState } from 'react';
import { cocktails } from '@/data/cocktails';
import CocktailItem from './CocktailItem';

export default function CocktailList() {
  const [openCocktailId, setOpenCocktailId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCocktailId(openCocktailId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {cocktails.map((cocktail) => (
        <CocktailItem
          key={cocktail.id}
          cocktail={cocktail}
          isOpen={openCocktailId === cocktail.id}
          onToggle={() => handleToggle(cocktail.id)}
        />
      ))}
    </div>
  );
}
