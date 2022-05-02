// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

import { searchNews, append } from "./fetch.js"



// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}



let search = (e) => {
    if(e.key === "Enter"){
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data) => {
            console.log("data:",data.articles);

            let results = document.getElementById("results");
            results.innerHtml = null;
            append(data.articles, results);
        });

    }
};
document.getElementById("search_input").addEventListener("keydown", search);

let countries = document.getElementById("sidebar").children;

function cSearch(){
    console.log(this.id);
    searchNews(value).then((data) => {
        console.log("data:",data);

        let results = document.getElementById("results");
        results.innerHtml = null;
        append(data.articles, results);
    });
}
for(let el of countries){
    el.addEventListener("click", cSearch)
};



