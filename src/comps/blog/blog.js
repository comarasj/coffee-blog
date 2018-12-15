import React, { Component } from 'react';
import "./blog.css";

import Article from "./articles/article";


class Blog extends Component {
    constructor() {
        super();
        this.state = {
            article_count: 6
        };
    }

    render() {
        var article_list = [];
        for (var i = 0; i < this.state.article_count; i++) {
            article_list.push(<Article article_number={i} article_count={this.state.article_count}/>)
        }

        return (
            <div className="blog">
                {article_list}
            </div>
        )
    }
}

export default Blog;