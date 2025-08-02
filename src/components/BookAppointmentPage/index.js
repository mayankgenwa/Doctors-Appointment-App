
import "./index.css"
import React from 'react';
import { data } from '../data';
import Header from "../Header"
import {Component} from "react"

class BookAppointmentPage extends Component {
    state = {
      name: '',
      email: '',
      datetime: '',
      submitted: false,
    };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  onClickBookAnother = () => {
    const {history} = this.props
    history.push("/Doctors")
  }

  render() {
    const { id } = this.props.match.params;
    const {submitted} = this.state
    const doctor = data.find((eachItem) => eachItem.id === id);

    return (
        <>
            <Header/>
            <div className="book-appointment-form-container">
                <div className="appointment-form-container">
                    {submitted ? (
                        <>
                            <h2 className="confirm-msg">Appointment booked with {doctor.name}!</h2>
                            <button type="button" className="book-another-btn" onClick={this.onClickBookAnother}>Book Another Appointment</button>
                        </>
                    ) : (
                        <>
                            <h2 className="form-heading">Book Appointment with {doctor.name}</h2>
                            <form onSubmit={this.handleSubmit} className="form-container">
                                
                                <label htmlFor="name" className="input-label">Name</label>
                                <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="input"
                                    id="name"
                                />
                                <label htmlFor="email" className="input-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    required
                                    className="input"
                                    id="email"
                                />
                                <label htmlFor="date-time" className="input-label">Date & Time</label>
                                <input
                                    name="datetime"
                                    type="datetime-local"
                                    value={this.state.datetime}
                                    onChange={this.handleChange}
                                    required
                                    id="date-time"
                                    className="input"
                                />
                                <div className="confirm-btn-container">
                                    <button type="submit" className="confirm-btn">Confirm Appointment</button>
                                </div>
                            </form>
                        </>
                    )}
                    
                </div>
            </div>
        </>
      
    )
  }
}


export default BookAppointmentPage;