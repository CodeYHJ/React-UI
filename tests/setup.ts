import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM, DOMWindow } from "jsdom";
const { window } = new JSDOM("");
const { document } = new JSDOM(``).window;

(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = (callback: FrameRequestCallback) => {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id as number;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();
// @ts-igonre
global.document = document;
// @ts-ignore
global.window = window;

enzyme.configure({ adapter: new Adapter() });
