

"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import {
    Calendar,
    Clock,
    Users,
    Lightbulb,
    Target,
    CreditCard,
    MapPin,
    Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface BentoCardProps {
    color?: string;
    title?: string;
    description?: string | React.ReactNode;
    label?: string;
    className?: string;
}

export interface BentoProps {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

// Essential hackathon cards only
const cardData: BentoCardProps[] = [
    {
        title: "Vibe2Build: Startup MVP Hackathon",
        description: (
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-3xl font-semibold text-yellow-400 flex items-center gap-3 mb-6">
                        <Lightbulb className="w-8 h-8" />
                        What Is Vibe2Build?
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        Have a startup idea but unsure where to begin? Vibe2Build helps you transform your idea into a working MVP in just two evenings.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        Learn to structure your idea, leverage free or affordable AI tools to accelerate development, and pitch confidently to industry judges.
                    </p>
                    <p className="text-yellow-300 font-semibold text-lg">
                        A hands-on event designed for college students where creativity and energy are your greatest assets.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-lg">
                        <Image
                            src="/images/poster.png"
                            alt="Vibe2Build Hackathon Poster"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        ),
        label: 'Overview'
    },
    {
        title: 'Event Schedule',
        description: (
            <>
                <h2 className="text-3xl font-semibold text-blue-400 flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8" />
                    Event Schedule
                </h2>
                <div className="flex flex-col gap-6 text-blue-300 text-xl font-medium">
                    <div className="flex items-center gap-3 bg-blue-700 bg-opacity-40 rounded-xl p-5 shadow-inner">
                        <Calendar className="w-6 h-6 text-blue-200" />
                        <span>September 20th & 21st</span>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-700 bg-opacity-40 rounded-xl p-5 shadow-inner">
                        <Clock className="w-6 h-6 text-blue-200" />
                        <span>6:00 PM — 9:30 PM</span>
                    </div>
                </div>
                <p className="mt-4 text-blue-200 text-lg">
                    Perfect timing after college hours
                </p>
            </>
        ),
        label: 'Schedule'
    },
    {
        title: 'Registration Fee',
        description: (
            <>
                <h2 className="text-3xl font-semibold text-purple-400 flex items-center gap-3 mb-6">
                    <CreditCard className="w-8 h-8" />
                    Registration Fee
                </h2>
                <p className="text-xl font-semibold text-purple-300 mb-1">₹200 per participant</p>
                <p className="text-sm text-purple-400 mb-6">(Covers event costs, mentorship, certificates, and prizes.)</p>

                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-3 tracking-wide">
                        Limited Spots Available!
                    </h3>
                    <p className="text-lg font-semibold text-red-200">
                        <span className="text-red-500">45 Teams</span> registered already.
                        <br />
                        Only <strong className="text-yellow-300">22 slots</strong> left!
                    </p>
                </div>

                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeOu_vIvA7JRlQKbChqPPwLAMpUOUSfv7c9Hkx82aqVqrT5Fw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-purple-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                    aria-label="Register for Vibe2Build Hackathon"
                >
                    Register Now
                </Link>
                <p className="mt-4 text-purple-300 text-sm">
                    Fill in your details and pay ₹200 per participant.
                </p>
            </>
        ),
        label: 'Registration'
    },
    {
        title: 'Why Participate?',
        description: (
            <>
                <h2 className="text-3xl font-semibold text-pink-400 mb-6">
                    Why Participate?
                </h2>
                <ul className="space-y-3 text-pink-200 text-lg">
                    <li>• Learn to transform your idea into a working MVP</li>
                    <li>• Gain hands-on product building experience</li>
                    <li>• Use free or affordable AI tools for development</li>
                    <li>• Network with industry experts and peers</li>
                    <li>• Receive mentorship to refine your idea</li>
                    <li>• Win exciting prizes and recognition</li>
                    <li>• Top ideas get further development support</li>
                </ul>
            </>
        ),
        label: 'Benefits'
    },
    {
        title: 'Who Should Join?',
        description: (
            <>
                <h2 className="text-3xl font-semibold text-cyan-400 flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8" />
                    Who Should Join?
                </h2>
                <ul className="space-y-4 text-cyan-200 text-lg">
                    <li>• Students from any background (Engineering, Business, Design, Science, etc.)</li>
                    <li>• No prior coding experience required — focus is on idea and MVP</li>
                    <li>• If you have a problem or idea you want to pursue, this is for you</li>
                </ul>
                <div className="mt-6 p-4 bg-cyan-900 bg-opacity-40 rounded-xl">
                    <p className="text-cyan-100 font-semibold">
                        Note: Idea presentation will be online, so start building your MVP from now!
                    </p>
                </div>
            </>
        ),
        label: 'Audience'
    },
    {
        title: 'Event Format & Contact',
        description: (
            <>
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold text-red-400 flex items-center gap-3 mb-4">
                            <MapPin className="w-8 h-8" />
                            Event Format
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            <span className="font-semibold text-red-300">Online Presentations Only</span>
                            <br />
                            Start building your MVP from home and present your ideas online to our expert judges.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-red-400 flex items-center gap-3 mb-4">
                            <Phone className="w-8 h-8" />
                            Contact Us
                        </h2>
                        <div className="text-gray-300 leading-relaxed text-lg">
                            <p className="mb-2">For more details, reach out to:</p>
                            <p className="font-semibold mb-3">Automate Everything Club</p>
                            <div className="space-y-1">
                                <p className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +91 9361802547

                                    <span className="font-semibold text-purple-300">Elon</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +91 6385329845

                                    <span className="font-semibold text-purple-300">Geoffrey</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +91 9443884738

                                    <span className="font-semibold text-purple-300">Alan Turing</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ),
        label: 'Info'
    }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(${color}, 1);
        box-shadow: 0 0 6px rgba(${color}, 0.6);
        pointer-events: none;
        z-index: 100;
        left: ${x}px;
        top: ${y}px;
    `;
    return el;
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    style?: React.CSSProperties;
    particleCount?: number;
    glowColor?: string;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}> = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false
}) => {
        const cardRef = useRef<HTMLDivElement>(null);
        const particlesRef = useRef<HTMLDivElement[]>([]);
        const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
        const isHoveredRef = useRef(false);
        const memoizedParticles = useRef<HTMLDivElement[]>([]);
        const particlesInitialized = useRef(false);
        const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

        const initializeParticles = useCallback(() => {
            if (particlesInitialized.current || !cardRef.current) return;

            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({ length: particleCount }, () =>
                createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            );
            particlesInitialized.current = true;
        }, [particleCount, glowColor]);

        const clearAllParticles = useCallback(() => {
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            magnetismAnimationRef.current?.kill();

            particlesRef.current.forEach(particle => {
                gsap.to(particle, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'back.in(1.7)',
                    onComplete: () => {
                        particle.parentNode?.removeChild(particle);
                    }
                });
            });
            particlesRef.current = [];
        }, []);

        const animateParticles = useCallback(() => {
            if (!cardRef.current || !isHoveredRef.current) return;

            if (!particlesInitialized.current) {
                initializeParticles();
            }

            memoizedParticles.current.forEach((particle, index) => {
                const timeoutId = setTimeout(() => {
                    if (!isHoveredRef.current || !cardRef.current) return;

                    const clone = particle.cloneNode(true) as HTMLDivElement;
                    cardRef.current.appendChild(clone);
                    particlesRef.current.push(clone);

                    gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                    gsap.to(clone, {
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        rotation: Math.random() * 360,
                        duration: 2 + Math.random() * 2,
                        ease: 'none',
                        repeat: -1,
                        yoyo: true
                    });

                    gsap.to(clone, {
                        opacity: 0.3,
                        duration: 1.5,
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true
                    });
                }, index * 100);

                timeoutsRef.current.push(timeoutId);
            });
        }, [initializeParticles]);

        useEffect(() => {
            if (disableAnimations || !cardRef.current) return;

            const element = cardRef.current;

            const handleMouseEnter = () => {
                isHoveredRef.current = true;
                animateParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 5,
                        rotateY: 5,
                        duration: 0.3,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }
            };

            const handleMouseLeave = () => {
                isHoveredRef.current = false;
                clearAllParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (enableMagnetism) {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!enableTilt && !enableMagnetism) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(element, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }

                if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;

                    gsap.to(element, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);

            return () => {
                isHoveredRef.current = false;
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mousemove', handleMouseMove);
                clearAllParticles();
            };
        }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

        return (
            <div
                ref={cardRef}
                className={`${className} relative overflow-hidden`}
                style={{ ...style, position: 'relative', overflow: 'hidden' }}
            >
                {children}
            </div>
        );
    };

const GlobalSpotlight: React.FC<{
    gridRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}> = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}) => {
        const spotlightRef = useRef<HTMLDivElement | null>(null);
        const isInsideSection = useRef(false);

        useEffect(() => {
            if (disableAnimations || !gridRef?.current || !enabled) return;

            const spotlight = document.createElement('div');
            spotlight.className = 'global-spotlight';
            spotlight.style.cssText = `
        position: fixed;
        width: 800px;
        height: 800px;
        border-radius: 50%;
        pointer-events: none;
        background: radial-gradient(circle,
            rgba(${glowColor}, 0.15) 0%,
            rgba(${glowColor}, 0.08) 15%,
            rgba(${glowColor}, 0.04) 25%,
            rgba(${glowColor}, 0.02) 40%,
            rgba(${glowColor}, 0.01) 65%,
            transparent 70%
        );
        z-index: 200;
        opacity: 0;
        transform: translate(-50%, -50%);
        mix-blend-mode: screen;
        `;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;

            const handleMouseMove = (e: MouseEvent) => {
                if (!spotlightRef.current || !gridRef.current) return;

                const section = gridRef.current.closest('.bento-section');
                const rect = section?.getBoundingClientRect();
                const mouseInside =
                    rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

                isInsideSection.current = mouseInside || false;
                const cards = gridRef.current.querySelectorAll('.card');

                if (!mouseInside) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    cards.forEach(card => {
                        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                    });
                    return;
                }

                const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                let minDistance = Infinity;

                cards.forEach(card => {
                    const cardElement = card as HTMLElement;
                    const cardRect = cardElement.getBoundingClientRect();
                    const centerX = cardRect.left + cardRect.width / 2;
                    const centerY = cardRect.top + cardRect.height / 2;
                    const distance =
                        Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                    const effectiveDistance = Math.max(0, distance);

                    minDistance = Math.min(minDistance, effectiveDistance);

                    let glowIntensity = 0;
                    if (effectiveDistance <= proximity) {
                        glowIntensity = 1;
                    } else if (effectiveDistance <= fadeDistance) {
                        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                    }

                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                });

                gsap.to(spotlightRef.current, {
                    left: e.clientX,
                    top: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });

                const targetOpacity =
                    minDistance <= proximity
                        ? 0.8
                        : minDistance <= fadeDistance
                            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                            : 0;

                gsap.to(spotlightRef.current, {
                    opacity: targetOpacity,
                    duration: targetOpacity > 0 ? 0.2 : 0.5,
                    ease: 'power2.out'
                });
            };

            const handleMouseLeave = () => {
                isInsideSection.current = false;
                gridRef.current?.querySelectorAll('.card').forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                if (spotlightRef.current) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseleave', handleMouseLeave);
                spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
            };
        }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

        return null;
    };

const BentoCardGrid: React.FC<{
    children: React.ReactNode;
    gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
    <div
        className="bento-section grid gap-4 p-4 w-full max-w-none select-none relative"
        style={{ fontSize: 'clamp(0.9rem, 0.8rem + 0.5vw, 1.2rem)' }}
        ref={gridRef}
    >
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const MagicBento: React.FC<BentoProps> = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    particleCount = DEFAULT_PARTICLE_COUNT,
    enableTilt = false,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    return (
        <>
            <style>
                {`
            .bento-section {
                --glow-x: 50%;
                --glow-y: 50%;
                --glow-intensity: 0;
                --glow-radius: 200px;
                --glow-color: ${glowColor};
                --border-color: #392e4e;
                --background-dark: #060010;
                --white: hsl(0, 0%, 100%);
                --purple-primary: rgba(132, 0, 255, 1);
                --purple-glow: rgba(132, 0, 255, 0.2);
                --purple-border: rgba(132, 0, 255, 0.8);
            }
            
            .card-responsive {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                width: 100%;
                gap: 1.5rem;
            }
            
            .card-responsive .card:first-child {
                grid-column: 1 / -1;
                min-height: 400px;
            }
            
            @media (min-width: 1024px) {
                .card-responsive {
                    grid-template-columns: repeat(2, 1fr);
                }
                .card-responsive .card:first-child {
                    grid-column: span 2;
                }
                .card-responsive .card:last-child {
                    grid-column: span 2;
                }
            }
            
            @media (max-width: 768px) {
                .card-responsive {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .card-responsive .card:first-child {
                    grid-column: 1;
                }
                .card-responsive .card:last-child {
                    grid-column: 1;
                }
            }
            
            .card--border-glow::after {
                content: '';
                position: absolute;
                inset: 0;
                padding: 6px;
                background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                    rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                    rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                    transparent 60%);
                border-radius: inherit;
                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                mask-composite: subtract;
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                pointer-events: none;
                transition: opacity 0.3s ease;
                z-index: 1;
            }
            
            .card--border-glow:hover::after {
                opacity: 1;
            }
            
            .card--border-glow:hover {
                box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
            }
            
            .particle::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: rgba(${glowColor}, 0.2);
                border-radius: 50%;
                z-index: -1;
            }
            
