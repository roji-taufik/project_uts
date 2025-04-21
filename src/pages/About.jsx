import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';

const About = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfilePic(base64Image);
        localStorage.setItem('profilePic', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }, []);

  return (
    <div id="about" className="bg-gradient-to-b from-gray-100 to-white w-full text-center text-gray-700 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-purple-700">Tentang Saya</h2>
        <p className="text-lg font-light mb-10 leading-relaxed">
          Saya adalah seorang <span className="font-semibold text-purple-600">pengembang web</span> dengan pengalaman dalam membuat aplikasi modern dan responsif.
          Saya senang bekerja dengan <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>, dan teknologi web terbaru.
          Saya suka belajar hal baru dan berkontribusi dalam proyek kreatif.
        </p>

        {/* Foto Profil */}
        <div className="relative inline-block mb-4">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-xl"
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold text-lg border-4 border-purple-500">
              No Image
            </div>
          )}
          <label
            htmlFor="profilePicInput"
            className="absolute bottom-2 right-2 bg-sky-500 text-white px-3 py-1 text-sm rounded-full shadow hover:bg-purple-600 cursor-pointer"
          >
            Ganti Foto
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="hidden"
            id="profilePicInput"
          />
        </div>

        {/* Navigasi Section */}
        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a href="#about">
            <button className="px-6 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-purple-700 transition duration-300">
              Tentang Saya
            </button>
          </a>
          <a href="#projects">
            <button className="px-6 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-purple-700 transition duration-300">
              Proyek
            </button>
          </a>
          <a href="#contact">
            <button className="px-6 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-purple-700 transition duration-300">
              Kontak
            </button>
          </a>
        </div>

        {/* Pendidikan */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-2">Pendidikan</h3>
          <p className="text-base leading-relaxed">Saya menyelesaikan pendidikan di jurusan <strong>Teknik Informatika</strong>, dengan fokus pada pengembangan perangkat lunak dan pengembangan web.</p>
        </div>
       

        {/* Keterampilan */}
        <div className="mt-12 mb-10 text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Keterampilan & Teknologi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-500 mb-2" />
              <span className="text-sm font-medium">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-5xl text-blue-500 mb-2" />
              <span className="text-sm font-medium">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-cyan-500 mb-2" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-5xl text-green-600 mb-2" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-5xl text-orange-600 mb-2" />
              <span className="text-sm font-medium">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGithub className="text-5xl text-gray-800 mb-2" />
              <span className="text-sm font-medium">GitHub</span>
            </div>
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="mt-12 text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Tools & Framework</h3>
          <ul className="list-inside list-disc text-base leading-relaxed">
            <li>React, Redux, Tailwind CSS, Next.js</li>
            <li>Express.js, Node.js, MongoDB</li>
            <li>Visual Studio Code, GitHub, Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
