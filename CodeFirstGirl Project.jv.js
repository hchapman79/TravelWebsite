document.addEventListener('DOMContentLoaded', function() {
    let btnElement = document.getElementById('form');

    btnElement.addEventListener('click', showAlert);
});

function showAlert() {
    alert('Your Email has been submitted');
}
