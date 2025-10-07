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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: "", text: "" })

    // Create form data for Mautic submission
    const formDataToSend = new FormData()
    formDataToSend.append("mauticform[f_name]", formData.f_name)
    formDataToSend.append("mauticform[email]", formData.email)
    formDataToSend.append("mauticform[phone]", formData.phone)
    formDataToSend.append("mauticform[company]", formData.company)
    formDataToSend.append("mauticform[formId]", "19")
    formDataToSend.append("mauticform[formName]", "engage360printingpartners")
    formDataToSend.append("mauticform[return]", "")
    formDataToSend.append("mauticform[submit]", "1")

    try {
      const response = await fetch("https://mautic.abacusdesk.co.in/form/submit?formId=19", {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors" // You might need this for cross-origin requests
      })

      // Since no-cors mode doesn't give us response data, we assume success
      setMessage({ type: "success", text: "Thank you for your submission!" })
      setFormData({ f_name: "", email: "", company: "", phone: "" })
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
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