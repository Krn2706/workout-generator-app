// Get unique values from an array of objects for a specific key
function getUniqueValues(array, key) {
    const values = array.flatMap(item => item[key]);
    return [...new Set(values)];
}

// Populate checkbox groups with options
function populateCheckboxGroup(containerId, options, name) {
    const container = document.getElementById(containerId);
    const selectAllCheckbox = container.querySelector('input[type="checkbox"]');

    options.forEach(option => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = name;
        checkbox.value = option;
        checkbox.className = 'option-checkbox';
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        container.appendChild(label);
    });

    // Handle "Select All" functionality
    selectAllCheckbox.addEventListener('change', function() {
        const checkboxes = container.querySelectorAll('.option-checkbox');
        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
    });

    // Update "Select All" checkbox based on individual selections
    container.addEventListener('change', function(e) {
        if (e.target.className === 'option-checkbox') {
            const checkboxes = container.querySelectorAll('.option-checkbox');
            const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
            selectAllCheckbox.checked = allChecked;
        }
    });
}

// Generate workout based on user preferences
function generateWorkout(exercises, formData) {
    let filteredExercises = [...exercises];

    // Filter by equipment
    if (formData.equipment.length > 0) {
        filteredExercises = filteredExercises.filter(exercise =>
            exercise.equipment.some(eq => formData.equipment.includes(eq))
        );
    }

    // Filter by training type
    if (formData.trainingType.length > 0) {
        filteredExercises = filteredExercises.filter(exercise =>
            exercise.training_type.some(type => formData.trainingType.includes(type))
        );
    }

    // Filter by training form
    if (formData.trainingForm.length > 0) {
        filteredExercises = filteredExercises.filter(exercise =>
            exercise.training_form.some(form => formData.trainingForm.includes(form))
        );
    }

    // Filter by training focus
    if (formData.trainingFocus.length > 0) {
        filteredExercises = filteredExercises.filter(exercise =>
            exercise.training_focus.some(focus => formData.trainingFocus.includes(focus))
        );
    }

    // Exclude exercises that target injury areas
    if (formData.injuries.length > 0) {
        filteredExercises = filteredExercises.filter(exercise =>
            !exercise.injuries.some(injury => formData.injuries.includes(injury))
        );
    }

    // Sort exercises by estimated time
    filteredExercises.sort((a, b) => {
        const timeA = parseInt(a.estimated_time);
        const timeB = parseInt(b.estimated_time);
        return timeA - timeB;
    });

    // Select exercises based on desired workout duration
    const workoutDuration = parseInt(formData.duration);
    let selectedExercises = [];
    let totalTime = 0;

    for (const exercise of filteredExercises) {
        const exerciseTime = parseInt(exercise.estimated_time);
        if (totalTime + exerciseTime <= workoutDuration) {
            selectedExercises.push(exercise);
            totalTime += exerciseTime;
        }
        if (totalTime >= workoutDuration) break;
    }

    return selectedExercises;
}

// Display the generated workout
function displayWorkout(exercises, intensity) {
    const workoutResult = document.getElementById('workoutResult');
    workoutResult.innerHTML = '';
    workoutResult.classList.add('active');

    if (exercises.length === 0) {
        workoutResult.innerHTML = '<p>No exercises match your criteria. Please adjust your preferences.</p>';
        return;
    }

    const totalTime = exercises.reduce((sum, exercise) => sum + parseInt(exercise.estimated_time), 0);
    
    workoutResult.innerHTML = `
        <h2>Your Custom Workout</h2>
        <p>Total Duration: ${totalTime} minutes</p>
        <p>Intensity Level: ${intensity}</p>
        <div class="exercises-container">
            ${exercises.map(exercise => `
                <div class="exercise-card">
                    <h3>${exercise.name}</h3>
                    <p>${exercise.description}</p>
                    <div class="exercise-details">
                        <div class="exercise-detail">
                            <strong>Duration:</strong> ${exercise.duration}
                        </div>
                        <div class="exercise-detail">
                            <strong>Equipment:</strong> ${exercise.equipment.join(', ')}
                        </div>
                        <div class="exercise-detail">
                            <strong>Intensity:</strong> ${exercise.intensity_variables}
                        </div>
                    </div>
                    ${exercise.video_url ? `
                        <div class="exercise-video">
                            <a href="${exercise.video_url}" target="_blank">Watch Tutorial</a>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

// Handle form submission
document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        equipment: Array.from(document.querySelectorAll('#equipment .option-checkbox:checked')).map(cb => cb.value),
        duration: document.getElementById('duration').value,
        intensity: document.getElementById('intensity').value,
        trainingType: Array.from(document.querySelectorAll('#trainingType .option-checkbox:checked')).map(cb => cb.value),
        trainingForm: Array.from(document.querySelectorAll('#trainingForm .option-checkbox:checked')).map(cb => cb.value),
        trainingFocus: Array.from(document.querySelectorAll('#trainingFocus .option-checkbox:checked')).map(cb => cb.value),
        injuries: Array.from(document.querySelectorAll('#injuries .option-checkbox:checked')).map(cb => cb.value)
    };

    const workout = generateWorkout(exercises, formData);
    displayWorkout(workout, formData.intensity);
});

// Initialize form when exercises data is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate form with options from exercises data
    populateCheckboxGroup('equipment', getUniqueValues(exercises, 'equipment'), 'equipment');
    populateCheckboxGroup('trainingType', getUniqueValues(exercises, 'training_type'), 'trainingType');
    populateCheckboxGroup('trainingForm', getUniqueValues(exercises, 'training_form'), 'trainingForm');
    populateCheckboxGroup('trainingFocus', getUniqueValues(exercises, 'training_focus'), 'trainingFocus');
    populateCheckboxGroup('injuries', getUniqueValues(exercises, 'injuries'), 'injuries');
}); 