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
                data.push(<ArticleTile key={i} 
                                       title={articleList.coffeeArticles[i]["title"]}
                                       image={articleList.coffeeArticles[i]["image"]}
                                       author={articleList.coffeeArticles[i]["author"]}
                                       summary={articleList.coffeeArticles[i]["summary"]} 
                                       date={articleList.coffeeArticles[i]["date"]}
                                       link={"/blog/coffee/" + i} 
                            />)
            }

        } else if (this.state.handle === "tech") {
            content_header = "Technology";
            for (let i = 0; i < articleList.techArticles.length; i++) {
                data.push(<ArticleTile key={i} 
                                       title={articleList.techArticles[i]["title"]}
                                       image={articleList.techArticles[i]["image"]}
                                       author={articleList.techArticles[i]["author"]}
                                       summary={articleList.techArticles[i]["summary"]}
                                       date={articleList.techArticles[i]["date"]}
                                       link={"/blog/coffee/" + i} 
                            />)
            }

        } else if (this.state.handle === "outdoors") {
            content_header = "Outdoors";
            for (let i = 0; i < articleList.outdoorArticles.length; i++) {
                data.push(<ArticleTile key={i} 
                                       title={articleList.outdoorArticles[i]["title"]}
                                       image={articleList.outdoorArticles[i]["image"]}
                                       author={articleList.outdoorArticles[i]["author"]}
                                       summary={articleList.outdoorArticles[i]["summary"]}
                                       date={articleList.outdoorArticles[i]["date"]}
                                       link={"/blog/coffee/" + i}
                        />)
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
                <div className="tile-group">{data}</div>
            </div>
        )
    }
}
export default BlogHandle;