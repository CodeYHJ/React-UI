import I from './localIcon';

import c from './createIcon';

export * from './svgIcon';

type IconType = typeof I & { createIcon: typeof c };

const Icon = I as IconType;

Icon.createIcon = c;

export default Icon;
