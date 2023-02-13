import ReactDOM from "react-dom";
import { HelloWord } from "./HelloWord";
const helloWordElement = <HelloWord />;
const root = document.querySelector("#root");

ReactDOM.render(helloWordElement, root);
