export function ServiceAreas() {
    const areas = [
        "Warszawa i okolice",
        "Pruszków",
        "Piaseczno",
        "Legionowo",
        "Marki",
        "Otwock",
    ];
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-1 text-center">Obszar działania</h2>
                <p className="mt-2 text-muted-foreground">
                    Obsługujemy wspólnoty mieszkaniowe, deweloperów i klientów indywidualnych.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {areas.map((a) => (
                        <span key={a} className="rounded-full border px-3 py-1 text-sm">
                            {a}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}



