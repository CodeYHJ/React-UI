import React from 'react';
import { classPre } from "../../util/index"
import ExampleBox from '../../component/ExampleBox';
import Icon from '@lib/Icon/localIcon';
import ExampleApi from '../../component/ExampleApi';
import "./index.less";
import createIcon from '@lib/Icon/createIcon';
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
                <h1  className={c('title')}>Icon</h1>
                <p  className={c('p')}>SVG图形</p>
            </section>
            <section>
                <h2  className={c('title')}>代码示例</h2>
                <ExampleBox title="Icon" description="UI库Icon展示" code={require('!!raw-loader!./code/baseCode.tsx')}>
                    <Icon name="cancel" className={c('icon-demo')} />
                    <Icon name="arror-down" className={c('icon-demo')} />
                    <Icon name="arror-up" className={c('icon-demo')} />
                    <Icon name="arror-left" className={c('icon-demo')} />
                    <Icon name="arror-right" className={c('icon-demo')} />
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