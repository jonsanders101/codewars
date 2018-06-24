const whatTimeIsIt = (angle) => {
  const fraction = angle / 360;
  const totalMinutes = 720;
  const minutesPastTwelve = Math.floor(totalMinutes * fraction);
  const hours = Math.floor(minutesPastTwelve / 60);
  const minutes = minutesPastTwelve - hours * 60;

  return formatTime(hours, minutes);
};

const formatTime = (hours, minutes) => {
  hours = hours === 0 ? 12 : hours;

  return [hours, minutes].map(time => {
    let formattedTime = time.toString();
    return formattedTime.length === 1 ? '0' + formattedTime : formattedTime;
  }).join(':');
};

export default whatTimeIsIt;