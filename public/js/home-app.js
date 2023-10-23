let formData = document.getElementById("subscription-form");

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email_field");

    if (email.value == "") {
        alert("Please, make sure to type in a valid email address before sending it!");
      } else {
        alert("This form has been successfully submitted!");
        console.log(
`The user's email is:  
${email.value}`
        );
        email.value = "";
      }
    });