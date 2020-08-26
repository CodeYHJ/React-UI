import r from "./Row";
import c from "./Col";
declare type Row = typeof r & {
    Col: typeof c;
};
declare const Row: Row;
export default Row;
