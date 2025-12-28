const stats = [
  { value: "100+", label: "Artikel Edukasi", suffix: "" },
  { value: "50+", label: "Video Pembelajaran", suffix: "" },
  { value: "10K+", label: "Pengguna Aktif", suffix: "" },
  { value: "24/7", label: "AI Advisor", suffix: "" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
