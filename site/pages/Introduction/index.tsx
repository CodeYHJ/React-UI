import React from 'react';
import { classPre } from "../../util/index";
import './index.less'
export interface IntroductionProps {
    
}
const c = classPre('introduction')
 
const Introduction: React.SFC<IntroductionProps> = () => {
    return ( 
        <div className={c()}>
            <section className={c('section')}>
                <h1 className={c('h1')}>CodeUI-React</h1>
                <p className={c('p')}>CodeUI-React是一套PC端的React组件库</p>
            </section>
            <section className={c('section')}>
                <h1 className={c('h1')}>使用TypeScript</h1>
                <p className={c('p')}>TypeScript进行静态类型支持，完全使用 TypeScript 编写</p>
            </section>
            <section className={c('section')}>
                <h1 className={c('h1')}>没有其他依赖</h1>
                <p className={c('p')}>核心有React、ReactDom两个库。TypeScript进行静态类型支持，Jest进行相关测试支持，没有其他依赖</p>
            </section>
        </div>
     );
}
 
export default Introduction;