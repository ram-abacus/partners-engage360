"use client"
import { useState } from "react"
import { BRAND_BLUE } from "@/lib/constants"

export function LeadForm() {
  const [formData, setFormData] = useState({
    f_name: "",
    email: "",
    company: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Since Mautic typically has CORS restrictions, we'll use a traditional form submission
    // This will handle Mautic's redirect automatically
    
    // Create a hidden form and submit it
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "https://mautic.abacusdesk.co.in/form/submit?formId=19"
    form.style.display = "none"
    
    // Add return URL if you want to redirect to a specific page after submission
    // You can set this to your thank you page URL
    const returnUrl = "" // e.g., "https://yourdomain.com/thank-you"
    
    const fields = {
      "mauticform[f_name]": formData.f_name,
      "mauticform[email]": formData.email,
      "mauticform[phone]": formData.phone,
      "mauticform[company]": formData.company,
      "mauticform[formId]": "19",
      "mauticform[formName]": "engage360printingpartners",
      "mauticform[return]": returnUrl,
      "mauticform[submit]": "1"
    }
    
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = name
      input.value = value
      form.appendChild(input)
    })
    
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
      {message.text && (
        <div className={`rounded-lg px-4 py-2 ${
          message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {message.text}
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-3">
        <input
          name="f_name"
          value={formData.f_name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Full Name*"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Work Email*"
          type="email"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Company Name"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Phone*"
          type="tel"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
          required
        />
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl py-3 font-semibold text-white shadow-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" 
        style={{ backgroundColor: BRAND_BLUE }}
      >
        {isSubmitting ? "Submitting..." : "Apply as Printing Partner"}
      </button>
      
      <p className="text-xs text-slate-500">
        By submitting, you agree to be contacted about the Engage360 Partner Program. Your data is protected and used
        only for evaluation.
      </p>
    </form>
  )
}