
// async function main(){
//     const news = await fetch("https://newsapi.org/v2/everything?q=nice&from=2023-05-14&sortBy=popularity&apiKey=28a8dff1341c46be965cb359067b70ab");
//     const newsData = await news.json();
//     console.log(newsData)
//     const newsListEl = document.querySelector('.news__container');
//     newsListEl.innerHTML = newsData.articles.map((news) => newsHTML(news)).join("")             
// }

// main();


// function showNewsPosts(url) {
//     localStorage.setItem("url", url);
//     window.location.href = `${window.location.origin}/NewsPage.html`;

// }


// function newsHTML(news){
//     return `<div class="news" onclick="showNewsPosts('${news.url}')">
//         <figure class="img">
//             <img src="${news.urlToImage}" alt="" class="news__img">
//         </figure>
//         <div class="texts">
//         <h1 class="title">${news.title}</h1>
//         </div>
//     </div>`;
// }

// // <p class="description">${news.}</p>

async function main() {
    const news = await fetch("https://newsapi.org/v2/everything?q=nice&from=2023-05-14&sortBy=popularity&apiKey=28a8dff1341c46be965cb359067b70ab");
    const newsData = await news.json();
    console.log(newsData);
    localStorage.setItem('newsData', JSON.stringify(newsData)); // Store newsData in local storage
    const newsListEl = document.querySelector('.news__container');
    newsListEl.innerHTML = newsData.articles.map((news, index) => newsHTML(news, index)).join("");
}

// Rest of the code...


function newsHTML(news, index) {
    return `<div class="news" onclick="redirectToNewsPage(${index})">
        <figure class="img">
            <img src="${news.urlToImage}" alt="" class="news__img">
        </figure>
        <div class="texts">
            <h1 class="title">${news.title}</h1>
        </div>
    </div>`;
}

function redirectToNewsPage(index) {
    window.location.href = `NewsPage.html?article=${index}`;
}

main();

