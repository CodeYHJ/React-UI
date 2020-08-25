import path from "path";

export const pathFn = (url) => {
    const root = path.resolve(__dirname, "../");
    return path.resolve(root, url);
};