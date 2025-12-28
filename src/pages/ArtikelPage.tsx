import { Layout } from "@/components/layout/Layout";
import { BookOpen, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Perkembangan Fintech di Indonesia: Dari E-Wallet hingga P2P Lending",
    excerpt: "Fintech di Indonesia berkembang pesat dalam satu dekade terakhir. Mulai dari dompet digital, pinjaman online, hingga investasi digital yang semakin diminati masyarakat.",
    category: "Perkembangan Fintech",
    author: "Tim FinSafeEdu",
    date: "20 Des 2024",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Regulasi OJK tentang Fintech: Panduan Lengkap untuk Konsumen",
    excerpt: "OJK memiliki peran penting dalam mengawasi industri fintech. Pelajari regulasi yang melindungi Anda sebagai konsumen layanan keuangan digital.",
    category: "Regulasi",
    author: "Tim FinSafeEdu",
    date: "18 Des 2024",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Keamanan Data dalam Transaksi Digital: Tips Melindungi Informasi Pribadi",
    excerpt: "Data pribadi adalah aset berharga yang harus dilindungi. Ketahui cara menjaga keamanan data Anda saat bertransaksi secara digital.",
    category: "Keamanan Digital",
    author: "Tim FinSafeEdu",
    date: "15 Des 2024",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Mengenal Modus Penipuan Fintech dan Cara Menghindarinya",
    excerpt: "Penipu semakin canggih dalam menjalankan aksinya. Kenali berbagai modus penipuan fintech dan langkah-langkah pencegahan yang efektif.",
    category: "Pencegahan Penipuan",
    author: "Tim FinSafeEdu",
    date: "12 Des 2024",
    readTime: "8 menit",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Bank Indonesia dan Perannya dalam Sistem Pembayaran Digital",
    excerpt: "Bank Indonesia memiliki peran sentral dalam mengatur sistem pembayaran di Indonesia. Pelajari kebijakan dan regulasi yang berlaku.",
    category: "Regulasi",
    author: "Tim FinSafeEdu",
    date: "10 Des 2024",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Tren Fintech 2025: AI, Blockchain, dan Open Banking",
    excerpt: "Teknologi terus berkembang dan membentuk masa depan fintech. Simak tren yang akan mendominasi industri keuangan digital tahun depan.",
    category: "Tren Fintech",
    author: "Tim FinSafeEdu",
    date: "8 Des 2024",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  },
];

const categories = [
  "Semua",
  "Perkembangan Fintech",
  "Regulasi",
  "Keamanan Digital",
  "Pencegahan Penipuan",
  "Tren Fintech",
];

const ArtikelPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Artikel Edukasi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Artikel <span className="text-accent">Fintech</span> Terkini
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Tingkatkan pemahaman Anda tentang fintech, regulasi, dan keamanan transaksi digital 
              melalui artikel-artikel edukatif yang ditulis oleh tim kami.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtikelPage;
