# Powerlifting Load Adjustment Web App

This web application allows users to track their powerlifting workouts and adjust their training load based on the Rate of Perceived Exertion (RPE) they experienced during each session. The application visualizes the prescribed load, intended RPE, actual RPE, and adjusted training load over multiple workout sessions.

## Features

- Users can input prescribed load (in kilograms), intended RPE, and actual RPE for each workout session.
- The application provides interactive line charts to visualize:
  - Intended RPE scores versus actual RPE scores over multiple workout sessions.
  - Prescribed load over multiple workout sessions.
  - Adjusted training load based on the RPE discrepancy factor over multiple workout sessions.
- Charts are updated dynamically as users input new workout data.
- Built using Vue.js for reactive data binding and Chart.js for chart visualization.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/walter-clayton/powerlifting-training-load.git

   ```

2. Open the index.html file in a web browser.

3. Enter the prescribed load, intended RPE, and actual RPE for each workout session in the form provided.

4. Click the "Add Workout" button to add the workout data and see the charts update dynamically.

## Development

- Ensure you have Vue.js and Chart.js included in your project dependencies.
- Customize the styling or layout by modifying the style.css file.
- Extend the functionality or modify the charts by editing the Vue.js components and methods in the <script> section of index.html.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your suggested changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
