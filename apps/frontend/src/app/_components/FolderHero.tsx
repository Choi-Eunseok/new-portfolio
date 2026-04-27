'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillPushpin } from 'react-icons/ai';

const PROJECTS = [
    { id: '1', title: '제2기숙사 학식 앱 기획 및 개발', date: '2021 ~ 2026' },
    { id: '2', title: '클라우드 자원 예측 AI 연구', date: '2025' },
    { id: '3', title: 'JCI 앱 외주 개발', date: '2022' },
    { id: '4', title: '부산 코로나 웹', date: '2020' },
    { id: '5', title: 'BEAK (점자 입력 보조기기)', date: '2019 ~ 2020' },
];

const SquareFolder = ({
    project,
    onClick,
    isOtherPulling,
    isPulling,
    isExpanded
}: {
    project: any,
    onClick: () => void,
    isOtherPulling: boolean,
    isPulling: boolean,
    isExpanded: boolean
}) => {
    return (
        <div
            className="relative w-full h-40 md:h-48 cursor-pointer group"
            onClick={onClick}
        >
            <div className="absolute top-2 left-0 w-1/3 h-8 bg-[#d4af4b] rounded-t-lg z-0" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-[#d4af4b] rounded-b-xl rounded-tr-xl z-0" />

            {!isExpanded && (
                <motion.div
                    layoutId={`paper-${project.id}`}
                    className="absolute top-10 left-2 right-2 bottom-4 bg-[#fdfdfd] rounded-md shadow-sm flex flex-col p-3 overflow-hidden z-10"

                    animate={isPulling ? { y: -140 } : { y: 0 }}
                    whileHover={!isPulling ? { y: -25, rotate: -2 } : undefined}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                    <div className="w-1/2 h-1.5 bg-zinc-200 rounded-full mb-2" />
                    <div className="w-full h-1.5 bg-zinc-200 rounded-full mb-2" />
                    <div className="w-3/4 h-1.5 bg-zinc-200 rounded-full" />
                </motion.div>
            )}

            <motion.div
                layoutId={`folder-${project.id}`}
                className="absolute top-14 left-0 right-0 bottom-0 bg-[#F4CC60] rounded-b-xl shadow-[0_-2px_4px_rgba(0,0,0,0.1)] p-4 md:p-5 flex flex-col justify-end pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                initial={{ zIndex: 20 }}
                animate={isOtherPulling ? { zIndex: 10 } : { zIndex: 20 }}
            >
                <h3 className="text-black/80 font-bold text-sm md:text-base leading-tight">
                    {project.title}
                </h3>
                <p className="text-black/50 text-xs mt-1 font-medium">{project.date}</p>
            </motion.div>
        </div>
    );
};

export default function FolderHero() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [step, setStep] = useState<number>(0);

    const handleOpen = (id: string) => {
        if (step !== 0)
        {
            setStep(0);
            return;
        }

        setSelectedId(id);
        setStep(1);

        setTimeout(() => {
            setStep(2);
        }, 300);

        setTimeout(() => {
            setStep(3);
        }, 800);
    };

    const handleClose = () => {
        if (step !== 3) return;

        setStep(2);

        setTimeout(() => {
            setStep(1);
        }, 200);

        setTimeout(() => {
            setStep(0);
        }, 700);

        setTimeout(() => {
            setSelectedId(null);
        }, 1000);
    };

    const selectedProject = PROJECTS.find(p => p.id === selectedId);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [step]);

    return (
        <section className="relative w-full bg-muted/30 py-0 pb-12 px-6 flex justify-center">
            <div className="w-full max-w-5xl">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mt-12">
                    {PROJECTS.map((project) => (
                        <div key={project.id}>
                            <AnimatePresence>
                                {step >= 2 && selectedId === project.id && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, zIndex: 20, transition: { zIndex: { duration: 0 } } }}
                                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 pointer-events-auto"
                                            onClick={handleClose}
                                        />
                                        <motion.div
                                            layoutId={`paper-${project.id}`}
                                            className="fixed top-0 bottom-0 left-0 right-0 m-auto w-[90vw] md:max-w-4xl h-[85vh] bg-[#fdfdfd] rounded-2xl shadow-2xl flex flex-col pointer-events-auto z-50"
                                            initial={{ zIndex: 50 }}
                                            animate={{ zIndex: 50 }}
                                            exit={{ zIndex: 20, transition: { zIndex: { duration: 0 } } }}
                                            transition={{ type: "spring", stiffness: 250, damping: 25 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0, y: -100, rotate: 0 }}
                                                animate={step === 3 ? { opacity: 1, scale: 1, y: 0, rotate: 30 } : { opacity: 0, scale: 0 }}
                                                transition={{ type: "spring" }}
                                                className="absolute -top-4 right-6 md:-top-6 md:right-10 z-50 drop-shadow-lg cursor-pointer hover:scale-110"
                                                onClick={handleClose}
                                            >
                                                <AiFillPushpin className="text-4xl md:text-5xl text-[#D9534F]" />
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: step === 3 ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="p-8 md:p-12 overflow-y-auto h-full scrollbar-hide flex flex-col"
                                            >
                                                <h2 className="text-2xl md:text-4xl font-black text-zinc-800 mb-2">
                                                    {selectedProject.title}
                                                </h2>
                                                <p className="text-zinc-500 mb-8 font-medium">{selectedProject.date}</p>

                                                <div className="flex-1 border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center bg-zinc-50/50">
                                                    <p className="text-zinc-400 font-medium">이곳에 상세 트러블슈팅 및 코드 리뷰가 들어갑니다.</p>
                                                </div>
                                            </motion.div>

                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>

                            <SquareFolder
                                project={project}
                                onClick={() => handleOpen(project.id)}
                                isOtherPulling={step >= 1}
                                isPulling={selectedId === project.id && step >= 1}
                                isExpanded={selectedId === project.id && step >= 2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}