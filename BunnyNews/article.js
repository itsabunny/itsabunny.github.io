function getArticleById(id) {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    return articles[id];
}

function renderArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id === null) {
        document.getElementById("article-title").textContent = "Artikel saknas";
        return null;
    }

    const article = getArticleById(id);

    if (!article) {
        document.getElementById("article-title").textContent = "Kunde inte hitta artikel";
        return null;
    }

    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-date").textContent = article.date;
    document.getElementById("article-content").textContent = article.content;

    return id;
}

// Kommentarhantering
function getComments(articleId) {
    const allComments = JSON.parse(localStorage.getItem("comments")) || {};
    return allComments[articleId] || [];
}

function saveComment(articleId, commentObj) {
    const allComments = JSON.parse(localStorage.getItem("comments")) || {};
    if (!allComments[articleId]) {
        allComments[articleId] = [];
    }
    allComments[articleId].push(commentObj);
    localStorage.setItem("comments", JSON.stringify(allComments));
}

function renderComments(articleId) {
    const list = document.getElementById("comments-list");
    list.innerHTML = "";

    const comments = getComments(articleId);
    comments.forEach((comment) => {
        const li = document.createElement("li");
        li.className = "bg-white dark:bg-gray-700 p-3 rounded";

        if (typeof comment === "object" && comment.name && comment.time && comment.text) {
            li.innerHTML = `
        <p class="text-sm text-gray-500 mb-1">${comment.name} – ${comment.time}</p>
        <p>${comment.text}</p>
      `;
        } else {
            li.textContent = "Kommentar (äldre format): " + comment;
        }

        list.appendChild(li);
    });
}

// Körs vid sidladdning

function getReactions() {
    return JSON.parse(localStorage.getItem("reactions")) || {};
}

function saveReactions(reactions) {
    localStorage.setItem("reactions", JSON.stringify(reactions));
}

function renderReactions(articleId) {
    const reactions = getReactions();
    const data = reactions[articleId] || { likes: 0, dislikes: 0 };

    document.getElementById("like-count").textContent = data.likes;
    document.getElementById("dislike-count").textContent = data.dislikes;
}

function addReaction(articleId, type) {
    const reactions = getReactions();
    if (!reactions[articleId]) {
        reactions[articleId] = { likes: 0, dislikes: 0 };
    }

    reactions[articleId][type]++;
    saveReactions(reactions);
    renderReactions(articleId);
}


window.onload = () => {
    const articleId = renderArticle();

    if (articleId !== null) {
        renderComments(articleId);

        renderReactions(articleId);

        document.getElementById("like-btn").addEventListener("click", () => {
            addReaction(articleId, "likes");
        });

        document.getElementById("dislike-btn").addEventListener("click", () => {
            addReaction(articleId, "dislikes");
        });


        document.getElementById("comment-form").addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("comment-name").value.trim();
            const text = document.getElementById("comment-text").value.trim();
            const time = new Date().toLocaleString();

            if (name && text) {
                const newComment = { name, text, time };
                saveComment(articleId, newComment);
                renderComments(articleId);
                document.getElementById("comment-form").reset();
            }
        });
    }
};
