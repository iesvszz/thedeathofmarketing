"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Pill, MessageCircle } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "INJECTION OF CULTURE-LED IDEAS",
      description: "Meme-literate campaigns that punch through scroll fatigue and make brands part of the conversation",
      icon: "💉",
      bounceTime: "3s"
    },
    {
      title: "DETOX FROM AI-GENERATED BLANDNESS",
      description: "Eliminate prompt-churned sameness. Replace with ideas that feel dangerously human.",
      icon: "🧪",
      bounceTime: "3s"
    },
    {
      title: "VITAMIN D(ISRUPTION)",
      description: "Audacious, polarizing campaigns — because average never makes headlines",
      icon: "💊",
      bounceTime: "3s"
    },
    {
      title: "PRESCRIPTION FOR PARTICIPATION",
      description: "Experiences and UGC-driven campaigns that turn audiences into co-creators and participants",
      icon: "🛡️",
      bounceTime: "3s"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhdGljIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXRpYykiLz48L3N2Zz4=')] animate-pulse"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Skull */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/57c9390f-3cce-4f12-a0d5-1c45966ae73d.png"
              alt="Skull"
              className="w-32 h-32 mx-auto drop-shadow-2xl animate-[pulse_1.5s_ease-in-out_infinite]"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.6))',
              }}
            />
          </div>

          {/* Title */}
          <div className="relative mb-12">
            <h1 className="text-7xl md:text-9xl font-black mb-8 font-playfair leading-tight">
              <span className="glitch-text text-white">RIP</span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Marketing
              </span>

            <br />
             
            </h1>
            <div className="absolute -top-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 transform rotate-1"></div>
          </div>

          {/* Obituary */}
<div className="bg-black/80 border-2 border-red-500/50 rounded-lg p-8 mb-12 backdrop-blur-sm relative shadow-lg shadow-red-500/20">
  <div className="absolute top-2 right-2">
    <Badge variant="destructive" className="animate-pulse">DECEASED</Badge>
  </div>

  {/* Highlighted intro line with Playfair font */}
  <p className="text-xl md:text-2xl font-playfair font-bold text-red-400 text-center mb-6 leading-relaxed animate-pulse">
    If your marketing feels dead inside, it's time for a personality transplant.
  </p>

  <div className="space-y-4 text-left max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
    <div>
      <strong className="text-red-400">Creativity</strong> — Suffocated under 6 rounds of stakeholder feedback
    </div>
    <div>
      <strong className="text-red-400">Strategy</strong> — Fractured from overexposure to trend decks
    </div>
    <div>
      <strong className="text-red-400">Execution</strong> — Pronounced dead after 48 hours of AI prompt engineering
    </div>
  </div>
</div>

          {/* Doctor */}
          <div className="mb-12">
  {/* New top text */}
  <p className="text-xl md:text-4xl font-semibold text-lime-400 text-center mb-6 leading-relaxed">
    But it doesn't have to stay dead.<br />Because now we have
  </p>

  <div className="relative w-97 h-97 mx-auto flex items-center justify-center">
    {/* Smoke layers (pure CSS) */}
    <div className="absolute inset-0 z-0 smoke-layer pointer-events-none"></div>

    {/* Photo on top */}
    <img
      src="/lovable-uploads/61075f9c-b5a5-4e37-951d-de0442316ae4.png"
      alt="Dr. Jareer Samad"
      className="relative z-10 w-full h-full object-contain rounded-lg"
    />
  </div>

  <h3 className="text-5xl font-bold text-white mt-6 font-sans tracking-tight">
    Jareer Samad
  </h3>
  <br />
  <h2 className="text-2xl text-gray-300 mt-2 font-sans tracking-wide">
    Designation: Marketing Exorcist
  </h2>
</div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Pill className="w-16 h-16 mx-auto text-lime-400 mb-6 animate-[bounce_3s_ease-in-out_infinite]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
              Here’s my treatment plan for resurrection 
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black/50 border-lime-400/30 backdrop-blur-sm hover:bg-lime-900/20 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20"
              >
                <CardContent className="p-8">
                  <div
                    className="text-6xl mb-6 text-center"
                    style={{
                      animation: `bounce ${service.bounceTime} ease-in-out infinite`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-lime-400 font-playfair group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors">
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
      <p className="text-l text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        If your marketing feels dead inside, it's time for a personality transplant.
        <br />
        
        Let's shock it back to life - louder, weirder and unforgettable

      </p>
    </div>

   {/* WhatsApp Contact Section */}
<div className="mt-8">
  <a
    href="https://wa.me/917321972175"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg"
  >
    <img src="/whatsapp.png" alt="WhatsApp" className="mr-3 h-8 w-8" />
    Text the Doctor
  </a>
</div>

    <p className="text-red-400/70 animate-pulse text-lg mt-6">
      ⚠️ Side effects may include actual creativity
    </p>
  </div>
</section>

      {/* Final Footer */}
      <footer className="py-8 px-4 border-t border-red-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <Skull className="w-8 h-8 mx-auto text-red-400/50 mb-4" style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.3))' }} />
          <p className="text-gray-500">
            © 2024 RIP Marketing. May creativity rest in peace... until we resurrect it.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
