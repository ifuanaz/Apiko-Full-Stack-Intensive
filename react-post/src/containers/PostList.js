import React, { Component } from 'react';

import './PostList.css';

import PostListItem from '../components/PostListItem/PostListItem';
import MoreButton from '../components/MoreButton/MoreButton';
import SearchInput from '../components/SearchInput/SearchInput';
import NotFound from '../components/NotFound/NotFound';

import data from '../data';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10,
            searchField: ''
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    increaseCount() {
        this.setState({ count: this.state.count + 10 })
    }

    handleSearch(event) {
        this.setState({searchField: event.target.value})
    }

    render() {
        const count = this.state.count;
        const posts = data.slice(0, count);
        const filteredPosts = posts.filter(post => {
            return post.title.includes(this.state.searchField)
        })

        return(
            <div className="post-container">
                <h1 className="title">Posts ({filteredPosts.length})</h1>
                <SearchInput handleSearch={this.handleSearch} />

                {filteredPosts.length !== 0 ?
                    filteredPosts.map(post => {
                        return <PostListItem key={post.id} post={post} />
                    })
                    : (
                        <NotFound />
                    )
                }

                {data.length - count > 0 &&
                    <MoreButton increaseCount={this.increaseCount} />
                }
            </div>
        )
    }
}

export default PostList;
