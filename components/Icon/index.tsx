

  import I from './localIcon'

  import c from './createIcon'

  import *  as IconList from './svgIcon'
  
  type IconType = typeof I & { createIcon: typeof c } & typeof IconList
  
  const Icon = I as IconType
  
  Icon.createIcon = c

  Object.keys(IconList).reduce((pre: any, next: any) => {
    Icon[next] = IconList[next]
    return Icon;
  }, Icon)
  
  export default Icon

  