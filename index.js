const searchForm = document.getElementById("search-form")
const searchResultsEl = document.getElementById("search-results")

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value
    //console.log("Searching for: " + title)

    getSearchResults(title)

})

async function getSearchResults(title) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=a9731a9b&s=${title}`)
    const data = await res.json()
    
    //console.log(data)
    //console.log("Response: " + data.Response)
    let resultHTML = ""

    if(data.Response==="True"){
        //console.log("Response was true!")
        let results = data.Search
        //console.log("results is: "+results)
        for(let result of results){
            resultHTML += `<p>${result.Title}</p>`
        }
    } else{resultHTML = "Error: " + data.Error}

    //console.log("resultHTML is: "+resultHTML)
    searchResultsEl.innerHTML = resultHTML
}

