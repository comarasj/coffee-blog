import React, { Component } from 'react';
import "./topics.css";

class Topics extends Component {
    render() {
        return(
            <div className="topics-tile" >
                <h1 className="topics-tile-title">{this.props.title}</h1>
            </div>
        )
    }
}
export default Topics;