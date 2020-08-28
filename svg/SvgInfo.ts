export interface SvgInfo {
    name: string; // kebab-case-style
    attributes: {
        class: string,
        viewBox: string
    };
    path: string
}
