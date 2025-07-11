'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

const FreeDownloadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!formData.name || !formData.email) {
    setError('Please fill out both fields')
    return
  }

  try {
    await emailjs.send(
      'service_fb6yyun',
      'template_h0q8ds6',
      {
        name: formData.name,
        email: formData.email
      },
      'njwwHNpfQu33vxcEj'
    )

    setSubmitted(true)

    // Open PDF in a new browser tab
    window.open('/images/Feelings-Wheel-Download-kenny-weiss.pdf', '_blank')
  } catch (err) {
    console.error('EmailJS error:', err)
    setError('Something went wrong. Please try again.')
  }
}

  return (
    <div className="form">
      <div className="contact-into" data-aos="fade-up" data-aos-duration="1500">
        <h4>Free Download</h4>
        <p>The first step to Emotional Authenticity and discovering your Greatness is to reconnect to your authentic self. Complete this form for instant access.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="button" type="submit">Download Now</button>
        {submitted && <p className="success">✅ Email sent and download started.</p>}
      </form>
    </div>
  )
}

export default FreeDownloadForm
