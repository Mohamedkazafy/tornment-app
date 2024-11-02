let form = document.getElementById("registerForm");
let select = document.getElementById("userChoice");

form.onsubmit = (event) => {
    event.preventDefault();
    
    let pageSelect = select.value;

    if (pageSelect === "teams") {
        location.href = "./team/index.html";
    } else {
        location.href = "./individual/index.html";
    }

    return false;
};
