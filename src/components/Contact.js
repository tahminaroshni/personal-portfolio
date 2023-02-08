import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useGsapContactReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const btnRef = useRef(null);

  const inputsRef = [nameRef, emailRef, messageRef, btnRef];

  useGsapContactReveal(inputsRef, 1);

  const sendMessage = (e) => {
    e.preventDefault();

    // emailjs integration
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_ID
    ).then(() => {
      console.log('Message sent');
    }, () => {
      console.log('Message not sent');
    })

    // reset 
    e.target.querySelector('.fullname').value = '';
    e.target.querySelector('.email').value = '';
    e.target.querySelector('.message').value = '';
  }

  return (
    <div id="contact">
      <SectionTitle title={"Contact"} />
      <div className="contact mt-40 overflow-hidden">
        <form onSubmit={sendMessage} ref={formRef}>
          <div className="form grid grid-cols-2 gap-20">
            <div ref={nameRef} className="form-control">
              <input
                className="fullname bg-transparent py-14 px-28 w-full outline-none rounded-full border border-white/25 focus:border-cyan-500 "
                type="text" name="fullname" required placeholder="Write your name" />
            </div>
            <div ref={emailRef} className="form-control">
              <input
                className="email bg-transparent py-14 px-28 w-full outline-none rounded-full border border-white/25 focus:border-cyan-500 "
                type="email" name="email" required placeholder="Write your email" />
            </div>
            <div ref={messageRef} className="form-control">
              <textarea
                className="message bg-transparent py-9 px-28 w-full resize-none outline-none rounded-full border border-white/25 focus:border-cyan-500 duration-300"
                name="message" cols="30" placeholder="Write your message"></textarea>
            </div>
            <div ref={btnRef} className="form-control">
              <input className="contact-btn inline-block py-14 px-28 w-full border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest" type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div >
  );
};

export default Contact;