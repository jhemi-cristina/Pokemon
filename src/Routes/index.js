import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import { Details } from "../Details";
import { Home } from "../Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Router>
    </BrowserRouter>
  );
};

export { Routes };
