'use client'

import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Input, Textarea, Typography } from "@material-tailwind/react"
import { Navigation } from '../components/navigationContactUs'
import { Footer } from '../components/footer'

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    let formErrors = {}
    if (!formData.name.trim()) formErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      formErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\-\s()]*$/.test(formData.phone)) {
      formErrors.phone = 'Invalid phone number'
    }
    if (!formData.subject.trim()) formErrors.subject = 'Subject is required'
    if (!formData.message.trim()) formErrors.message = 'Message is required'
    return formErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    setIsSubmitting(true)
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jabinkm007@gmail.com'
      }

      await emailjs.send(
        'service_xe8ivs1',
        'template_m6z04de',
        templateParams,
        'EvyYYe6XpycuOpbkV'
      )

      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      })
    }
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-gray-50">
       
        <Navigation />
      {/* Hero Section */}
      <div className="overflow-hidden">
      <div className="relative h-[500px] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contactBanner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-center">Get in touch with us for any inquiries or support</p>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Typography variant="h3" className="mb-6">Get in Touch</Typography>
                <Typography className="text-gray-700">
                  We're here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </Typography>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <i className="fas fa-map-marker-alt text-red-500 text-xl" />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-1">Address</Typography>
                    <Typography className="text-gray-700">
                      HEAD OFFICE<br />
                      King Saud Street Intersection 1 - 2,<br />
                      Al Khobar - 31952, Saudi Arabia<br /><br />
                      REGIONAL OFFICE<br />
                      XJ3R+RR7 Berri Gas Road,<br />
                      Al Jubail - 31961, Saudi Arabia
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <i className="fas fa-phone text-red-500 text-xl" />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-1">Phone</Typography>
                    <Typography className="text-gray-700">
                    <a href="tel:+966 13 893 3315">+966 13 893 3315</a>
                    <p><a href="tel:+966 50 131 0073">+966 50 131 0073</a></p>
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <i className="fas fa-envelope text-red-500 text-xl" />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-1">Email</Typography>
                    <Typography className="">
                    <p className="text-gray-600 hover:text-red-600"><a href="mailto:info@ancarabia.com">info@ancarabia.com</a></p>
                    <p className="text-gray-600 hover:text-red-600"><a href="mailto:sales@ancarabia.com">sales@ancarabia.com</a></p>
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <i className="fas fa-clock text-red-500 text-xl" />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-1">Working Hours</Typography>
                    <Typography className="text-gray-700">
                      Sunday - Thursday: 8:00 AM - 6:00 PM
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h4" className="mb-6">Send us a Message</Typography>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <Typography color="red" className="mt-1 text-sm">
                      {errors.name}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <Typography color="red" className="mt-1 text-sm">
                      {errors.email}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <Typography color="red" className="mt-1 text-sm">
                      {errors.phone}
                    </Typography>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={Boolean(errors.subject)}
                  />
                  {errors.subject && (
                    <Typography color="red" className="mt-1 text-sm">
                      {errors.subject}
                    </Typography>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    label="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <Typography color="red" className="mt-1 text-sm">
                      {errors.message}
                    </Typography>
                  )}
                </div>

                {submitStatus && (
                  <Typography
                    color={submitStatus.type === 'success' ? 'green' : 'red'}
                    className="mt-2"
                  >
                    {submitStatus.message}
                  </Typography>
                )}

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <Typography variant="h3" className="text-center mb-8">Our Location</Typography>
          <div className="md:h-[500px] h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7149.827966662883!2d50.19128913166594!3d26.36164398453393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDIxJzQyLjEiTiA1MMKwMTEnNDEuNCJF!5e0!3m2!1sen!2ssa!4v1735634917663!5m2!1sen!2ssa"
            //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7261415076!2d50.19808881503!3d26.29080898341711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e674f71ad58d%3A0x5af3c1f3c3c8f0f0!2sKing%20Saud%20St%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Typography variant="h3" className="text-center mb-8">Our Locations</Typography>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Head Office Map */}
          <div className="flex flex-col">
            <Typography variant="h5" className="text-center mb-4">Head Office</Typography>
            <div className="h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7149.827966662883!2d50.19128913166594!3d26.36164398453393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDIxJzQyLjEiTiA1MMKwMTEnNDEuNCJF!5e0!3m2!1sen!2ssa!4v1735634917663!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Regional Office Map */}
          <div className="flex flex-col">
            <Typography variant="h5" className="text-center mb-4">Regional Office</Typography>
            <div className="h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.6883110492108!2d49.64142610512749!3d26.954550636543367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a1768a917ac3%3A0xd0fb34664aafc7b8!2sANC%20Arabia%20Contracting%20Company%E2%9C%93!5e0!3m2!1sen!2ssa!4v1736768157177!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
      </div>
    </main>
  )
}