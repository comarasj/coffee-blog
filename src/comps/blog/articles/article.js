import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./article.css"

class Article extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                "title": "Sample",
                "date": "11/30/2018",
                "body": "sample here"
            },
            expanded: false
        }
    }

    render() {
        console.log(this.props.article);
        return (
        <div>Hello</div>
        )
    }
}
export default Article;