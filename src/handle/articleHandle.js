import React, { Component } from 'react';
import './articleHandle.css'
import Article from '../comps/blog/articles/article';
import articleList from '../static/articleList';


class ArticleHandle extends Component {
    constructor() {
        super();
        this.state = {
            handle: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { handle } = this.props.match.params;
        this.setState(() => ({ id, handle }));
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps.match.params;
        const { handle } = nextProps.match.params;
        this.setState(() => ({ id, handle }));
    }

    render() {
        var content_header
        var article;
        var article_html
        if (this.state.id && this.state.handle) {
            if (this.state.handle === 'coffee' && this.state.id < articleList.coffeeArticles.length) {
                content_header = 'Coffee';
                article = articleList.coffeeArticles[this.state.id];
            } else if (this.state.handle === 'tech' && this.state.id < articleList.techArticles.length) {
                content_header = 'Technology';
                article = articleList.techArticles[this.state.id];
            } else if (this.state.handle === 'outdoors' && this.state.id < articleList.outdoorArticles.length) {
                content_header = 'Outdoors';
                article = articleList.outdoorArticles[this.state.id];
            } else {
                //not found
                content_header = <h1>404 Not Found</h1>
                article = null;
            }
            if( article ) {
                article_html = <Article title={article.title} date={article.date} body={article.body} />
            }
        }
        return (
            <div>
                {content_header}
                {article_html}
            </div>
        )
    }
}
export default ArticleHandle;