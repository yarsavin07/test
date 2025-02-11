function requestConsultation() {
    alert('Запрос на консультацию отправлен!');
}

function viewCases() {
    window.location.href = '#portfolio';
}

function leaveRequest() {
    window.location.href = '#contact';
}

function contactUs() {
    window.location.href = '#contact';
}

function requestSimilar() {
    alert('Запрос на аналогичное решение отправлен!');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваша заявка отправлена!');
});