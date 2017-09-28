import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import rootReducer from "./redux/rootReducer.jsx";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="ui container">
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" exact component={LoginPage} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
