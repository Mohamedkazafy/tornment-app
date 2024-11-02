document.addEventListener('DOMContentLoaded', (event) => {
    let teams = JSON.parse(localStorage.getItem("teams")) || []
    let players = JSON.parse(localStorage.getItem("players")) || []
    teams.sort((a, b) => b.teamScore - a.teamScore);
    players.sort((a, b) => b.totalScore - a.totalScore)

    let teamsLeaderboard = document.getElementById("teams_leaderboard").getElementsByTagName('tbody')[0];
    teams.forEach(team => {
        let row = teamsLeaderboard.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        cell1.innerHTML = team.name
        cell2.innerHTML = team.teamScore
    });

    let individualsLeaderboard = document.getElementById("individuals_leaderboard").getElementsByTagName('tbody')[0];
    players.forEach(player => {
        let row = individualsLeaderboard.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        cell1.innerHTML = player.name
        cell2.innerHTML = player.totalScore
    });
});
