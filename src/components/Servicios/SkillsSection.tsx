import { Badge } from "@/components/ui/badge";
import { relativeMedium } from "@/fonts";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills: { name: string; icon: React.ReactNode }[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="mt-16 md:mt-20 py-10 px-4 rounded-lg bg-black border border-slate-800">
      <h3
        className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center ${relativeMedium.className}`}
      >
        Habilidades Clave
      </h3>
      <motion.div
        className="flex flex-wrap justify-center gap-3 md:gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={item}>
            <Badge
              variant="outline"
              className={`border-slate-800 text-purple-300 px-4 py-2 rounded-full text-base md:text-lg ${relativeMedium.className} hover:bg-purple-500/20 w-full flex items-center justify-center`}
            >
              <span className="mr-2 text-xl">{skill.icon}</span>
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;