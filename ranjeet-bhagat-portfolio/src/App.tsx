import React from "react";

const LogoSVG = () => (
  <img
    src="/new-r-logo.png"
    alt="Ranjeet Bhagat Logo"
    className="w-32 h-32 mx-auto mb-6 drop-shadow-xl"
    draggable="false"
  />
);

const GeometricBG = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover z-0"
    viewBox="0 0 1440 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g opacity="0.05">
      <polygon points="200,100 300,210 170,250" fill="#ffffff" />
      <polygon points="500,200 610,210 570,350" fill="#ffffff" />
      <polygon points="900,50 1050,160 900,200" fill="#ffffff" />
      <polygon points="1200,300 1350,380 1200,390" fill="#ffffff" />
      <polygon points="600,100 700,40 800,180" fill="#ffffff" />
      <circle cx="250" cy="230" r="40" fill="#ffffff" />
      <circle cx="900" cy="340" r="25" fill="#ffffff" />
    </g>
  </svg>
);

function App() {
  // Smooth scroll handler for 'Latest Works'
  const handleLatestWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fbfbfb] min-h-screen font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-[#191f25] text-white relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
      >
        <GeometricBG />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <LogoSVG />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Ranjeet Bhagat
          </h1>
          <p className="text-lg md:text-2xl mb-6 opacity-80">
            MERN Stack Developer
          </p>
          <button className="bg-[#2e97b9] text-white rounded px-6 py-2 mb-4 hover:bg-[#237a93] transition">
            About Me
          </button>
          <div>
            <button
              className="bg-white text-[#2e97b9] border-2 border-[#2e97b9] rounded px-6 py-2 font-semibold hover:bg-[#2e97b9] hover:text-white transition"
              onClick={handleLatestWorksClick}
            >
              Latest Works
            </button>
          </div>
        </div>
        {/* Social Icons Column */}
        <aside className="hidden md:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-20">
          {/* Social icons (LinkedIn, Twitter, IG, Email, GitHub) */}
          {/* Icons to be implemented */}
        </aside>
      </section>
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#2e97b9] mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I help business owners and busy web developers to design & develop
          creative websites that fit their vision and attract visitors.
          Technologies and tools that I use to create such awesome websites:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "#javascript",
            "#react.js",
            "#redux",
            "#node.js",
            "#express.js",
            "#mongoDB",
            "#mongoose",
            "#cloudinary",
            "#ejs",
            "#html",
            "#css",
            "#sass",
            "#bootstrap",
            "#tailwind",
            "#git",
            "#github",
            "#aws",
            "#terminal",
            "#adobeXD",
            "#figma",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#cbd3d6] rounded px-2 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      {/* MERN Stack Section */}
      <section id="mern-stack" className="bg-[#e5a59b]/20 py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-[#191f25] mb-10">
          MERN Stack
        </h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            {/* Use real MongoDB icon here */}
            <span className="text-base">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Use real Express icon here */}
            <span className="text-base">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Use real React icon here */}
            <span className="text-base">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Use real Node icon here */}
            <span className="text-base">Node.js</span>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center text-[#2e97b9] mb-12">
          Latest Works
        </h2>
        {/* Timeline of projects (to be refined) */}
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {/* Kunal Forex Trading Community Project */}
          <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8">
            <div className="w-full md:w-1/2 bg-gray-100 aspect-video rounded flex items-center justify-center">
              <img
                src="https://images-prod.exlyapp.com/exly_images/0a779c0b-3683-48e5-9e90-fba5db3ec765/about_you/n8S_1726033253211_exly_e.png?format=auto&width=550"
                alt="Kunal Forex Trading Community"
                className="object-contain max-h-56 rounded shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-[#ba5c51]">Kunal Forex Trading Community <span className="text-xs text-gray-400">(Forex Education Platform)</span></h3>
              <p className="text-gray-700 mb-2">Created and currently manage the website and online presence for Kunal Forex Trading Community—a leading platform for forex trading education, community, and resources.</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span>#react.js</span><span>#express.js</span><span>#node.js</span><span>#exlyapp</span><span>#website-management</span>
              </div>
              <a href="https://kunalonforex.exlyapp.com/#about" className="text-[#2e97b9] underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
          {/* Repeat for other projects... */}
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#f5fafd] py-20 px-4">
        <h2 className="text-3xl font-semibold text-center text-[#2e97b9] mb-10">
          What my clients are saying?
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="bg-white rounded shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#2e97b9] flex items-center justify-center mb-4 text-white font-bold text-xl">
              K
            </div>
            <blockquote className="font-medium text-gray-700 mb-4">
              "Ranjeet Bhagat has created and now handles my website and social media presence. His dedication and expertise in web development have made a huge difference for my business."
            </blockquote>
            <span className="text-[#2e97b9] font-bold">Kunal</span>
            <span className="text-gray-500 text-sm mb-2">Founder, Kunal Forex Trading Community</span>
            <a href="https://kunalonforex.exlyapp.com/#about" target="_blank" rel="noopener noreferrer" className="text-[#2e97b9] underline font-medium">
              Visit kunalonforex.exlyapp.com
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#2e97b9] mb-8 text-center">
          Let's connect
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-[#2e97b9] rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#2e97b9] rounded px-4 py-2"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-[#2e97b9] rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-[#2e97b9] text-white rounded px-6 py-2 font-semibold hover:bg-[#237a93] w-fit self-end"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-[#fbfbfb] flex flex-col items-center border-t">
        <div className="mb-2">
          © Ranjeet Bhagat {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
          {/* Social media icons here */}
        </div>
      </footer>
    </div>
  );
}

export default App;
