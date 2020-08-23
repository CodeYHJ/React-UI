import r from "./Row";
import c from "./Col";

type Row = typeof r & { Col: typeof c }

const Row = r as Row

Row.Col = c

export default Row;
