import React, { Fragment, memo, ReactNode, MouseEventHandler } from 'react';
import { classPre } from '@com/utils';
import "./index.less"
import { Icon } from '@com/Icon';
import Button from '@com/Button';
export interface DailogProps {
    visble: boolean,
    onOk?: MouseEventHandler,
    onCancel?: MouseEventHandler,
    maskClosable?: boolean
}
const c = classPre('dailog')

const Dailog: React.SFC<DailogProps> = (props) => {
    const { visble, onCancel, onOk, maskClosable = false } = props
    const onClickClose: MouseEventHandler = (e) => {
        onCancel && onCancel(e)
    }
    const onClickMask: MouseEventHandler = (e) => {
        if (maskClosable) {
            onCancel && onCancel(e)
        }

    }
    const onClickOk: MouseEventHandler = (e) => {
        onOk && onOk(e)
    }
    return (
        visble ?
            <Fragment>
                <div className={c('mask')} onClick={onClickMask}></div>
                <div className={c()}>
                    <div className={c("close")} onClick={onClickClose} >
                        <Icon name="cancle" />
                    </div>
                    <header className={c('header')}>
                        tip
                    </header>
                    <main className={c('main')}>
                        {props.children}
                    </main>
                    <footer className={c('footer')}>
                        <Button type="default" onClick={onClickClose}>cancel</Button>
                        <Button type="main" onClick={onClickOk} className={c('ok')}>ok</Button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
}

export default Dailog;