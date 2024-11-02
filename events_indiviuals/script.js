let form = document.getElementById("indiviuals_events");

form.onsubmit = (event) => {
    event.preventDefault();
    let userEvent = document.getElementById("indiviual_events").value;
    let x = JSON.parse(localStorage.getItem("players")) || [];
    for (let i = 0; i < x.length; i++) {
        let score = Math.round(Math.random() * 100);
        let totalScore = x[i]?.totalScore || 0;
        let eventScore = x[i]?.scores || [];
        eventScore.push({ event: userEvent, score: score });
        totalScore += score;
        x[i].scores = eventScore;
        x[i].totalScore = totalScore;   
        console.log(eventScore);
        console.log(totalScore);
    }
    localStorage.setItem("players", JSON.stringify(x));
};
