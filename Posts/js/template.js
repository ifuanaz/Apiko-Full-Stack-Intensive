function postListTemplate(data) {
    return `
        <div class="post">
            <h2 class="post-title">
                ${data.id}
                <a href="#pageID=${data.id}">${data.title}</a>
            </h2>
            <p>${data.body}</p>
        </div>
    `
}

function postTemplate(data) {
    return `
        <div class="post">
            <h2 class="post-title">
                ${data.id}
                ${data.title}
            </h2>
            <p>${data.body}</p>
            <div class="post-author">
                <a href="#userID=${data.userId}">about Author</a>
            </div>
        </div>
    `
}

function commentsTemplate(item) {
    return `
        <div class="comments">
            <h3 class="comments-title">
                <span class="comments-colorfull">name: </span>
                ${item.name}
            </h3>
            <p>
                <span class="comments-colorfull">email: </span>
                ${item.email}
            </p>
            <p>${item.body}</p>
            <hr />
        </div>
    `
}

function userTemplate(user) {
    return `
        <div class="block-author">
            <h3 class="block-author-title">Author</h3>
            <p>
                <b>username:</b>
                ${user.username}
            </p>
            <p>
                <b>name:</b>
                ${user.name}
            </p>
            <p>
                <b>email:</b>
                ${user.email}
            </p>
            <p>
                <b>city:</b>
                ${user.address.city}
            </p>
            <p>
                <b>phone:</b>
                ${user.phone}
            </p>
        </div>
    `
}
