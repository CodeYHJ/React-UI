import React, { useRef, useEffect, useState, CSSProperties, HtmlHTMLAttributes, cloneElement, Children, ReactElement, useLayoutEffect } from 'react';
import { classPre } from '@lib/utils';
import './index.less'
export interface TransitionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean,
    enter?: CSSProperties,
    leave?: CSSProperties,
    beforeEnter?: CSSProperties,
    afterLeave?: CSSProperties,
    time?: number
}
const c = classPre('transition')
const Transition: React.SFC<TransitionProps> = (props) => {
    const handleStatus = {
        beforeEnter: false,
        enter: false,
        leave: false,
        afterLeave: false
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
        handleStatus.beforeEnter = true
    }
    const handleEnter = () => {
        setStyle(childrenRef, props.enter as CSSProperties, props.time)
        handleStatus.enter = true
    }
    const handleLeave = () => {
        setStyle(childrenRef, props.leave as CSSProperties, props.time)
        handleStatus.leave = true
    }
    const handleAfterLeave = () => {
        setStyle(childrenRef, props.afterLeave as CSSProperties, props.time)
        handleStatus.afterLeave = true
    }
    const animation = (time: number) => {
        if (props.visible) {
            handleEnter()
        }
        else {
            console.log(props.visible, '33333')
            hide()
        }
        preTimeRef.current = time
    }

    const hide = () => {
        console.log('1111')
        const div = childrenRef.current;
        if (div !== null) {
            if (!handleStatus.leave) {
                handleLeave()
            }
            if (!handleStatus.afterLeave) {
                handleAfterLeave()
            }
        } else {
            requestRef.current = requestAnimationFrame(animation)
        }
    }
    useLayoutEffect(() => {
        if (props.visible) {
            handleBeforeEnter()
        }
    }, [props.visible])

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animation)
        if (props.visible === false) {
            console.log('00000')

        }
        return () => {
            console.log('1111')
            hide()
            cancelAnimationFrame(requestRef.current as number)
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