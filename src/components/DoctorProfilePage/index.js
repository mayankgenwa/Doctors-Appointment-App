import React from 'react';
import {Component} from "react"
import {data} from "../data"
import Header from "../Header"
import "./index.css"

class DoctorProfilePage extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id)
    const doctor = data.find(eachItem => {
      return (id === eachItem.id)
    })

    return (
      <>
        <Header/>
        <div className='doctor-page-container'>
          <img src={doctor.image} alt={doctor.name} className="profile-img" />
          <div className='doctor-detail-container'>
            <h2 className='name'>{doctor.name}</h2>
            <p className='details'>{doctor.details}</p>
            <h3 className='schedule-heading'>Availability Schedule</h3>
            <ul className='schedule-list'>
              {Object.entries(doctor.schedule).map(([day, time]) => (
                <li key={day} className='day-time'>{day}: {time}</li>
              ))}
            </ul>
            <button type="button" className='book-Appointment-btn' onClick={() => this.props.history.push(`/BookAppointmentPage/${doctor.id}`)}>Book Appointment</button>
          </div>
        </div>
      </>
      
    )
  }
}

export default DoctorProfilePage;