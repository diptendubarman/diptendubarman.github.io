import { motion } from "framer-motion";
import { Code, Briefcase, Award, CheckCircle } from "lucide-react";
import { aboutMe, coreCompetencies } from "~/data";

const About = () => {
  const highlights = aboutMe.highlights || [];
  const competencies = coreCompetencies || [];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Engineering Excellence & Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on building impactful products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {aboutMe.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {aboutMe.description}
              </p>

              <div className="space-y-3 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 transition-colors">
                <Code className="w-8 h-8 text-cyan-500 mb-3" />
                <h4 className="text-3xl font-bold text-foreground">5+</h4>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 transition-colors">
                <Briefcase className="w-8 h-8 text-cyan-500 mb-3" />
                <h4 className="text-3xl font-bold text-foreground">20+</h4>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 transition-colors">
                <Award className="w-8 h-8 text-cyan-500 mb-3" />
                <h4 className="text-3xl font-bold text-foreground">45%</h4>
                <p className="text-sm text-muted-foreground">Faster Delivery</p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border hover:border-cyan-500/30 transition-colors">
                <Code className="w-8 h-8 text-cyan-500 mb-3" />
                <h4 className="text-3xl font-bold text-foreground">65%</h4>
                <p className="text-sm text-muted-foreground">
                  CI/CD Improvement
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((competency, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                    className="px-3 py-1.5 text-sm bg-accent text-foreground rounded-lg border border-border hover:border-cyan-500/30 transition-colors"
                  >
                    {competency}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
