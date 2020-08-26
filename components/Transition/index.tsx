import React, { useRef, useState, CSSProperties, HtmlHTMLAttributes, cloneElement, ReactElement, useLayoutEffect, useEffect } from 'react';
import './style/index.less'
import { DefaultProps } from 'prism-react-renderer';
export interface TransitionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean,
    enter: CSSProperties,
    leave: CSSProperties,
    beforeEnter?: CSSProperties,
    time: number,
    opencb?: () => void,
    closecb?: () => void,
}


const Transition: React.SFC<TransitionProps> & { defaultProps: typeof defaultProps } = (props) => {
    const childrenRef = useRef<HTMLDivElement>(null)
    const updateRef = useRef<Boolean>(false)
    const timeRef = useRef<NodeJS.Timeout>()

    const [controllerVisible, setControllerVisible] = useState(false)
    const setStyle = (node: HTMLElement, style: CSSProperties, time: number) => {
        const defaultStyle:CSSProperties = {
            transitionProperty: "all",
            transitionDuration: `${time}s`,
            transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            willChange: 'all',
            overflow: 'hidden',
        }
        const megerStyle = Object.assign(defaultStyle, style)
        Object.keys(megerStyle).forEach(key => {
            node.style[key] = megerStyle[key]
        })

    }
    const handleEnter = (node: HTMLElement) => {
        node.getBoundingClientRect()
        setStyle(node, props.enter as CSSProperties, props.time)
    }
    const handleLeave = (node: HTMLElement) => {
        node.getBoundingClientRect()
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
        if (timeRef.current) return
        // 首次渲染
        if (!updateRef.current && props.visible) {
            // 记录是否首次予以判断是否更新
            updateRef.current = true
            if (childrenRef.current) {
                show(childrenRef.current)
                props.opencb && props.opencb()
            }
            setControllerVisible(true)
        } else if (updateRef.current && !props.visible) {
            if (childrenRef.current) {
                hide(childrenRef.current)
                updateRef.current = false
                timeRef.current = setTimeout(() => {
                    setControllerVisible(false)
                    props.closecb && props.closecb()
                    if (timeRef.current) {
                        clearTimeout(timeRef.current);
                        timeRef.current = undefined

                    }
                }, props.time * 1000);
            }
        }
    }, [props.visible])

    return (props.visible || controllerVisible) ? cloneElement(props.children as ReactElement, { style: props.beforeEnter, ref: childrenRef }) : null
}

const defaultProps = { time: .5 }

Transition.defaultProps = defaultProps



export default Transition;