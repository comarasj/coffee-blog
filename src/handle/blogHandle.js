import React, { Component } from 'react';
import './blogHandle.css'
import ArticleTile from '../comps/blog/articles/articleTile';
import CoffeeArticleList from '../static/coffeearticlelist';
import TechArticleList from '../static/techarticlelist';
import OutdoorArticleList from '../static/outdoorarticlelist';

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
            for (var i = 0; i < CoffeeArticleList.length; i++) {
                data.push(<ArticleTile key={i} title={CoffeeArticleList[i]["title"]} link={"/blog/coffee/" + i} date={CoffeeArticleList[i]["date"]} />)
            }

        } else if (this.state.handle === "tech") {
            content_header = "Technology";
            for (var i = 0; i < TechArticleList.length; i++) {
                data.push(<ArticleTile key={i} title={TechArticleList[i]["title"]} link={"/blog/tech/" + i} date={TechArticleList[i]["date"]} />)
            }

        } else if (this.state.handle === "outdoors") {
            content_header = "Outdoors";
            for (var i = 0; i < OutdoorArticleList.length; i++) {
                data.push(<ArticleTile key={i} title={OutdoorArticleList[i]["title"]} link={"/blog/outdoors/" + i} date={OutdoorArticleList[i]["date"]} />)
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