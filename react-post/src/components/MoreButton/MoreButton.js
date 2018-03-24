import React from 'react';
import PropTypes from 'prop-types';

import './MoreButton.css';

const MoreButton = ({ increaseCount }) => (
    <button className="btn-more" onClick={increaseCount}>
        More
    </button>
);

MoreButton.propTypes = {
    increaseCount: PropTypes.func.isRequired
};

export default MoreButton;
