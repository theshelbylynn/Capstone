import BookingForm from './BookingForm';
import { Route, Routes, Link } from "react-router-dom"



function Booking() {
    return (
<>
<div className="form-container">
<h3>Reserve a Table</h3>
</div>
<BookingForm/>

</>
    );
}


export default Booking;