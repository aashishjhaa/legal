import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Lock,
} from 'lucide-react';
import logoUrl from '../assets/online-legal-aegis-logo.svg';
import { CONTACT_INFO, WEBINAR_DATA } from '../data/siteData';

export type ModalMode =
  | null
  | {
      type: 'consultation';
      initialTrack?: 'consultancy' | 'academy';
      initialTopic?: string;
    }
  | {
      type: 'webinar';
    }
  | {
      type: 'logo-preview';
    };

interface ActionModalsProps {
  modal: ModalMode;
  onClose: () => void;
}

export const ActionModals: React.FC<ActionModalsProps> = ({ modal, onClose }) => {
  const [track, setTrack] = useState<'consultancy' | 'academy'>('consultancy');
  const [topic, setTopic] = useState<string>('Property & Land Matters');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Evening (5:00 PM – 8:00 PM)');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (modal && modal.type === 'consultation') {
      const nextTrack = modal.initialTrack || 'consultancy';
      setTrack(nextTrack);
      if (modal.initialTopic) {
        setTopic(modal.initialTopic);
      } else {
        setTopic(
          nextTrack === 'consultancy'
            ? 'Property & Land Matters'
            : 'Judiciary Examination Prep'
        );
      }
      setSubmittedRef(null);
    } else if (modal && modal.type === 'webinar') {
      setSubmittedRef(null);
    }
  }, [modal]);

  if (!modal) return null;

  const consultancyTopics = [
    'Property & Land Matters',
    'Family & Marriage Law',
    'Civil Law & Recovery Disputes',
    'RTI (Right to Information)',
    'Consumer Protection & Redressal',
    'Contract & Legal Drafting',
  ];

  const academyTopics = [
    'Judiciary Examination Prep',
    'Practical Legal Drafting & Pleading',
    'Career Guidance for Legal Aspirants',
    '1-on-1 Personal Mentorship',
    'Online Law Coaching (LL.B. / Bare Acts)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const prefix = modal.type === 'webinar' ? 'OLA-WEB' : track === 'consultancy' ? 'OLA-LAW' : 'OLA-ACA';
    setSubmittedRef(`${prefix}-${randomNum}`);
  };

  const buildWhatsAppLink = () => {
    if (modal.type === 'webinar') {
      const text = `Hello Online Legal Aegis, I have registered for the ₹99 Live Webinar (${WEBINAR_DATA.title}). Name: ${fullName || 'Participant'}, Phone: ${phone || 'N/A'}, Ref: ${submittedRef || 'New'}.`;
      return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    }
    const text = `Hello Online Legal Aegis, I would like to book a ${
      track === 'consultancy' ? 'Confidential Legal Consultation' : 'Coaching & Academy Session'
    }.\n• Topic: ${topic}\n• Name: ${fullName}\n• Phone: ${phone}\n• Preferred Time: ${preferredSlot}\n• Note: ${notes || 'N/A'}`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#051626]/75 p-4 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Logo Crest Full Preview Modal */}
      {modal.type === 'logo-preview' && (
        <div
          className="relative max-w-md w-full rounded-2xl border-2 border-[#C5A059] bg-[#FAF8F5] p-6 text-center shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-[#0A192F]/15 bg-white p-2 text-[#0A192F] transition hover:border-[#C5A059] hover:text-[#C5A059]"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="mx-auto mb-4 h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-full shadow-xl ring-4 ring-[#C5A059]/40 bg-[#051728]">
            <img
              src={logoUrl}
              alt="Online Legal Aegis Consultancy and Academy Official Emblem"
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-[#0A192F]">
            Online Legal Aegis
          </h3>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7B36] mt-0.5">
            Consultancy and Academy
          </p>
          <p className="mt-2 text-xs text-[#4A5568]">
            “Expert Guidance. Reliable Solutions. Justice Assured.”
          </p>
        </div>
      )}

      {/* Consultation / Academy Booking Modal */}
      {modal.type === 'consultation' && (
        <div
          className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border-2 border-[#C5A059]/60 bg-[#FAF8F5] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Navy Header Strip */}
          <div className="flex items-center justify-between border-b border-[#C5A059]/30 bg-[#0A192F] px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Online Legal Aegis Logo"
                className="h-11 w-11 rounded-full ring-2 ring-[#C5A059]/60 bg-[#051728] object-contain"
              />
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DFC184]">
                  Online Legal Aegis
                </span>
                <h3 className="font-serif-display text-xl font-bold tracking-wide text-white">
                  {track === 'consultancy'
                    ? 'Book Confidential Legal Consultation'
                    : 'Academy & Mentorship Inquiry'}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 sm:p-7">
            {submittedRef ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7B36] ring-2 ring-[#C5A059]/40">
                  <CheckCircle2 className="h-9 w-9 text-[#9E7B36]" />
                </div>
                <span className="inline-block rounded-full bg-[#0A192F] px-3.5 py-1 font-mono-num text-xs font-semibold tracking-wider text-[#DFC184]">
                  REFERENCE ID: {submittedRef}
                </span>
                <h4 className="mt-3 font-serif-display text-2xl font-bold text-[#0A192F]">
                  Your Request Has Been Logged
                </h4>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#4A5568]">
                  Thank you, <strong className="text-[#0A192F]">{fullName}</strong>. Our senior team has noted your request regarding{' '}
                  <strong className="text-[#0A192F]">{topic}</strong> for the{' '}
                  <span className="underline decoration-[#C5A059]">{preferredSlot}</span> slot.
                </p>

                <div className="mt-6 rounded-xl border border-[#C5A059]/40 bg-white p-4 text-left text-xs text-[#4A5568] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-medium text-[#0A192F]">Pillar:</span>
                    <span>{track === 'consultancy' ? 'Legal Consultancy' : 'Coaching & Academy'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#0A192F]">Selected Focus:</span>
                    <span className="font-semibold text-[#9E7B36]">{topic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#0A192F]">Confidentiality:</span>
                    <span>100% Privileged & Private</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-metallic px-5 py-3 text-sm font-semibold text-[#0A192F] shadow-md transition hover:brightness-105"
                  >
                    Instant Connect on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-lg border border-[#0A192F]/20 bg-white px-5 py-3 text-sm font-semibold text-[#0A192F] transition hover:bg-[#F3EFEA]"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pillar Switcher */}
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F3EFEA] p-1.5 border border-[#0A192F]/10">
                  <button
                    type="button"
                    onClick={() => {
                      setTrack('consultancy');
                      setTopic(consultancyTopics[0]);
                    }}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition ${
                      track === 'consultancy'
                        ? 'bg-[#0A192F] text-[#DFC184] shadow-sm'
                        : 'text-[#4A5568] hover:text-[#0A192F]'
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Legal Consultancy
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTrack('academy');
                      setTopic(academyTopics[0]);
                    }}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-semibold transition ${
                      track === 'academy'
                        ? 'bg-[#0A192F] text-[#DFC184] shadow-sm'
                        : 'text-[#4A5568] hover:text-[#0A192F]'
                    }`}
                  >
                    <GraduationCap className="h-4 w-4" />
                    Coaching & Academy
                  </button>
                </div>

                {/* Topic Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1.5">
                    {track === 'consultancy'
                      ? 'Select Legal Matter / Area'
                      : 'Select Coaching / Mentorship Program'}
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-lg border border-[#0A192F]/20 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0A192F] focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                  >
                    {(track === 'consultancy' ? consultancyTopics : academyTopics).map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                      <input
                        type="text"
                        required
                        placeholder="e.g., Adv. / Mr. Rajesh Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-[#4A5568]/60 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-[#4A5568]/60 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1.5">
                    Preferred Online Consultation Slot
                  </label>
                  <div className="relative">
                    <Clock className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                    >
                      <option>Morning (10:00 AM – 1:00 PM)</option>
                      <option>Afternoon (2:00 PM – 5:00 PM)</option>
                      <option>Evening (5:00 PM – 8:00 PM)</option>
                      <option>Urgent Same-Day Callback</option>
                    </select>
                  </div>
                </div>

                {/* Brief Summary */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1.5">
                    Brief Overview (Optional & Confidential)
                  </label>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                    <textarea
                      rows={3}
                      placeholder={
                        track === 'consultancy'
                          ? 'Briefly describe your legal query (all details remain strictly confidential)...'
                          : 'Share your current law year, target judiciary exam, or drafting goal...'
                      }
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] placeholder:text-[#4A5568]/60 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-[#C5A059]/12 px-3.5 py-2 text-xs text-[#0A192F]">
                  <Lock className="h-4 w-4 shrink-0 text-[#9E7B36]" />
                  <span>
                    Protected by strict legal privilege and confidentiality standards.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold-metallic py-3.5 text-sm font-bold tracking-wide text-[#0A192F] shadow-md transition hover:brightness-105 cursor-pointer"
                >
                  {track === 'consultancy'
                    ? 'Confirm Consultation Request'
                    : 'Request Academy Callback'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Webinar Registration Modal (₹99 Special Offer) */}
      {modal.type === 'webinar' && (
        <div
          className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border-2 border-[#C5A059] bg-[#FAF8F5] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[#C5A059]/40 bg-gradient-to-r from-[#0A192F] via-[#0F2442] to-[#0A192F] px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Online Legal Aegis Logo"
                className="h-11 w-11 rounded-full ring-2 ring-[#C5A059]/60 bg-[#051728] object-contain"
              />
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC184]">
                  <Sparkles className="h-3 w-3" /> Special Offer • ₹99 Only
                </span>
                <h3 className="font-serif-display text-xl font-bold text-white">
                  Live Webinar Seat Reservation
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            {submittedRef ? (
              <div className="py-3 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#9E7B36]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <span className="inline-block rounded-full bg-[#0A192F] px-3.5 py-1 font-mono-num text-xs font-semibold text-[#DFC184]">
                  PASS ID: {submittedRef}
                </span>
                <h4 className="mt-3 font-serif-display text-2xl font-bold text-[#0A192F]">
                  Seat Reserved for ₹99!
                </h4>
                <p className="mt-1.5 text-sm text-[#4A5568]">
                  Welcome aboard, <strong className="text-[#0A192F]">{fullName}</strong>. Your seat for the upcoming live session is reserved.
                </p>

                <div className="mt-5 rounded-xl border border-[#C5A059]/50 bg-[#FBF7EE] p-4 text-left text-xs space-y-1.5">
                  <div className="font-serif-display text-base font-bold text-[#0A192F]">
                    {WEBINAR_DATA.title}
                  </div>
                  <div className="flex justify-between pt-1 text-[#4A5568]">
                    <span>Special Registration Fee:</span>
                    <span className="font-mono-num font-bold text-[#0A192F]">₹99 (Save ₹400)</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]">
                    <span>Includes:</span>
                    <span className="font-medium text-[#9E7B36]">Certificate + Drafting Templates</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-metallic px-5 py-3 text-sm font-bold text-[#0A192F] shadow-md transition hover:brightness-105"
                  >
                    Get Joining Link & UPI on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-lg border border-[#0A192F]/20 bg-white px-4 py-3 text-sm font-semibold text-[#0A192F]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="rounded-xl border border-[#C5A059]/45 bg-[#FBF7EE] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E7B36]">
                      {WEBINAR_DATA.badge}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-num text-xs text-[#4A5568] line-through">
                        {WEBINAR_DATA.originalPrice}
                      </span>
                      <span className="font-mono-num text-xl font-bold text-[#0A192F]">
                        {WEBINAR_DATA.offerPrice}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 font-serif-display text-lg font-bold text-[#0A192F] leading-snug">
                    {WEBINAR_DATA.title}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2 text-[11px] font-medium text-[#4A5568]">
                    <span className="inline-flex items-center gap-1 rounded bg-white px-2 py-0.5 border border-[#C5A059]/30">
                      <Calendar className="h-3 w-3 text-[#9E7B36]" /> Upcoming Sunday • 11:00 AM IST
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-white px-2 py-0.5 border border-[#C5A059]/30">
                      <Clock className="h-3 w-3 text-[#9E7B36]" /> {WEBINAR_DATA.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1">
                    Participant Full Name (For Certificate) *
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1">
                      WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A192F] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9E7B36]" />
                      <input
                        type="email"
                        required
                        placeholder="you@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-[#0A192F]/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0A192F] focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold-metallic py-3.5 text-sm font-bold tracking-wide text-[#0A192F] shadow-md transition hover:brightness-105 cursor-pointer"
                >
                  Complete Registration for ₹99
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-[11px] text-[#4A5568]">
                  Instant Webinar Link + E-Certificate eligibility upon confirmation. Hosted by {CONTACT_INFO.instagramHandle}.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
