 // Selecteer de slider en de span waar de waarde wordt getoond
        const slider = document.getElementById('mijnSlider');
        const sliderWaarde = document.getElementById('sliderWaarde');

        // Event listener voor live update
        slider.addEventListener('input', function() {
            sliderWaarde.textContent = slider.value;
        });