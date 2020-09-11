import React from 'react';

import ReactDOM, { unmountComponentAtNode } from 'react-dom';

import { classPre } from '@com/utils';

import { Button } from '@com/index';

import { MainIcon, DangerIcon, SuccessIcon, WarnIcon } from '@com/Icon';

import Dialog from './Dialog';

import './style/Modal.less';

interface PropsConfigProps {
  visible: boolean;
  mainText: string;
  okText?: string;
  type: ModalType;
  className?: string;
}

interface ModalProps {
  mainText: string;
  okText?: string;
}

const c = classPre('modal');

type ModalType = 'info' | 'danger' | 'warn' | 'success';

const createIcon = (type: ModalType) => {
  if (type === 'danger') {
    return <DangerIcon className={c('icon')} />;
  }

  if (type === 'info') {
    return <MainIcon className={c('icon')} />;
  }

  if (type === 'success') {
    return <SuccessIcon className={c('icon')} />;
  }

  if (type === 'warn') {
    return <WarnIcon className={c('icon')} />;
  }

  return <MainIcon className={c('icon')} />;
};

const ModalBase = (propsConfig: PropsConfigProps) => {
  const div = document.createElement('div');

  if (propsConfig.className) {
    div.setAttribute('class', propsConfig.className);
  }

  document.body.appendChild(div);

  const currentConfig = { ...propsConfig, visible: true };

  const render = (config: PropsConfigProps) => {
    ReactDOM.render(
      <Dialog visible={config.visible} footer={null} headerText="">
        <header className={c('header')}>
          {createIcon(currentConfig.type)}
        </header>
        <main className={c('mainContent')}>
          {config.mainText ? config.mainText : ''}
        </main>
        <footer className={c('footer')}>
          <Button type="primary" onClick={close}>
            {config.okText ? config.okText : 'OK'}
          </Button>
        </footer>
      </Dialog>,
      div
    );
  };

  const close = () => {
    render({ ...currentConfig, visible: false });

    const timer = setTimeout(() => {
      destroy();

      clearTimeout(timer);
    }, 600);
  };

  const destroy = () => {
    const umn = unmountComponentAtNode(div);

    if (umn && div) {
      div.remove();
    }
  };

  render(currentConfig);

  return {
    close,
  };
};

export const errorFn = (props: ModalProps) => {
  return ModalBase({
    ...props,
    visible: true,
    type: 'danger',
    className: c('danger'),
  });
};

export const warnFn = (props: ModalProps) => {
  return ModalBase({
    ...props,
    visible: true,
    type: 'warn',
    className: c('warn'),
  });
};

export const successFn = (props: ModalProps) => {
  return ModalBase({
    ...props,
    visible: true,
    type: 'success',
    className: c('success'),
  });
};

export const infoFn = (props: ModalProps) => {
  return ModalBase({
    ...props,
    visible: true,
    type: 'info',
    className: c('info'),
  });
};

type ModalFun = (
  // eslint-disable-next-line no-unused-vars
  props: ModalProps
) => {
  close: () => void;
};

export type ModalApi = {
  error: ModalFun;
  warn: ModalFun;
  success: ModalFun;
  info: ModalFun;
};
