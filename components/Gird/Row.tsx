import React, {
  HtmlHTMLAttributes,
  ReactElement,
  cloneElement,
  CSSProperties,
} from 'react';

import { classPre } from '@com/utils';

import './style/Row.less';

import Col from './Col';

export interface RowProps extends HtmlHTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  gutter?: number | number[];
  align?: 'top' | 'middle' | 'bottom';
  children: ReactElement<typeof Col> | Array<ReactElement<typeof Col>>;
}

const c = classPre('row');

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { className, gutter, justify, align, children } = props;

  let rowStyleStr: CSSProperties = {};

  let colStyleStr: CSSProperties = {};

  let justifyCls;

  if (gutter) {
    if (typeof gutter === 'number') {
      const padLR = Math.floor(gutter / 2);

      rowStyleStr = { marginLeft: `-${padLR}px`, marginRight: `-${padLR}px` };

      colStyleStr = { paddingLeft: `${padLR}px`, paddingRight: `${padLR}px` };
    } else if (Array.isArray(gutter)) {
      const padLR = Math.floor(gutter[0] / 2);

      const padTB = Math.floor(gutter[1] / 2);

      rowStyleStr = { margin: `-${padTB}px -${padLR}px ${padTB}px` };

      colStyleStr = { padding: `${padTB}px ${padLR}px` };
    }
  }

  if (justify) {
    switch (justify) {
      case 'start':
        justifyCls = c('justify-start');

        break;

      case 'center':
        justifyCls = c('justify-center');

        break;

      case 'end':
        justifyCls = c('justify-end');

        break;

      case 'space-around':
        justifyCls = c('justify-space-around');

        break;

      case 'space-between':
        justifyCls = c('justify-space-between');

        break;

      default:
        justifyCls = '';
    }
  }

  if (align) {
    switch (align) {
      case 'top':
        justifyCls = c('align-top');

        break;

      case 'middle':
        justifyCls = c('align-middle');

        break;

      case 'bottom':
        justifyCls = c('align-bottom');

        break;

      default:
        justifyCls = '';
    }
  }

  const cls = [c(), justifyCls, align, className].filter(Boolean).join(' ');

  const renderLayout = () => {
    if (Array.isArray(children)) {
      const childrenMap: React.ReactNode[] = [];

      children.forEach((el, index) => {
        childrenMap.push(
          cloneElement(el as ReactElement, { key: index, style: colStyleStr })
        );
      });

      return childrenMap;
    }

    return cloneElement(children as ReactElement, { style: colStyleStr });
  };

  return (
    <div className={cls} style={rowStyleStr}>
      {renderLayout()}
    </div>
  );
};

export default Row;
