
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/foo/foo.mjs
var foo_default = async (req, context) => {
  console.log(1, req);
  return new Response("Hello, world!");
};
var config = {
  path: ["/foo"]
};
export {
  config,
  foo_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZm9vL2Zvby5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIGNvbnRleHQpID0+IHtcbiAgY29uc29sZS5sb2coMSwgcmVxKTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkhlbGxvLCB3b3JsZCFcIik7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBwYXRoOiBbXCIvZm9vXCJdXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxJQUFPLGNBQVEsT0FBTyxLQUFLLFlBQVk7QUFDckMsVUFBUSxJQUFJLEdBQUcsR0FBRztBQUNsQixTQUFPLElBQUksU0FBUyxlQUFlO0FBQ3JDO0FBRU8sSUFBTSxTQUFTO0FBQUEsRUFDcEIsTUFBTSxDQUFDLE1BQU07QUFDZjsiLAogICJuYW1lcyI6IFtdCn0K
