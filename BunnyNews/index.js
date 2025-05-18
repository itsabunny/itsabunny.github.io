// Get the modal
const modal = document.getElementById("addNewArticle");

// Get the button that opens the modal
const btn = document.getElementById("addNewArticleButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Close modal with X
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// LocalStorage helpers
function getArticles() {
  return JSON.parse(localStorage.getItem("articles")) || [];
}

function saveArticles(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

// Render articles
function renderArticles() {
  const container = document.getElementById("articles");
  container.innerHTML = "";

  const articles = getArticles();
  articles.forEach((article, index) => {
    const articleEl = document.createElement("div");
    articleEl.className = "p-4 border rounded bg-white dark:bg-gray-800";

    articleEl.innerHTML = `
      <a href="article.html?id=${index}">
        <h3 class="text-xl font-semibold hover:text-blue-600 dark:hover:text-yellow-300">${article.title}</h3>
      </a>
      <p class="text-sm text-gray-500">${article.date}</p>
      <p class="my-2">${article.content.length > 60 ? article.content.slice(0, 60) + "..." : article.content}</p>
      <button data-index="${index}" class="delete-article bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
        Radera
      </button>
    `;

    container.appendChild(articleEl);
  });

  document.querySelectorAll(".delete-article").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const articles = getArticles();
      articles.splice(index, 1);
      saveArticles(articles);
      renderArticles();
      showToast("Artikel raderad!");
    });
  });
}

// Form
document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const date = new Date().toLocaleDateString();

  if (!title) return;

  const newArticle = { title, content, date };
  const articles = getArticles();
  articles.unshift(newArticle);
  saveArticles(articles);
  renderArticles();
  showToast("Artikel skapad!");

  this.reset();
  document.getElementById("addNewArticle").style.display = "none";
});

// Load artiklar vid sidstart
window.onload = renderArticles;
