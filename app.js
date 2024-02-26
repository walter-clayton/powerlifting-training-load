// app.js
new Vue({
    el: '#app',
    data: {
      liftType: 'squats',
      date: '',
      volume: 0,
      load: 0,
      trainingData: []
    },
    methods: {
      addTrainingData() {
        // Prompt for RPE
        const rpe = parseFloat(prompt('How hard was your last session? (Enter an RPE between 1 and 10)'));
        if (isNaN(rpe) || rpe < 1 || rpe > 10) {
          alert('Invalid RPE entered. Please try again.');
          return;
        }
  
        // Adjust load based on RPE
        const adjustedVolume = this.volume;
        const adjustedLoad = this.load * (rpe / 10);
  
        // Store training data
        const trainingDatum = {
          date: this.date,
          liftType: this.liftType,
          prescribedLoad: {
            volume: this.volume,
            load: this.load
          },
          adjustedLoad: {
            volume: adjustedVolume,
            load: adjustedLoad.toFixed(2)
          },
          rpe: rpe
        };
        this.trainingData.push(trainingDatum);
  
        // Update chart
        this.updateChart();
  
        // Clear form fields
        this.liftType = 'squats';
        this.date = '';
        this.volume = 0;
        this.load = 0;
      },
      updateChart() {
        const ctx = document.getElementById('chart').getContext('2d');
  
        // Filter training data by lift type
        const filteredData = this.trainingData.filter(data => data.liftType === this.liftType);
  
        // Prepare chart data
        const chartData = filteredData.map(data => ({
          x: new Date(data.date),
          y: parseFloat(data.adjustedLoad.load)
        }));
  
        // Chart configuration
        const chartConfig = {
          type: 'line',
          data: {
            datasets: [
              {
                label: 'Adjusted Load',
                data: chartData,
                fill: false,
                borderColor: 'green'
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  displayFormats: {
                    day: 'MMM D'
                  }
                },
                title: {
                  display: true,
                  text: 'Training Date'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Load (kg)'
                }
              }
            }
          }
        };
  
        // Render chart
        new Chart(ctx, chartConfig);
      }
    }
  });
  