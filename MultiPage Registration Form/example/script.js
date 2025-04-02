let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const indicators = document.querySelectorAll(".step");
const progressLine = document.querySelector(".progress-line");

function updateProgress() {
    indicators.forEach((indicator, index) => {
        if (index <= currentStep) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });

    // Adjust progress line width
    progressLine.style.width = `${(currentStep / (steps.length - 1)) * 75}%`;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
        updateProgress();
    }
}

function prevStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
        updateProgress();
    }
}

function submitForm() {
    alert("Form submitted successfully!");
}