            .particle-container:hover {
                box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
            }
            `}
            </style>

            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <BentoCardGrid gridRef={gridRef}>
                <div className="card-responsive grid">
                    {cardData.map((card, index) => {
                        const baseClassName = `card bg-gray-900 bg-opacity-70 p-6 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-sm ${card.className} ${enableBorderGlow ? 'card--border-glow' : ''
                            }`;

                        const cardStyle = {
                            color: 'var(--white)',
                            '--glow-x': '50%',
                            '--glow-y': '50%',
                            '--glow-intensity': '0',
                            '--glow-radius': '200px'
                        } as React.CSSProperties;

                        if (enableStars) {
                            return (
                                <ParticleCard
                                    key={index}
                                    className={baseClassName}
                                    style={cardStyle}
                                    disableAnimations={shouldDisableAnimations}
                                    particleCount={particleCount}
                                    glowColor={glowColor}
                                    enableTilt={enableTilt}
                                    clickEffect={clickEffect}
                                    enableMagnetism={enableMagnetism}
                                >
                                    {card.description}
                                </ParticleCard>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className={baseClassName}
                                style={cardStyle}
                            >
                                {card.description}
                            </div>
                        );
                    })}
                </div>
            </BentoCardGrid>
        </>
    );
};

export default MagicBento;