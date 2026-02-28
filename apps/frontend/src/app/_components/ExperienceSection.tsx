'use client';

import { motion } from 'framer-motion';

const RESUME_DATA = [
    {
        category: "Education & Experience",
        items: [
            {
                title: "경희대학교 컴퓨터공학과 학사",
                date: "2021.03 - 2027.02",
                description: ""
            },
            {
                title: "전능아이티 개발2팀 CRM파트 파트장",
                date: "2024.01 - 2025.03",
                description: "스마트닥터 CRM 개발 및 유지보수, 파트원 업무 일정 관리 (산업기능요원 복무)"
            },
            {
                title: "전능아이티 개발2팀 CRM파트 연구원",
                date: "2023.02 - 2023.12",
                description: "스마트닥터 CRM 개발 및 유지보수 (산업기능요원 복무)"
            }
        ]
    },
    {
        category: "Projects & Activities",
        items: [
            {
                title: "제2기숙사 학식 앱 기획 및 개발",
                date: "2021 ~ 2022, 2025 ~ 2026",
                description: "교내 주요 식당(제2기숙사, 학생회관 등)의 식단 이미지를 텍스트 데이터로 가공해 제공하는 학생 맞춤형 편의 애플리케이션 개발"
            },
            {
                title: "Google Trace 기반 클라우드 자원 예측 AI 기술 연구",
                date: "2025.09 ~ 2025.12",
                description: "Google Trace 데이터를 활용하여 클라우드 자원 사용량을 예측하는 연구 수행. Attention 메커니즘 및 Time-LLM, Transformer 등 다양한 시계열 모델의 성능 비교 분석"
            },
            {
                title: "JCI 앱 외주 개발",
                date: "2022.09",
                description: "강원지구 청년회의소(JC) 단체를 위한 맞춤형 모바일 애플리케이션 외주 개발 및 클라이언트 요구사항 기반의 기능 구현"
            },
            {
                title: "부산 코로나와 웹 개발",
                date: "2020",
                description: "부산시 공식 홈페이지의 확진자 동선 데이터를 실시간으로 파싱하고, 지도 API를 활용해 직관적으로 시각화한 공익 목적의 웹 서비스 배포"
            },
            {
                title: "BEAK (Blind EAsy Keyboard) 기획 및 개발",
                date: "2019 ~ 2020",
                description: "아두이노(Arduino)를 활용하여 시각장애인의 정보 접근성을 높이는 하드웨어 기반의 스마트폰 점자 입력 보조기기 프로토타입 기획 및 개발"
            },
        ]
    },
    {
        category: "Others",
        items: [
            {
                title: "GitHub",
                date: "Link",
                description: "github.com/Choi-Eunseok"
            },
            {
                title: "정보처리기능사",
                date: "2020.10",
                description: "한국산업인력공단"
            }
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section className="w-full bg-muted/40 py-24 px-6 flex justify-center transition-colors">
            <div className="w-full max-w-4xl">

                <div className="space-y-16">
                    {RESUME_DATA.map((section, sectionIdx) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIdx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <h3 className="text-xl font-bold text-foreground tracking-wide">
                                    {section.category}
                                </h3>
                            </div>

                            <div className="relative border-l-2 border-border/60 ml-3 md:ml-4 space-y-10">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="relative pl-6 md:pl-8 group">
                                        <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-foreground group-hover:bg-foreground transition-colors" />

                                        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                                            <h4 className="text-base md:text-lg font-bold text-foreground/90 group-hover:text-foreground transition-colors">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">
                                                {item.date}
                                            </span>
                                        </div>

                                        {item.date === "Link" ? (
                                            <a
                                                href={item.description.startsWith('http') ? item.description : `https://${item.description}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm md:text-base text-blue-500 hover:text-blue-600 hover:underline leading-relaxed block w-fit"
                                            >
                                                {item.description}
                                            </a>
                                        ) : (
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}