import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Techs from "../techs.js";
import Navbar from "./Navbar.js";

const Create = (props) => {
  const initialFormState = { profile: "", exp: 0, techs: [], desc: "" };

  const navigate = useNavigate();
  const [form, setForm] = useState(initialFormState);

  const setTechsInForm = (e) => {
    let techExists = form.techs.some((tech) => {
      return tech === e.target.value;
    });
    if (e.target.checked) {
      if (!techExists)
        setForm({ ...form, techs: [...form.techs, e.target.value] });
    } else {
      if (techExists) {
        let filteredTechs = form.techs.filter((tech) => {
          return tech !== e.target.value;
        });
        setForm({ ...form, techs: filteredTechs });
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/addjobpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then(() => {
        navigate("/employer/feed");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const resetForm = () => {
    setForm(initialFormState);
  };

  const { profile, exp, desc } = form;

  return (
    <div className="create-div">
      <Navbar user={props.user} page="create" />
      <div className="create-container">
        <h2>Create New Job Post</h2>
        <form autoComplete="off" onSubmit={submitForm} onReset={resetForm}>
          <label htmlFor="jobprofile">Job Profile</label>
          <br />
          <input
            type="text"
            name="jobprofile"
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            value={profile}
            required
          />
          <br />
          <br />
          <label htmlFor="yearofexp">Years of Experience</label>
          <br />
          <input
            min="0"
            type="number"
            name="yearofexp"
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            value={exp}
          />
          <br />
          <br />
          <label htmlFor="jobdesc">Job Description</label>
          <br />
          <textarea
            type="text"
            name="jobdesc"
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            value={desc}
          />
          <br />
          <h4>Please select required techs</h4>
          <ul required>
            {Techs.map(({ name }, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`create-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={setTechsInForm}
                  />
                  <label htmlFor={`create-checkbox-${index}`}>{name}</label>
                </li>
              );
            })}
          </ul>
          <br />
          <button className="create-submit" type="submit">
            Submit
          </button>
          <button className="create-reset" type="reset">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
