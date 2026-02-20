'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { interpolate } from 'flubber';
import { useMemo, useState } from 'react';

const pathBack = "M998.876 837.779C998.876 858.311 984.071 871.589 964.464 871.77C964.464 871.77 340.653 871.77 40.2112 871.77C19.8082 871.77 3.11108 856.472 3.11108 837.779V707.71V174.838V149.379V71.3609C3.11108 45.2054 26.2563 24 54.8042 24H422.086C435.797 24 448.937 28.9873 458.63 37.8675L565.192 135.5C574.885 144.38 588.039 144.38 601.736 149.367H949.687C978.235 149.367 1001.38 170.572 1001.38 196.728V212.909L1000.13 525.344L998.876 837.779Z"
const pathPaper = "M26 177H976V848H26V177Z"
const pathClosed = "M2 207.857C2 185.766 19.9086 167.857 42 167.857H962C984.091 167.857 1002 185.766 1002 207.857V836.026C1002 858.117 984.091 876.026 962 876.026H42C19.9086 876.026 2 858.117 2 836.026V207.857Z";
const pathOpen = "M37.5 243.357C37.5 221.266 55.4086 203.357 77.5 203.357H997.5C1019.59 203.357 1037.5 221.266 1037.5 243.357L1002 836.026C1002 858.118 984.091 876.026 962 876.026H42C19.9086 876.026 2 858.118 2 836.026L37.5 243.357Z";

export default function SquareFolder({ title, index }: { title: string; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const progress = useMotionValue(0);

    const pathInterpolator = useMemo(
        () => interpolate(pathClosed, pathOpen, { maxSegmentLength: 2 }),
        []
    );

    const displayPath = useTransform(progress, (v) => pathInterpolator(v));

    const handleHover = (isHovering: boolean) => {
        setIsHovered(isHovering);
        animate(progress, isHovering ? 1 : 0, {
            type: "spring",
            stiffness: 250,
            damping: 25,
            restDelta: 0.001
        });
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.5,
            }}
            onHoverStart={() => handleHover(true)}
            onHoverEnd={() => handleHover(false)}
            style={{ zIndex: isHovered ? 50 : 0 }}
            className="flex-1 cursor-pointer origin-[10%_50%]"
        >
            <svg viewBox="0 0 1040 950" className="w-full h-full drop-shadow-[-5px_-5px_10px_rgba(0,0,0,0.25)] overflow-visible">
                <path d={pathBack} fill="#D9A540" className="" />
                <path d={pathPaper} fill="#FFFFFF" />
                <motion.path d={displayPath} fill="#FFB800" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />

                <text x="50" y="110" fill="black" className="text-[40px] font-bold">
                    {title}
                </text>
            </svg>
        </motion.div>
    );
}