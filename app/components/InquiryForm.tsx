'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

type Status = null | 'loading' | 'success' | 'error'

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-12 px-6 bg-white rounded-lg shadow-md">
      <h3 className="font-serif text-2xl mb-4 text-center">Get in Touch</h3>
      <input
        className="w-full mb-4 p-3 border-b border-neutral-300 focus:outline-none"
        type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required
      />
      <input
        className="w-full mb-4 p-3 border-b border-neutral-300 focus:outline-none"
        type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required
      />
      <textarea
        className="w-full mb-4 p-3 border-b border-neutral-300 focus:outline-none"
        name="message" placeholder="Message" value={form.message} onChange={handleChange} required
      />
      <button
        type="submit"
        className="w-full py-3 bg-neutral-900 text-white font-serif rounded transition hover:bg-neutral-700"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>
      {status === 'success' && <p className="mt-4 text-green-600 text-center">Thank you! We’ll be in touch soon.</p>}
      {status === 'error' && <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>}
    </form>
  )
} 