import React from 'react';
import PropTypes from 'prop-types';

import './PostListItem.css';

const PostListItem = ({ post }) => (
    <div className="post">
        <h2 className="post-title">
            {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
    </div>
);

PostListItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostListItem;
