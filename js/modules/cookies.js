import { daysToMs } from './datetime.js';

function setCookie(key, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + daysToMs(days);
  const expires = date.toUTCString();
  document.cookie = `${key}=${value}; expires=${expires}; path=/; SameSite=Lax; Secure`;
}
