
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Heart, Pill, MessageCircle } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "INJECTION OF CULTURE-LED IDEAS",
      description: "Bold, meme-literate campaigns that punch through scroll fatigue.",
      icon: "💉"
    },
    {
      title: "DETOX FROM AI-GENERATED BLANDNESS", 
      description: "Eliminate prompt-churned sameness. Replace with ideas that feel dangerously human.",
      icon: "🧪"
    },
    {
      title: "VITAMIN D(ISRUPTION)",
      description: "Ideas that polarize safely — because average never made headlines.",
      icon: "💊"
    },
    {
      title: "DOSE OF VIRAL IMMUNITY",
      description: "Build formats and moments that outlive the algorithm.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Static Noise Background */}
      <div className="fixed inset-0 opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhdGljIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXRpYykiLz48L3N2Zz4=')] animate-pulse"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Skull Image */}
          <div className="mb-8 relative">
            <img 
              src="/lovable-uploads/57c9390f-3cce-4f12-a0d5-1c45966ae73d.png"
              alt="Skull" 
              className="w-32 h-32 mx-auto drop-shadow-2xl animate-[pulse_1.5s_ease-in-out_infinite]"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.6))',
                animation: 'pulse 1.5s ease-in-out infinite alternate'
              }}
            />
          </div>

          {/* Main Headline */}
          <div className="relative mb-12">
            <h1 className="text-7xl md:text-9xl font-black mb-8 font-playfair leading-tight">
              <span className="glitch-text text-white">RIP</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Marketing
              </span>
            </h1>
            
            {/* Torn Paper Effect */}
            <div className="absolute -top-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 transform rotate-1"></div>
          </div>

          {/* Obituary Text */}
          <div className="bg-black/80 border-2 border-red-500/30 rounded-lg p-8 mb-12 backdrop-blur-sm relative">
            <div className="absolute top-2 right-2">
              <Badge variant="destructive" className="animate-pulse">DECEASED</Badge>
            </div>
            
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <div className="mb-3">
                  <strong className="text-red-400">Creativity</strong> — Suffocated under 6 rounds of stakeholder feedback
                </div>
                <div className="mb-3">
                  <strong className="text-red-400">Strategy</strong> — Fractured from overexposure to trend decks
                </div>
                <div>
                  <strong className="text-red-400">Execution</strong> — Heart stopped after 48 hours of prompt engineering
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Photo Section */}
          <div className="mb-12 relative">
            <div className="relative inline-block">
              {/* Doctor Photo */}
              <div className="w-80 h-80 mx-auto flex items-center justify-center relative z-10">
                <img 
                  src="/lovable-uploads/8bd2871b-018c-47ea-94b9-632d09213e27.png"
                  alt="Dr. Jareer Samad"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Doctor Name */}
            <h3 className="text-3xl font-bold text-white mt-6 font-playfair">
              DR. Jareer Samad
            </h3>
          <p className="text-lg text-gray-300 mt-2">
            Chief Marketing Exorcist
          </p>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <Pill className="w-16 h-16 mx-auto text-lime-400 mb-6 animate-[bounce_3s_ease-in-out_infinite]" />
            <h2 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">
              Your Brand's Revival Prescription
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-black/50 border-lime-400/30 backdrop-blur-sm hover:bg-lime-900/20 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  
                  {/* Service Icon */}
                  <div className="text-6xl mb-6 text-center animate-[bounce_5s_ease-in-out_infinite] transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-4 text-lime-400 font-playfair group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-red-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-6">
              Resurrect Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              If your marketing feels dead inside, it's time for a personality transplant.<br />
              Let's bring it back — louder, weirder, better.
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-16 py-8 text-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-110 mb-6"
            onClick={() => window.open('https://wa.me/917321972175', '_blank')}
          >
            <MessageCircle className="mr-3 h-8 w-8" />
            Text the Doctor
          </Button>
          
          <p className="text-lg text-gray-400 mb-4">
            +91 73219 72175
          </p>
          
          <p className="text-red-400/70 animate-pulse text-lg">
            ⚠️ Side effects may include actual creativity
          </p>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="py-8 px-4 border-t border-red-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <Skull className="w-8 h-8 mx-auto text-red-400/50 mb-4" 
                 style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.3))' }} />
          <p className="text-gray-500">
            © 2024 RIP Marketing. May creativity rest in peace... until we resurrect it.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
