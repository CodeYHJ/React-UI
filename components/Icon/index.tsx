

  import I from './localIcon'

  import c from './createIcon'
  
  type IconType = typeof I & { createIcon: typeof c }
  
  const Icon = I as IconType
  
  Icon.createIcon = c

  
  export { default as ArrorDownIcon } from "./svgIcon/ArrorDownIcon"

  

  export { default as ArrorLeftIcon } from "./svgIcon/ArrorLeftIcon"

  

  export { default as ArrorRightIcon } from "./svgIcon/ArrorRightIcon"

  

  export { default as ArrorUpIcon } from "./svgIcon/ArrorUpIcon"

  

  export { default as CancelIcon } from "./svgIcon/CancelIcon"

  

  export { default as CodeIcon } from "./svgIcon/CodeIcon"

  

  export { default as DangerIcon } from "./svgIcon/DangerIcon"

  

  export { default as LoadingIcon } from "./svgIcon/LoadingIcon"

  

  export { default as MainIcon } from "./svgIcon/MainIcon"

  

  export { default as PasswordIcon } from "./svgIcon/PasswordIcon"

  

  export { default as SuccessIcon } from "./svgIcon/SuccessIcon"

  

  export { default as SvgIcon } from "./svgIcon/SvgIcon"

  

  export { default as UserIcon } from "./svgIcon/UserIcon"

  

  export { default as WarnIcon } from "./svgIcon/WarnIcon"

  
  
  export default Icon

  