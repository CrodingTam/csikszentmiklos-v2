"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./style";
import CommonHeader from "@/app/components/common-header/component";

export type Curiosities = {
  value: number;
  unit: string;
  label: string;
  name: string;
};

const curiosities: Curiosities[] = [
  {
    value: 370,
    unit: "unit",
    label: "Number of houses",
    name: "house",
  },
  {
    value: 1080,
    unit: "person",
    label: "Population",
    name: "residents",
  },
  {
    value: 15,
    unit: "century",
    label: "Construction of the church",
    name: "church-constuction",
  },
  {
    value: 1332,
    unit: "year",
    label: "First mentions",
    name: "first-mentions",
  },
];

const Curiosities: FC = () => {
  const [metricsDone, setMetricsDone] = useState<boolean>(false);
  const animateCounter = useCallback((element: Element, target: number, duration: number) => {
    const start = 0;
    const increment = 1;
    const interval = duration / (target / increment);
    let current = start;
    element.textContent = current.toString();

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current.toString();

      if (current >= target) {
        clearInterval(timer);
      }
    }, interval);
  }, []);

  const scrollHandler = useCallback(() => {
    const target = document.querySelector(".curiosity-item") as HTMLElement;
    const rect = target?.getBoundingClientRect();
    if (
      !metricsDone &&
      rect &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      const curiositiesElements = document.querySelectorAll(".curiosity-value");
      curiositiesElements.forEach((element) => {
        animateCounter(element, Number(element.innerHTML), 5000);
      });
      setMetricsDone(true);
    }
  }, [animateCounter, metricsDone]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <>
      <CommonHeader text="Curiosities" type="component" />
      <StyledWrapper container>
        {curiosities.map((curiosity) => (
          <Grid className="curiosity-item" item key={curiosity.value}>
            <Typography variant="mainSemiBold" className="curiosity-label">
              {curiosity.label}
            </Typography>
            <Box className="curiosity-box">
              <Typography variant="h3" className="curiosity-value">
                {curiosity.value}
              </Typography>
              <Typography variant="mainSemiBold" className="curiosity-unit">
                {curiosity.unit}
              </Typography>
            </Box>
          </Grid>
        ))}
      </StyledWrapper>
    </>
  );
};

export default Curiosities;
