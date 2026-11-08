import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation",
    period: "2025 - Present",
    description: "Intensive program covering React, Node.js, databases, and deployment.",
    achievements: ["Wala pa ", "wala pa ngani"],
  },
  {
    degree: "Computer System Servicing",
    institution: "ACLC Naga",
    period: "2023 - 2025",
    description: "Intensive hardware program. ",
    achievements: ["With Honor & Siyap Publication Leadership Awardee ", "NC2 PASSER"],
  },
  {
    degree: "High School Education",
    institution: "Concepcion Pequena National High School",
    period: "2019 - 2023",
    description: "Intensive learning program.",
    achievements: ["wala kasi tinamad"],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-6 text-primary" />
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                </div>
                <Award className="h-4 w-4 text-primary" />
              </div>
              <CardDescription>{item.institution}</CardDescription>
              <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  Achievements
                </h4>
                <ul className="text-sm list-disc list-inside text-muted-foreground space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
