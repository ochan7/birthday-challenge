import moment from 'moment';

function birthdayIsWithinGivenDuration(dob, duration) {
  const now = moment();
  const birthDate = new Date(
    new Date(dob).setFullYear(new Date().getFullYear()),
  );
  const birthday = moment(birthDate);
  const diffInDays = birthday.diff(now, 'days');
  return diffInDays <= duration && diffInDays >= -1;
}

export function filterBirthdays(duration = 'all', data) {
  if (duration === 'today') {
    return data.filter(d => birthdayIsWithinGivenDuration(d.birthday, 0));
  } else if (duration === 'upcoming') {
    return data.filter(d => birthdayIsWithinGivenDuration(d.birthday, 14));
  } else return data;
}

export function isDateLessThanNow(prev) {
  const curr = new Date().setHours(0, 0, 0, 0);
  prev = new Date(prev).setHours(0,0,0,0);
  return prev <= curr;
}

export function formatDate(d) {
  const year = d.getFullYear();
  const month = padZero(d.getMonth() + 1);
  const date = padZero(d.getDate());
  return `${year}-${month}-${date}`;
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}
