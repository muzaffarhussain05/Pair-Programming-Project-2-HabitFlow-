// Produces YYYY-MM-DD in the *local* timezone.
export default function getLocalIsoDate(date = new Date()) {
    const offsetMs = date.getTimezoneOffset() * 60000; // minutes → ms
    return new Date(date.getTime() - offsetMs).toISOString().slice(0, 10);
  }