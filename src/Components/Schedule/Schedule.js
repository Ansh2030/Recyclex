import React from 'react'
import './Schedule.css';
function Schedule() {
  return (
    <div>
          <div className="get-in-touch">
            <div id="get-in-touch"></div>

            <div className="content">
              <h2>Get in Touch</h2>
              <div className="container-div contact-us">
                <form className="footer_form" action="" >
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    //   value={name}
                    //   onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                    //   value={email}
                    //   onChange={(e) => setEmail(e.target.value)}
                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />

                    <label>Category</label>
                    <select
                    //   value={category}
                    //   onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="none" selected hidden>
                        Choose a category
                      </option>
                      <option style={{ fontSize: "17px" }} value="Group joining">
                        Drop Off
                      </option>
                      <option
                        style={{ fontSize: "17px" }}
                        value="Courses related"
                      >
                        Schedule Pickup
                      </option>
                      <option style={{ fontSize: "17px" }} value="Events related">
                        Schedule Private pickup
                      </option>
                    </select>

                  </div>

                  <div>
                    <label htmlFor="subject">Message</label>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Write something"
                      style={{ height: "200px" }}
                      required
                      value="Enter your message"
                    //   onChange={(e) => setMsg(e.target.value)}
                    ></textarea>

                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default Schedule
