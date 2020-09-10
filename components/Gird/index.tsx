import r from './Row';

import c from './Col';

type RowType = typeof r & { Col: typeof c };

const Row = r as RowType;

Row.Col = c;

export default Row;
