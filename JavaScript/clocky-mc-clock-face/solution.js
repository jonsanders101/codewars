const whatTimeIsIt = function(angle) {
    const fraction = angle / 360;
    const totalMinutes = 720;
    
    if (fraction === 0) {
      return '12:00';
    }
    const minutesPastTwelve = Math.floor(totalMinutes * fraction);
    const hours = Math.floor(minutesPastTwelve / 60);
    const minutes = minutesPastTwelve - hours * 60;

    return `${formatTime(hours)}:${formatTime(minutes)}`;
  }
  
  const formatTime = function(time) {
    const formattedTime = time.toString()
    return formattedTime.length === 1 ? '0' + formattedTime : formattedTime;
  }

  module.exports = whatTimeIsIt;