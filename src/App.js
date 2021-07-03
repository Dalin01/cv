import { render } from "react-dom";
import Details from "./Details";
import Content from "./Content";

const App = () => {
  return (
    <div>
      <div className="w3-row-padding">
        <Details/>
        <Content/>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));