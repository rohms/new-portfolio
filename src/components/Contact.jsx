import React, { useState } from "react";
import { toast } from "react-toastify";

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
    if (name === "") {
      toast.info("Please fill in your name");
    } else if (email === "") {
      toast.info("Please fill in the email field");
    } else if (message === "") {
      toast.info("Please write a message first 😎");
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => toast.success("Message sent!"))
        .catch((error) =>
          toast.error(`There was an issue sending message: ${error}`)
        );
    }
  };

  return (
    <>
      <section id="contact" className="contact--container">
        <form
          netlify="true"
          name="contact"
          className="contact--form"
          onSubmit={handleSubmit}
        >
          <h2>Get in touch with me</h2>
          <p>
            Get in touch with me if you can cool ideas or want me to work with
            you!
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
