import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <div className="center">
    <div className="btn">
      <Link to="/history">
        <span>History</span>
      </Link>
    </div>
    <div className="btn">
      <Link to="/launches">
        <span>Launches</span>
      </Link>
    </div>
  </div>
);

export default HomePage;
