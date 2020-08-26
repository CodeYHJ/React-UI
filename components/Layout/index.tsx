import L from "./Layout";
import C from "./Content";
import A from "./Aside";
import F from "./Footer";
import H from "./Header";

type Layout = typeof L & { Content: typeof C, Aside: typeof C, Footer: typeof F, Header: typeof H }

const Layout = L as Layout

Layout.Content = C

Layout.Aside = A

Layout.Footer = F

Layout.Header = H

export default Layout