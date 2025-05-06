const searchForm = document.getElementById("search-form")
const searchResultsEl = document.getElementById("search-results")

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value
    //console.log("Searching for: " + title)

    searchResultsEl.innerHTML = getSearchResults(title)

    // fetch(`http://www.omdbapi.com/?apikey=a9731a9b&t=${title}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         //console.log("Response: " + data.Response)
    //         let resultHTML = ""

    //         if(data.Response==="True"){
    //             //console.log("Response was true!")
    //             let results = data.Search
    //             for(let result of results){
    //                 resultHTML += `<p>${result.Title}</p>`
    //             }
    //         } else{resultHTML = "Error: " + data.Error}

    //         searchResultsEl.innerHTML = resultHTML
    //     })
})

async function getSearchResults(title) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=a9731a9b&t=${title}`)
    const data = await res.json()
    
    console.log(data)
    //console.log("Response: " + data.Response)
    let resultHTML = ""

    if(data.Response==="True"){
        //console.log("Response was true!")
        let results = data.Search
        for(let result of results){
            resultHTML += `<p>${result.Title}</p>`
        }
    } else{resultHTML = "Error: " + data.Error}

    return resultHTML
}

