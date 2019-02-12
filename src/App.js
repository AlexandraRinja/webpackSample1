import React from "react";
import ReactDOM from "react-dom";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const App = () => {
  return (
    <div>
      <DefaultButton>office ui button</DefaultButton>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));