import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./forecastStyle.module.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }: any) => {
  const dayInWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  console.log(data);
  return (
    <>
      <label className={styles.title}>Daily Info</label>
      <Accordion allowZeroExpanded>
        {data?.list.slice(0, 7).map((item: any, idx: any) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={`${styles.dailyItem} ${styles.dailyItemDay}`}>
                  <img
                    src={`icons/${item?.weather?.[0]?.icon}.png`}
                    className={styles.iconSmall}
                    alt=""
                  />
                  <label className={styles.day}>{forecastDay[idx]}</label>
                  <label className={styles.description}>
                    {item?.weather?.[0]?.main}
                  </label>
                  <label className={styles.minMax}>
                    {Math.round(item?.main?.temp_min)}°C /{" "}
                    {Math.round(item?.main?.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Pressure</label>
                  <label>{item?.main?.pressure} hPa</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Humidity</label>
                  <label>{item?.main?.humidity}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Clouds</label>
                  <label>{item?.clouds?.all}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Wind Speed</label>
                  <label>{item?.wind?.speed} m/s</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Sea Level</label>
                  <label>{item?.main?.sea_level}m</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Feels Like</label>
                  <label>{Math.round(item?.main?.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
