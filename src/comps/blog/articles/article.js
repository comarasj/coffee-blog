import React, { Component } from 'react';
import "./article.css"

class Article extends Component {
    state = {
        title: null,
        body: null,
        date: null
    };

    componentDidMount() {
        const title = this.props.title;
        const body = this.props.body;
        const date = this.props.date;
        this.setState(() => ({ title, body, date }));

    }

    render() {
        return (
            <div className="article-group">
                <h1>{this.state.title}</h1>
                <h2>{this.state.date}</h2>
                <h3>{this.state.body}</h3>
            </div>
        )
    }
}
export default Article;