import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios';

const View = () => {
  const [views, setViews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios.post("http://localhost:4000/view")
      .then((response) => {
        setViews(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch visitors.");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container mt-4">
        <h2 className="text-center mb-4">All Visitors</h2>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary me-3" style={{ width: "3rem", height: "3rem" }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="fs-5 fw-semibold">Loading visitors...</p>
          </div>
        ) : (
          <div className="table-responsive shadow">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-info text-center">
                <tr>
                  <th>Visitor Name</th>
                  <th>Purpose</th>
                  <th>Whom To Meet</th>
                  <th>Date</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {views.map((value, index) => (
                  <tr key={index}>
                    <td>{value.visitorName}</td>
                    <td>{value.purpose}</td>
                    <td>{value.whomToMeet}</td>
                    <td>{value.date}</td>
                    <td>{value.checkInTime}</td>
                    <td>{value.checkOutTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default View