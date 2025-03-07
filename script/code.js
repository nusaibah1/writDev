// Footer Variables
const footerText = document.querySelector("#footerText")
const yearButton = document.querySelector("#yearButton")

// Appending the current year to the footer text
footerText.innerHTML += " " + new Date().getFullYear()

// Creating the author button
const button = document.createElement("button")
button.textContent = "by @Nusaibah";
yearButton.appendChild(button);

// Attaching event listners to all category filter items (except the list-icons)
document.querySelectorAll(".catergory-nav ul li[data-filter]").forEach(item => {
    item.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-filter");
        filterArticles(selectedCategory);
    })
})

// Filtering Articles
function filterArticles(filter) {
    const articles = document.querySelectorAll(".article-card")
    articles.forEach(article => {
        // Getting the catergory from article span meta text
        metaText = article.querySelector("span").textContent
        const parts = metaText.split('•')
        const articleCategory = parts[1] ? parts[1].trim() : "";
    
        //  Displaying the catergory if selected or displaying all catergories
        if (filter === "All" || articleCategory === filter) {
            article.classList.remove('hidden')
        } else {
            article.classList.add('hidden')
        }
    })
}