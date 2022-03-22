import React from "react";
import "./Info.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Info = (props) => {
  console.log(props.country);
  //   console.log(props.countries);
  //   const area = props.countries.map((country) => console.log(country.area));

  return (
    <div className="country">
      <h2 className="country-name">
        Country Name : {props.country.name.common}
      </h2>
      <div className="country-flag">
        <img src={props.country.flags.svg} alt="" />
      </div>
      <div className="country-info">
        <p>Official Name : {props.country.name.official}</p>
        <p> Area : {props.country.area}</p>
        <p> Capital : {props.country.capital}</p>
        <p>Population : {props.country.population}</p>
        <p>Region : {props.country.region}</p>
        <p>Sub-region : {props.country.subregion}</p>
      </div>
    </div>
  );
};

export default Info;
