import React from 'react';
import { classPre } from "../../util/index"
import ExampleBox from '../../component/ExampleBox';
import ExampleApi from '../../component/ExampleApi';
import "./index.less";
import { Icon } from "@codeyhj/react-ui";

const { CancelIcon, ArrorDownIcon, ArrorUpIcon, ArrorLeftIcon, ArrorRightIcon } = Icon
const { createIcon } = Icon
export interface IconExampleProps {

}
const c = classPre('icon')
const IconExample: React.SFC<IconExampleProps> = () => {
    const handleData = [
        { name: 'name', dsc: 'SVG文件名', type: ['string'], value: '--' },
        { name: 'className', dsc: '容器className', type: ['string'], value: '--' },
        { name: 'style', dsc: '指定样式', type: ['CSSProperties'], value: '--' },
    ]
    const ScriptIcon = createIcon('//at.alicdn.com/t/font_1186479_31cw72ggwdn.js')
    return (
        <div className={c()}>
            <section>
                <h1 className={c('title')}>Icon</h1>
                <p className={c('p')}>SVG图形</p>
            </section>
            <section>
                <h2 className={c('title')}>代码示例</h2>
                <ExampleBox title="Icon" description="UI库内置Icon展示，支持按需加载" code={require('!!raw-loader!./code/baseCode.tsx')}>
                    <CancelIcon className={c('icon-demo')} />
                    <ArrorDownIcon className={c('icon-demo')} />
                    <ArrorUpIcon className={c('icon-demo')} />
                    <ArrorLeftIcon className={c('icon-demo')} />
                    <ArrorRightIcon className={c('icon-demo')} />
                </ExampleBox>
                <ExampleBox title="Icon" description="请求后台数据而生成Icon展示" code={require('!!raw-loader!./code/scriptCode.tsx')}>
                    <ScriptIcon name="icon-jianceqi" className={c('icon-demo')} />
                    <ScriptIcon name="icon-jinggai" className={c('icon-demo')} />
                    <ScriptIcon name="icon-liujisuan" className={c('icon-demo')} />
                    <ScriptIcon name="icon-hanshu" className={c('icon-demo')} />
                    <ScriptIcon name="icon-lianjieliu" className={c('icon-demo')} />
                </ExampleBox>
            </section>
            <ExampleApi data={handleData}></ExampleApi>

        </div>
    );
}

export default IconExample;