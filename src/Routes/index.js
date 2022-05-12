import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import { Details } from "Pages/Details";
import { Home } from "Pages/Home";

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
