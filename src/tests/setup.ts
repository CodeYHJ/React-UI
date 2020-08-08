import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";
const { window } = new JSDOM("");
const { document } = new JSDOM(``).window;
// @ts-igonre
global.document = document;
// @ts-ignore
global.window = window;

enzyme.configure({ adapter: new Adapter() });
