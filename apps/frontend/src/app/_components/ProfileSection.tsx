'use client';

export default function ProfileSection() {
    return (
        <section className="w-full bg-muted py-20 px-6 flex justify-center transition-colors duration-300">

            <div className="w-full max-w-5xl bg-card border border-border p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-start md:items-stretch">

                <div className="w-full md:w-[320px] aspect-square bg-background border-2 border-foreground flex items-center justify-center transition-colors">
                    <span className="text-2xl font-bold text-foreground text-center leading-relaxed">
                        내 프로필<br />사진 위치
                    </span>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-normal">
                            긴 설명글을 적어 넣습니다. 긴 설명글을 적어 넣습니다. 긴 설명글을 적어 넣습니다. 긴 설명글을 적어 넣습니다. 긴 설명글을 적어 넣습니다. 긴 설명글을 적어 넣습니다.
                        </p>
                    </div>

                    <div className="mt-12 md:mt-0 text-center">
                        <h2 className="text-xl break-keep leading-relaxed md:text-4xl font-bold text-foreground">
                            저는 끊임 없이 성장하는 개발자 입니다.
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
}