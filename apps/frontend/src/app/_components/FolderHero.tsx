'use client';

import SquareFolder from './SquareFolder';

const folders = [
    { id: 1, title: 'JCI 앱' },
    { id: 2, title: 'BEAK' },
    { id: 3, title: '제2기숙사 학식 앱' },
    { id: 4, title: '부산 코로나와' },
    { id: 5, title: 'Time-LLM-Trace' },
];

export default function FolderHero() {
    return (
        <section className="w-full flex-col tablet:pt-6 pb-12 ">

            <div className="max-w-full grid grid-cols-2 mx-5 tablet:mx-0 tablet:flex scrollbar-hide justify-center overflow-x-clip">
                {folders.map((folder, index) => (
                    <SquareFolder
                        key={folder.id}
                        title={folder.title}
                        index={index}
                    />
                ))}
            </div>

            <div className="w-full flex justify-center mt-6">
                <button className="px-8 py-2.5 border border-gray-300 rounded-full text-sm font-light bg-auto shadow-sm hover:bg-foreground hover:text-background transition-all">
                    프로젝트 더보기
                </button>
            </div>
        </section>
    );
}