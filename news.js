let Userurl;
let searchInputValue = localStorage.getItem('searchTerm'); // Retrieve the search term from local storage.
if (searchInputValue) {
    Userurl = `https://newsapi.org/v2/everything?q=${searchInputValue}&from=2023-05-14&sortBy=popularity&apiKey=28a8dff1341c46be965cb359067b70ab`;
} else {
    Userurl = 'https://newsapi.org/v2/everything?q=news&from=2023-05-14&sortBy=popularity&apiKey=28a8dff1341c46be965cb359067b70ab';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.querySelector('.search');
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search__input');
        searchInputValue = searchInput.value;

        Userurl = `https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=${searchInputValue}`;

        if(searchInputValue.trim() !== ""){
            await main(Userurl);
        }
    });

    // If there's a search term, fetch news according to it.
    if(searchInputValue) {
        main(Userurl);
    } else {
        main();
    }
});


async function main(url = 'https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=chatgpt') {
    const news = await fetch(url);
    const newsData = await news.json();
    console.log(newsData);
    localStorage.setItem('newsData', JSON.stringify(newsData));
    const newsListEl = document.querySelector('.news__container');
    newsListEl.innerHTML = newsData.results.map((news, index) => newsHTML(news, index)).join("");
}


function newsHTML(news, index) {
    return `<div class="news" onclick="redirectToNewsPage(${index})">
        <figure class="img">
            <img src="${news.image_url}" alt="" class="news__img">
        </figure>
        <div class="texts">
            <h1 class="title">${news.title}</h1>
        </div>
    </div>`;
}

function redirectToNewsPage(index) {
    window.location.href = `NewsPage.html?article=${index}`;
}
