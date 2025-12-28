import { Layout } from "@/components/layout/Layout";
import { Video, Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Apa Itu Fintech? Pengenalan Teknologi Finansial",
    description: "Video animasi yang menjelaskan konsep dasar fintech dan bagaimana teknologi mengubah cara kita bertransaksi keuangan.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop",
    duration: "5:30",
    views: "2.5K",
    category: "Dasar Fintech",
  },
  {
    id: 2,
    title: "Jenis-Jenis Fintech di Indonesia",
    description: "Kenali berbagai jenis fintech mulai dari pembayaran digital, pinjaman online, hingga investasi digital.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=340&fit=crop",
    duration: "7:45",
    views: "3.1K",
    category: "Dasar Fintech",
  },
  {
    id: 3,
    title: "Regulasi Fintech di Indonesia: OJK & Bank Indonesia",
    description: "Pahami bagaimana OJK dan Bank Indonesia mengatur industri fintech untuk melindungi konsumen.",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=340&fit=crop",
    duration: "8:20",
    views: "1.8K",
    category: "Regulasi",
  },
  {
    id: 4,
    title: "Mengenali Modus Penipuan Fintech",
    description: "Waspadai berbagai modus penipuan yang sering terjadi di dunia fintech dan cara melindungi diri.",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=340&fit=crop",
    duration: "10:15",
    views: "5.2K",
    category: "Keamanan",
  },
  {
    id: 5,
    title: "Cara Aman Bertransaksi Digital",
    description: "Tips dan trik untuk memastikan keamanan saat melakukan transaksi keuangan secara online.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    duration: "6:40",
    views: "4.0K",
    category: "Keamanan",
  },
  {
    id: 6,
    title: "Langkah Melaporkan Penipuan ke IASC OJK",
    description: "Panduan lengkap tentang cara melaporkan kasus penipuan transaksi keuangan melalui portal IASC OJK.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=340&fit=crop",
    duration: "4:55",
    views: "2.8K",
    category: "Pelaporan",
  },
];

const VideoPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Video className="h-4 w-4" />
              <span className="text-sm font-medium">Video Edukasi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Video <span className="text-accent">Animasi</span> Edukatif
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Pelajari fintech dengan cara yang menyenangkan melalui video animasi 
              yang mudah dipahami dan informatif.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-3">
                  Video Unggulan
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{videos[0].title}</h2>
                <p className="text-white/80 text-sm">{videos[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Semua Video</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <Play className="h-6 w-6 text-accent-foreground ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="inline-block px-2 py-0.5 rounded bg-accent/10 text-accent text-xs font-medium mb-2">
                    {video.category}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
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

export default VideoPage;
