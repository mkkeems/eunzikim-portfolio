import { BrowserRouter as Router, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import GlobalStyle from "./assets/styles/globalStyle";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      {/* <Reset /> */}
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  );
};

export default App;
