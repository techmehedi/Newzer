

async function main(){
    const news = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-05-14&sortBy=popularity&apiKey=28a8dff1341c46be965cb359067b70ab");
    const newsData = await news.json();
    const newsListEl = document.querySelector('.news__container');
    console.log(newsData.articles)
    newsListEl.innerHTML = newsData.articles
            .map(
        (news) => `<div class="news">
        <figure class="img">
            <img src="${news.urlToImage}" alt="" class="news__img">
        </figure>
        <div class="texts">
        <h1 class="title">${news.title}</h1>
        <p class="description">${news.description}</p>
        </div>
    </div>`)
            .join("")
    
    
                   
}

main();

