import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleTile extends Component {

    state = {
        title: null,
        link: null,
        date: null
    }

    componentDidMount() {
        const title = this.props.title;
        const link = this.props.link;
        const date = this.props.date;
        this.setState(() => ({ title, link, date }))
    }


    render() {
        return (
            <div className="articleTile">
                <Link to={this.props.link} className="link-box">
                    {this.state.title}
                </Link>
            </div>
        )
    }
}
export default ArticleTile;