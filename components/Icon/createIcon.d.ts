export interface CreateIconProps {
    scriptUrl: string;
}
declare const createIcon: (scriptUrl: string) => import("react").SFC<import("./localIcon").IconProps>;
export default createIcon;
