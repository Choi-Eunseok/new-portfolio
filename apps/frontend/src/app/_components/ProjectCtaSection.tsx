'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCtaSection() {
    return (
        <section className="w-full bg-background py-32 px-6 flex justify-center items-center transition-colors">

            <div className="flex flex-col items-center">
                <p className="text-sm md:text-base text-muted-foreground mb-6 text-center">
                    Explore All Projects
                </p>

                <Link href="/projects">
                    <button className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                        <div className="text-l md:text-3xl text-foreground flex items-baseline">
                            <span className="font-bold tracking-tight">최은석</span>
                            <span className="font-light mx-1">&apos;s</span>
                            <span className="font-bold tracking-wide">PROJECTs</span>
                        </div>

                        <FiArrowUpRight
                            className="text-3xl text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />

                    </button>
                </Link>
            </div>

        </section>
    );
}