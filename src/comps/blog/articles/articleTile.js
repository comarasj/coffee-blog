import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleTile extends Component {

    state = {
        title: null,
        link: null,
        date: null,
        summary: null,
        image: null,
        author: null
    }

    componentDidMount() {
        const title = this.props.title;
        const link = this.props.link;
        const date = this.props.date;
        const summary = this.props.summary;
        const image = this.props.image;
        const author = this.props.author;
        this.setState(() => ({ title, link, date, summary, image, author }))
    }


    render() {
        return (
            <Link to={this.props.link} className="link-area">
                <div className="article-tile">
                    <div className="article-tile-title">{this.state.title}</div>
                    <div className="article-tile-author"></div> 
                    <div className="article-tile-summary">{this.state.summary}</div> 
                    <div className="article-tile-picture"></div> 
                </div>
            </Link>
        )
    }
}
export default ArticleTile;