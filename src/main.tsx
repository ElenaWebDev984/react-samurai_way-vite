import {createRoot} from "react-dom/client";
import "./index.css" // side-effect: CSS подключается сборщиком
// import {App} from "./App.tsx";
import * as appModule from "./App.tsx";

const rootEl = document.getElementById("root")
const reactRoot = createRoot(rootEl!) // 💡 '!' - говорит TypeScript: "этот элемент точно существует".
reactRoot.render(<appModule.App />) // React "оживляет" HTML и вставляет разметку в root.

console.log(appModule.name)