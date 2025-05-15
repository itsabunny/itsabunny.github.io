// Get the modal
const modal = document.getElementById("addNewArticle");

// Get the button that opens the modal
const btn = document.getElementById("addNewArticleButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Helpers
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Ladda artiklar från localStorage
function getArticles() {
  return JSON.parse(localStorage.getItem("articles")) || [];
}

// Spara artiklar till localStorage
function saveArticles(articles) {
  localStorage.setItem("articles", JSON.stringify(articles));
}

// Rendera alla artiklar på sidan
function renderArticles() {
  const container = document.getElementById("articles");
  container.innerHTML = "";

  const articles = getArticles();
  articles.forEach((article, index) => {
    const articleEl = document.createElement("div");
    articleEl.className = "p-4 border rounded bg-white dark:bg-gray-800";

    articleEl.innerHTML = `
      <h3 class="text-xl font-semibold">${article.title}</h3>
      <p class="text-sm text-gray-500">${article.date}</p>
      <p class="my-2">${article.content.length > 60 ? article.content.slice(0, 60) + "..." : article.content}</p>
      <button data-index="${index}" class="delete-article bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
        Radera
      </button>
    `;

    container.appendChild(articleEl);
  });

  // Lägg till event listeners på raderingsknappar
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

// Form handeling
document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const date = new Date().toLocaleDateString();

  if (!title) return;

  const newArticle = { title, content, date };
  const articles = getArticles();
  articles.unshift(newArticle); // Add at the top
  saveArticles(articles);
  renderArticles();
  showToast("Article added!");

  // Reset form + close modal
  this.reset();
  document.getElementById("addNewArticle").style.display = "none";
});

// Load artiklar vid sidstart
window.onload = renderArticles;
