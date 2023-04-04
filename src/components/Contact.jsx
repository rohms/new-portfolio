import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mailerState.name === "") {
      toast.info("Please fill in your name");
    } else if (mailerState.email === "") {
      toast.info("Please fill in the email field");
    } else if (mailerState.message === "") {
      toast.info("Please write a message first");
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...mailerState }),
      })
        .then(
          () => toast.success("Message sent! 🦄"),
          setMailerState({
            name: "",
            email: "",
            message: "",
          })
        )
        .catch((error) =>
          toast.error(`There was an issue sending message: ${error}`)
        );
    }
  };

  return (
    <>
      <section id="contact" className="contact-container">
        <form
          data-netlify="true"
          name="contact"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h2>Get in touch with me</h2>
          <p>
            Get in touch with me if you can cool ideas or want me to work with
            you!
          </p>
          <div className="contact-form__label--inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={mailerState.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={mailerState.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={mailerState.message}
              onChange={handleChange}
            />

            <button type="submit" className="contact-form__submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export { Contact };
