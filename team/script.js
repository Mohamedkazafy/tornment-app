let form = document.getElementById("team_login");

form.onsubmit = (event) => {
    event.preventDefault();
    let members = document.getElementsByClassName("member")
    let teamName = document.getElementById("teamName").value

    if (members.length === 0 || teamName.trim() === "") {
        alert("Please enter information");
    } else {
        let teams = JSON.parse(localStorage.getItem("teams")) || [];
        
        if (teams.length == 8) {
            alert("Max limit reached")
        } else {
            let team = {
                name: teamName,
                members: []
            };

            for (let i = 0; i < members.length; i++) {
                team.members.push(members[i].value)
            }
            teams.push({teamName: team, scores: [], totalScore: 0});
            localStorage.setItem("teams", JSON.stringify(teams))            
            location.href = "../events_teams/index.html"
        }
    }
};
