


export function daysToSeconds(days) {
  return days * 24 * 60 * 60;
}

export function daysToMs(days) {
  return daysToSeconds(days) * 1000;
}

  export function getDate() {
  const date = new Date();
  return date.toLocaleDateString();
}

export function getTime() {
  const time = new Date();
  return time.toLocaleTimeString();
}

export function timestamp() { return new Date().toISOString() };

const datetime = {
  date: getDate,
  time: getTime,
  timestamp: timestamp,
  daysToMs: daysToMs,
  daysToSeconds: daysToSeconds
}


export default datetime;
