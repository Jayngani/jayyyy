import Link from "next/link";
import { ArrowRight, Gamepad2, Camera, Video, Music, Code, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 space-y-10">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Jay</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Developer • Creator • Gamer
            <br />
            Building things on the web & capturing the world around me
          </p>
          
          {/* Quick Interest Icons */}
          <div className="flex justify-center gap-6 pt-4">
            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Gamepad2 size={24} />
              <span className="text-xs">Gaming</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Camera size={24} />
              <span className="text-xs">Photography</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Video size={24} />
              <span className="text-xs">Filming</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Music size={24} />
              <span className="text-xs">Music</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <User size={18} />
            Get to Know Me
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/hobbies"
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <Gamepad2 size={18} />
            My Interests
          </Link>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Blending code with creativity — building digital experiences and capturing real moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Code size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">
                Building modern, responsive websites and apps with Next.js, React, and more.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Camera size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visual Arts</h3>
              <p className="text-sm text-muted-foreground">
                Photography & videography — framing the world, editing stories, sharing moments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <Music size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Creative Vibes</h3>
              <p className="text-sm text-muted-foreground">
                From gaming adventures to discovering new music — always exploring and inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Quick Links */}
      <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
        <p>Built with Next.js & Shadcn UI • Jay © 2026</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/education" className="hover:text-foreground transition-colors">Education</Link>
          <Link href="/hobbies" className="hover:text-foreground transition-colors">Hobbies</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
