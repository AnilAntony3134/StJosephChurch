import React from 'react';
import './contactform.css';
import joseph from '../../assets/joseph.jpg'

const Contactform = () => {
  return (
    <div className='contactus-wrap'>
          <div className='contactus-wrap-color'>
          {/* <div className='contactus-wrap-left'>
            
            <form action="">
              <div className="contactus-input-row">
              <h1>Contact Us</h1>
                <div className="contactus-input-group">
                  <label>Name</label>
                  <input type="text" placeholder='Enter your name' />
                </div>
                <div className="contactus-input-group">
                  <label>Phone</label>
                  <input type="text" placeholder='Enter your phone number' />
                </div>
                <div className="contactus-input-group">
                  <label>Email</label>
                  <input type="text" placeholder='Enter you Email' />
                </div>
                <div className="contactus-input-group">
                  <label>Query</label>
                  <textarea name="query" id="" cols="30" rows="10">
                Enter Query
              </textarea>
              <button type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
          */}   
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvWiC_x_L8vE5PvxqHR6jJXTyjaaql-tFYp-WA3VKNp-tJAQ/viewform?embedded=true" width="780" height="820" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <div className='contactus-wrap-middle'>
              <img src={joseph} alt="image" />

          </div> 
          <div className='contactus-wrap-right'>
            <h1>Reach Us</h1>
            <table>
                <tr>
                    <td>Email</td>
                    <td>sjmcathedral@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>0471 2320132</td>
                </tr>
 
                <tr>
                    <td>Office Hours</td>
                    <td>9:00am to 1:00pm - 4:00pm:6:00pm</td>
                </tr>
                <tr>
                    <td>Catechism</td>
                    <td>8:30 am to 10:00 pm (Sunday)</td>
                </tr>
                <tr>
                    <td>Parish Priest</td>
                    <td>Very Rev. Msgr. Nicholas T</td>
                </tr>
                <tr>
                    <td>Asst. Parish Priest</td>
                    <td>Rev. Fr. Tomy Thomas  </td><td>Rev. Fr. Mackins Mathew
                      </td>
                </tr>
                
                
                
            </table>
         
          </div>
          </div>
          
    </div>

  )
}
export default Contactform