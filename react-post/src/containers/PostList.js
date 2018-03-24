import React, { Component } from 'react';

import './PostList.css';

import PostListItem from '../components/PostListItem/PostListItem';
import MoreButton from '../components/MoreButton/MoreButton';

import data from '../data';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10,
        }

        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
        this.setState({ count: this.state.count + 10 })
    }

    render() {
        const count = this.state.count;
        const posts = data.slice(0, count);

        return(
            <div className="post-container">
                <h1 className="title">Posts ({count})</h1>

                {posts.map(post => (
                    <PostListItem key={post.id} post={post} />
                ))}

                {data.length - count > 0 ?
                    <MoreButton increaseCount={this.increaseCount} />
                    : null
                }
            </div>
        )
    }
}

export default PostList;
