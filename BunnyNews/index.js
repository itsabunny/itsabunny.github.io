const modal = document.getElementById("addNewArticle");
const btn = document.getElementById("addNewArticleButton");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

function getArticles() {
  return JSON.parse(localStorage.getItem("articles")) || {};
}

function saveArticles(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

function renderArticles() {
  const container = document.getElementById("articles");
  container.innerHTML = "";

  const articles = getArticles();
  const sorted = Object.entries(articles).sort((a, b) => b[0].localeCompare(a[0])).reverse();

  for (const [id, article] of sorted) {
    const el = document.createElement("div");
    el.className = "p-4 border rounded bg-white dark:bg-gray-800";
    el.innerHTML = `
      <a href="article.html?id=${id}">
        <h3 class="text-xl font-semibold hover:text-blue-600 dark:hover:text-yellow-300">${article.title}</h3>
      </a>
      <p class="text-sm text-gray-500">${article.date}</p>
      <p class="my-2">${article.content.length > 60 ? article.content.slice(0, 60) + "..." : article.content}</p>
      <button data-id="${id}" class="delete-article bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Delete</button>
    `;
    container.appendChild(el);
  }

  document.querySelectorAll(".delete-article").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const articles = getArticles();
      delete articles[id];
      saveArticles(articles);
      renderArticles();
      renderLatestSidebarArticles();
      showToast("Article deleted!");
    });
  });
}

function renderLatestSidebarArticles(limit = 3) {
  const sidebarList = document.getElementById("latest-articles");
  if (!sidebarList) return;

  sidebarList.innerHTML = "";

  const articles = getArticles();
  const sorted = Object.entries(articles)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, limit);

  for (const [id, article] of sorted) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="article.html?id=${id}" class="text-blue-700 dark:text-blue-400 hover:underline">${article.title}</a>`;
    sidebarList.appendChild(li);
  }
}

document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const date = new Date().toLocaleString();
  const id = new Date().toISOString();

  if (!title) return;

  const newArticle = { id, title, content, date };
  const articles = getArticles();
  articles[id] = newArticle;
  saveArticles(articles);
  renderArticles();
  renderLatestSidebarArticles();
  showToast("Article created!");
  this.reset();
  modal.style.display = "none";
});

window.onload = () => {
  renderArticles();
  renderLatestSidebarArticles();
};
