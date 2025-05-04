"use client";
import { useRouter } from "next/navigation";

const experiences = [
  { year: 2017, title: "HR 관리", stack: "Java/JexFrame framework/Postgres", slug: "hr-management" },
  { year: 2017, title: "MY 인사", stack: "Java/JexFrame framework/Postgres/CentOS", slug: "my-hr" },
  { year: 2018, title: "급여 관리", stack: "Java/JexFrame framework/Postgres/CentOS", slug: "payroll-management" },
  { year: 2019, title: "Employee", stack: "Java/JexFrame framework/Postgres/CentOS", slug: "employee" },
  { year: 2020, title: "비즈트립", stack: "Java/JexFrame framework/Postgres/CentOS", slug: "biztrip" },
  { year: 2021, title: "비즈트립", stack: "Java/JexFrame framework/Postgres/CentOS", slug: "biztrip-2021" },
  { year: 2022, title: "차세대", stack: "Java/Spring Cloud framework/Postgres/React Next.js", slug: "next-gen" },
  { year: 2023, title: "차세대", stack: "Java/Spring Cloud framework/Postgres/React Next.js", slug: "next-gen-2023" },
  { year: 2024, title: "차세대", stack: "Java/Spring Cloud framework/Postgres/React Next.js", slug: "next-gen-2024" },
  { year: 2025, title: "차세대", stack: "Java/Spring Cloud framework/Postgres/React Next.js", slug: "next-gen-2025" },
];

export function Experience() {
  const router = useRouter();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Experience</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">A timeline of projects I have developed over the years</p>
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-indigo-100 dark:bg-indigo-900/30 -translate-x-1/2 z-0" />
          <div className="w-full max-w-4xl mx-auto">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={exp.slug}
                  onClick={() => router.push(`/experience/${exp.slug}`)}
                  className="group block cursor-pointer relative flex items-center mb-16 last:mb-0"
                >
                  {/* Card */}
                  <div className={`w-full sm:w-1/2 ${isLeft ? "pr-8 justify-end flex" : "pl-8 justify-start flex"} hidden sm:flex`}>
                    {isLeft && (
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 text-left">
                        <div className="text-indigo-600 font-bold text-lg mb-1">{exp.year}</div>
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</div>
                        <div className="text-gray-500 dark:text-gray-300 text-sm">{exp.stack}</div>
                      </div>
                    )}
                  </div>
                  {/* Timeline dot */}
                  <div className="z-10 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-indigo-500 flex items-center justify-center shadow">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    </div>
                    {idx !== experiences.length - 1 && (
                      <div className="w-1 h-16 bg-indigo-100 dark:bg-indigo-900/30" />
                    )}
                  </div>
                  <div className={`w-full sm:w-1/2 ${!isLeft ? "pl-8 justify-start flex" : "pr-8 justify-end flex"} hidden sm:flex`}>
                    {!isLeft && (
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 text-left">
                        <div className="text-indigo-600 font-bold text-lg mb-1">{exp.year}</div>
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</div>
                        <div className="text-gray-500 dark:text-gray-300 text-sm">{exp.stack}</div>
                      </div>
                    )}
                  </div>
                  {/* Mobile: always left-aligned */}
                  <div className="flex sm:hidden w-full pl-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 text-left w-full mt-4">
                      <div className="text-indigo-600 font-bold text-lg mb-1">{exp.year}</div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</div>
                      <div className="text-gray-500 dark:text-gray-300 text-sm">{exp.stack}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}