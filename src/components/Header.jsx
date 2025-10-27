import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto pt-10 pb-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
        <Sparkles className="h-4 w-4" />
        Request a Live Demo
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        Experience our tool in action
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Tell us a bit about you and what you’d like to see. We’ll reach out to
        schedule a personalized walkthrough tailored to your needs.
      </p>
    </header>
  );
}
