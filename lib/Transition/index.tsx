import React, { useRef, useState, CSSProperties, HtmlHTMLAttributes, cloneElement, ReactElement, useEffect } from 'react';
import './index.less'
export interface TransitionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean,
    enter: CSSProperties,
    leave: CSSProperties,
    beforeEnter?: CSSProperties,
    time: number
}

const Transition: React.SFC<TransitionProps> = (props) => {
    const childrenRef = useRef<HTMLDivElement>(null)
    const updateRef = useRef<Boolean>(false)
    const [controllerVisible, setControllerVisible] = useState(false)
    const setStyle = (node: HTMLElement, style: CSSProperties, time: number) => {
        const defaultStyle: CSSProperties = {
            transitionProperty: "all",
            transitionDuration: `${time}s`,
            transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            willChange: 'all',
            overflow: 'hidden',
        }
        Object.assign(node.style, defaultStyle, style)
    }
    const handleEnter = (node: HTMLElement) => {
        setStyle(node, props.enter as CSSProperties, props.time)
    }
    const handleLeave = (node: HTMLElement) => {
        setStyle(node, props.leave as CSSProperties, props.time)
    }

    const show = (node: HTMLElement) => {
        const isUpdate = updateRef.current
        if (isUpdate) {
            handleEnter(node)
        }

    }
    const hide = (node: HTMLElement) => {
        handleLeave(node)
    }
    useEffect(() => {
        // 首次渲染
        if (!updateRef.current && props.visible) {
            // 记录是否首次予以判断是否更新
            updateRef.current = true
            if (childrenRef.current) {
                show(childrenRef.current)
            }
            setControllerVisible(true)
        } else if (updateRef.current && !props.visible) {
            if (childrenRef.current) {
                hide(childrenRef.current)
                updateRef.current = false
                const timer = setTimeout(() => {
                    setControllerVisible(false)
                    clearTimeout(timer)
                }, props.time * 1000);
            }
        }
    }, [props.visible])


    return (props.visible || controllerVisible) ? cloneElement(props.children as ReactElement, { style: !controllerVisible ? props.beforeEnter : {}, ref: childrenRef }) : null
}
Transition.defaultProps = {
    time: .5
}
export default Transition;