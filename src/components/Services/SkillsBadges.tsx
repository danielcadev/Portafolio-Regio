import { Badge } from "@/components/ui/badge";
import { relativeMedium } from "@/fonts";

interface SkillsBadgesProps {
  skills: string[];
}

const SkillsBadges: React.FC<SkillsBadgesProps> = ({ skills }) => {
  return (
    <div className="mt-10 md:mt-16 bg-black py-8 px-4 rounded-lg">
      <h3
        className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center ${relativeMedium.className}`}
      >
        Habilidades Clave
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className={`bg-black border-purple-500 text-purple-300 px-3 py-1 rounded-full ${relativeMedium.className}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsBadges;