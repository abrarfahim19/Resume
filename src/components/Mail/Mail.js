import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_vknniih","template_fhq0yum", form.current, 'Dzu577HrTE6mqSTXw')
      .then((result) => {
          console.log(result.text);
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='mx-auto w-50 '>
      <form ref={form} onSubmit={sendEmail}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" name="user_email" class="form-label">Name</label>
        <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <input type="submit" className='btn btn-primary' value="Send" />
    </form>
    </div>
  );
};

export default Mail;