import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Bot, Send, User, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAdvisorPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya adalah Robo AI Advisor untuk edukasi investasi fintech. Saya dapat membantu Anda memahami:\n\n• Konsep dasar investasi fintech\n• Jenis-jenis investasi digital\n• Risiko dan cara pencegahannya\n• Regulasi OJK & Bank Indonesia\n\nApa yang ingin Anda pelajari hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("ai-advisor", {
        body: { messages: [...messages, { role: "user", content: userMessage }] },
      });

      if (error) throw error;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4">
              <Bot className="h-4 w-4" />
              <span className="text-sm font-medium">Robo AI Advisor</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Konsultasi <span className="text-accent">Edukasi Investasi</span>
            </h1>
            <p className="text-primary-foreground/80">
              Tanyakan seputar investasi fintech, keamanan, dan regulasi.
            </p>
          </div>
        </div>
      </section>

      {/* Chat */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Disclaimer */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-6 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Disclaimer</p>
                <p className="text-muted-foreground">
                  Informasi bersifat edukatif, bukan nasihat keuangan. Jika menjadi korban penipuan, laporkan ke{" "}
                  <a href="https://iasc.ojk.go.id" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    IASC OJK <ExternalLink className="h-3 w-3 inline" />
                  </a>
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "bg-accent" : "bg-primary"}`}>
                      {msg.role === "user" ? <User className="h-4 w-4 text-accent-foreground" /> : <Bot className="h-4 w-4 text-primary-foreground" />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-secondary rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Tanyakan tentang investasi fintech..."
                    className="flex-1 px-4 py-3 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button onClick={sendMessage} disabled={isLoading || !input.trim()} variant="accent" size="icon" className="h-12 w-12 rounded-xl">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">Penanggung Jawab: Jonathan Halomoan Simanjuntak</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAdvisorPage;
