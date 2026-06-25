import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Cog, Globe } from "lucide-react";
import { skills } from "~/data";
import type { SkillCategory } from "~/types/portfolio";

const iconMap = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  devops: Cog,
  cloud: Cloud,
  apis: Globe,
};

type SkillCategoryKey = keyof typeof iconMap;

interface SkillCardProps {
  category: SkillCategoryKey;
  data: SkillCategory;
  index: number;
}

const SkillCard = ({ category, data, index }: SkillCardProps) => {
  const Icon = iconMap[category] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
          <Icon className="w-5 h-5 text-cyan-500" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{data.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.items.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + skillIndex * 0.05,
            }}
            className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-md hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = Object.entries(skills) as [
    SkillCategoryKey,
    (typeof skills)[SkillCategoryKey],
  ][];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([category, data], index) => (
            <SkillCard
              key={category}
              category={category}
              data={data}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
