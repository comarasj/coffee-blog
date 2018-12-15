import React, { Component } from 'react';
//import my_list_of_articles from "./articlelist";
import "./article.css"

class Article extends Component{
    constructor() {
        super();
        this.state ={
            data: {
                "name": "Sample",
                "date": "11/30/2018",
                "body": "sample here"
            }
        }
    }

    componentDidMount(){
        //console.log(my_list_of_articles)
        this.gatherArticles();
        
    }

    gatherArticles(){
        var data;
        for (var i=0; i < this.props.article_count; i++){
            if (my_list_of_articles["articles"][i]["number"] === this.props.article_number){
                data = my_list_of_articles["articles"][i]
            }
        }
        //const data = my_list_of_articles["articles"];
        this.setState({data: data})
    }

    render(){
        const title = this.state.data["title"];
        const date = this.state.data["date"];
        return(
            <div className="article-tile">
                <h1>{title}</h1>
                <h2>{date}</h2>
            </div>
        )
    }
}


const my_list_of_articles = {
    "articles": [
        {
            "number": 0,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 1,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 2,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 3,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 4,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 5,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 6,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 7,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 8,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        },
        {
            "number": 9,
            "title": "Sample Article",
            "date": "12/14/2018",
            "body": "sample here"
        }
    ]
}

export default Article;