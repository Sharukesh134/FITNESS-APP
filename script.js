function generatePlan() {

    let weight = parseFloat(document.getElementById("weight").value);
    let goal = document.getElementById("goal").value;
    let output = document.getElementById("output");

    if (!weight || weight <= 0) {
        output.innerHTML = "Please enter valid body weight!";
        return;
    }

    let maintenance = weight * 30;
    let calories;
    let protein;
    let dietPlan;

    if (goal === "loss") {

        calories = maintenance - 500;
        protein = weight * 1.8;

        dietPlan = `
        <h3>🔥 Weight Loss Plan</h3>
        <p><b>Target Calories:</b> ${calories.toFixed(0)} kcal</p>
        <p><b>Protein Needed:</b> ${protein.toFixed(0)} g</p>

        <h4>Diet Plan:</h4>
        <ul>
            <li>Breakfast: 4 Egg Whites / 100g Paneer + Oats</li>
            <li>Lunch: 150g Chicken / Paneer + Brown Rice + Veggies</li>
            <li>Snack: Fruit + Almonds</li>
            <li>Dinner: 150g Grilled Protein + Salad</li>
        </ul>
        `;

    } else {

        calories = maintenance + 400;
        protein = weight * 2.2;

        dietPlan = `
        <h3>💪 Muscle Building Plan</h3>
        <p><b>Target Calories:</b> ${calories.toFixed(0)} kcal</p>
        <p><b>Protein Needed:</b> ${protein.toFixed(0)} g</p>

        <h4>Diet Plan:</h4>
        <ul>
            <li>Breakfast: 4 Whole Eggs + Oats + Milk</li>
            <li>Lunch: 200g Chicken / Paneer + Rice + Veggies</li>
            <li>Pre-Workout: Banana + Coffee</li>
            <li>Post-Workout: Whey Protein / Egg Whites</li>
            <li>Dinner: 200g Protein Source + Chapati + Salad</li>
        </ul>
        `;
    }

    output.innerHTML = `
        <h3>📊 Your Calculation</h3>
        <p><b>Maintenance Calories:</b> ${maintenance.toFixed(0)} kcal</p>
        ${dietPlan}
    `;
}
