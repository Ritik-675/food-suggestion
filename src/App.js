import React from "react";
import "./styles.css";
import { useState } from "react";

var foodPlaces = {
  "Lajpat Nagar": [
    { name: "Sandoz", description: "One of the best restauraunt" },
    { name: "Qds", description: "North Indian, Thai and Italian cuisines" }
  ],
  "Defence Colony": [
    { name: "Oak", description: "Cafe & Bar" },
    { name: "Meraki", description: "Cafe & Bar" }
  ],
  "New Friends Colony": [
    { name: "Al Bake", description: "serve good mughlai" },
    { name: "Dawat Khana", description: "real indian touch" }
  ]
};
export default function App() {
  const [selectPlace, setPlace] = useState("Lajpat Nagar");
  function placesClickHandler(places) {
    setPlace(places);
  }
  return (
    <div className="App">
      <h1 className="heading">Delhi Food Places</h1>
      <div className="places1">
        {Object.keys(foodPlaces).map((places) => (
          <span
            className="places"
            onClick={() => placesClickHandler(places)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "3rem 0.3rem"
            }}
          >
            {places}
          </span>
        ))}
      </div>
      <div className="boxes" style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodPlaces[selectPlace].map((places) => (
            <li
              key={places.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "grey"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {places.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {places.description} </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="footer"
        style={{
          position: "relative",
          top: "50vh",
          background: "grey",
          padding: "2rem",
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}
      >
        <span
          style={{
            background: "aliceblue",
            padding: "1rem",
            borderRadius: "1rem",
            border: "1px solid black"
          }}
        >
          <a
            href="https://ritik-omega.netlify.app/"
            style={{ color: "black", textDecoration: "none" }}
          >
            Portfolio
          </a>
        </span>
      </div>
    </div>
  );
}
