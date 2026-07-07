import { Link } from 'react-router-dom'
import { CheckCircle, ArrowLeft, Calendar, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-ink-900 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow pointer-events-none" />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 animate-fade-in">
            <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2} />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 animate-fade-in-up">
            You're All Set!<br />
            <span className="gradient-text italic">Demo Request Received.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Thanks for booking a demo with Fone AI. A member of our telecom-onboarding team will reach
            out within the next <span className="font-semibold text-ink-900">24 business hours</span> to
            schedule your personalized walkthrough.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-base text-left">
              <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base mb-1">What's Next</h3>
              <p className="text-sm text-gray-600">
                We'll send a calendar invite within 24 hours to a 30-minute live demo tailored to your stack.
              </p>
            </div>
            <div className="card-base text-left">
              <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base mb-1">Check Your Inbox</h3>
              <p className="text-sm text-gray-600">
                A confirmation has been sent to the email you provided. Add us to your safe-sender list.
              </p>
            </div>
          </div>

          <Link to="/" className="btn-secondary group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
