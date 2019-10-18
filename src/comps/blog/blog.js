import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import Topics from './topics/topics';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="topic-grid">
                    <div className="split-left">
                        <Link to="/blog/coffee" className="topic1 link-box">
                            <Topics title="Coffee" />
                        </Link>
                        <Link to="/blog/tech" className="topic2 link-box">
                            <Topics title="Tech" />
                        </Link>
                    </div>
                    <Link to="/blog/outdoors" className="topic3 link-box">
                        <Topics title="Outdoors" />
                    </Link>
                </div>
            </div >
        )
    }
}
export default Blog;