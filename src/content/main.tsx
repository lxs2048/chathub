import { createRoot } from "react-dom/client";
import App from "./App";
const htmlRoot = document.querySelector("html");
const chatHubApp = document.createElement("openai-app");
const id = "openai-app";
chatHubApp.id = id;
if (htmlRoot) htmlRoot.prepend(chatHubApp);
const container = document.getElementById(id);
if(container){
    const root = createRoot(container);
    root.render(<App/>);
}
