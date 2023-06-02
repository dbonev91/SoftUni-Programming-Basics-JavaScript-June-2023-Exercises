function onTimeForTheExam (inputStringArray) {
  const examHourInput = Number(inputStringArray[0]);
  const examMinuteInput = Number(inputStringArray[1]);
  const arrivalHourInput = Number(inputStringArray[2]);
  const arrivalMinuteInput = Number(inputStringArray[3]);

  const MINUTES_OR_SECONDS = 60;

  const examHourAsMinutes = examHourInput * MINUTES_OR_SECONDS;
  const allExamStartMinutes = examHourAsMinutes + examMinuteInput;

  const arrivalHourAsMinutes = arrivalHourInput * MINUTES_OR_SECONDS;
  const allArrivalMinues = arrivalHourAsMinutes + arrivalMinuteInput;

  const differenceBetweenExamStartAndStudentArrival = allExamStartMinutes - allArrivalMinues;

  const isStudentLate = differenceBetweenExamStartAndStudentArrival < 0;

  const timeDifferenceAsAPositiveNumber = Math.abs(differenceBetweenExamStartAndStudentArrival);

  if (isStudentLate) {
    console.log('Late');

    if (timeDifferenceAsAPositiveNumber >= 60) {
      let minutes = timeDifferenceAsAPositiveNumber % 60;
      const hours = (timeDifferenceAsAPositiveNumber - minutes) / 60;

      if (minutes <= 9) {
        minutes = `0${minutes}`;
      }

      console.log(`${hours}:${minutes} hours after the start`);
    } else {
      console.log(`${timeDifferenceAsAPositiveNumber} minutes after the start`);
    }
  }

  const isStudentExactlyOnTime = differenceBetweenExamStartAndStudentArrival === 0;

  if (isStudentExactlyOnTime) {
    console.log('On time');
  }

  const isStudentOnTimeUntil30MinutesBeforeExamStart = differenceBetweenExamStartAndStudentArrival > 0 && differenceBetweenExamStartAndStudentArrival <= 30;

  if (isStudentOnTimeUntil30MinutesBeforeExamStart) {
    console.log('On time');
    console.log(`${timeDifferenceAsAPositiveNumber} minutes before the start`);
  }

  const isStudentGoEarlyToTheExam = differenceBetweenExamStartAndStudentArrival > 30;

  if (isStudentGoEarlyToTheExam) {
    console.log('Early');

    if (timeDifferenceAsAPositiveNumber >= 60) {
      let minutes = timeDifferenceAsAPositiveNumber % 60;
      const hours = (timeDifferenceAsAPositiveNumber - minutes) / 60;

      if (minutes <= 9) {
        minutes = `0${minutes}`;
      }

      console.log(`${hours}:${minutes} hours before the start`);
    } else {
      console.log(`${timeDifferenceAsAPositiveNumber} minutes before the start`);
    }
  }
}