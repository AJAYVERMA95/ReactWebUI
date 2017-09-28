import React from "react";

class InlineError extends React.Component {
    render() {
        return <span style={{ color: "red" }}>{this.props.text}</span>;
    }
}

module.exports = InlineError;
