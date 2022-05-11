import { Routes as Router, Route } from "react-router-dom";
import { Details } from "../Details";
import { Home } from "../Home";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Router>
    </>
  );
};

export { Routes };
