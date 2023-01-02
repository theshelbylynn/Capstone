
import { useForm } from 'react-hook-form';
import { Route, Routes, Link } from "react-router-dom"


function BookingForm() {


    return (

   <>
  
    <div className='form-container'>
    <form>

        <div className='input'>
  <label>
    First Name :
    <input type="text" name="first name" />
    </label>
  </div>

        <div className='input'>
  <label>
    Last Name :
    <input type="text" name="last name" />
  </label>
  </div>

        <div className='input'>
  <label>
    Email :
    <input type="text" name="email" />
  </label>
  </div>

        <div className='input'>
  <label>
    Date of Reservation:
    <input type="date" name="date" />
  </label>
  </div>

  <div className='input'>
  <label>
   Time of Reservation:
    <input type="time" name="time" />
  </label>
  </div>

<div className='input'>
  <input type="submit" value="Submit" />
  </div>
 
</form>
</div>


   </>


    );
  }


 
  
  export default BookingForm;