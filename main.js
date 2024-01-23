document.addEventListener('DOMContentLoaded', function(){
    var cardContainer = document.querySelector('.card-container');
    var thankYouScreen = document.querySelector('.thankyou-screen');
    var subscribe = document.getElementById('subscribe');
    var dismiss = document.getElementById('dismiss');
    var emailInput = document.querySelector('input[type="email"]');
    var userEmail = '';

    subscribe.addEventListener('click', function(event) {
        event.preventDefault();
        userEmail = emailInput.value;

        var errorMessage = document.querySelector('.error-message');

        if (isValidEmail(userEmail)) {
            cardContainer.style.display = 'none';
        thankYouScreen.style.display = 'block';

        var confirmationMessage = document.querySelector('.thankyou-screen p');
        confirmationMessage.innerHTML = 'A confirmation email has been sent to<br>' + userEmail + '. Please open it and click inside to confirm submission.';

        emailInput.style.borderColor = '';
        errorMessage.textContent = '';

        } else {
            emailInput.style.borderColor = ' var(--Tomato)';
            errorMessage.textContent = 'Valid email required';
        }   
    });

    dismiss.addEventListener('click', function() {
        cardContainer.style.display = 'block';
        cardContainer.style.display = 'grid';
        thankYouScreen.style.display = 'none';
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});