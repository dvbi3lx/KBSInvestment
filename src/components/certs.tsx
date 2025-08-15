import { Badge } from "@/components/ui/badge";

export function Certificates() {
    const certs = [
        "Uprawnienia spawalnicze",
        "Kwalifikacje SEP – eksploatacja i dozór",
        "Pomiary elektryczne i protokoły",
        "Przeglądy okresowe zgodne z normami",
    ];
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold md:text-4xl">Uprawnienia i certyfikaty</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                    {certs.map((c) => (
                        <Badge key={c} variant="secondary" className="text-sm">
                            {c}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}



