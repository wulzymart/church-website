'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from 'sonner'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, subject: value }))
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, you would send the form data to your server
        console.log("Form submitted:", formData)
    
        toast.success("Thank you for contacting us. We'll get back to you soon.")
    
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
  return (
    <div className="bg-amber-50 p-8 rounded-lg">
    <h2 className="text-3xl font-serif text-amber-900 mb-6">Send a Message</h2>
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
            Your Name
          </label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
            Phone Number
          </label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
            Subject
          </label>
          <Select onValueChange={handleSelectChange} value={formData.subject}>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="prayer">Prayer Request</SelectItem>
              <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
              <SelectItem value="membership">Membership Information</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
            Your Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="bg-amber-800 hover:bg-amber-900 text-white">
          Send Message
        </Button>
      </div>
    </form>
  </div>
  )
}

export default ContactForm