import { Code, Database, Layout, Rocket } from "lucide-react";

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
    desc: "Designing robust APIs and server logic using Node.js, Express, and secure authentication methods.",
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
];

export default function WorkProcess() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Work Process
          </h2>
          <p className="text-gray-600 mb-3">
            I build scalable, user-friendly applications from front-end to
            back-end. With expertise in modern frameworks and databases, I turn
            ideas into fast, secure, and reliable digital solutions.
          </p>
          <p className="text-gray-600">
            Passionate about crafting seamless web experiences, I work across
            both front-end and back-end to deliver complete solutions. From
            intuitive user interfaces to robust server logic, I ensure every
            project is built with performance, security, and scalability in
            mind.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${step.gradient} text-white mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
