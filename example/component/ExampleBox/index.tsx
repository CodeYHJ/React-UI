import React, { HtmlHTMLAttributes, useState, ReactNode } from 'react';
import { classPre } from "../../util/index";
import './index.less'
import Transition from '../Transition';
import Icon from '@lib/Icon/localIcon';
import Highlight, { defaultProps } from "prism-react-renderer";
export interface ExampleBoxProps extends HtmlHTMLAttributes<HTMLDivElement> {
    title: string,
    description: string,
    code?: { default: any }
}

const c = classPre('exampleBox')
const ExampleBox: React.SFC<ExampleBoxProps> = (props) => {
    const { title, description, className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    const [open, seOpen] = useState(false)
    const openCode = () => {
        seOpen(!open)
    }
    const renderTransition = () => {
        if (props.code) {
            return <Transition visible={open} enter={{ maxHeight: "100vh" }} leave={{ maxHeight: '0px' }} time={1}>
                <Highlight {...defaultProps} code={props.code.default} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </Transition>
        }
        return null
    }
    return (
        <div className={cls} {...others}>
            <section className={c('demo')}>
                {props.children}
            </section>
            <section className={c("meta")}>
                <div className={c('title')}>{title}</div>
                <div className={c('description')}>{description}</div>
                {props.code && <Icon className={c("codeIcon")} name="code" onClick={openCode} />}
            </section>
            {renderTransition()}
        </div>
    );
}

export default ExampleBox;