function getArticleById(id) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  return articles[id];
}

function renderArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id === null) {
    document.getElementById("article-title").textContent = "Artikel saknas";
    return;
  }

  const article = getArticleById(id);

  if (!article) {
    document.getElementById("article-title").textContent = "Kunde inte hitta artikel";
    return;
  }

  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-date").textContent = article.date;
  document.getElementById("article-content").textContent = article.content;
}

window.onload = renderArticle;
