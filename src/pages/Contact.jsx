import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6 text-gray-700">
        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-gray-600 text-2xl" />
          <span>Email: </span>
          <a href="mailto:your.email@example.com" className="text-black-600 hover:underline">
            muhammad.roji@mhs.itenas.ac.id
          </a>
        </div>

        {/* No HP */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-gray-600 text-2xl" />
          <span>No HP: </span>
          <a href="tel:+6281234567890" className="text-black-600 hover:underline">
            082226969447
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-gray-700 text-2xl" />
          <span>LinkedIn: </span>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" className="text-black-600 hover:underline">
            linkedin.com/in/yourlinkedin
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4">
          <FaInstagram className="text-gray-500 text-2xl" />
          <span>Instagram: </span>
          <a href="https://instagram.com/yourhandle" target="_blank" className="text-black-600 hover:underline">
            @roji_tfk
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-black text-2xl" />
          <span>GitHub: </span>
          <a href="https://github.com/yourusername" target="_blank" className="text-black-600 hover:underline">
            github.com/yourusername
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
