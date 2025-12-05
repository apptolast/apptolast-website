
import { useTranslation } from "react-i18next";
import { Linkedin, Github, Twitter } from "lucide-react";

// Definición de tipos
interface TeamMember {
  id: string;
  name: string;
  image: string;
  stack: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Datos constantes
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "alberto",
    name: "Alberto Hidalgo",
    image: "/images/team/alberto.jpeg",
    stack: ["Kotlin", "KMP", "Compose", "Swift"],
    social: { linkedin: "https://www.linkedin.com/in/alberto-h-93431a42/", github: "https://github.com/hgarciaalberto" }
  },
  {
    id: "pablo",
    name: "Pablo Hurtado",
    image: "/images/team/pablo.jpeg",
    stack: ["CI/CD", "Java", "Python", "Cloud Sec"],
    social: { linkedin: "https://www.linkedin.com/in/pablo-hurtado-gonzalo-9a5478237/", github: "https://github.com/PabloHurtadoGonzalo86" }
  },
  {
    id: "jesus",
    name: "Jesús Hidalgo",
    image: "/images/team/jesus.jpeg",
    stack: ["Industrial IoT", "AI Strategy", "Business"],
    social: { linkedin: "https://www.linkedin.com/in/jesus-hidalgo-garcia/"}
  }
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t("team.title")}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Header: Imagen y Redes */}
              <div className="flex justify-between items-start mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-blue-500 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=0D8ABC&color=fff&size=150`;
                    }}
                  />
                </div>
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-slate-400 hover:text-sky-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Info Principal */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium text-sm uppercase tracking-wide">
                  {t(`team.members.${member.id}.role`)}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t(`team.members.${member.id}.bio`)}
              </p>

              {/* Superpoder */}
              <div className="mb-6 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Superpower</span>
                <p className="text-sm font-semibold text-white">
                  {t(`team.members.${member.id}.superpower`)}
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {member.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
