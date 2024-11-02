let form = document.getElementById("team_events_form");

form.onsubmit = (event) => {
    event.preventDefault();
    let userEvent = document.getElementById("teams_events").value;
    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    for (let i = 0; i < teams.length; i++) {
        let teamScore = teams[i]?.teamScore || 0;
        let eventScores = teams[i]?.membersScores || [];
        
        for (let j = 0; j < 5; j++) {
            let score = Math.round(Math.random() * 100);
            eventScores.push({ event: userEvent, member: `Member ${j + 1}`, score: score });
            teamScore += score;
        }

        teams[i].event = userEvent;
        teams[i].membersScores = eventScores;
        teams[i].teamScore = teamScore;
        
        console.log(eventScores);
        console.log(teamScore);
    }

    localStorage.setItem("teams", JSON.stringify(teams));
};
