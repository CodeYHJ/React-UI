import React, { useRef, useEffect, useState, CSSProperties, HtmlHTMLAttributes, cloneElement, Children, ReactElement, useLayoutEffect } from 'react';
import { classPre } from '../../util';
import './index.less'
export interface TransitionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean,
    enter?: CSSProperties,
    leave?: CSSProperties,
    beforeEnter?: CSSProperties,
    time?: number
}
const c = classPre('transition')
const Transition: React.SFC<TransitionProps> = (props) => {
    const handleStatus = {
        beforeEnter: false,
        enter: false,
        leave: false,
    }
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
    const handleBeforeEnter = () => {
        setStyle(childrenRef, props.beforeEnter as CSSProperties, props.time)
    }
    const handleEnter = () => {
        setStyle(childrenRef, props.enter as CSSProperties, props.time)
    }
    const handleLeave = () => {
        setStyle(childrenRef, props.leave as CSSProperties, props.time)
    }

    const animation = (time: number) => {
        if (!props.visible) {
            handleEnter()
        }
        preTimeRef.current = time
    }


    useLayoutEffect(() => {
        if (props.visible) {
            if (childrenRef.current !== null) {
                props.beforeEnter && handleBeforeEnter()

            }
        }

    }, [props.visible])

    useEffect(() => {
        if (childrenRef.current !== null) {
            requestRef.current = window.requestAnimationFrame(animation)
        }
        return () => {
            props.leave && handleLeave()
            window.cancelAnimationFrame(requestRef.current as number)
        }
    }, [props.visible])
    // return (
    //     <div className={c()}>

    //         <div ref={childrenRef}>
    //             {props.children}
    //         </div>
    //     </div>
    // );
    return cloneElement(props.children as ReactElement, { ref: childrenRef })


}

export default Transition;