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

    componentDidMount() {
        this.gatherArticles();
    }

    gatherArticles() {
        var data;
        for (var i = 0; i < this.props.article_count; i++) {
            if (my_list_of_articles["articles"][i]["number"] === this.props.article_number) {
                data = my_list_of_articles["articles"][i]
            }
        }
        this.setState({ data: data })
    }

    render() {
        const title = this.state.data["title"];
        const date = this.state.data["date"];
        const body = this.state.data["body"];

        return (
            <div className="article-tile">
                <h1>{title}</h1>
                <p>{date}</p>
                <Link to={"/blog/Article/" + this.props.article_number}>Expand</Link>
            </div>
        )
    }
}
export default Article;