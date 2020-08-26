import I from './localIcon';
import c from './createIcon';
declare type IconType = typeof I & {
    createIcon: typeof c;
};
declare const Icon: IconType;
export default Icon;
