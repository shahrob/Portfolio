import { useEffect, useState } from "react";

function formatTime(timeZone) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone,
    }).format(new Date());
  } catch (error) {
    return null;
  }
}

// Current wall-clock time in `timeZone`, refreshed every 15 seconds.
export function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    setTime(formatTime(timeZone));
    const timer = setInterval(() => setTime(formatTime(timeZone)), 15000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return time;
}
