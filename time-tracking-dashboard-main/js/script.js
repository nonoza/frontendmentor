document.addEventListener('DOMContentLoaded', () => {
    let dailyBtn = document.querySelector('.daily');
    let weekBtn = document.querySelector('.weekly');
    let monthlyBtn = document.querySelector('.monthly');
    let time = document.querySelectorAll('.time h3');
    let previousTime = document.querySelectorAll('.previously');

    async function getData() {
        const url = "./data.json";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            return json;  // Return the parsed JSON data
        } catch (error) {
            console.error('Fetch error:', error.message);
            return null;  // Handle fetch error gracefully
        }
    }

    getData().then(data => {
        if (data) {
            // Define functions to update the DOM with the respective data
            function dailyInfo() {
                console.log('Daily button clicked');
                let workDailyTime = data[0].timeframes.daily.current;
                let playDailyTime = data[1].timeframes.daily.current;
                let studyDailyTime = data[2].timeframes.daily.current;
                let exerciseDailyTime = data[3].timeframes.daily.current;
                let socialDailyTime = data[4].timeframes.daily.current;
                let selfDailyTime = data[5].timeframes.daily.current;

                let workDailyPrevious = data[0].timeframes.daily.previous;
                let playDailyPrevious = data[1].timeframes.daily.previous;
                let studyDailyPrevious = data[2].timeframes.daily.previous;
                let exerciseDailyPrevious = data[3].timeframes.daily.previous;
                let socialDailyPrevous = data[4].timeframes.daily.previous;
                let selfDailyPrevious = data[5].timeframes.daily.previous;

                time[0].innerText = workDailyTime + "hrs";
                time[1].innerText = playDailyTime + "hrs";
                time[2].innerText = studyDailyTime + "hrs";
                time[3].innerText = exerciseDailyTime + "hrs";
                time[4].innerText = socialDailyTime + "hrs";
                time[5].innerText = selfDailyTime + "hrs";

                previousTime[0].innerText = `Previous: ${workDailyPrevious}hrs`;
                previousTime[1].innerText = `Previous: ${playDailyPrevious}hrs`;
                previousTime[2].innerText = `Previous: ${studyDailyPrevious}hrs`;
                previousTime[3].innerText = `Previous: ${exerciseDailyPrevious}hrs`;
                previousTime[4].innerText = `Previous: ${socialDailyPrevous}hrs`;
                previousTime[5].innerText = `Previous: ${selfDailyPrevious}hrs`;
            }

            function weeklyInfo() {
                console.log('Weekly button clicked');
                let workWeekTime = data[0].timeframes.weekly.current;
                let playWeekTime = data[1].timeframes.weekly.current;
                let studyWeekTime = data[2].timeframes.weekly.current;
                let exerciseWeekyTime = data[3].timeframes.weekly.current;
                let socialWeekTime = data[4].timeframes.weekly.current;
                let selfWeekTime = data[5].timeframes.weekly.current;

                let workWeekPrevious = data[0].timeframes.weekly.previous;
                let playWeekPrevious = data[1].timeframes.weekly.previous;
                let studyWeekPrevious = data[2].timeframes.weekly.previous;
                let exerciseWeekPrevious = data[3].timeframes.weekly.previous;
                let socialWeekPrevous = data[4].timeframes.weekly.previous;
                let selfWeekPrevious = data[5].timeframes.weekly.previous;

                time[0].innerText = workWeekTime + "hrs";
                time[1].innerText = playWeekTime + "hrs";
                time[2].innerText = studyWeekTime + "hrs";
                time[3].innerText = exerciseWeekyTime + "hrs";
                time[4].innerText = socialWeekTime + "hrs";
                time[5].innerText = selfWeekTime + "hrs";

                previousTime[0].innerText = `Previous: ${workWeekPrevious}hrs`;
                previousTime[1].innerText = `Previous: ${playWeekPrevious}hrs`;
                previousTime[2].innerText = `Previous: ${studyWeekPrevious}hrs`;
                previousTime[3].innerText = `Previous: ${exerciseWeekPrevious}hrs`;
                previousTime[4].innerText = `Previous: ${socialWeekPrevous}hrs`;
                previousTime[5].innerText = `Previous: ${selfWeekPrevious}hrs`;
            }

            function monthlyInfo() {
                console.log('Monthly button clicked');
                let workMonthlyTime = data[0].timeframes.monthly.current;
                let playMonthlyTime = data[1].timeframes.monthly.current;
                let studyMonthlyTime = data[2].timeframes.monthly.current;
                let exerciseMonthlyTime = data[3].timeframes.monthly.current;
                let socialMonthlyTime = data[4].timeframes.monthly.current;
                let selfMonthlyTime = data[5].timeframes.monthly.current;

                let workMonthPrevious = data[0].timeframes.monthly.previous;
                let playMonthPrevious = data[1].timeframes.monthly.previous;
                let studyMonthPrevious = data[2].timeframes.monthly.previous;
                let exerciseMonthPrevious = data[3].timeframes.monthly.previous;
                let socialMonthPrevous = data[4].timeframes.monthly.previous;
                let selfMonthPrevious = data[5].timeframes.monthly.previous;

                time[0].innerText = workMonthlyTime + "hrs";
                time[1].innerText = playMonthlyTime + "hrs";
                time[2].innerText = studyMonthlyTime + "hrs";
                time[3].innerText = exerciseMonthlyTime + "hrs";
                time[4].innerText = socialMonthlyTime + "hrs";
                time[5].innerText = selfMonthlyTime + "hrs";

                previousTime[0].innerText = `Previous: ${workMonthPrevious}hrs`;
                previousTime[1].innerText = `Previous: ${playMonthPrevious}hrs`;
                previousTime[2].innerText = `Previous: ${studyMonthPrevious}hrs`;
                previousTime[3].innerText = `Previous: ${exerciseMonthPrevious}hrs`;
                previousTime[4].innerText = `Previous: ${socialMonthPrevous}hrs`;
                previousTime[5].innerText = `Previous: ${selfMonthPrevious}hrs`;
            }

            // When the page loads, show the weekly info by default
            weeklyInfo();

            // Set up event listeners for the buttons
            dailyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                dailyInfo();
            });

            weekBtn.addEventListener('click', (f) => {
                f.preventDefault();
                weeklyInfo();
            });

            monthlyBtn.addEventListener('click', (w) => {
                w.preventDefault();
                monthlyInfo();
            });

        } else {
            console.error('Failed to fetch data.');
        }
    }).catch(error => {
        console.error('Error in fetching data:', error);
    });
});
