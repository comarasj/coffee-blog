import React, { Component } from 'react';
import './articleHandle.css'
import Article from '../comps/blog/articles/article';
import CoffeeArticleList from '../static/coffeearticlelist';
import TechArticleList from '../static/techarticlelist';
import OutdoorArticleList from '../static/outdoorarticlelist';



class ArticleHandle extends Component {

    state = {
        handle: null
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
        var content_header, article;
        if (this.state.id && this.state.handle) {
            if (this.state.handle === 'coffee' && this.state.id < CoffeeArticleList.length) {
                content_header = 'Coffee';
                article = CoffeeArticleList[this.state.id];
            } else if (this.state.handle === 'tech' && this.state.id < TechArticleList.length) {
                content_header = 'Technology';
                article = TechArticleList[this.state.id];
            } else if (this.state.handle === 'outdoors' && this.state.id < OutdoorArticleList.length) {
                content_header = 'Outdoors';
                article = OutdoorArticleList[this.state.id];
            } else {
                //not found
                content_header = <h1>404 Not Found</h1>
            }
        }
        return (
            <div>
                {content_header}
                <Article article={article} />
            </div>
        )
    }
}
export default ArticleHandle;