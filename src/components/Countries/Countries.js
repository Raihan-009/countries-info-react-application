import React, { useEffect, useState } from "react";
import Info from "../Info/Info";
import "./Countries.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Countries = () => {
  const [countries, SetCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetCountries(data));
  }, []);

  return (
    <div className="container">
      <h5>Total Number of Countries: {countries.length}</h5>
      <div className="row">
        {countries.map((country) => (
          <div className="col-sm-4 col-12 mb-3">
            <Info country={country}></Info>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
