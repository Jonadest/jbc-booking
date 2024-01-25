import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Logo from "../Logo";
import "./Booking.css";
import Carousel from "../Carousel/Carousel";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Define available days and working hours
  const availableDays = ["Wednesday", "Thursday", "Friday"];
  const workingHours = { start: 8, end: 21 }; // 24-hour format

  // Function to check if the selected date is valid
  const isValidDate = (date) => {
    const day = moment(date).format("dddd");
    const isAvailableDay = availableDays.includes(day);
    const isWorkingHour =
      date.getHours() >= workingHours.start &&
      date.getHours() <= workingHours.end;

    return isAvailableDay && isWorkingHour;
  };

  // Handle date change
  const handleDateChange = (date) => {
    if (isValidDate(date)) {
      setSelectedDate(date);
    } else {
      // Handle invalid date selection
      alert("Invalid date or time. Please choose another slot.");
    }
  };

  // Handle appointment submission
  const handleAppointmentSubmit = () => {
    // Add your logic to handle the appointment submission
    if (selectedDate) {
      alert(`Appointment scheduled for ${selectedDate}`);
      // Add logic to store the appointment data or make an API call
    } else {
      alert("Please select a valid date and time before submitting.");
    }
  };

  return (
    <div className=" book">
      <div className="d-flex justify-content-center ">
        <Logo />
      </div>
      <div className="wrapper text-center ">
        <div className="caro">
          <h1>BOOK NOW</h1>
          <Carousel />
        </div>
        <div className="booking-wrapper ">
          <DatePicker
            className="dateP"
            placeholderText="Schedule Appointment"
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            minDate={new Date()} // Prevent past dates
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <button
            className="btn btn-dark m-2"
            onClick={handleAppointmentSubmit}
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
