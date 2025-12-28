import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quizQuestions = [
  {
    id: 1,
    question: "Apa kepanjangan dari OJK?",
    options: [
      "Otoritas Jaminan Keuangan",
      "Otoritas Jasa Keuangan",
      "Organisasi Jasa Keuangan",
      "Otoritas Jasa Kredit",
    ],
    correctAnswer: 1,
    explanation: "OJK adalah Otoritas Jasa Keuangan yang bertugas mengatur dan mengawasi sektor jasa keuangan di Indonesia.",
  },
  {
    id: 2,
    question: "Platform apa yang harus digunakan untuk melaporkan penipuan transaksi keuangan?",
    options: [
      "Kepolisian setempat saja",
      "Media sosial",
      "IASC OJK (iasc.ojk.go.id)",
      "Website perusahaan terkait",
    ],
    correctAnswer: 2,
    explanation: "IASC OJK adalah Pusat Penanganan Penipuan Transaksi Keuangan yang dibentuk khusus untuk menangani laporan penipuan.",
  },
  {
    id: 3,
    question: "Mana yang BUKAN merupakan jenis fintech?",
    options: [
      "Payment Gateway",
      "P2P Lending",
      "Cryptocurrency Exchange",
      "Toko Retail Offline",
    ],
    correctAnswer: 3,
    explanation: "Toko retail offline bukan termasuk fintech karena tidak berbasis teknologi finansial digital.",
  },
  {
    id: 4,
    question: "Apa ciri utama fintech legal yang terdaftar di OJK?",
    options: [
      "Menawarkan bunga sangat rendah",
      "Tidak meminta data pribadi",
      "Terdaftar atau berizin di OJK",
      "Memberikan pinjaman tanpa syarat",
    ],
    correctAnswer: 2,
    explanation: "Fintech legal harus terdaftar atau memiliki izin dari OJK untuk beroperasi di Indonesia.",
  },
  {
    id: 5,
    question: "Langkah pertama yang harus dilakukan jika menjadi korban penipuan fintech adalah?",
    options: [
      "Membagikan ke media sosial",
      "Mengumpulkan bukti transaksi dan komunikasi",
      "Menghubungi penipu untuk negosiasi",
      "Mengabaikan dan melupakan kejadian",
    ],
    correctAnswer: 1,
    explanation: "Mengumpulkan bukti adalah langkah penting sebelum melakukan pelaporan ke pihak berwenang.",
  },
  {
    id: 6,
    question: "Apa fungsi Bank Indonesia dalam ekosistem fintech?",
    options: [
      "Memberikan pinjaman langsung ke masyarakat",
      "Mengatur sistem pembayaran digital",
      "Menjual produk investasi",
      "Menyediakan layanan e-wallet",
    ],
    correctAnswer: 1,
    explanation: "Bank Indonesia berperan mengatur dan mengawasi sistem pembayaran di Indonesia, termasuk pembayaran digital.",
  },
  {
    id: 7,
    question: "Data pribadi apa yang TIDAK boleh dibagikan ke pihak tidak dikenal?",
    options: [
      "Nama lengkap",
      "OTP (One-Time Password)",
      "Alamat email",
      "Nomor telepon",
    ],
    correctAnswer: 1,
    explanation: "OTP adalah kode rahasia yang tidak boleh dibagikan ke siapapun termasuk pihak yang mengaku dari bank atau fintech.",
  },
  {
    id: 8,
    question: "Apa yang dimaksud dengan P2P Lending?",
    options: [
      "Pinjaman dari bank ke nasabah",
      "Pinjaman peer-to-peer melalui platform online",
      "Pinjaman dari pemerintah",
      "Tabungan berjangka",
    ],
    correctAnswer: 1,
    explanation: "P2P Lending adalah layanan pinjam meminjam uang berbasis teknologi yang menghubungkan pemberi pinjaman dengan peminjam.",
  },
  {
    id: 9,
    question: "Berapa nomor hotline OJK untuk pengaduan?",
    options: [
      "110",
      "119",
      "157",
      "123",
    ],
    correctAnswer: 2,
    explanation: "Hotline OJK adalah 157 yang bisa dihubungi untuk pengaduan terkait sektor jasa keuangan.",
  },
  {
    id: 10,
    question: "Apa yang harus dilakukan sebelum menggunakan layanan fintech?",
    options: [
      "Langsung mendaftar tanpa membaca",
      "Memverifikasi legalitas dan membaca syarat ketentuan",
      "Memberikan akses ke semua kontak",
      "Menyetujui semua permintaan akses",
    ],
    correctAnswer: 1,
    explanation: "Selalu verifikasi legalitas fintech di OJK dan baca syarat ketentuan sebelum menggunakan layanan.",
  },
];

const KuisPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return { message: "Luar Biasa! 🎉", color: "text-accent" };
    if (percentage >= 60) return { message: "Bagus! 👍", color: "text-blue-500" };
    if (percentage >= 40) return { message: "Cukup Baik 📚", color: "text-orange-500" };
    return { message: "Perlu Belajar Lagi 💪", color: "text-red-500" };
  };

  const question = quizQuestions[currentQuestion];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Kuis Interaktif</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Uji <span className="text-accent">Pengetahuan</span> Fintech Anda
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Jawab pertanyaan seputar keamanan fintech, regulasi OJK & BI, 
              dan pencegahan penipuan transaksi keuangan.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {!quizCompleted ? (
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg animate-scale-in">
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}</span>
                    <span>Skor: {score}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-gradient transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  {question.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showCorrect = showResult && isCorrect;
                    const showWrong = showResult && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                          isSelected && !showResult && "border-accent bg-accent/10",
                          !isSelected && !showResult && "border-border hover:border-accent/50 hover:bg-secondary/50",
                          showCorrect && "border-accent bg-accent/20",
                          showWrong && "border-destructive bg-destructive/10",
                          showResult && !showCorrect && !showWrong && "opacity-50"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                            isSelected && !showResult && "bg-accent text-accent-foreground",
                            !isSelected && !showResult && "bg-secondary text-muted-foreground",
                            showCorrect && "bg-accent text-accent-foreground",
                            showWrong && "bg-destructive text-destructive-foreground"
                          )}>
                            {showCorrect ? <CheckCircle className="h-5 w-5" /> : 
                             showWrong ? <XCircle className="h-5 w-5" /> :
                             String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-foreground">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className={cn(
                    "p-4 rounded-xl mb-6 animate-slide-up",
                    selectedAnswer === question.correctAnswer ? "bg-accent/10 border border-accent/30" : "bg-destructive/10 border border-destructive/30"
                  )}>
                    <p className="text-sm text-foreground">
                      <strong>Penjelasan:</strong> {question.explanation}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="flex-1"
                      variant="accent"
                    >
                      Jawab
                    </Button>
                  ) : (
                    <Button onClick={handleNext} className="flex-1" variant="accent">
                      {currentQuestion < quizQuestions.length - 1 ? "Pertanyaan Berikutnya" : "Lihat Hasil"}
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              /* Quiz Result */
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Kuis Selesai!</h2>
                <p className={cn("text-2xl font-semibold mb-6", getScoreMessage().color)}>
                  {getScoreMessage().message}
                </p>
                
                <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {score}/{quizQuestions.length}
                  </div>
                  <p className="text-muted-foreground">Jawaban Benar</p>
                  <div className="mt-4 h-4 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-gradient"
                      style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                  <User className="h-4 w-4" />
                  <span>Penanggung Jawab: Ela</span>
                </div>

                <Button onClick={resetQuiz} variant="accent" size="lg">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Ulangi Kuis
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KuisPage;
