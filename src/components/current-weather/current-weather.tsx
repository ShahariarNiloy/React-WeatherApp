import React from "react";
import styles from "./currentWeatherStyles.module.css";

const CurrentWeather = ({ data }: any) => {
  console.log(data);
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data?.city}</p>
          <p className={styles.weatherDescription}>
            {data?.weather?.[0]?.main}
          </p>
        </div>
        <img
          src={`icons/${data?.weather?.[0]?.icon}.png`}
          alt="weather"
          className={styles.weatherIcon}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>{Math.round(data?.main?.temp)}°C</p>
        <div className={styles.details}>
          <div className={styles.parameterRow}>
            <span
              className={`${styles.parameterLabel} ${styles.parameterLabelTop}`}
            >
              Details
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Feels Like</span>
            <span className={styles.parameterValue}>
              {Math.round(data?.main?.feels_like)}°C
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Wind</span>
            <span className={styles.parameterValue}>
              {Math.round(data?.wind?.speed)} m/s
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Humidity</span>
            <span className={styles.parameterValue}>
              {data?.main?.humidity}%
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Pressure</span>
            <span className={styles.parameterValue}>
              {data?.main?.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
