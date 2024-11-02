let form = document.getElementById("indiviudalForm")

form.onsubmit = () => {
    event.preventDefault()
    let username = document.getElementById("name").value
    let palyers = [...username]
    if(username == ""){
        alert("Please enter Your name")
    }else{
        let players = JSON.parse(localStorage.getItem("players")) || [];
        if(localStorage.length == 20){
            alert("you can't register, Max limit reached")
        }else{
            players.push({ name: username, scores: [], totalScore: 0 })
            localStorage.setItem("players", JSON.stringify(players))
            location.href = "../events_indiviuals/index.html"
        }
    }
}