import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from "../../util/index";
import './index.less'
export interface ExampleBoxProps extends HtmlHTMLAttributes<HTMLDivElement> {
    title: string,
    description: string,

}
const c = classPre('exampleBox')
const ExampleBox: React.SFC<ExampleBoxProps> = (props) => {
    const { title, description, className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    return (
        <div className={cls} {...others}>
            <section className={c('demo')}>
                {props.children}
            </section>
            <section className={c("meta")}>
                <div className={c('title')}>{title}</div>
                <div className={c('description')}>{description}</div>
            </section>
        </div>
    );
}

export default ExampleBox;