import React, { useRef, useEffect, FC, ReactNode, useState } from 'react';
import gsap from 'gsap';
import { vec2 } from 'vecteur';
type Vec2 = ReturnType<typeof vec2>;

interface MagneticCursorProps {
    children: ReactNode;
    magneticFactor?: number;
    lerpAmount?: number;
    hoverPadding?: number;
    hoverAttribute?: string;
    cursorSize?: number;
    cursorColor?: string;
    blendMode?: 'difference' | 'exclusion' | 'normal' | 'screen' | 'overlay';
    cursorClassName?: string;
    shape?: 'circle' | 'square' | 'rounded-square';
    disableOnTouch?: boolean;
    speedMultiplier?: number;
    maxScaleX?: number;
    maxScaleY?: number;
    contrastBoost?: number;
    resetKey?: string | number;
}

interface CursorState {
    el: HTMLDivElement | null;
    pos: { current: Vec2; target: Vec2; previous: Vec2 };
    hover: { isHovered: boolean };
    isDetaching: boolean;
}

export const MagneticCursor: FC<MagneticCursorProps> = ({
    children,
    lerpAmount = 0.1,
    magneticFactor = 0.4,
    hoverPadding = 12,
    hoverAttribute = 'data-magnetic',
    cursorSize = 28,
    cursorColor = 'white',
    blendMode = 'exclusion',
    cursorClassName = '',
    shape = 'circle',
    disableOnTouch = true,
    speedMultiplier = 0.02,
    maxScaleX = 1,
    maxScaleY = 0.3,
    contrastBoost = 1.5,
    resetKey,
}) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorStateRef = useRef<CursorState | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const configRef = useRef({
        magneticFactor, speedMultiplier, maxScaleX, maxScaleY,
        cursorSize, lerpAmount, hoverPadding,
    });

    useEffect(() => {
        configRef.current = {
            magneticFactor, speedMultiplier, maxScaleX, maxScaleY,
            cursorSize, lerpAmount, hoverPadding,
        };
    }, [magneticFactor, speedMultiplier, maxScaleX, maxScaleY, cursorSize, lerpAmount, hoverPadding]);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // Reset cursor on route change (resetKey = current pathname)
    useEffect(() => {
        if (resetKey === undefined) return;
        const cursorEl = cursorRef.current;
        const state = cursorStateRef.current;
        if (!cursorEl || !state) return;

        // Check if any magnetic element is still under the cursor
        const stillHovered = document.querySelector(`[${hoverAttribute}]:hover`);
        if (stillHovered) {
            // Mouse is still over a persistent element (e.g. navbar) — keep wrap
            return;
        }
        // No magnetic element hovered → reset cursor to default
        const shapeBorderRadius = shape === 'circle' ? `${cursorSize / 2}px` : shape === 'square' ? '0' : '8px';
        state.hover.isHovered = false;
        state.isDetaching = false;
        gsap.killTweensOf(cursorEl);
        gsap.to(cursorEl, {
            width: cursorSize, height: cursorSize,
            borderRadius: shapeBorderRadius,
            backgroundColor: 'rgba(255, 255, 255, 0.18)',
            scaleX: 1, scaleY: 1, rotate: 0,
            duration: 0.2, ease: 'power3.out', overwrite: 'auto' as gsap.TweenVars['overwrite'],
        });
    }, [resetKey, hoverAttribute, shape, cursorSize]);

    useEffect(() => {
        if (disableOnTouch && isTouchDevice) return;
        const cursorEl = cursorRef.current;
        if (!cursorEl) return;

        gsap.set(cursorEl, { xPercent: -50, yPercent: -50, opacity: 0, mixBlendMode: 'normal' });

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const detachDuration = prefersReducedMotion ? 0.1 : 0.35;

        if (!cursorStateRef.current) {
            cursorStateRef.current = {
                el: cursorEl,
                pos: {
                    current: vec2(-100, -100),
                    target: vec2(-100, -100),
                    previous: vec2(-100, -100),
                },
                hover: { isHovered: false, hoveredEl: null as HTMLElement | null },
                isDetaching: false,
            };
        }

        const update = () => {
            const state = cursorStateRef.current;
            if (!state || state.hover.isHovered) return;

            const { speedMultiplier, maxScaleX, maxScaleY, lerpAmount } = configRef.current;
            const effectiveLerp = prefersReducedMotion ? 1 : lerpAmount;

            state.pos.current.lerp(state.pos.target, effectiveLerp);
            const delta = state.pos.current.clone().sub(state.pos.previous);
            state.pos.previous.copy(state.pos.current);

            if (state.isDetaching) {
                gsap.set(state.el, { x: state.pos.current.x, y: state.pos.current.y, scaleX: 1, scaleY: 1, rotate: 0, overwrite: 'auto' });
            } else {
                const speed = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * speedMultiplier;
                gsap.set(state.el, {
                    x: state.pos.current.x,
                    y: state.pos.current.y,
                    rotate: Math.atan2(delta.y, delta.x) * (180 / Math.PI),
                    scaleX: 1 + Math.min(speed, maxScaleX),
                    scaleY: 1 - Math.min(speed, maxScaleY),
                    overwrite: 'auto' as gsap.TweenVars['overwrite'],
                });
            }
        };

        const initializePosition = (event: MouseEvent) => {
            const state = cursorStateRef.current;
            if (!state) return;
            const { x, y } = { x: event.clientX, y: event.clientY };
            state.pos.current.x = x; state.pos.current.y = y;
            state.pos.target.x = x; state.pos.target.y = y;
            state.pos.previous.x = x; state.pos.previous.y = y;
            gsap.set(cursorEl, { x, y, opacity: 1 });
        };

        const onMouseMove = (event: PointerEvent) => {
            const state = cursorStateRef.current;
            if (!state) return;
            state.pos.target.x = event.clientX;
            state.pos.target.y = event.clientY;
            const isInViewport = event.clientX >= 0 && event.clientX <= window.innerWidth &&
                event.clientY >= 0 && event.clientY <= window.innerHeight;
            gsap.to(cursorEl, { opacity: isInViewport ? 1 : 0, duration: 0.2, overwrite: 'auto' });
        };

        const handleMouseLeave = () => gsap.to(cursorEl, { opacity: 0, duration: 0.3 });
        const handleMouseEnter = () => gsap.to(cursorEl, { opacity: 1, duration: 0.3 });

        gsap.ticker.add(update);
        window.addEventListener('pointermove', onMouseMove);
        window.addEventListener('pointermove', initializePosition, { once: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        const cleanupFunctions: (() => void)[] = [];
        const attachedElements = new WeakSet<HTMLElement>();

        const attachMagneticHandlers = (el: HTMLElement) => {
            if (attachedElements.has(el)) return;
            attachedElements.add(el);

            const xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
            const yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

            const handlePointerEnter = (event: PointerEvent) => {
                if (event.pointerType === 'touch') return;
                const state = cursorStateRef.current;
                if (!state) return;
                const { magneticFactor: defaultMagneticFactor, hoverPadding: defaultHoverPadding } = configRef.current;
                const activeMagneticFactor = el.hasAttribute('data-magnetic-factor') ? parseFloat(el.getAttribute('data-magnetic-factor')!) : defaultMagneticFactor;
                const activeHoverPadding = el.hasAttribute('data-magnetic-padding') ? parseFloat(el.getAttribute('data-magnetic-padding')!) : defaultHoverPadding;

                state.hover.isHovered = true;
                state.hover.hoveredEl = el;
                state.isDetaching = false;
                const bounds = el.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(el);

                const targetRadius = computedStyle.borderRadius === '0px' && shape !== 'square' ? '8px' : computedStyle.borderRadius;

                const dynamicPadding = activeHoverPadding * (1 + activeMagneticFactor);
                const centerX = bounds.left + bounds.width / 2;
                const centerY = bounds.top + bounds.height / 2;
                gsap.killTweensOf(cursorEl);
                gsap.to(cursorEl, {
                    x: centerX, y: centerY,
                    width: bounds.width + dynamicPadding * 2,
                    height: bounds.height + dynamicPadding * 2,
                    borderRadius: targetRadius,
                    backgroundColor: 'transparent',
                    scaleX: 1, scaleY: 1, rotate: 0,
                    duration: 0.3, ease: 'power3.out', overwrite: 'auto' as gsap.TweenVars['overwrite'],
                });
            };

            const handlePointerLeave = (event: PointerEvent) => {
                if (event.pointerType === 'touch') return;
                const state = cursorStateRef.current;
                if (!state) return;
                const currentX = gsap.getProperty(cursorEl, 'x') as number;
                const currentY = gsap.getProperty(cursorEl, 'y') as number;
                state.pos.current.x = currentX; state.pos.current.y = currentY;
                state.pos.previous.x = currentX; state.pos.previous.y = currentY;
                state.hover.isHovered = false;
                if (state.hover.hoveredEl === el) state.hover.hoveredEl = null;
                state.isDetaching = true;
                const { cursorSize } = configRef.current;
                const shapeBorderRadius = shape === 'circle' ? `${cursorSize / 2}px` : shape === 'square' ? '0' : '8px';
                gsap.killTweensOf(cursorEl);
                gsap.to(cursorEl, {
                    width: cursorSize, height: cursorSize,
                    borderRadius: shapeBorderRadius,
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    scaleX: 1, scaleY: 1,
                    duration: detachDuration, ease: 'power3.out', overwrite: 'auto' as gsap.TweenVars['overwrite'],
                    onComplete: () => { state.isDetaching = false; },
                });
            };

            let rafId: number | null = null;
            const handlePointerMove = (event: PointerEvent) => {
                if (event.pointerType === 'touch') return;
                if (rafId) return;
                rafId = requestAnimationFrame(() => {
                    const { clientX, clientY } = event;
                    const { height, width, left, top } = el.getBoundingClientRect();
                    const { magneticFactor: defaultMagneticFactor } = configRef.current;
                    const activeMagneticFactor = el.hasAttribute('data-magnetic-factor') ? parseFloat(el.getAttribute('data-magnetic-factor')!) : defaultMagneticFactor;
                    xTo((clientX - (left + width / 2)) * activeMagneticFactor);
                    yTo((clientY - (top + height / 2)) * activeMagneticFactor);
                    rafId = null;
                });
            };

            const handlePointerOut = (event: PointerEvent) => {
                if (event.pointerType === 'touch') return;
                xTo(0); yTo(0);
            };

            el.addEventListener('pointerenter', handlePointerEnter);
            el.addEventListener('pointerleave', handlePointerLeave);
            el.addEventListener('pointermove', handlePointerMove);
            el.addEventListener('pointerout', handlePointerOut);

            cleanupFunctions.push(() => {
                el.removeEventListener('pointerenter', handlePointerEnter);
                el.removeEventListener('pointerleave', handlePointerLeave);
                el.removeEventListener('pointermove', handlePointerMove);
                el.removeEventListener('pointerout', handlePointerOut);
            });
        };

        // Attach to all existing [data-magnetic] elements in the DOM right now
        document.querySelectorAll<HTMLElement>(`[${hoverAttribute}]`).forEach(attachMagneticHandlers);

        // Watch for new [data-magnetic] elements added by React Router page renders
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.hasAttribute(hoverAttribute)) {
                            attachMagneticHandlers(node);
                        }
                        node.querySelectorAll<HTMLElement>(`[${hoverAttribute}]`).forEach(attachMagneticHandlers);
                    }
                });

                // Handle elements that are removed while being hovered
                mutation.removedNodes.forEach((node) => {
                    const state = cursorStateRef.current;
                    if (!state || !state.hover.isHovered || !state.hover.hoveredEl) return;

                    if (node === state.hover.hoveredEl || (node instanceof HTMLElement && node.contains(state.hover.hoveredEl))) {
                        state.hover.isHovered = false;
                        state.hover.hoveredEl = null;
                        state.isDetaching = true;

                        const { cursorSize } = configRef.current;
                        const shapeBorderRadius = shape === 'circle' ? `${cursorSize / 2}px` : shape === 'square' ? '0' : '8px';

                        gsap.killTweensOf(cursorEl);
                        gsap.to(cursorEl, {
                            width: cursorSize, height: cursorSize,
                            borderRadius: shapeBorderRadius,
                            backgroundColor: 'rgba(255, 255, 255, 0.18)',
                            scaleX: 1, scaleY: 1,
                            duration: 0.35, ease: 'power3.out', overwrite: 'auto' as gsap.TweenVars['overwrite'],
                            onComplete: () => { state.isDetaching = false; },
                        });
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            gsap.ticker.remove(update);
            window.removeEventListener('pointermove', onMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            cleanupFunctions.forEach((fn) => fn());
        };
    }, [disableOnTouch, isTouchDevice, hoverPadding, hoverAttribute, cursorColor, shape]);

    if (disableOnTouch && isTouchDevice) return <>{children}</>;

    const styles: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'transform, width, height, border-radius',
        mixBlendMode: 'normal',
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        border: '2.5px solid rgba(255, 255, 255, 0.11)',
        width: cursorSize,
        height: cursorSize,
        borderRadius: shape === 'circle' ? `${cursorSize / 2}px` : shape === 'square' ? '0' : '8px',
        backdropFilter: 'blur(0.75px)',
        WebkitBackdropFilter: 'blur(0.75px)',
        display: (isTouchDevice && disableOnTouch) ? 'none' : 'block',
    };

    return (
        <>
            <div ref={cursorRef} className={`magnetic-cursor ${cursorClassName}`} style={styles} />
            {children}
        </>
    );
};
