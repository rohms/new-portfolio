import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };

  return (
    <>
      <section id="contact" className="contact--container">
        <form
          netlify
          name="contact"
          className="contact--form"
          onSubmit={handleSubmit}
        >
          <h2>Get in touch with me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="contact--form__label--inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="contact--form__submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export { Contact };
