// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js"
let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();

import { searchNews, append } from "./fetch.js"

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
