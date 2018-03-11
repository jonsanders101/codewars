const whatTimeIsIt = function(angle) {
    const fraction = angle / 360;
    
    if (fraction === 0 || fraction === 1) {
      return '12:00';
    }
    const minutesPastTwelve = Math.floor(12 * 60 * fraction);
    const hours = Math.floor(minutesPastTwelve / 60);
    const minutes = minutesPastTwelve - (hours * 60);
    return `${formatTime(hours)}:${formatTime(minutes)}`;
  }
  
  const formatTime = function(time) {
    const formattedTime = time.toString()
    return formattedTime.length === 1 ? '0' + formattedTime : formattedTime;
  }

  module.exports = whatTimeIsIt;