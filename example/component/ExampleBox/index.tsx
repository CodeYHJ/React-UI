import React from 'react';
import { classPre } from "../../util/index";
import './index.less'
export interface ExampleBoxProps {
    title: string,
    description:string
}
const c = classPre('exampleBox')
const ExampleBox: React.SFC<ExampleBoxProps> = (props) => {
    return (
        <div className={c()}>
            <section className={c('demo')}>
                {props.children}
            </section>
            <section className={c("meta")}>
                <div className={c('title')}>{props.title}</div>
                <div className={c('description')}>{props.description}</div>
            </section>
        </div>
    );
}

export default ExampleBox;