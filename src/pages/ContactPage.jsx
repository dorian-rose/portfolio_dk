import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  //to manage form:
  const form = useRef();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const sendEmail = async (data) => {
    setSending(true);
    const response = await emailjs.sendForm(
      "service_t3iwarc",
      "template_n0tsrzb",
      form.current,
      "dIsBZi0TLrlkL1irS"
    );
    console.log(response);
    if (response.text == "OK") {
      setSuccessMessage("Message sent successfully!");
    } else {
      setSuccessMessage("Error sending message. Please try again.");
    }
    setSending(false);
    reset();
  };

  const displayForm = () => {
    setSuccessMessage("");
  };
  return (
    <div>
      <h1 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center text-primary">
        Get in touch
      </h1>
      {sending ? (
        <>
          <p className="font-light tracking-widest mt-10 mx-8 text-lg sm:text-4xl text-center text-primary">
            Sending...
          </p>
          <div className="w-12 m-auto mt-4">
            <img
              className="w-full"
              src="https://i.gifer.com/ZKZg.gif"
              alt="loading gif"
            />
          </div>
        </>
      ) : successMessage == "" ? (
        <>
          <form
            className="w-4/5 my-10 m-auto border border-primary border-1 rounded-md p-5 max-w-md"
            onSubmit={handleSubmit((data) => sendEmail(data))}
            ref={form}
            //onSubmit={sendEmail}
          >
            <input
              className="border mt-5 px-2 h-22 font-thin  focus:outline-none focus:border-primary focus:border-2 focus:border-solid rounded-md w-full "
              {...register("name", {
                required: "Please enter your name or fullname",
              })}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <p className="font-thin italic text-red-700">
              {errors.name?.message}
            </p>

            <input
              className="border mt-5 px-2 h-22 font-thin  focus:outline-none focus:border-primary focus:border-2 focus:border-solid rounded-md w-full "
              {...register("email", {
                required: "Please enter your email",
              })}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <p className="font-thin italic text-red-700">
              {errors.email?.message}
            </p>
            <input
              className="border  mt-5 px-2 h-22 font-thin  focus:outline-none focus:border-primary focus:border-2 focus:border-solid rounded-md w-full"
              type="text"
              {...register("subject", {
                required: "Please enter a subject",
              })}
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <p className="font-thin italic text-red-700">
              {errors.subject?.message}
            </p>
            <textarea
              className="border mt-5 px-2 h-22 font-thin  focus:outline-none focus:border-primary focus:border-2 focus:border-solid rounded-md w-full"
              {...register("message", {
                required: "Message is required",
              })}
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>

            <p className="font-thin italic text-red-700">
              {errors.message?.message}
            </p>

            <input
              className="mt-2 w-full border border-primary hover:bg-primary hover:text-white rounded-md px-2 "
              type="submit"
              defaultValue="Send"
            />
          </form>
        </>
      ) : (
        <>
          <>
            <p className="font-light tracking-widest mt-4 mx-8 text-lg sm:text-4xl text-center text-primary">
              {successMessage}
            </p>
            <div className="flex justify-center">
              <button
                className="mx-2 mt-10 font-thin tracking-wide w-fit py-1 px-2  text-primary border border-primary  hover:bg-primary hover:text-background rounded-md shadow-lg"
                onClick={displayForm}
              >
                New Message
              </button>
              <Link
                className="mx-2 mt-10 font-thin tracking-wide block w-fit py-1 px-2  bg-primary text-background border border-primary hover:bg-background hover:text-primary rounded-md shadow-lg"
                to="/"
              >
                Home
              </Link>
            </div>
          </>
        </>
      )}
    </div>
  );
};
