import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted (not really)!');
  };

  return (
    // <section id="contact" className="py-20 px-8 bg-gradient-to-br from-zinc-800 to-purple-100 text-white">
    <section id="contact" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
          Get In Touch
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 rounded [background-image:linear-gradient(170deg,#ffffff_0%,#B200CE_40%,#5A03CC_85%)]"></span>
        </h2>
        <p className="text-xl mt-10 mb-12 opacity-90">
          Let's work together to bring your ideas to life!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900 bg-opacity-50 backdrop-blur-md p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="mb-3 opacity-90">Send me an email</p>
            <a 
              href="mailto:adarsht740@gmail.com" 
              className="text-[#d038d2] hover:text-[#ff32f5] font-medium transition-colors duration-300"
            >
              adarsht740@gmail.com
            </a>
          </div>
          
          <div className="bg-slate-900 bg-opacity-50 backdrop-blur-md p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
            <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
            <p className="mb-3 opacity-90">Connect with me</p>
            <a 
              href="https://www.linkedin.com/in/adarsht740/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#d038d2] hover:text-[#ff32f5] font-medium transition-colors duration-300"
            >
              linkedin.com/in/adarsht740
            </a>
          </div>
          
          <div className="bg-slate-900 bg-opacity-50 backdrop-blur-md p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
            <h3 className="text-xl font-semibold mb-3">GitHub</h3>
            <p className="mb-3 opacity-90">Check out my work</p>
            <a 
              href="https://github.com/lunixroot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#d038d2] hover:text-[#ff32f5] font-medium transition-colors duration-300"
            >
              github.com/lunixroot
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 bg-opacity-50 backdrop-blur-md p-8 rounded-xl text-left border border-zinc-700">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 bg-opacity-90 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 bg-opacity-90 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              value={form.message} 
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-zinc-800 bg-opacity-90 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-purple-400 outline-none resize-none transition-all duration-300"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#b833ba] hover:bg-[#b933b2] text-white font-semibold py-4 px-6 rounded-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
