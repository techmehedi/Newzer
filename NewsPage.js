document.addEventListener('DOMContentLoaded', function() {
    // Parse the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleIndex = urlParams.get('article');
  
    // Retrieve the newsData from local storage
    const newsData = JSON.parse(localStorage.getItem('newsData'));
  
    // Get the specific article using the index
    const selectedArticle = newsData.articles[articleIndex];
  
    // Access the properties of the selected article
    const imageUrl = selectedArticle.urlToImage;
    const title = selectedArticle.title;
    console.log(selectedArticle.title);
    console.log(selectedArticle.urlToImage);
    console.log(selectedArticle)
  
    // Update the HTML elements with the retrieved data
    const titleElement = document.querySelector('.title');
    titleElement.innerHTML = `Title: ${selectedArticle.title}`;
  
    const newsListEl = document.querySelector('.newspage__news');
    newsListEl.innerHTML = newsHTML(selectedArticle);
  
    function newsHTML(article) {
      return `<div class="newspage__news">
        <div class="newspagediv">
        <figure class="newspage__fig">
            <img src="${article.urlToImage}" alt="" class="newspage__img">
        </figure>
        </div>
        <div class="newspage__texts">
            <h1 class="title">${article.title}</h1>
            <p class="description">${article.description}</p>
            <button class="newspage__button" target=”_blank” onclick=" window.open('${article.url}','_blank')">View Article</button>
        </div>
      </div>`;
    }
  });
  