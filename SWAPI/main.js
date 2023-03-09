let getResidentsBtn = document.querySelector("button");

function getResidents (req, res) {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan").then(res => {
        console.log(res.data.results[0].residents)
            for (let i = 0; i < res.data.results[0].residents.length; i++){
                axios.get(res.data.results[0].residents[i]).then (res => { 
                let characters = document.createElement("h2");
                characters.textContent = res.data.name;
                document.body.appendChild(characters);
            })
        }
    })    
};

getResidentsBtn.addEventListener("click", getResidents)

//You need to PRACTICE this!!!!