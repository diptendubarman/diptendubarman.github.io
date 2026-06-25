import { useMemo, type JSX } from "react";
import { motion } from "framer-motion";

/* ---------- Types ---------- */

type FloatingTagProps = {
  text: string;
  index: number;
};

type ConnectionLineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
};

type NetworkNodeProps = {
  x: number;
  y: number;
  delay: number;
};

type BracketType = "curly" | "square" | "angle" | "arrow" | "func";

type CodeBracketProps = {
  x: number;
  y: number;
  type: BracketType;
  delay: number;
};

/* ---------- Data ---------- */

const techKeywords: string[] = [
  "React",
  "Node.js",
  "FastAPI",
  "Docker",
  "PostgreSQL",
  "GraphQL",
  "TypeScript",
  "Redis",
  "AWS",
  "CI/CD",
  "MongoDB",
  "NestJS",
  "Kafka",
  "WebSocket",
  "REST API",
];

/* ---------- Components ---------- */

const FloatingTag = ({ text, index }: FloatingTagProps) => {
  const randomX = useMemo<number>(() => Math.random() * 80 + 10, []);
  const randomDelay = useMemo<number>(() => index * 2, [index]);
  const duration = useMemo<number>(() => 15 + Math.random() * 10, []);

  return (
    <motion.div
      className="absolute px-3 py-1.5 rounded-full border border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-500/5 dark:bg-cyan-400/5 backdrop-blur-sm"
      style={{ left: `${randomX}%` }}
      initial={{ y: "100vh", opacity: 0 }}
      animate={{
        y: "-20vh",
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span className="text-xs font-mono text-cyan-600/60 dark:text-cyan-400/60">
        {text}
      </span>
    </motion.div>
  );
};

const ConnectionLine = ({ x1, y1, x2, y2, delay }: ConnectionLineProps) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="url(#lineGradient)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.4, 0.4, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
        <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const NetworkNode = ({ x, y, delay }: NetworkNodeProps) => (
  <motion.div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
    <motion.div
      className="absolute -inset-2 rounded-full border border-cyan-500/30 dark:border-cyan-400/30"
      animate={{
        scale: [1, 2, 2],
        opacity: [0.5, 0, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
    <motion.div
      className="w-2 h-2 rounded-full bg-cyan-500/50 dark:bg-cyan-400/50"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.div>
);

const CodeBracket = ({ x, y, type, delay }: CodeBracketProps) => {
  const brackets: Record<BracketType, string> = {
    curly: "{ }",
    square: "[ ]",
    angle: "< />",
    arrow: "=> { }",
    func: "fn()",
  };

  return (
    <motion.div
      className="absolute font-mono text-lg text-cyan-500/15 dark:text-cyan-400/15 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [0.8, 1, 0.8],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {brackets[type]}
    </motion.div>
  );
};

/* ---------- Main Component ---------- */

const AnimatedBackground = (): JSX.Element => {
  const nodes = [
    { x: 10, y: 25 },
    { x: 25, y: 55 },
    { x: 15, y: 80 },
    { x: 78, y: 18 },
    { x: 88, y: 48 },
    { x: 85, y: 78 },
    { x: 50, y: 12 },
    { x: 55, y: 88 },
    { x: 35, y: 35 },
    { x: 70, y: 65 },
  ];

  const connections = [
    { x1: 10, y1: 25, x2: 25, y2: 55, delay: 0 },
    { x1: 25, y1: 55, x2: 15, y2: 80, delay: 0.5 },
    { x1: 78, y1: 18, x2: 88, y2: 48, delay: 1 },
    { x1: 88, y1: 48, x2: 85, y2: 78, delay: 1.5 },
    { x1: 50, y1: 12, x2: 78, y2: 18, delay: 2 },
    { x1: 35, y1: 35, x2: 50, y2: 12, delay: 2.5 },
    { x1: 35, y1: 35, x2: 25, y2: 55, delay: 3 },
    { x1: 70, y1: 65, x2: 88, y2: 48, delay: 3.5 },
    { x1: 55, y1: 88, x2: 85, y2: 78, delay: 4 },
    { x1: 70, y1: 65, x2: 55, y2: 88, delay: 4.5 },
  ];

  const brackets = [
    { x: 5, y: 15, type: "curly" as BracketType, delay: 0 },
    { x: 92, y: 25, type: "angle" as BracketType, delay: 1 },
    { x: 8, y: 70, type: "arrow" as BracketType, delay: 2 },
    { x: 88, y: 80, type: "func" as BracketType, delay: 3 },
    { x: 45, y: 5, type: "square" as BracketType, delay: 4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-10">
      {connections.map((conn, i) => (
        <ConnectionLine key={`conn-${i}`} {...conn} />
      ))}
      {nodes.map((node, i) => (
        <NetworkNode key={`node-${i}`} {...node} delay={i * 0.3} />
      ))}
      {brackets.map((bracket, i) => (
        <CodeBracket key={`bracket-${i}`} {...bracket} />
      ))}
      {techKeywords.slice(0, 8).map((text, i) => (
        <FloatingTag key={`tag-${i}`} text={text} index={i} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
