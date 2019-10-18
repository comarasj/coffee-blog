import React, { Component } from 'react';
import './blogHandle.css'
import CoffeeArticleList from '../static/coffeearticlelist';

class ArticleHandle extends Component {

    state = {
        handle: null
    }
    componentDidMount() {
        const { handle } = this.props.match.params;
        this.setState(() => ({ handle }))
    }

    render() {
        var content_header;
        if (this.state.handle === "coffee") {
            content_header = <h1>Coffee Blog</h1>

        } else if (this.state.handle === "tech") {
            content_header = <h1>Technology</h1>

        } else if (this.state.handle === "outdoors") {
            content_header = <h1>Outdoors</h1>

        } else {
            //not found
            content_header = <h1>404 Not Found</h1>
        }
        return (
            <div>
                {content_header}
            </div>
        )
    }
}
export default ArticleHandle;