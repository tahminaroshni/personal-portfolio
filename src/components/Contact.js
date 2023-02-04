import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault();


    // reset 
    e.target.querySelector('.fullname').value = '';
    e.target.querySelector('.email').value = '';
    e.target.querySelector('.message').value = '';
  }

  return (
    <div id="contact">
      <SectionTitle title={"Contact"} />
      <div className="contact mt-40">
        <form onSubmit={sendMessage}>
          <div className="form-control grid grid-cols-2 gap-20">
            <input
              className="fullname bg-transparent py-14 px-28 outline-none rounded-full border border-white/25 focus:border-cyan-500 "
              type="text" name="fullname" required placeholder="Write your name" />
            <input
              className="email bg-transparent py-14 px-28 outline-none rounded-full border border-white/25 focus:border-cyan-500 "
              type="email" name="email" required placeholder="Write your email" />
            <textarea
              className="message bg-transparent py-9 px-28   resize-none outline-none rounded-full border border-white/25 focus:border-cyan-500 duration-300"
              name="message" cols="30" placeholder="Write your message"></textarea>
            <button className="contact-btn inline-block py-8 px-14 border border-white/25 uppercase rounded-full hover:bg-cyan-500/25 hover:border-cyan-500/25 duration-300 tracking-widest">
              <a href="https://www.google.com" target="_blank" rel="noreferrer">Send Message</a>
            </button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default Contact;