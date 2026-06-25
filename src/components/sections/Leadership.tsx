import { motion } from "framer-motion";
import { Users, Zap, GitBranch, Layout, Gauge, Target } from "lucide-react";
import { leadership } from "~/data";
import type { LeadershipItem } from "~/types/portfolio";

const iconMap = {
  Users: Users,
  Zap: Zap,
  GitBranch: GitBranch,
  Layout: Layout,
  Gauge: Gauge,
  Target: Target,
};

interface LeadershipCardProps {
  item: LeadershipItem;
  index: number;
}

const LeadershipCard = ({ item, index }: LeadershipCardProps) => {
  const Icon = iconMap[item.icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
        <Icon className="w-6 h-6 text-cyan-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-muted/30">
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
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Impact & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driving teams and organizations toward engineering excellence
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, index) => (
            <LeadershipCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
