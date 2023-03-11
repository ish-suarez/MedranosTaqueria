import { useState, useRef, useEffect, ReactNode } from 'react'

export default function FadeIn({children}: {children: ReactNode}) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<Element>();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef);
        return () => observer.unobserve(domRef);
    }, [])
    return (
        <div
            className={``}
            ref={domRef}
            >
            {children}
        </div>
    )
}