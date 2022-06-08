import React from 'react';

const Contact = () => {
  return (
      <div style={{color:"white",margin:"auto 20px"}} >
<>
  {/* Hello world */}
  {/*Section: Contact v.2*/}
  <section className="mb-4">
    {/*Section heading*/}
    <h2 className="h1-responsive font-weight-bold text-center my-4">
      Contact us
    </h2>
    {/*Section description*/}
    <p className="text-center w-responsive mx-auto mb-5">
      Do you have any questions? Please do not hesitate to contact us directly.
     
    </p>
    <div className="row" style={{margin:"40px 50px",padding:"30px 50px"}}>
      {/*Grid column*/}
      <div className="col-md-9 mb-md-0 mb-5">
        <form
          id="contact-form"
          name="contact-form"
           >
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-0">
              <label htmlFor="name" className="">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
               
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-0">
              <label htmlFor="email" className="">
                  Your email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
                
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          {/*Grid row*/}
         
          {/*Grid row*/}
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-12">
              <div className="md-form">
              <label htmlFor="message">Your message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows={2}
                  className="form-control md-textarea"
                  defaultValue={""}
                />
                
              </div>
            </div>
          </div>
          {/*Grid row*/}
        </form>
        <div className="text-center text-md-left">
          <a
            className="btn btn-primary"
            onclick="document.getElementById('contact-form').submit();"
         style={{margin:"20px 20px"}} >
            Send
          </a>
        </div>
        <div className="status" />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
          <li>
          <i className="fa fa-map-marker" aria-hidden="true"/>
            <p>gabes,tunisia</p>
          </li>
          <li>
          <i className="fa fa-phone" aria-hidden="true"/>
            <p>+ 216 05 05 08 04</p>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"/>
            <p>contact@GoMyCode.com</p>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
    </div>
  </section>
  {/*Section: Contact v.2*/}
</>
      </div>
  )}

 
export default Contact;