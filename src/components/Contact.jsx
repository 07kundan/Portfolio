import React from "react";

function Contact() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-fuchsia-400 *:">
      <form action="" className=" flex flex-col gap-4 p-4 items-center w-full ">
        <div className="w-[60%] flex justify-between">
          <label htmlFor="Name">Enter your Name</label>
          <input
            type="text"
            name="Name"
            className="bg-transparent text-black border-2 border-black"
          />
        </div>

        <div className="w-[60%] flex justify-between">
          <label htmlFor="Email">Enter your Email</label>
          <input
            type="email"
            name="Email"
            className="bg-transparent text-black border-2 border-black"
          />
        </div>

        <div className="flex justify-center">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-transparent text-black border-2 border-black"
          ></textarea>
        </div>

        <div className="bg-blue-400 p-2 rounded-lg px-6">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
