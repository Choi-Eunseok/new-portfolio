'use client';

import { motion } from 'framer-motion';
import {
    SiPython, SiCplusplus, SiPytorch, SiRos,
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiKotlin, SiSpringboot,
    SiSwift, SiDotnet, SiAutodesk, SiDocker, SiGit, SiPhp, SiHtml5, SiNodedotjs, SiExpress,
    SiMongodb, SiFigma, SiVercel, SiPostgresql, SiAmazonwebservices, SiArduino, SiRaspberrypi,
    SiFirebase, SiPandas, SiNumpy, SiBootstrap, SiAndroidstudio, SiTensorflow, SiHuggingface
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";


const SKILLS = [
    {
        category: "Languages",
        main: [
            { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Java", icon: FaJava, color: "" },
            { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "C#", icon: TbBrandCSharp, color: "#4D2DCC" },
            { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        ],
        experience: [
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "Swift", icon: SiSwift, color: "#F05138" },
        ]
    },
    {
        category: "Tech Stack",
        main: [
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "React Native", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "WPF", icon: SiDotnet, color: "#512BD4" },
            { name: "WinForms", icon: SiDotnet, color: "#512BD4" },
            { name: "MS SQL", icon: DiMsqlServer, color: "#CC2927" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        ],
        experience: [
            { name: "ElysiaJS", icon: null, color: null },
        ]
    },
    {
        category: "Tools & Others",
        main: [
            { name: "Arduino", icon: SiArduino, color: "#00979D" },
            { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
            { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
            { name: "Fusion 360", icon: SiAutodesk, color: "#0696D7" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "cafe24", icon: null, color: null },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "AWS", icon: SiAmazonwebservices, color: "" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
        ],
        experience: [
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "ROS", icon: SiRos, color: "#22314E" },
            { name: "Vercel", icon: SiVercel, color: "" },
        ]
    }
];

export default function SkillSection() {
    return (
        <section className="w-full bg-background py-24 px-6 flex justify-center transition-colors">
            <div className="w-full max-w-5xl">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Skills <span className="text-muted-foreground font-normal">정리</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SKILLS.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                        >
                            <h3 className="text-sm font-bold text-foreground mb-6 tracking-wide flex items-center gap-2 uppercase">
                                <span>📂</span> {group.category}
                            </h3>

                            <div className="flex flex-col gap-6 flex-1">
                                {/* 1. 메인 스킬 영역 */}
                                <div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {group.main.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-foreground/5 border border-transparent hover:border-foreground/30 hover:bg-muted transition-all cursor-default group"
                                            >
                                                {/* icon이 존재할 때만 렌더링하고, 고유 색상(color) 적용 */}
                                                {skill.icon && (
                                                    <skill.icon
                                                        className="w-4 h-4 transition-transform group-hover:scale-110"
                                                        style={{ color: skill.color || 'currentColor' }}
                                                    />
                                                )}
                                                <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. Experience 스킬 영역 */}
                                {group.experience.length > 0 && (
                                    <div className="pt-6 border-t border-border mt-auto">
                                        <h4 className="text-[11px] font-semibold text-muted-foreground mb-3 tracking-widest uppercase">
                                            Experience
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5">
                                            {group.experience.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border/60 hover:border-foreground/30 transition-all cursor-default group opacity-80 hover:opacity-100"
                                                >
                                                    {/* icon이 존재할 때만 렌더링하고, 고유 색상(color) 적용 */}
                                                    {skill.icon && (
                                                        <skill.icon
                                                            className="w-3.5 h-3.5 transition-all"
                                                            style={{ color: skill.color || 'currentColor' }}
                                                        />
                                                    )}
                                                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground/90">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}