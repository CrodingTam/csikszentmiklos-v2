"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import CommonHeader from "@/app/components/common-header/component";
import StyledWrapper from "./curiosities.style";

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
    label: "Number of houses <br /> in the community",
    name: "house",
  },
  {
    value: 1080,
    unit: "person",
    label: "Population <br /> of the village",
    name: "residents",
  },
  {
    value: 15,
    unit: "century",
    label: "Construction <br /> of the church",
    name: "church-constuction",
  },
  {
    value: 1332,
    unit: "year",
    label: "First mentions <br /> about the settlement",
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
    const target = document.querySelector(".curiosities--grid-item") as HTMLElement;
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
      <CommonHeader text="Curiosities" />
      <StyledWrapper container>
        {curiosities.map((curiosity) => (
          <Grid
            className="curiosities--grid-item"
            lg={3}
            xs={6}
            xxs={12}
            item
            key={curiosity.value}
          >
            <Box className="curiosities--box">
              <Typography
                variant="mainSemiBold"
                className=" curiosities--typography label"
                dangerouslySetInnerHTML={{ __html: curiosity.label }}
              />
            </Box>
            <Box className="curiosities--box">
              <Typography variant="h3" className="curiosities--typography value">
                {curiosity.value}
              </Typography>
              <Typography variant="mainSemiBold" className="curiosities--typography unit">
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
