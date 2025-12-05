
import { useTranslation } from "react-i18next";
import { GitBranch, Workflow, BrainCircuit, ShieldCheck } from "lucide-react";

const MissionVision = () => {
  const { t } = useTranslation();

  const stack = [
    {
      icon: <GitBranch size={48} className="text-blue-400" />,
      text: t("missionVision.stack.items.agile"),
    },
    {
      icon: <Workflow size={48} className="text-purple-400" />,
      text: t("missionVision.stack.items.automation"),
    },
    {
      icon: <BrainCircuit size={48} className="text-emerald-400" />,
      text: t("missionVision.stack.items.data"),
    },
    {
      icon: <ShieldCheck size={48} className="text-rose-400" />,
      text: t("missionVision.stack.items.infra"),
    },
  ];

  return (
    <section id="mission-vision" className="container py-24 sm:py-32 m-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
        {t("missionVision.title")}
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-slate-300 text-center">
        {t("missionVision.subtitle")}
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-sm hover:border-slate-600 transition-colors">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-white">
            {t("missionVision.mission.title")}
          </h3>
          <p className="text-slate-300">
            {t("missionVision.mission.content")}
          </p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-sm hover:border-slate-600 transition-colors">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4 text-white">
            {t("missionVision.vision.title")}
          </h3>
          <p className="text-slate-300">
            {t("missionVision.vision.content")}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          {t("missionVision.stack.title")}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm flex flex-col items-center text-center p-6 hover:bg-slate-800 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <p className="text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
