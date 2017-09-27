import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";



import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = "ui container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" exact component={LoginPage} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));