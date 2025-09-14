import {createRoot} from "react-dom/client";
import App from "./App.tsx";

const rootEl = document.getElementById("root")
const reactRoot = createRoot(rootEl!) // 💡 '!' - говорит TypeScript: "этот элемент точно существует".
reactRoot.render(<App />) // React "оживляет" HTML и вставляет разметку в root.