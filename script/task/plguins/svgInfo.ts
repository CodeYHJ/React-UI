export interface SvgInfo {
  name: string; // kebab-case-style
  attributes: {
    viewBox: string;
    key: string;
  };
  path: string[];
}
