export default function timeAgo(dateParam) {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
  const today = new Date();
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const minutesLeft = Math.round(minutes - (hours * 60));

  if (seconds < 5) {
    return 'now';
  } if (seconds < 60) {
    return `${seconds} seconds ago`;
  } if (seconds < 90) {
    return 'about a minute ago';
  } if (minutesLeft > 0 && hours > 0) {
    return `about ${hours} hours and ${minutesLeft} minutes ago`;
  } if (minutes > 60 && minutesLeft > 0 && hours > 0) {
    return `about ${hours} hours and ${minutesLeft} minutes ago`;
  } if (minutes > 60 && minutesLeft <= 0) {
    return `about ${hours - 1} hours and half ago`;
  }

  return `${minutes} minutes ago`;
}
