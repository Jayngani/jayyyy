"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const skills = [
  "Call Of Duty Mobile",
  "Mobile Legend",
  "Valorant",
  "Ghost Recon Wildlands",
  "Honor Of Kings",
  "Rules Of Survival",
  "Roblox",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <p className="text-lg text-muted-foreground">
        A bit about my background and passion.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Me and Myself</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p>
                Hi!

I’m someone who loves creativity and fun.
I enjoy gaming exploring worlds following great stories and playing with friends. It keeps my imagination alive. Every game I play opens a door to a world and I love how it makes me think and feel.
I also love photography and videography. I carry a camera to capture moments, beautiful sights and little things that make life special. I love sharing how I see the world through pictures and videos. A single frame can hold a feeling and I try to keep that alive in every shot.
And music is always, with me it sets the mood inspires me and makes everything feel more alive. I listen to it while I work, while I travel, while I just sit and think. It adds color to the parts and energy to the loud ones.

These things all go together for me  gaming sparks my ideas photography and videography capture what I love and music gives it all heart. I’m always. Trying new things. There’s always more to explore more to create to feel.. That’s what makes life exciting.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/me.png"
                alt="About Me"
                className="w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  console.log("About photo missing — check filename");
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Games I played</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
