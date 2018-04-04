import React, { Component } from 'react';

import './PostList.css';

import PostListItem from '../components/PostListItem/PostListItem';
import MoreButton from '../components/MoreButton/MoreButton';
import SearchInput from '../components/SearchInput/SearchInput';
import NotFound from '../components/NotFound/NotFound';
import Loading from '../components/Loading/Loading';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            count: 10,
            searchField: ''
        }

        this.FETCH = {
            URL: 'https://jsonplaceholder.typicode.com/posts'
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

    componentDidMount() {
        fetch(this.FETCH.URL)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.setState({ posts: json, loading: false })
                }, 2000)
            })

        if(this.state.posts.length !== 0) {
            this.setState({ loading: false })
        }
    }

    render() {
        const count = this.state.count;
        const posts = this.state.posts.slice(0, count);
        const filteredPosts = posts.filter(post => {
            return post.title.includes(this.state.searchField)
        })

        return(
            <div className="post-container">
                <h1 className="title">Posts ({filteredPosts.length})</h1>
                <SearchInput handleSearch={this.handleSearch} />

                {this.state.loading === false ? (
                    filteredPosts.length !== 0 ?
                        filteredPosts.map(post => {
                            return <PostListItem key={post.id} post={post} />
                        })
                        : (
                            <NotFound />
                        )
                ) : (
                    <Loading />
                )}


                {this.state.posts.length - count > 0 &&
                    <MoreButton increaseCount={this.increaseCount} />
                }
            </div>
        )
    }
}

export default PostList;
