'use strict';

// Variables
const content = document.getElementById('content');
const comments = document.getElementById('comments');

// fetchData - render view
function renderView(url, output, template) {
    output.innerHTML = '';
    fetch(url)
        .then(response => {
            if(response.ok) return Promise.resolve(response.json());
            return Promise.reject('<p class="error404">Error 404 Page not found!</p>');
        })
        .then(data => {
            if(Array.isArray(data))
                output.innerHTML = data.map(item => template(item)).join('');
            else
                output.innerHTML = template(data);
        })
        .catch(err => output.innerHTML = err);
};

window.history.pushState({}, null, '/');
window.onload = () => renderView('https://jsonplaceholder.typicode.com/posts', content, postListTemplate);

window.addEventListener('hashchange', (event) => {
    if(location.hash === '') {
        comments.innerHTML = '';
        renderView('https://jsonplaceholder.typicode.com/posts', content, postListTemplate)
    }
    else if (location.hash.includes('pageID')) {
        const ID = location.hash.match(/\d+/g).join();
        renderView(`https://jsonplaceholder.typicode.com/posts/${ID}`, content, postTemplate)
        renderView(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`, comments, commentsTemplate)
    }
    else if (location.hash.includes('userID')) {
        const ID = location.hash.match(/\d+/g).join();
        comments.innerHTML = '';
        renderView(`https://jsonplaceholder.typicode.com/users/${ID}`, content, userTemplate)
    }
});
