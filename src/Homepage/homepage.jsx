import React, { useState } from "react";
import axios from "axios";
import "./homepage.css";
import Logo from "../asset/EZ.jpg";
import Cards from "./Cards/cards";

function Homepage() {
  const [email, setEmail] = useState("");
  const [apiStatus, setApiStatus] = useState(0);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    apiCall();
  }

  const apiCall = async () => {
    try{
      const res = await axios.post("http://34.225.132.160:8002/api", {email: email}, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
      setApiStatus(res.status);
      setApiErrorMessage(null);
      setEmail(res.data.message);
    }catch(e){
      setApiStatus(e.response.status);
      setApiErrorMessage(e.message);
    }
  }

  return (
    <div className="homeContainer">
      <div className="leftSection">
        <div className="titleSection">
          {/* eslint-disable-next-line */}
          <img className="logoImage" src={Logo} alt="Image not found" />
          <div className="titleHead">Works</div>
        </div>
        <div className="titleText">A Suite Of Business Support Services</div>
        <div className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          optio vitae iusto perferendis, sequi perspiciatis modi deserunt quas
          ipsum esse nesciunt, eos qui vel error impedit similique quisquam eum
          amet.
        </div>
        <div className="rightSection">
        <Cards />
      </div>
        <form
          className="formSection"
          onSubmit={(e) => { handleSubmit(e) }}
        >
          <div>
          <input
            type="email"
            className="inputBox"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
      
          <button type="submit" className="contactButton">
            Contact Me
          </button>
          <div className="error">
            {
              apiStatus === true ? false : <>{apiErrorMessage}</>
            }
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
