import { Layout } from "@/components/layout/Layout";
import { BarChart3, Download, ZoomIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const infographics = [
  {
    id: 1,
    title: "Jenis-Jenis Fintech di Indonesia",
    description: "Infografis lengkap tentang berbagai jenis fintech yang beroperasi di Indonesia beserta contoh perusahaannya.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Jenis Fintech",
  },
  {
    id: 2,
    title: "Risiko Fintech & Cara Pencegahannya",
    description: "Visualisasi tentang berbagai risiko dalam penggunaan layanan fintech dan langkah-langkah pencegahan yang efektif.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Keamanan",
  },
  {
    id: 3,
    title: "Alur Pelaporan Penipuan ke IASC OJK",
    description: "Panduan visual langkah demi langkah untuk melaporkan kasus penipuan transaksi keuangan ke IASC OJK.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Pelaporan",
  },
  {
    id: 4,
    title: "Regulasi Fintech OJK & BI",
    description: "Infografis tentang kerangka regulasi fintech yang dikeluarkan oleh OJK dan Bank Indonesia.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Regulasi",
  },
  {
    id: 5,
    title: "Tips Aman Bertransaksi Digital",
    description: "Kumpulan tips visual untuk menjaga keamanan saat melakukan transaksi keuangan secara digital.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Keamanan",
  },
  {
    id: 6,
    title: "Ciri-Ciri Fintech Ilegal",
    description: "Kenali ciri-ciri fintech ilegal yang patut diwaspadai untuk melindungi diri dari penipuan.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=1000&fit=crop",
    contributor: "Syifa",
    category: "Pencegahan",
  },
];

const InfografisPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">Infografis Edukasi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              <span className="text-accent">Infografis</span> Visual Edukatif
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Pelajari konsep fintech dan keamanan transaksi digital melalui 
              infografis yang informatif dan mudah dipahami.
            </p>
          </div>
        </div>
      </section>

      {/* Infographics Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infographics.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ZoomIn className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>Kontributor: {item.contributor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InfografisPage;
