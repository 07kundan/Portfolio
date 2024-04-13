import React from "react";

function Contact() {
  return (
    <>
      <div
        id="Contact"
        className="h-screen p-4 flex items-center justify-center text-[#FCA311] lg:pt-12"
      >
        <div className="flex justify-center items-center p-6 py-14 shadow-xl shadow-black rounded-xl lg:w-[55%] lg:h-[75%] lg:p-0 ">
          <form
            action=""
            className="w-full p-3 flex flex-col justify-center items-center gap-5 lg:gap-3 lg:h-full lg:p-0"
          >
            <div className="lg:w-[80%] px-10 lg:flex justify-between items-center leading-3">
              {window.innerWidth > 768 && (
                <label htmlFor="Name">Enter your Name</label>
              )}
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your Name"
                className="bg-transparent border text-center rounded-lg border-white p-2 lg:w-[60%] "
              />
            </div>

            <div className="lg:w-[80%] px-10 lg:flex justify-between items-center leading-3 ">
              {window.innerWidth > 768 && (
                <label htmlFor="Name">Enter your E-Mail</label>
              )}
              <input
                type="email"
                name="Email"
                required
                placeholder="Enter your Email"
                className="bg-transparent border text-center rounded-lg border-white p-2 lg:w-[60%]"
              />
            </div>

            <div className="lg:h-[55%] w-[80%] lg:flex lg:justify-center">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message"
                className="bg-transparent w-full text-xl p-3 border-2 border-white lg:h-full lg:w-[90%] "
              ></textarea>
            </div>

            <div className="bg-[#e48f35] text-blue-900 font-bold p-2 rounded-lg px-6">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Contact;
