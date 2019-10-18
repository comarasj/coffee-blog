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

    render() {
        var content_header;
        var data = [];
        
        if (this.state.handle === "coffee") {
            content_header = <h1>Coffee Blog</h1>
            for (var i = 0; i < CoffeeArticleList.length; i++){
                data.push(<ArticleTile key={i} title={CoffeeArticleList[i]["title"]} link={"/blog/coffee/" + i} date={CoffeeArticleList[i]["date"]} />)
            }

        } else if (this.state.handle === "tech") {
            content_header = <h1>Technology</h1>
            for (var i = 0; i < TechArticleList.length; i++){
                data.push(<ArticleTile key={i} title={TechArticleList[i]["title"]} link={"/blog/tech/" + i} date={TechArticleList[i]["date"]} />)
            }

        } else if (this.state.handle === "outdoors") {
            content_header = <h1>Outdoors</h1>
            for (var i = 0; i < OutdoorArticleList.length; i++){
                data.push(<ArticleTile key={i} title={OutdoorArticleList[i]["title"]} link={"/blog/outdoors/" + i} date={OutdoorArticleList[i]["date"]} />)
            }

        } else {
            //not found
            content_header = <h1>404 Not Found</h1>
        }
        return (
            <div>
                {content_header}
                {data}
            </div>
        )
    }
}
export default BlogHandle;