import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, TrendingUp } from "lucide-react";
import { experiences } from "../../data";
import type { Achievement, ExperienceItem } from "~/types/portfolio";

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
};

const ExperienceCard = ({ experience, index, isLast }: ExperienceCardProps) => {
  const isCurrent = experience.type === "current";
  const responsibilities: string[] = experience.responsibilities || [];
  const achievements: Achievement[] = experience.achievements || [];

  return (
    <div className="relative pl-8 md:pl-12">
      {!isLast && (
        <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-0.5 bg-border" />
      )}

      <div
        className={`absolute left-0 md:left-1 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isCurrent
            ? "bg-cyan-500 border-cyan-500"
            : "bg-background border-border"
        }`}
      >
        {isCurrent && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="pb-12"
      >
        <div className="bg-background rounded-xl border border-border p-6 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-foreground">
                {experience.period}
              </span>
              {isCurrent && (
                <span className="px-2 py-0.5 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                  Current
                </span>
              )}
            </div>
          </div>

          <ul className="space-y-2 mb-6">
            {responsibilities.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg"
              >
                <TrendingUp className="w-4 h-4 text-cyan-500" />
                <span className="text-sm">
                  <span className="font-semibold text-foreground">
                    {achievement.metric}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {achievement.description}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const experienceList = experiences;

  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and contributions
          </p>
        </motion.div>

        <div className="relative">
          {experienceList.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experienceList.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
