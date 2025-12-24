import CocktailList from "@/components/CocktailList";

export default function Home() {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-secondary/50 backdrop-blur-sm sticky top-0 z-10 border-b border-accent/20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground">
            <span className="text-4xl md:text-5xl lg:text-6xl">🍸</span> La
            Taberna de los Pollos{" "}
            <span className="text-4xl md:text-5xl lg:text-6xl">🐥</span>
          </h1>
          <p className="text-center text-foreground/70 mt-2 text-base md:text-lg">
            Carta de Cocktails
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <CocktailList />
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-secondary mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-foreground/60 text-sm md:text-base">
            Hecho con cariño por Pelusa™ - Navidad - {currentDate}
          </p>
        </div>
      </footer>
    </div>
  );
}
