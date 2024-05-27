document.addEventListener('DOMContentLoaded', function() {
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    
    requiredInputs.forEach((input) => {
        input.addEventListener('input', function() {
            if (input.value) {
                input.classList.remove('invalid');
            }
        });
    });
});

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    const indicators = document.querySelectorAll('.step-indicator');

    steps.forEach((element) => {
        element.classList.remove('active');
    });

    indicators.forEach((element) => {
        element.classList.remove('active');
    });

    document.getElementById(step).classList.add('active');
    document.getElementById(`step-${step}`).classList.add('active');
}

function nextStep(step) {
    const currentForm = document.querySelector('.step.active form');
    if (validateForm(currentForm)) {
        showStep(step);
    }
}

function prevStep(step) {
    showStep(step);
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach((input) => {
        if (!input.value) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}
