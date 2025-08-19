import { Code, Database, Layout, Rocket, Smartphone } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Building responsive, user-friendly interfaces with React, Tailwind, and modern UI frameworks.",
    icon: <Layout className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-400",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Designing robust APIs and server logic using Node.js, Express, php and secure authentication methods.",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-400",
  },
  {
    id: 3,
    title: "Database & Integration",
    desc: "Managing data efficiently with MySQL, MongoDB, and integrating third-party services & APIs.",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: 4,
    title: "Deployment & Scaling",
    desc: "Deploying applications to cloud platforms, ensuring performance, security, and scalability.",
    icon: <Rocket className="w-6 h-6" />,
    gradient: "from-purple-500 to-fuchsia-400",
  },
  {
    id: 5,
    title: "App Development",
    desc: "Creating cross-platform mobile applications using React Native for both Android and iOS with smooth UI/UX.",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white mt-[80px]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          🚀 Work Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A streamlined journey from idea to deployment — covering frontend,
          backend, databases, mobile apps, and scaling solutions.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-12 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative z-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center max-w-[250px]`}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${step.gradient} text-white mb-4 shadow-lg`}
            >
              {step.icon}
            </div>

            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm">{step.desc}</p>

            <span className="absolute -top-3 -right-3 bg-gray-900 text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md">
              {index + 1}
            </span>
          </div>
        ))}

        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 via-blue-400 to-purple-500 -z-0"></div>
      </div>
    </section>
  );
}
