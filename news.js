let Userurl;
let searchInputValue = localStorage.getItem('searchTerm'); // Retrieve the search term from local storage.
if (searchInputValue) {
    Userurl = `https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=${searchInputValue}&language=en`;
} else {
    Userurl = 'https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=apple&language=en';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.querySelector('.search');
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search__input');
        searchInputValue = searchInput.value;

        Userurl = `https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=${searchInputValue}&language=en`;

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


async function main(url = 'https://newsdata.io/api/1/news?apikey=pub_22586d54c0a8cc2132115b8f27c120444300d&q=apple&language=en') {
    const news = await fetch(url);
    const newsData = await news.json();
    console.log(newsData);
    localStorage.setItem('newsData', JSON.stringify(newsData));
    const newsListEl = document.querySelector('.news__container');
    newsListEl.innerHTML = newsData.results.map((news, index) => newsHTML(news, index)).join("");
}


function newsHTML(news, index) {
    let imageUrl = news.image_url;
    if(imageUrl === null) {
        imageUrl = './assets/imgno.png';
    }
    return `<div class="news" onclick="redirectToNewsPage(${index})">
        <figure class="img">
            <img src="${imageUrl}" alt="" class="news__img">
        </figure>
        <div class="texts">
            <h1 class="title">${news.title}</h1>
        </div>
    </div>`;
}


function redirectToNewsPage(index) {
    window.location.href = `NewsPage.html?article=${index}`;
}
