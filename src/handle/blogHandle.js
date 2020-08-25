import React, { Component } from 'react';
import './blogHandle.css'
import ArticleTile from '../comps/blog/articles/articleTile';
import articleList from '../static/articleList';

class BlogHandle extends Component {

    state = {
        handle: null
    }
    componentDidMount() {
        const { handle } = this.props.match.params;
        this.setState(() => ({ handle }))
    }

    componentWillReceiveProps(nextProps) {
        const { handle } = nextProps.match.params;
        this.setState(() => ({ handle }));
    }

    render() {
        var content_header;
        var data = [];

        if (this.state.handle === "coffee") {
            content_header = "Coffee Blog";
            for (let i = 0; i < articleList.coffeeArticles.length; i++) {
                data.push(<ArticleTile key={i} title={articleList.coffeeArticles[i]["title"]} link={"/blog/coffee/" + i} date={articleList.coffeeArticles[i]["date"]} />)
            }

        } else if (this.state.handle === "tech") {
            content_header = "Technology";
            for (let i = 0; i < articleList.techArticles.length; i++) {
                data.push(<ArticleTile key={i} title={articleList.techArticles[i]["title"]} link={"/blog/tech/" + i} date={articleList.techArticles[i]["date"]} />)
            }

        } else if (this.state.handle === "outdoors") {
            content_header = "Outdoors";
            for (let i = 0; i < articleList.outdoorArticles.length; i++) {
                data.push(<ArticleTile key={i} title={articleList.outdoorArticles[i]["title"]} link={"/blog/outdoors/" + i} date={articleList.outdoorArticles[i]["date"]} />)
            }

        } else {
            //not found
            content_header = '404 Not Found';
        }
        return (
            <div className="blogHome">
                <h1 className="blogHeader">
                    {content_header}
                </h1>
                <div>{data}</div>
            </div>
        )
    }
}
export default BlogHandle;