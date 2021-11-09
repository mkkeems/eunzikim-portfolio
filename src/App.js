import { BrowserRouter as Router, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import GlobalStyle from "./assets/styles/globalStyle";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPageMain from "./pages/WorkPageMain";

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/projects" component={WorkPageMain} />
      </Router>
    </>
  );
};

export default App;
