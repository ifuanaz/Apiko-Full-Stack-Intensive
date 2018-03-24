import React, { Component } from 'react';

import PostList from './containers/PostList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostList />
            </div>
        );
    }
}

export default App;
