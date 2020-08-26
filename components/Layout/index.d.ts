import L from "./Layout";
import C from "./Content";
import F from "./Footer";
import H from "./Header";
declare type Layout = typeof L & {
    Content: typeof C;
    Aside: typeof C;
    Footer: typeof F;
    Header: typeof H;
};
declare const Layout: Layout;
export default Layout;
