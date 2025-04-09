'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.',
        loading: false
      })
      return
    }
    
    // Email format validation
    if (!isValidEmail(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.',
        loading: false
      })
      return
    }
    
    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true
    })
    
    try {
      // Send email directly using EmailJS with auto-reply
      await emailjs.send(
        "myid",              // Service ID
        "template_ysk9cos",  // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Message',
          message: formData.message,
          phone: formData.phone || 'Not provided',
        },
        "lbjpHSFcqvJYXIAK1"  // Public Key
      );
      
      // Success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will contact you soon.',
        loading: false
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus({
        submitted: false,
        error: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
        loading: false
      })
    }
  }

  return (
    <main className="bg-qasly-darker">
      <Navbar />
      
      {/* Contact Header */}
      <div className="bg-qasly-dark py-16 md:py-24 border-b border-qasly-medium">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-medium tracking-tight text-qasly-offwhite">Get in Touch</h1>
            <p className="mt-4 text-lg text-qasly-gray">
              Have a project in mind? Reach out to discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium">
              <div className="mb-8">
                <h2 className="text-2xl font-medium text-qasly-offwhite mb-4 text-center">About Us</h2>
                <p className="text-qasly-gray text-center">
                  Professional media agency with over 5 years of experience in web development and video editing services.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-qasly-offwhite">Email</h3>
                    <p className="mt-1 text-base text-qasly-gray">
                      <a href="mailto:qaslymedia@gmail.com" className="text-qasly-primary hover:text-qasly-accent">
                        qaslymedia@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-qasly-offwhite">Phone</h3>
                    <p className="mt-1 text-base text-qasly-gray">
                      <a href="tel:+15551234567" className="text-qasly-primary hover:text-qasly-accent">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-qasly-primary/10 text-qasly-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-qasly-offwhite">Location</h3>
                    <p className="mt-1 text-base text-qasly-gray">
                      Remote India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-qasly-medium pt-8">
                <p className="text-base font-medium text-qasly-offwhite">Follow Us</p>
                <div className="mt-4 flex gap-x-6">
                  <a href="#" className="text-qasly-gray hover:text-qasly-primary">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-qasly-gray hover:text-qasly-primary">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-qasly-gray hover:text-qasly-primary">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-qasly-dark p-8 rounded-lg shadow-md border border-qasly-medium">
              <h2 className="text-2xl font-medium text-qasly-offwhite mb-4">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="rounded-md bg-qasly-success/10 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-qasly-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-qasly-success">Success</h3>
                      <div className="mt-2 text-sm text-qasly-success">
                        <p>{formStatus.message}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="rounded-md px-3 py-2 text-sm font-medium text-qasly-success border border-qasly-success hover:bg-qasly-success/10"
                          onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus.error && (
                    <div className="rounded-md bg-qasly-error/10 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-qasly-error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-qasly-error">Error</h3>
                          <div className="mt-1 text-sm text-qasly-error">
                            <p>{formStatus.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-qasly-gray">
                        Name *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-qasly-medium border-qasly-medium text-qasly-offwhite shadow-sm focus:border-qasly-primary focus:ring-qasly-primary px-3 py-2 border"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-qasly-gray">
                        Email *
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-qasly-medium border-qasly-medium text-qasly-offwhite shadow-sm focus:border-qasly-primary focus:ring-qasly-primary px-3 py-2 border"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-qasly-gray">
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-qasly-medium border-qasly-medium text-qasly-offwhite shadow-sm focus:border-qasly-primary focus:ring-qasly-primary px-3 py-2 border"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-qasly-gray">
                        Subject
                      </label>
                      <div className="mt-1">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-qasly-medium border-qasly-medium text-qasly-offwhite shadow-sm focus:border-qasly-primary focus:ring-qasly-primary px-3 py-2 border"
                        >
                          <option value="">Select a subject</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Penetration Testing">Penetration Testing</option>
                          <option value="Video Editing">Video Editing</option>
                          <option value="Photo Editing">Photo Editing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-qasly-gray">
                        Message *
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-qasly-medium border-qasly-medium text-qasly-offwhite shadow-sm focus:border-qasly-primary focus:ring-qasly-primary px-3 py-2 border"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className={`w-full rounded-md px-4 py-2.5 text-sm font-medium text-qasly-dark ${
                        formStatus.loading 
                          ? 'bg-qasly-primary/70 cursor-not-allowed' 
                          : 'bg-qasly-primary hover:bg-qasly-secondary transition-colors'
                      }`}
                    >
                      {formStatus.loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 