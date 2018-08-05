import moment from 'moment';

function birthdayIsWithinGivenDuration(dob, duration) {
  const now = moment();
  const birthday = moment(dob);
  if (monthAndDateAreLessThanNow(birthday, now)) {
    birthday.add('years', now.diff(birthday, 'years'));
    return now.diff(birthday, 'days') <= duration;
  }
}

function monthAndDateAreLessThanNow(prev, curr) {
  return (
    prev.get('month') <= curr.get('month') &&
    prev.get('date') <= curr.get('date')
  );
}

export function filterBirthdays(duration = 'all', data) {
  if (duration === 'today') {
    return data.filter(d => birthdayIsWithinGivenDuration(d.birthday, 0));
  } else if (duration === 'upcoming') {
    return data.filter(d => birthdayIsWithinGivenDuration(d.birthday, 14));
  } else return data;
}

export function isDateLessThanNow(prev, curr) {
  return (
    curr.getYear() >= prev.getYear() &&
    curr.getYear() >= prev.getYear() &&
    curr.getDate() >= prev.getDate()
  );
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
