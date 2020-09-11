import { ModalApi, errorFn, successFn, infoFn, warnFn } from './Modal';

import D from './Dialog';

type Modal = ModalApi & typeof D;

const Modal = D as Modal;

Modal.error = errorFn;

Modal.warn = warnFn;

Modal.success = successFn;

Modal.info = infoFn;

export default Modal;
