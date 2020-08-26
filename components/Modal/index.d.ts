import { ModalApi } from './Modal';
import D from './Dialog';
declare type Modal = ModalApi & typeof D;
declare const Modal: Modal;
export default Modal;
