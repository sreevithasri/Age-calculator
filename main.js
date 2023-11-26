function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    
    if (birthdate === "") {
        alert("Please enter your birthdate");
        return;
    }

    var birthYear = new Date(birthdate).getFullYear();
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    document.getElementById('result').innerHTML = "Your age is: " + age + " years.";
}
