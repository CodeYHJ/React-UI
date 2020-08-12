import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import { classPre } from "../../util/index";
import './index.less'
export interface TransitionProps {
    visible: boolean,
    enter: CSSProperties,
    leave: CSSProperties,
    time?: number
}
const c = classPre('transition')
const Transition: React.SFC<TransitionProps> = (props) => {
    const childrenRef = useRef<HTMLDivElement>(null)
    const preTimeRef = useRef<number>()
    const requestRef = useRef<number>()
    const setStyle = (ref: React.RefObject<HTMLDivElement>, style: CSSProperties, time = .5) => {
        const div = ref.current;
        if (div != null) {
            const defaultStyle: CSSProperties = {
                transitionProperty: "all",
                transitionDuration: `${time}s`,
                transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                willChange: 'all',
                overflow: 'hidden',
            }
            Object.assign(div.style, defaultStyle, style)
        }
    }
    const animation = (time: number) => {
        if (props.visible) {
            setStyle(childrenRef, props.enter, 1)
        }
        else {
            setStyle(childrenRef, props.leave, .4)
        }
        preTimeRef.current = time
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animation)
        return () => cancelAnimationFrame(requestRef.current as number)
    }, [props.visible])

    return (
        <div className={c()}>
            <div ref={childrenRef}>
                {props.children}
            </div>
        </div>
    );
}

export default Transition;