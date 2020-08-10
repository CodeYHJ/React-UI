import React from 'react';
import { classPre } from "../../util/index";
import './index.less'

export interface ColorProps {

}
const c = classPre('color')

const Color: React.SFC<ColorProps> = () => {
    return (
        <div className={c()}>
            <h1>Color 色彩搭配</h1>
            <section>
                <h2>主色</h2>
                <p className="content">使用蓝色作为主色调。</p>
            </section>
            <div className={c('mainColor')}>
                <div className={c('mainColor-box')}>
                    <span className='title'>Light</span>
                    <span className='hex'>#7ab8ff</span>
                </div>
                <div className={c('mainColor-box')}>
                    <span className='title'>Primary</span>
                    <span className='hex'>#268aff</span>
                </div>
                <div className={c('mainColor-box')}>
                    <span className='title'>Dark</span>
                    <span className='hex'>#005fcc</span>
                </div>
            </div>
            <section>
                <h2>功能色</h2>
                <p className="content">功能色展示明确的信息以及状态，比如成功、出错、失败、提醒、链接等。</p>
            </section>
            <div className={c('mainColorFun')}>
                <div className={c('mainColorFun-box')}>
                    <span className='title'>Success</span>
                    <span className='hex'>#37dc94</span>
                </div>
                <div className={c('mainColorFun-box')}>
                    <span className='title'>Warning</span>
                    <span className='hex'>#fd9a28</span>
                </div>
                <div className={c('mainColorFun-box')}>
                    <span className='title'>Error</span>
                    <span className='hex'>#fa5c65</span>
                </div>
            </div>
            <section>
                <h2>中性色</h2>
                <p className="content">中性色大量的应用在界面的文字部分。</p>
            </section>
            <div className={c('mainColorNeutral')}>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Title</span>
                    <span className='hex'>#37dc94</span>
                </div>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Content</span>
                    <span className='hex'>#fd9a28</span>
                </div>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Sub</span>
                    <span className='hex'>#fa5c65</span>
                </div>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Disabled</span>
                    <span className='hex'>#fa5c65</span>
                </div>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Border</span>
                    <span className='hex'>#fa5c65</span>
                </div>
                <div className={c('mainColorNeutral-box')}>
                    <span className='title'>Backgroud</span>
                    <span className='hex'>#fa5c65</span>
                </div>
            </div>
        </div>
    );
}

export default Color;