'use client'

import React, { useState } from 'react'
import emailjs from 'emailjs-com'

type FormDataType = {
  first_name: string
  last_name: string
  email: string
  phone: string
  message: string
}

type ErrorsType = Partial<FormDataType>

const ContactForm = () => {
  const [formData, setFormData] = useState({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: ''
})

  const [errors, setErrors] = useState<ErrorsType>({})
  const [isSent, setIsSent] = useState(false)
const [isSending, setIsSending] = useState(false)

  const validate = () => {
    const newErrors: ErrorsType = {}

    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required'
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (formData.phone && !/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10–15 digits'
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!validate()) return

  setIsSending(true)

  emailjs
    .send('service_fb6yyun', 'template_uik1j97', formData, 'njwwHNpfQu33vxcEj')
    .then(() => {
      setIsSending(false)
      setIsSent(true)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      })
    })
    .catch((error) => {
      setIsSending(false)
      console.error('EmailJS Error:', error)
    })
}

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="mbres">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <small className="error">{errors.first_name}</small>}
        </div>
        <div className="mbres">
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <small className="error">{errors.last_name}</small>}
        </div>
      </div>

      <div className="row">
        <div className="mbres">
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
        <div className="mbres">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </div>
      </div>

     <div className="mbres">
        <textarea
          rows={5}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <small className="error">{errors.message}</small>}
      </div>

      <button className="button" type="submit" disabled={isSending}>
  {isSending ? 'Sending...' : 'Send Message'}
</button>

      {isSent && <p className="success">✅ Message sent successfully!</p>}
    </form>
  )
}

export default ContactForm
