document.addEventListener('DOMContentLoaded', () => {
    // 1. Calculator & Calorie Counter Logic (on index.html)
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const mealTypeSelect = document.getElementById('mealType');
            const selectedOption = mealTypeSelect.options[mealTypeSelect.selectedIndex];
            
            const mealCost = parseFloat(selectedOption.dataset.cost) || 3.20;
            const mealCalories = parseInt(selectedOption.dataset.calories) || 450;
            const mealsPerWeek = parseInt(document.getElementById('mealsPerWeek').value) || 7;
            const restaurantCost = 12.00; // Baseline eating-out price

            const weeklyCostTotal = (mealCost * mealsPerWeek).toFixed(2);
            const weeklyCalorieTotal = mealCalories * mealsPerWeek;
            const savings = ((restaurantCost - mealCost) * mealsPerWeek).toFixed(2);

            // Update DOM elements
            document.getElementById('weeklyCost').textContent = `$${weeklyCostTotal}`;
            document.getElementById('weeklySavings').textContent = `$${savings}`;
            document.getElementById('singleCalories').textContent = `${mealCalories} kcal`;
            document.getElementById('weeklyCalories').textContent = `${weeklyCalorieTotal.toLocaleString()} kcal`;
            
            document.getElementById('calcResult').classList.remove('hidden');
        });
    }

    // 2. Interactive Filter Logic (on meals.html)
    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const filterValue = e.target.value;
            const cards = document.querySelectorAll('.food-card');

            cards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});