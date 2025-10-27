import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import FormField from "./FormField";

export default function DemoRequestForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    organization: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a short network request
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Thanks for your request!</h3>
            <p className="mt-1 text-gray-600">
              We’ve received your details and will be in touch shortly to schedule your demo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Name"
          htmlFor="name"
          required
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
        />
        <FormField
          label="Contact No"
          htmlFor="contact"
          required
          type="tel"
          placeholder="e.g. +1 555 123 4567"
          value={form.contact}
          onChange={handleChange}
        />
        <FormField
          label="Email Id"
          htmlFor="email"
          required
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
        />
        <FormField
          label="Organization Name"
          htmlFor="organization"
          placeholder="Company or team name"
          value={form.organization}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">
          Description / Purpose for the demo of the tool
          <span className="text-emerald-600"> *</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          value={form.description}
          onChange={handleChange}
          placeholder="Tell us what you’d like to explore, any use-cases or goals for the session."
          className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          By submitting this form, you agree to be contacted about your demo request.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium px-5 py-2.5 shadow-sm shadow-emerald-300/40 transition"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>Request Demo</>
          )}
        </button>
      </div>
    </form>
  );
}
