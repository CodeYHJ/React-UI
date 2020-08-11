import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { classPre } from "../../util/index";
export interface TransitionProps {
    children: ReactNode,
    visible: boolean,
    afterEnter: object,
    afterLeave: object,
    beforeEnter: object,
    beforeLeave: object,
}
const c = classPre('transition')
const Transition: React.SFC<TransitionProps> = (props) => {
    const { children } = props
    const childrenRef = useRef<HTMLDivElement>(null)
    const preTimeRef = useRef<number>()
    const requestRef = useRef<number>()
    const animation = (time: number) => {
        const div = childrenRef.current

        if (preTimeRef.current !== undefined) {
            // do something

        }
        preTimeRef.current = time
        requestRef.current = requestAnimationFrame(animation)
    }
    useEffect(() => {
        if (childrenRef.current != null) {
            const div = childrenRef.current
        }
        requestRef.current = requestAnimationFrame(animation)
        return cancelAnimationFrame(requestRef.current)
    }, [])
    return (
        <div className={c()}>
            <div ref={childrenRef}>
                {children}
            </div>
        </div>
    );
}

export default Transition;