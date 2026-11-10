import { useState, useEffect } from 'react';
import {
  Scale,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  FileText,
  Home,
  Users,
  Gavel,
  FileCheck2,
  Compass,
  Award,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  Check,
  ChevronDown,
  ArrowRight,
  Lock,
  Clock,
  Calendar,
  Copy,
  ExternalLink,
} from 'lucide-react';
import logoUrl from './assets/online-legal-aegis-logo.svg';
import { Reveal } from './components/Reveal';
import { ScalesWatermark } from './components/ScalesWatermark';
import { ActionModals, ModalMode } from './components/ActionModals';
import {
  CONSULTANCY_ITEMS,
  ACADEMY_ITEMS,
  TRUST_PILLARS,
  WEBINAR_DATA,
  CONTACT_INFO,
} from './data/siteData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalMode>(null);
  const [expandedConsultancy, setExpandedConsultancy] = useState<string | null>('property');
  const [expandedAcademy, setExpandedAcademy] = useState<string | null>('judiciary');
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text: string, field: 'phone' | 'email') => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const renderConsultancyIcon = (iconName: string) => {
    switch (iconName) {
      case 'property':
        return <Home className="h-5 w-5 text-[#9E7B36]" />;
      case 'family':
        return <Users className="h-5 w-5 text-[#9E7B36]" />;
      case 'civil':
        return <Scale className="h-5 w-5 text-[#9E7B36]" />;
      case 'rti':
        return <FileCheck2 className="h-5 w-5 text-[#9E7B36]" />;
      case 'consumer':
        return <ShieldCheck className="h-5 w-5 text-[#9E7B36]" />;
      default:
        return <FileText className="h-5 w-5 text-[#9E7B36]" />;
    }
  };

  const renderAcademyIcon = (iconName: string) => {
    switch (iconName) {
      case 'judiciary':
        return <Gavel className="h-5 w-5 text-[#9E7B36]" />;
      case 'drafting':
        return <FileText className="h-5 w-5 text-[#9E7B36]" />;
      case 'career':
        return <Compass className="h-5 w-5 text-[#9E7B36]" />;
      default:
        return <GraduationCap className="h-5 w-5 text-[#9E7B36]" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0A192F] selection:bg-[#C5A059]/25">
      {/* =====================================================================
          1. THE HEADER (Sticky and Clean)
      ====================================================================== */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/92 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(10,25,47,0.1)] border-b border-[#C5A059]/30 py-2.5'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#C5A059]/20 py-3.5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Exact Uploaded Circular Logo + Crisp Brand Lockup */}
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={() => setActiveModal({ type: 'logo-preview' })}
              title="Click to inspect official Online Legal Aegis emblem"
              className="group relative flex h-13 w-13 sm:h-15 sm:w-15 shrink-0 items-center justify-center rounded-full bg-[#051728] p-0.5 shadow-md ring-2 ring-[#C5A059]/70 transition duration-300 hover:scale-105 hover:ring-[#C5A059] cursor-pointer"
            >
              <img
                src={logoUrl}
                alt="Online Legal Aegis Consultancy and Academy Official Circular Logo"
                className="h-full w-full rounded-full object-contain"
              />
            </button>

            <a href="#top" className="group flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9E7B36]">
                Online
              </span>
              <span className="font-serif-display text-xl sm:text-2xl font-bold leading-none tracking-tight text-[#0A192F] transition group-hover:text-[#9E7B36]">
                LEGAL AEGIS
              </span>
              <span className="mt-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4A5568]">
                Consultancy &amp; Academy
              </span>
            </a>
          </div>

          {/* Center / Right Desktop Links + Solid Gold Button */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7" aria-label="Main Navigation">
              <a
                href="#services"
                className="relative py-1 text-sm font-medium text-[#0A192F] transition hover:text-[#9E7B36] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] after:transition-all hover:after:w-full"
              >
                Services
              </a>
              <a
                href="#academy"
                className="relative py-1 text-sm font-medium text-[#0A192F] transition hover:text-[#9E7B36] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] after:transition-all hover:after:w-full"
              >
                Academy
              </a>
              <a
                href="#webinar"
                className="relative inline-flex items-center gap-1.5 py-1 text-sm font-medium text-[#0A192F] transition hover:text-[#9E7B36] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] after:transition-all hover:after:w-full"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                Live Webinar
              </a>
              <a
                href="#contact"
                className="relative py-1 text-sm font-medium text-[#0A192F] transition hover:text-[#9E7B36] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </nav>

            {/* Far Right: Sleek Solid Gold Button "Book Consultation" */}
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  type: 'consultation',
                  initialTrack: 'consultancy',
                })
              }
              className="inline-flex items-center gap-2 rounded-lg bg-gold-metallic px-5 py-2.5 text-sm font-bold tracking-wide text-[#0A192F] shadow-[0_6px_18px_-4px_rgba(197,160,89,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-4px_rgba(197,160,89,0.7)] cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  type: 'consultation',
                  initialTrack: 'consultancy',
                })
              }
              className="rounded-lg bg-gold-metallic px-3.5 py-2 text-xs font-bold text-[#0A192F] shadow-sm"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-[#0A192F]/15 bg-white/80 p-2 text-[#0A192F] transition hover:border-[#C5A059]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile App-like Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#C5A059]/25 bg-[#FAF8F5] px-5 pt-4 pb-6 shadow-xl">
            <nav className="flex flex-col space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-[#0A192F] hover:bg-[#F3EFEA]"
              >
                <span>Services (Legal Consultancy)</span>
                <ArrowRight className="h-4 w-4 text-[#9E7B36]" />
              </a>
              <a
                href="#academy"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-[#0A192F] hover:bg-[#F3EFEA]"
              >
                <span>Academy &amp; Coaching</span>
                <ArrowRight className="h-4 w-4 text-[#9E7B36]" />
              </a>
              <a
                href="#webinar"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-[#0A192F] hover:bg-[#F3EFEA]"
              >
                <span className="flex items-center gap-2">
                  Live Webinar
                  <span className="rounded-full bg-[#C5A059]/25 px-2 py-0.5 font-mono-num text-xs font-bold text-[#9E7B36]">
                    ₹99 Offer
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-[#9E7B36]" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-[#0A192F] hover:bg-[#F3EFEA]"
              >
                <span>Contact &amp; Channels</span>
                <ArrowRight className="h-4 w-4 text-[#9E7B36]" />
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-[#0A192F]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveModal({
                    type: 'consultation',
                    initialTrack: 'consultancy',
                  });
                }}
                className="w-full rounded-lg bg-gold-metallic py-3.5 text-center text-sm font-bold text-[#0A192F] shadow-md"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* =====================================================================
            2. THE HERO SECTION (Welcoming & Authoritative)
        ====================================================================== */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
          {/* Subtle Faint Large-Scale Watermark of the Scales of Justice & Open Book */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <ScalesWatermark className="h-[540px] w-[540px] sm:h-[680px] sm:w-[680px] opacity-[0.045]" />
          </div>

          {/* Soft Radial Cream Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 35%, rgba(197, 160, 89, 0.10) 0%, rgba(250, 248, 245, 0) 68%)',
            }}
          />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              {/* Crisp Circular Brand Seal Showcase */}
              <div className="mx-auto mb-6 flex flex-col items-center">
                <div
                  onClick={() => setActiveModal({ type: 'logo-preview' })}
                  title="Click to enlarge official emblem"
                  className="group relative h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[#051728] p-1 shadow-[0_16px_40px_-10px_rgba(10,25,47,0.28)] ring-2 ring-[#C5A059] transition duration-500 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt="Online Legal Aegis Consultancy and Academy Crest"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/45 bg-white/85 px-4 py-1.5 shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9E7B36]">
                    Online Legal Aegis • Consultancy &amp; Academy
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                </div>
              </div>
            </Reveal>

            {/* Main Bold Navy Blue Serif Headline */}
            <Reveal delay={100}>
              <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#0A192F] leading-[1.08]">
                Your Rights. Your Career.{' '}
                <span className="relative inline-block">
                  Our Support.
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                </span>
              </h1>
            </Reveal>

            {/* Sub-headline explaining the dual purpose */}
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl font-normal leading-relaxed text-[#4A5568]">
                A reliable online platform for expert legal consultancy and coaching for legal aspirants.
              </p>
            </Reveal>

            {/* Two Beautifully Styled Side-by-Side Buttons */}
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                {/* Solid Navy Blue Button: "Get Legal Help" */}
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0A192F] px-8 py-4 text-sm sm:text-base font-semibold tracking-wide text-white shadow-[0_12px_28px_-8px_rgba(10,25,47,0.45)] ring-1 ring-[#0A192F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#112645] hover:shadow-[0_16px_32px_-8px_rgba(10,25,47,0.55)]"
                >
                  <Scale className="h-4 w-4 text-[#DFC184]" />
                  Get Legal Help
                </a>

                {/* Outlined Gold Button: "Explore Academy" */}
                <a
                  href="#academy"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-[#C5A059] bg-white/75 px-8 py-4 text-sm sm:text-base font-semibold tracking-wide text-[#0A192F] shadow-xs transition duration-300 hover:-translate-y-0.5 hover:bg-[#C5A059]/12 hover:border-[#9E7B36]"
                >
                  <GraduationCap className="h-4 w-4 text-[#9E7B36]" />
                  Explore Academy
                </a>
              </div>
            </Reveal>

            {/* Subtle 5-Pillar Badge Strip echoing the Logo's 5 Core Icons */}
            <Reveal delay={400}>
              <div className="mt-14 pt-8 border-t border-[#0A192F]/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E7B36] mb-4">
                  Core Specializations From Our Chamber &amp; Academy
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
                  {[
                    { label: 'Legal Consultancy', icon: Scale },
                    { label: 'Contract Drafting', icon: FileText },
                    { label: 'Property & Land Matters', icon: Home },
                    { label: 'Family & Marriage Law', icon: Users },
                    { label: 'Online Law Coaching', icon: GraduationCap },
                  ].map((pill) => {
                    const IconComponent = pill.icon;
                    return (
                      <span
                        key={pill.label}
                        className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/35 bg-white px-3.5 py-1.5 text-xs font-medium text-[#0A192F] shadow-2xs"
                      >
                        <IconComponent className="h-3.5 w-3.5 text-[#9E7B36]" />
                        {pill.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================================
            3. THE DUAL PILLARS (The Core Services)
        ====================================================================== */}
        <section
          id="services"
          className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA]/70 to-[#FAF8F5] border-t border-[#C5A059]/20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9E7B36]">
                  The Dual Pillars of Online Legal Aegis
                </span>
                <h2 className="mt-2 font-serif-display text-3xl sm:text-5xl font-bold text-[#0A192F]">
                  Trusted Legal Counsel &amp; Academic Mastery
                </h2>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                  <span className="h-[1px] w-14 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-sm">✦</span>
                  <span className="h-[1px] w-14 bg-[#C5A059]" />
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                  Whether you are an individual seeking confidential legal remedies or a law aspirant building a distinguished career, choose your dedicated track below.
                </p>
              </div>
            </Reveal>

            {/* Split Two-Column Architectural Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {/* ===============================================================
                  LEFT CARD: LEGAL CONSULTANCY (Soft White + Gold Border)
              ================================================================ */}
              <Reveal delay={100} className="flex">
                <div className="group relative flex w-full flex-col justify-between rounded-2xl border-2 border-[#C5A059] bg-white p-6 sm:p-9 shadow-[0_20px_45px_-15px_rgba(10,25,47,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_55px_-12px_rgba(197,160,89,0.22)]">
                  {/* Top Gold Accent Bar */}
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-xl bg-gold-metallic" />

                  <div>
                    {/* Pillar Header */}
                    <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#C5A059]/25">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C5A059]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#9E7B36]">
                          <Lock className="h-3 w-3" /> Pillar I • 100% Confidential
                        </span>
                        <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl font-bold text-[#0A192F]">
                          Legal Consultancy
                        </h3>
                        <p className="mt-1.5 text-sm text-[#4A5568]">
                          Authoritative legal advice, dispute resolution, and precision drafting tailored to protect your legal rights.
                        </p>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C5A059]/50 bg-[#FAF8F5] text-[#9E7B36] shadow-xs">
                        <Scale className="h-7 w-7" />
                      </div>
                    </div>

                    {/* Visually Pleasing Checklist of Common Issues */}
                    <div className="mt-6 space-y-3" role="list">
                      {CONSULTANCY_ITEMS.map((item) => {
                        const isExpanded = expandedConsultancy === item.id;
                        return (
                          <div
                            key={item.id}
                            role="listitem"
                            className={`rounded-xl border transition-all duration-300 ${
                              isExpanded
                                ? 'border-[#C5A059] bg-[#FAF8F5]/90 shadow-xs'
                                : 'border-[#0A192F]/10 bg-white hover:border-[#C5A059]/60'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedConsultancy(isExpanded ? null : item.id)
                              }
                              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left cursor-pointer"
                            >
                              <div className="flex items-center gap-3.5">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40">
                                  {renderConsultancyIcon(item.iconName)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-base text-[#0A192F]">
                                      {item.title}
                                    </span>
                                  </div>
                                  <span className="block text-xs font-medium text-[#9E7B36]">
                                    {item.shortTag}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#9E7B36]">
                                  <Check className="h-3.5 w-3.5" />
                                </span>
                                <ChevronDown
                                  className={`h-4 w-4 text-[#4A5568] transition-transform duration-300 ${
                                    isExpanded ? 'rotate-180 text-[#9E7B36]' : ''
                                  }`}
                                />
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-4 pt-1 border-t border-[#C5A059]/20 text-xs sm:text-sm text-[#4A5568]">
                                <p className="leading-relaxed">{item.description}</p>
                                <ul className="mt-2.5 space-y-1.5">
                                  {item.deliverables.map((del) => (
                                    <li key={del} className="flex items-center gap-2 text-xs font-medium text-[#0A192F]">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                                      {del}
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-3 pt-2 flex justify-end">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setActiveModal({
                                        type: 'consultation',
                                        initialTrack: 'consultancy',
                                        initialTopic: item.title,
                                      })
                                    }
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E7B36] hover:text-[#0A192F] transition cursor-pointer"
                                  >
                                    Consult on {item.title}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer: Confidentiality Assurance + CTA */}
                  <div className="mt-8 pt-6 border-t border-[#C5A059]/30">
                    <div className="mb-4 flex items-center justify-between rounded-xl bg-[#FAF8F5] px-4 py-3 border border-[#C5A059]/35">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="h-5 w-5 text-[#9E7B36] shrink-0" />
                        <span className="text-xs font-semibold text-[#0A192F]">
                          Strictly Confidential • Verified Senior Legal Opinion
                        </span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7B36]">
                        Online &amp; Pan-India
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveModal({
                          type: 'consultation',
                          initialTrack: 'consultancy',
                        })
                      }
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold-metallic py-4 text-sm sm:text-base font-bold text-[#0A192F] shadow-md transition duration-300 hover:brightness-105 cursor-pointer"
                    >
                      Book Legal Consultation
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* ===============================================================
                  RIGHT CARD: COACHING & ACADEMY (Soft White + Navy Border)
              ================================================================ */}
              <Reveal delay={200} className="flex">
                <div
                  id="academy"
                  className="group relative flex w-full flex-col justify-between rounded-2xl border-2 border-[#0A192F] bg-white p-6 sm:p-9 shadow-[0_20px_45px_-15px_rgba(10,25,47,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_55px_-12px_rgba(10,25,47,0.18)] scroll-mt-24"
                >
                  {/* Top Navy Accent Bar */}
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-xl bg-[#0A192F]" />

                  <div>
                    {/* Pillar Header */}
                    <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#0A192F]/15">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A192F]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0A192F]">
                          <GraduationCap className="h-3.5 w-3.5 text-[#9E7B36]" /> Pillar II • Skill &amp; Career Growth
                        </span>
                        <h3 className="mt-3 font-serif-display text-3xl sm:text-4xl font-bold text-[#0A192F]">
                          Coaching &amp; Academy
                        </h3>
                        <p className="mt-1.5 text-sm text-[#4A5568]">
                          Structured judiciary preparation, practical drafting mastery, and personal mentorship for law students and advocates.
                        </p>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#0A192F]/20 bg-[#0A192F] text-[#DFC184] shadow-xs">
                        <BookOpen className="h-7 w-7" />
                      </div>
                    </div>

                    {/* Focus Areas List */}
                    <div className="mt-6 space-y-3.5" role="list">
                      {ACADEMY_ITEMS.map((item) => {
                        const isExpanded = expandedAcademy === item.id;
                        return (
                          <div
                            key={item.id}
                            role="listitem"
                            className={`rounded-xl border transition-all duration-300 ${
                              isExpanded
                                ? 'border-[#0A192F] bg-[#FAF8F5] shadow-xs'
                                : 'border-[#0A192F]/12 bg-white hover:border-[#0A192F]/45'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedAcademy(isExpanded ? null : item.id)
                              }
                              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left cursor-pointer"
                            >
                              <div className="flex items-center gap-3.5">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A192F] text-[#DFC184]">
                                  {renderAcademyIcon(item.iconName)}
                                </div>
                                <div>
                                  <span className="block font-semibold text-base text-[#0A192F]">
                                    {item.title}
                                  </span>
                                  <span className="block text-xs font-medium text-[#9E7B36]">
                                    {item.shortTag}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="hidden sm:inline-flex rounded-full bg-[#0A192F]/8 px-2.5 py-0.5 text-[11px] font-semibold text-[#0A192F]">
                                  Module
                                </span>
                                <ChevronDown
                                  className={`h-4 w-4 text-[#4A5568] transition-transform duration-300 ${
                                    isExpanded ? 'rotate-180 text-[#0A192F]' : ''
                                  }`}
                                />
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-4 pt-1 border-t border-[#0A192F]/10 text-xs sm:text-sm text-[#4A5568]">
                                <p className="leading-relaxed">{item.description}</p>
                                <ul className="mt-2.5 space-y-1.5">
                                  {item.highlights.map((hl) => (
                                    <li key={hl} className="flex items-center gap-2 text-xs font-medium text-[#0A192F]">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A192F]" />
                                      {hl}
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-3 pt-2 flex justify-end">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setActiveModal({
                                        type: 'consultation',
                                        initialTrack: 'academy',
                                        initialTopic: item.title,
                                      })
                                    }
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A192F] hover:text-[#9E7B36] transition cursor-pointer"
                                  >
                                    Inquire About {item.title}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Additional Academy Curriculum Pills */}
                    <div className="mt-5 rounded-xl border border-dashed border-[#0A192F]/20 bg-[#FAF8F5]/70 p-4">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#9E7B36]">
                        Also Covered in Online Law Coaching:
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {[
                          'BNS / IPC',
                          'BNSS / CrPC',
                          'BSA / Evidence Act',
                          'CPC & Limitation',
                          'Constitutional Law',
                          'Contract & Specific Relief',
                          'Judgment Writing',
                        ].map((sub) => (
                          <span
                            key={sub}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-[#0A192F] border border-[#0A192F]/10"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Growth Emphasis + CTA */}
                  <div className="mt-8 pt-6 border-t border-[#0A192F]/15">
                    <div className="mb-4 flex items-center justify-between rounded-xl bg-[#FAF8F5] px-4 py-3 border border-[#0A192F]/15">
                      <div className="flex items-center gap-2.5">
                        <Award className="h-5 w-5 text-[#9E7B36] shrink-0" />
                        <span className="text-xs font-semibold text-[#0A192F]">
                          Live Interactive Classes • Personal Mentorship
                        </span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A192F]">
                        Aspirants &amp; Advocates
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveModal({
                          type: 'consultation',
                          initialTrack: 'academy',
                        })
                      }
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0A192F] py-4 text-sm sm:text-base font-bold text-white shadow-md transition duration-300 hover:bg-[#122849] cursor-pointer"
                    >
                      Join Coaching &amp; Academy
                      <ArrowRight className="h-4 w-4 text-[#DFC184]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. THE TRUST & AUTHORITY BANNER
        ====================================================================== */}
        <section className="relative overflow-hidden bg-[#0A192F] py-20 sm:py-24 text-white border-y-2 border-[#C5A059]/50">
          {/* Subtle Classical Architectural Fluted Pattern Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(#C5A059 1px, transparent 1px), radial-gradient(#C5A059 1px, #0A192F 1px)',
              backgroundSize: '36px 36px',
              backgroundPosition: '0 0, 18px 18px',
            }}
          />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#051626]/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#DFC184]">
                <span>✦</span> OurFoundational Credo <span>✦</span>
              </div>

              {/* Centered in Gold Text */}
              <h2 className="mt-5 font-serif-display text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-wide text-gold-gradient leading-tight">
                “Expert Guidance. Reliable Solutions. Justice Assured.”
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#C5A059]" />
                <Scale className="h-5 w-5 text-[#C5A059]" />
                <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#C5A059]" />
              </div>
            </Reveal>

            {/* Three Simple, Elegant Icons with Short Text */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {TRUST_PILLARS.map((pillar, idx) => {
                const delayVal = idx === 0 ? 100 : idx === 1 ? 200 : 300;
                return (
                  <Reveal key={pillar.id} delay={delayVal as 100 | 200 | 300}>
                    <div className="group relative h-full rounded-2xl border border-[#C5A059]/30 bg-[#061325]/70 p-7 sm:p-8 backdrop-blur-xs transition duration-300 hover:border-[#C5A059] hover:bg-[#061325]">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C5A059] bg-[#0A192F] text-[#DFC184] shadow-[0_0_25px_rgba(197,160,89,0.2)] transition group-hover:scale-105">
                        {pillar.id === 'experience' && <Award className="h-7 w-7" />}
                        {pillar.id === 'guidance' && <Users className="h-7 w-7" />}
                        {pillar.id === 'solutions' && <ShieldCheck className="h-7 w-7" />}
                      </div>

                      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#DFC184]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/75">
                        {pillar.subtitle}
                      </p>
                      <p className="mt-3.5 text-sm leading-relaxed text-white/80">
                        {pillar.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. THE WEBINAR / EVENT SPOTLIGHT
        ====================================================================== */}
        <section id="webinar" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div
                className="invitation-frame relative overflow-hidden rounded-2xl border-2 border-[#C5A059] p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_-15px_rgba(197,160,89,0.28)]"
                style={{
                  background: 'linear-gradient(135deg, #FAF6EE 0%, #F2E8D5 100%)',
                }}
              >
                {/* Decorative Subtle Corner Seal */}
                <div className="pointer-events-none absolute -right-16 -bottom-16 opacity-[0.07]">
                  <img
                    src={logoUrl}
                    alt=""
                    className="h-80 w-80 rounded-full object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left & Center Invitation Details */}
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A192F] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFC184]">
                        <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
                        {WEBINAR_DATA.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#9E7B36]/50 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#9E7B36]">
                        {WEBINAR_DATA.offerTag}
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif-display text-2xl sm:text-4xl font-bold text-[#0A192F] leading-tight">
                      {WEBINAR_DATA.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                      {WEBINAR_DATA.subtitle}
                    </p>

                    {/* Perks Checklist */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {WEBINAR_DATA.perks.map((perk) => (
                        <div
                          key={perk}
                          className="flex items-center gap-2 rounded-lg border border-[#C5A059]/40 bg-white/75 px-3 py-2 text-xs font-semibold text-[#0A192F]"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#9E7B36]" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-[#4A5568]">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-[#9E7B36]" />
                        Upcoming Sunday • 11:00 AM IST
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-[#9E7B36]" />
                        {WEBINAR_DATA.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right Pricing & Gold CTA Ticket Box */}
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-[#C5A059] bg-white/95 p-6 sm:p-7 text-center shadow-lg lg:min-w-[290px]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9E7B36]">
                      Special Invitation Pass
                    </span>
                    <div className="mt-2 flex items-baseline justify-center gap-2.5">
                      <span className="font-mono-num text-sm text-[#4A5568] line-through">
                        {WEBINAR_DATA.originalPrice}
                      </span>
                      <span className="font-mono-num text-4xl sm:text-5xl font-bold text-[#0A192F]">
                        {WEBINAR_DATA.offerPrice}
                      </span>
                    </div>
                    <span className="mt-1 text-xs text-[#4A5568]">
                      Inclusive of Certificate &amp; Study Material
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveModal({ type: 'webinar' })}
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-metallic px-6 py-4 text-sm sm:text-base font-bold text-[#0A192F] shadow-[0_10px_25px_-5px_rgba(197,160,89,0.65)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 cursor-pointer"
                    >
                      Register Now for ₹99
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <span className="mt-2.5 text-[11px] font-medium text-[#4A5568]">
                      Instant confirmation via WhatsApp &amp; Email
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================================
            6. CONTACT & FOOTER (Simple and Accessible)
        ====================================================================== */}
        <section
          id="contact"
          className="py-16 sm:py-24 bg-[#F3EFEA]/80 border-t border-[#C5A059]/25 scroll-mt-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9E7B36]">
                Connect With Our Chamber &amp; Academy
              </span>
              <h2 className="mt-2 font-serif-display text-3xl sm:text-5xl font-bold text-[#0A192F]">
                Here to Protect Your Rights &amp; Guide Your Future
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#4A5568] leading-relaxed">
                Whether you require confidential legal consultation on a personal or property matter, or structured mentorship to excel in the legal profession, reach out directly through any of our official channels below.
              </p>
            </Reveal>

            {/* Three Elegant Contact Cards: Phone, Gmail, Instagram (@legal_aegis) */}
            <Reveal delay={100}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. Phone Number */}
                <div className="group flex flex-col items-center justify-between rounded-2xl border border-[#C5A059]/40 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-md">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7B36] border border-[#C5A059]/40">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E7B36]">
                      Direct Helpline
                    </span>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="mt-1 font-mono-num text-lg font-bold text-[#0A192F] hover:text-[#9E7B36] transition"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <span className="mt-1 text-xs text-[#4A5568]">
                      Mon – Sat • 10:00 AM to 8:00 PM
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#0A192F] border border-[#0A192F]/15 hover:border-[#C5A059]"
                    >
                      Call Now
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(CONTACT_INFO.phoneDisplay, 'phone')}
                      className="inline-flex items-center gap-1 rounded-lg bg-[#FAF8F5] px-2.5 py-1.5 text-xs font-medium text-[#4A5568] border border-[#0A192F]/10 hover:text-[#0A192F] cursor-pointer"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* 2. Gmail Address */}
                <div className="group flex flex-col items-center justify-between rounded-2xl border border-[#C5A059]/40 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-md">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7B36] border border-[#C5A059]/40">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E7B36]">
                      Official Gmail
                    </span>
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="mt-1 text-sm sm:text-base font-bold text-[#0A192F] hover:text-[#9E7B36] transition break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <span className="mt-1 text-xs text-[#4A5568]">
                      Send documents or case queries
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#0A192F] border border-[#0A192F]/15 hover:border-[#C5A059]"
                    >
                      Send Email
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                      className="inline-flex items-center gap-1 rounded-lg bg-[#FAF8F5] px-2.5 py-1.5 text-xs font-medium text-[#4A5568] border border-[#0A192F]/10 hover:text-[#0A192F] cursor-pointer"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedField === 'email' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* 3. Instagram Handle (@legal_aegis) */}
                <div className="group flex flex-col items-center justify-between rounded-2xl border border-[#C5A059]/40 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-md">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/15 text-[#9E7B36] border border-[#C5A059]/40">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E7B36]">
                      Instagram Community
                    </span>
                    <a
                      href={CONTACT_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 font-mono-num text-lg font-bold text-[#0A192F] hover:text-[#9E7B36] transition"
                    >
                      {CONTACT_INFO.instagramHandle}
                    </a>
                    <span className="mt-1 text-xs text-[#4A5568]">
                      Daily legal updates &amp; exam tips
                    </span>
                  </div>

                  <div className="mt-4">
                    <a
                      href={CONTACT_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-semibold text-[#0A192F] border border-[#0A192F]/15 hover:border-[#C5A059]"
                    >
                      Follow {CONTACT_INFO.instagramHandle}
                      <ExternalLink className="h-3 w-3 text-[#9E7B36]" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp Channel & Direct Consultation Action Row */}
            <Reveal delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CONTACT_INFO.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#0A192F] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-lg ring-2 ring-[#C5A059]/60 transition duration-300 hover:-translate-y-0.5 hover:bg-[#102544]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  Join Official WhatsApp Channel
                  <ExternalLink className="h-4 w-4 text-[#DFC184]" />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setActiveModal({
                      type: 'consultation',
                      initialTrack: 'consultancy',
                    })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold-metallic px-7 py-4 text-sm sm:text-base font-bold text-[#0A192F] shadow-md transition duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Schedule Online Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* =====================================================================
          DEEP NAVY BLUE FOOTER
      ====================================================================== */}
      <footer className="bg-[#061121] text-white border-t-2 border-[#C5A059]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
            {/* Brand Logo & Name in Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <button
                type="button"
                onClick={() => setActiveModal({ type: 'logo-preview' })}
                className="h-16 w-16 shrink-0 rounded-full bg-[#051728] p-0.5 ring-2 ring-[#C5A059] shadow-lg transition hover:scale-105 cursor-pointer"
                title="View Official Brand Crest"
              >
                <img
                  src={logoUrl}
                  alt="Online Legal Aegis Consultancy and Academy Logo"
                  className="h-full w-full rounded-full object-contain"
                />
              </button>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#DFC184]">
                  Online
                </div>
                <div className="font-serif-display text-2xl font-bold tracking-wide text-white">
                  LEGAL AEGIS
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  Consultancy and Academy
                </div>
              </div>
            </div>

            {/* Footer Quick Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-white/80">
              <a href="#top" className="hover:text-[#DFC184] transition">
                Home
              </a>
              <a href="#services" className="hover:text-[#DFC184] transition">
                Legal Consultancy
              </a>
              <a href="#academy" className="hover:text-[#DFC184] transition">
                Coaching &amp; Academy
              </a>
              <a href="#webinar" className="hover:text-[#DFC184] transition">
                ₹99 Live Webinar
              </a>
              <a href="#contact" className="hover:text-[#DFC184] transition">
                Contact Us
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Motto Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} Online Legal Aegis Consultancy and Academy. All rights reserved.
            </p>
            <p className="text-[#DFC184] font-medium tracking-wider uppercase text-[11px]">
              ✦ Expert Guidance. Reliable Solutions. Justice Assured. ✦
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Modals for Consultation, Academy, Webinar ₹99, and Logo Preview */}
      <ActionModals modal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
