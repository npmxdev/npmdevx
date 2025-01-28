import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
        data-aos="fade-up" data-aos-duration="1500"
        id="contact"
        className="w-full h-screen flex items-center justify-center py-10"
    >
      <div className="w-full sm:w-3/4 lg:w-2/3 md:w-full mx-4 p-8 rounded-lg">
        <h1 className="text-2xl font-extrabold text-orange-500 mb-8">
          /contact_me
        </h1>
        <form className="space-y-4 w-3/4 justify- items-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center border bg-white border-orange-300 rounded-lg">
              <FaUser className="text-orange-500 mx-2" />
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="w-full p-2 text-base text-orange-500 font-semibold focus:outline-none focus:ring-none rounded-r-lg"
              />
            </div>
            <div className="flex items-center border bg-white border-orange-300 rounded-lg">
              <FaUser className="text-orange-500 mx-2" />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="w-full p-2 text-base text-orange-500 font-semibold focus:outline-none focus:ring-none rounded-r-lg"
              />
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex bg-white items-center border border-orange-300 rounded-lg">
                <FaEnvelope className="text-orange-500 mx-2" />
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-2 text-base text-orange-500 font-semibold focus:outline-none focus:ring-none rounded-r-lg"
                />
                </div>
                <div className="flex bg-white items-center border border-orange-300 rounded-lg">
                <FaPhone className="text-orange-500 mx-2" />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-2 text-base text-orange-500 font-semibold focus:outline-none focus:ring-none rounded-r-lg"
                />
                </div>
            </div>

            <div className="flex bg-white items-start border border-orange-300 rounded-lg">
                <FaCommentDots className="text-orange-500 mx-2 mt-2" />
                <textarea
                id="message"
                name="message"
                placeholder="Leave a comment..."
                rows="5"
                className="w-full p-2 text-base text-orange-500 font-semibold focus:outline-none focus:ring-none rounded-r-lg"
                ></textarea>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-10 rounded-lg bg-orange-600 opacity-95 animate-ping"></div>
              </div>
              <button
                type="submit"
                className="relative flex mx-auto items-center dark:bg-white dark:text-orange-500 justify-center gap-2 px-6 py-2 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <FaPaperPlane className="text-white dark:text-orange-500" />
                Send Message
              </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
