'use strict';

const React = {
    createElement: function (tag, options = undefined, node = null) {
        const element = document.createElement(tag);

        Array.isArray(node) ? element.append(...node) : element.innerHTML = node;

        // set attrs for element like style and textContent
        if (options && options.style) element.style.backgroundColor = options.style.backgroundColor;
        else if (options && options.textContent) element.innerHTML = options.textContent;

        return element;
    },
    render: function (view, root) {
        root.appendChild(view);
    }
};

const app =
    React.createElement('div', { style: { backgroundColor: 'red' } }, [
        React.createElement('span', undefined, 'Hello world'),
        React.createElement('br'),
        'This is just a text node',
        React.createElement('div', { textContent: 'Text content' }),
    ]);

React.render(
    app,
    document.getElementById('root'),
);
