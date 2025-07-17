import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const Add = () => {
  const [input, changeInput] = useState({
    visitorName: "",
    purpose: "",
    whomToMeet: "",
    date: "",
    checkInTime: "",
    checkOutTime: ""
  })

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  }

  const readValues = () => {
    console.log(input);
    axios.post("http://localhost:4000/add", input).then(
        (response) => {
        alert("Successfully added");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add visitor.")
      })
  }

  return (
    <div>
      <Nav />
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className='text-primary fw-bold'>WELCOME TO THE VISITORS LOG</h1>
            <h4 className='text-secondary'>Enter Visitor Details</h4>
          </div>
        </div>
        <hr />
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="visitorName" value={input.visitorName} onChange={inputHandler} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Purpose</label>
            <input type="text" className="form-control" name="purpose" value={input.purpose} onChange={inputHandler} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Whom to meet</label>
            <input type="text" className="form-control" name="whomToMeet" value={input.whomToMeet} onChange={inputHandler} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check In Time</label>
            <input type="time" className="form-control" name="checkInTime" value={input.checkInTime} onChange={inputHandler} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check Out Time</label>
            <input type="time" className="form-control" name="checkOutTime" value={input.checkOutTime} onChange={inputHandler} />
          </div>
          <div className="col-12 text-center pt-3">
            <button className="btn btn-success px-5 py-2 fw-bold" onClick={readValues}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
