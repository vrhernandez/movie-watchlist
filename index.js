let title = "blade runner"

fetch(`http://www.omdbapi.com/?apikey=a9731a9b&s=${title}`)
    .then(res => res.json())
    .then(data => {

        let results = data.Search
        for(let result of results){
        console.log(result.Title)
        }
    })