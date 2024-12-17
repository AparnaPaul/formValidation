// const accountForm = document.getElementById('accountForm')
$(document).ready(function () {
    $("#accountForm").on("submit", function (event) {
        event.preventDefault();

        $(".error").text("")

        const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Name: letters & spaces, 3-50 characters
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email: valid email format
        const phoneRegex = /^\d{10,14}$/; // Phone: 10-14 digits
        const genderRegex = /^[a-zA-Z\s]{4,15}$/; // Gender: letters & spaces, 4-15 characters

        const name = $("#name").val().trim()
        const email = $("#email").val().trim()
        const phone = $("#phone").val().trim()
        const age = parseInt($("#age").val().trim())
        const gender = $("#gender").val().trim()
        const address = $("#address").val().trim()

        let validDetails = true;

        if (!name) {
            $("#nameError").text("Name is required")
            validDetails = false
        }
        else if (!nameRegex.test(name)) {
            $("#nameError").text("Name must be 3 - 50 charachters (letters and spaces only)")
            validDetails = false
        }

        if (!email) {
            $("#emailError").text("Email is required")
            validDetails = false
        }
        else if (!emailRegex.test(email)) {
            $("#emailError").text("Enter a valid email address format")
            validDetails = false
        }

        if (!phone) {
            $("#phoneError").text("Phone is required")
            validDetails = false
        }
        else if (!phoneRegex.test(phone)) {
            $("#phoneError").text("Phone number must be 10-14 digits.");
            validDetails = false;
        }

        if (isNaN(age)) {
            $("#ageError").text("Age is required.");
            validDetails = false;
        } else if (age < 18 || age > 120) {
            $("#ageError").text("Age must be between 18 and 120.");
            validDetails = false;
        }

        if (!gender) {
            $("#genderError").text("Gender is required.");
            validDetails = false;
        } else if (!genderRegex.test(gender)) {
            $("#genderError").text("Gender must be 4-15 characters (letters & spaces only).");
            validDetails = false;
        }

        if (address && address.length > 50) {
            $("#addressError").text("Address cannot exceed 50 characters.");
            validDetails = false;
        }


        if (validDetails) {
            alert("Form submitted successfully!");
            $("#accountForm")[0].reset();
        }
    })
})

