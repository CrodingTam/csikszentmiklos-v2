"use client";

import { FC, useEffect, useState } from "react";
import StyledWrapper from "./style";
import { DateTime } from "luxon";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

type TimeValues = {
  [key: string]: number;
};

type Props = {
  date: string;
};

const INITIAL_TIME_VALUES: TimeValues = { days: 0, hours: 0, mins: 0, sec: 0 };

const TimeCounter: FC<Props> = ({ date }) => {
  const [timeValues, setTimeValues] = useState<TimeValues>(INITIAL_TIME_VALUES);
  const staticTimeTypes = ["Days", "Hours", "Minutes", "Seconds"];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.now();
      const startDate = DateTime.fromISO(date);
      const dif = startDate.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();

      if (dif && dif.seconds !== undefined && dif.seconds > 0) {
        setTimeValues({
          days: Math.floor(dif.days || 0),
          hours: Math.floor(dif.hours || 0),
          mins: Math.floor(dif.minutes || 0),
          sec: Math.floor(dif.seconds),
        });

        return;
      }

      return;
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const normalise = (value: number, type: string): number => {
    const maxValue = type === "days" ? 365 : 60;
    return ((value - 0) * 100) / (maxValue - 0);
  };

  return (
    <StyledWrapper container>
      {Object.entries(timeValues).map(([key, value], index) => {
        return (
          <Grid item key={index}>
            <Typography variant="mainSemiBold">{staticTimeTypes[index]}</Typography>
            <CircularProgress
              variant="determinate"
              value={normalise(value, key)}
              thickness={4}
              size={80}
            />
            <Box>
              <Typography variant="caption">{value}</Typography>
            </Box>
          </Grid>
        );
      })}
    </StyledWrapper>
  );
};

export default TimeCounter;
