let searchNews = async (value) => {
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
        );
        let data = await res.json();
        console.log("data:",data.articles);
        return data;

    }catch(err){
        console.log("err:",err);
    }
};

let append = (data, results) => {
    data.forEach(({urlToImage,title,description}) => {
        let div = document.createElement("div")
        div.setAttribute("class", "image")

        let img = document.createElement("img");
        img.src = urlToImage;

        let h2 = document.createElement("h2");
        h2.innerText = title;

        let p = document.createElement("p");
        p.innerText = description;

        div.append(img, h2, p);
        results.append(div);

    });
}

export { searchNews, append }