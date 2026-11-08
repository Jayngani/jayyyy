"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Gamepad2, Music as MusicIcon, Film } from "lucide-react";

export default function HobbiesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (activeSection !== "music" && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [activeSection]);

  const handleMusicClick = () => {
    if (activeSection === "music") {
      setActiveSection(null);
    } else {
      setActiveSection("music");
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const handleSectionClick = (section: string) => {
    if (section === "music") return;
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Hobbies & Interests</h1>
          <p className="text-muted-foreground">What I enjoy doing outside of coding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <button
            onClick={() => handleSectionClick("photography")}
            className={`p-5 rounded-xl border text-left transition-all ${
              activeSection === "photography"
                ? "border-foreground bg-accent/20"
                : "border-border bg-card hover:bg-accent/10"
            }`}
          >
            <Camera size={20} className="mb-2" />
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-muted-foreground mt-1">Capturing the beauty of earth.</p>
          </button>

          <button
            onClick={() => handleSectionClick("gaming")}
            className={`p-5 rounded-xl border text-left transition-all ${
              activeSection === "gaming"
                ? "border-foreground bg-accent/20"
                : "border-border bg-card hover:bg-accent/10"
            }`}
          >
            <Gamepad2 size={20} className="mb-2" />
            <h3 className="font-semibold">Gaming</h3>
            <p className="text-sm text-muted-foreground mt-1">Gaming is my passion. Meet the Noveria Main team</p>
          </button>

          <button
            onClick={handleMusicClick}
            className={`p-5 rounded-xl border text-left transition-all ${
              activeSection === "music"
                ? "border-foreground bg-accent/20"
                : "border-border bg-card hover:bg-accent/10"
            }`}
          >
            <MusicIcon size={20} className="mb-2" />
            <h3 className="font-semibold">Music {activeSection === "music"}</h3>
            <p className="text-sm text-muted-foreground mt-1">my favorite band.</p>
          </button>

          <button
            onClick={() => handleSectionClick("filming")}
            className={`p-5 rounded-xl border text-left transition-all ${
              activeSection === "filming"
                ? "border-foreground bg-accent/20"
                : "border-border bg-card hover:bg-accent/10"
            }`}
          >
            <Film size={20} className="mb-2" />
            <h3 className="font-semibold">Filming</h3>
            <p className="text-sm text-muted-foreground mt-1">solid production -1.</p>
          </button>
        </div>

        {activeSection && (
          <div className="mt-8 text-center">
            {activeSection === "photography" && (
              <div>
                <div className="rounded-xl overflow-hidden mb-4 w-full max-w-2xl mx-auto">
                  <img
                    src="/images/photography.png"
                    alt="Photography"
                    className="w-full h-64 object-cover transition-transform duration-300 ease-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      console.log("Photography photo missing — check filename");
                    }}
                  />
                </div>
                <p className="text-muted-foreground">Click the card again to close</p>
              </div>
            )}

            {activeSection === "gaming" && (
              <div>
                <div className="rounded-xl overflow-hidden mb-4 w-full max-w-2xl mx-auto">
                  <img
                    src="/images/gaming.png"
                    alt="Gaming"
                    className="w-full h-64 object-cover transition-transform duration-300 ease-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      console.log("Gaming photo missing — check filename");
                    }}
                  />
                </div>
                <p className="text-muted-foreground">Click the card again to close</p>
              </div>
            )}

            {activeSection === "music" && (
              <div>
                <audio ref={audioRef} src="/music/paramore.mp3" loop />
                <div className="rounded-xl overflow-hidden mb-4 w-full max-w-2xl mx-auto">
                  <img
                    src="/images/paramore.png"
                    alt="Paramore"
                    className="w-full h-64 object-cover transition-transform duration-300 ease-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      console.log("Music photo missing — check filename");
                    }}
                  />
                </div>
                <p className="text-muted-foreground">Click another card to stop music </p>
              </div>
            )}

            {activeSection === "filming" && (
              <div>
                <div className="rounded-xl overflow-hidden mb-4 w-full max-w-2xl mx-auto">
                  <img
                    src="/images/solid.jpg"
                    alt="Filming"
                    className="w-full h-64 rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      console.log("Filming photo missing — check filename");
                    }}
                  />
                </div>
                <p className="text-muted-foreground">Click the card again to close</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
