import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home HomePage</h1>
                <Link to="/login">LOGIN</Link>
            </div>
        );
    }
}

module.exports = HomePage;
