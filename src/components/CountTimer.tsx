"use client";

import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountTimerProps {
    targetDate?: string;
    title?: string;
    className?: string;
}

const CountTimer: React.FC<CountTimerProps> = ({
    targetDate = "2025-09-20T18:00:00",
    className = ""
}) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isActive, setIsActive] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const calculateTimeLeft = (): TimeLeft => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            } else {
                setIsActive(false);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [targetDate, mounted]);

    if (!mounted) {
        return (
            <div className={`flex justify-center items-center p-8 ${className}`}>
                <div className="animate-pulse bg-teal-900/20 rounded-2xl p-8 w-full max-w-2xl h-48"></div>
            </div>
        );
    }

    if (!isActive) {
        return (
            <div className={`text-center p-8 ${className}`}>
                <div className="bg-teal-900/20 rounded-2xl border border-teal-400/20 backdrop-blur-sm p-8 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                        🚀 Hackathon is Live!
                    </h2>
                    <p className="text-cyan-200 text-lg">
                        The Vibe2Build Hackathon has started!
                    </p>
                </div>
            </div>
        );
    }

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div className={`w-full max-w-2xl mx-auto ${className}`}>
            <div className="flex items-center justify-center gap-3 md:gap-4">
                {timeUnits.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                        <div className="text-center">
                            <div
                                className="text-5xl md:text-7xl font-black leading-none mb-2"
                                style={{
                                    color: '#ffffffff',
                                    textShadow: `
                    0 0 10px #22d3ee,
                    0 0 20px #22d3ee,
                    0 0 30px #22d3ee,
                    0 0 40px #22d3ee
                  `,
                                    fontFamily: 'system-ui, -apple-system, sans-serif',
                                    fontWeight: '900'
                                }}
                            >
                                {String(unit.value).padStart(2, '0')}
                            </div>
                        </div>


                        {index < timeUnits.length - 1 && (
                            <div
                                className="text-4xl md:text-6xl font-black self-start mt-2"
                                style={{
                                    color: '#22d3ee',
                                    textShadow: `
                    0 0 10px #22d3ee,
                    0 0 20px #22d3ee
                  `
                                }}
                            >
                                :
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CountTimer;