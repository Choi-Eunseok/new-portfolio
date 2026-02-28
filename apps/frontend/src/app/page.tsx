import FolderHero from '@/app/_components/FolderHero';
import ProfileSection from '@/app/_components/ProfileSection';
import SkillSection from '@/app/_components/SkillSection';
// import ExperienceSection from '@/components/ExperienceSection';

export default function MainPage() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full py-24 pb-12 pl-3 tablet:pl-12">
                <h1 className="flex items-baseline">
                    <span className="text-5xl desktop:text-6xl font-bold mr-1">최은석 </span>
                    <span className="text-lg desktop:text-2xl font-light mr-4">의 </span>
                    <span className="text-2xl desktop:text-4xl font-semibold">포트폴리오</span>
                </h1>
            </div>

            <FolderHero />

            <ProfileSection />

            <SkillSection />

            {/* 4. 학력 및 경력 정리 */}
            {/* <ExperienceSection /> */}
        </main>
    );
}