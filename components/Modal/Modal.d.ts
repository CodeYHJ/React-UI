import './style/Modal.less';
interface ModalProps {
    mainText: string;
    okText?: string;
}
export declare const errorFn: (props: ModalProps) => {
    close: () => void;
};
export declare const warnFn: (props: ModalProps) => {
    close: () => void;
};
export declare const successFn: (props: ModalProps) => {
    close: () => void;
};
export declare const infoFn: (props: ModalProps) => {
    close: () => void;
};
declare type ModalFun = (props: ModalProps) => {
    close: () => void;
};
export declare type ModalApi = {
    error: ModalFun;
    warn: ModalFun;
    success: ModalFun;
    info: ModalFun;
};
export {};
