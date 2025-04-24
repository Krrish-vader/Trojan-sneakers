document.getElementById("LoginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.message);
        if (data.message === "Login successful") {
            localStorage.setItem("user_id", data.user_id); // Store user session
            window.location.href = "account.html"; // Redirect to account page
        }
    })
    .catch(error => console.error("Error:", error));
});

document.getElementById("RegisterForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.message);
        if (data.message === "Registration successful") {
            window.location.href = "account.html"; // Redirect to account page
        }
    })
    .catch(error => console.error("Error:", error));
});