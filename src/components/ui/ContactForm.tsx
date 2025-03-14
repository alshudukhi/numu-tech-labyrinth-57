
import React, { useState } from 'react';
import { Mail, User, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll be in touch with you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <User size={18} />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full bg-white pl-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-numutech-blue focus:border-transparent transition-all duration-200 outline-none"
            placeholder="Your full name"
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Mail size={18} />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full bg-white pl-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-numutech-blue focus:border-transparent transition-all duration-200 outline-none"
            placeholder="Your email address"
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="block w-full bg-white px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-numutech-blue focus:border-transparent transition-all duration-200 outline-none"
          placeholder="How can we help you?"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`
          flex items-center justify-center w-full py-3 px-4 
          bg-numutech-blue text-white rounded-lg font-medium
          transition-all duration-300 
          ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 hover:shadow-md'}
        `}
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            Sending...
          </div>
        ) : (
          <div className="flex items-center">
            <span>Send Message</span>
            <Send size={18} className="ml-2" />
          </div>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
