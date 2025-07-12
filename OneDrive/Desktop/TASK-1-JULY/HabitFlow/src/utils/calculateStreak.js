import getLocalIsoDate from "./getLocalIsoDate";

export default function calculateStreak(progress = {}) {
  const dates = Object.keys(progress)
    .filter((d) => progress[d])
    .sort((a, b) => new Date(b) - new Date(a)); // newest first

  let streak = 0;
  let currentDate = new Date();

  for (let i = 0; i < dates.length; i++) {
    const iso = getLocalIsoDate(currentDate);
    if (progress[iso]) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
