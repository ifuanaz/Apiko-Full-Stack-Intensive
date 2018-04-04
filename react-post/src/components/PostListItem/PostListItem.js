import React from 'react';
import PropTypes from 'prop-types';

import './PostListItem.css';

class PostListItem extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.title !== nextProps.post.title ||
            this.props.body !== nextProps.post.body
        );
    }

    render() {
        return(
            <div className="post">
                <h2 className="post-title">
                    {this.props.post.id} {this.props.post.title}
                </h2>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}

PostListItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostListItem;
