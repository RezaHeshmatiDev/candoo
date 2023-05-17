import { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";

import { getCurrentTime } from "../../utils/Functions";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const timeInterval = useRef<any>(null);

  useEffect(() => {
    intervalToCurrentTime();

    return () => {
      clearInterval(timeInterval.current);
    };
  }, []);

  const intervalToCurrentTime = () => {
    timeInterval.current = setInterval(() => {
      const time = getCurrentTime();
      setCurrentTime(time);
    }, 1000);
  };

  return <Typography>{currentTime}</Typography>;
};

export default CurrentTime;
