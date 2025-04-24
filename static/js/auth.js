document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

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
        if (data.message === "User registered successfully") {
            window.location.href = "login.html"; // Redirect to login page
        }
    })
    .catch(error => console.error("Error:", error));
});
