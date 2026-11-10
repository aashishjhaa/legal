export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  deliverables: string[];
  iconName: 'property' | 'family' | 'civil' | 'rti' | 'consumer' | 'drafting';
}

export interface AcademyItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  highlights: string[];
  iconName: 'judiciary' | 'drafting' | 'career' | 'mentorship' | 'coaching' | 'research';
}

export const CONSULTANCY_ITEMS: ServiceItem[] = [
  {
    id: 'property',
    title: 'Property & Land Matters',
    shortTag: 'Title • Partition • Mutation',
    description:
      'Comprehensive legal due diligence, ancestral property rights, partition suits, land dispute resolution, and conveyance deed verification.',
    deliverables: [
      '30-Year Title Search & Encumbrance Opinion',
      'Ancestral & Self-Acquired Partition Advisory',
      'Sale Deed, Gift Deed & Lease Agreement Vetting',
    ],
    iconName: 'property',
  },
  {
    id: 'family',
    title: 'Family & Marriage Law',
    shortTag: 'Matrimonial • Custody • Maintenance',
    description:
      'Empathetic, strictly confidential counsel for matrimonial harmony, divorce proceedings, alimony/maintenance, child custody, and succession.',
    deliverables: [
      'Mutual Consent & Contested Matrimonial Strategy',
      'Maintenance, Domestic Rights & Guardianship',
      'Wills, Probate & Family Settlement Deeds',
    ],
    iconName: 'family',
  },
  {
    id: 'civil',
    title: 'Civil Law & Recovery Disputes',
    shortTag: 'Injunctions • Notices • Suits',
    description:
      'Strategic representation and advisory for civil disputes, money recovery, breach of contract, specific performance, and legal notices.',
    deliverables: [
      'Authoritative Legal Notice Drafting & Replies',
      'Permanent & Temporary Injunction Strategy',
      'Summary Suits & Commercial Dispute Resolution',
    ],
    iconName: 'civil',
  },
  {
    id: 'rti',
    title: 'RTI (Right to Information)',
    shortTag: 'Applications • First & Second Appeals',
    description:
      'Precision-drafted RTI applications and statutory appeals to obtain official public records, government accountability, and administrative transparency.',
    deliverables: [
      'Pinpoint Question Framing under Section 6(1)',
      'First Appeal & Central/State Information Commission Appeals',
      'Service, Land & Civic Department Record Retrieval',
    ],
    iconName: 'rti',
  },
  {
    id: 'consumer',
    title: 'Consumer Protection & Redressal',
    shortTag: 'Consumer Forum • RERA • Deficiencies',
    description:
      'Strong legal remedies against unfair trade practices, builder delays, medical/banking negligence, and defective goods or services.',
    deliverables: [
      'Formal Pre-Litigation Consumer Legal Notices',
      'District, State & National Commission Complaints',
      'E-Daakhil Online Filing & Compensation Strategy',
    ],
    iconName: 'consumer',
  },
  {
    id: 'drafting',
    title: 'Contract & Legal Drafting',
    shortTag: 'Agreements • MOUs • Affidavits',
    description:
      'Bespoke, legally enforceable contracts, MOUs, commercial agreements, power of attorney, and partnership deeds tailored to protect your interests.',
    deliverables: [
      'Commercial Contracts, NDAs & Service Agreements',
      'Power of Attorney, Indemnity Bonds & Affidavits',
      'Risk-Mitigation Clause Review & Redlining',
    ],
    iconName: 'drafting',
  },
];

export const ACADEMY_ITEMS: AcademyItem[] = [
  {
    id: 'judiciary',
    title: 'Judiciary Examination Prep',
    shortTag: 'Prelims • Mains • Interview',
    description:
      'Structured, state-focused preparation covering major and minor laws, landmark Supreme Court rulings, and high-scoring Mains answer writing.',
    highlights: [
      'BNS, BNSS, BSA & Classical Criminal/Civil Law Mastery',
      'Daily Answer Evaluation & Judgment Writing Practice',
      'State-Specific Local Laws & Mock Interview Panels',
    ],
    iconName: 'judiciary',
  },
  {
    id: 'drafting-academy',
    title: 'Practical Legal Drafting & Pleading',
    shortTag: 'Courtroom-Ready Skills',
    description:
      'Bridge the gap between law school theory and real legal practice by mastering civil plaints, written statements, bail petitions, and deeds.',
    highlights: [
      'Step-by-Step Civil, Criminal & Writ Drafting Modules',
      'Real-World Conveyancing & Contract Clauses',
      'Live Line-by-Line Feedback on Your Drafts',
    ],
    iconName: 'drafting',
  },
  {
    id: 'career',
    title: 'Career Guidance for Legal Aspirants',
    shortTag: 'Roadmaps • Litigation vs. Corporate',
    description:
      'Clarity-driven counseling for CLAT/LL.B./LL.M. students and young advocates to choose and excel in Judiciary, Litigation, In-House, or Academia.',
    highlights: [
      'Personalized 5-Year Legal Career Blueprint',
      'Internship Selection, CV Building & Chamber Etiquette',
      'AIBE Preparation & Bar Enrollment Guidance',
    ],
    iconName: 'career',
  },
  {
    id: 'mentorship',
    title: '1-on-1 Personal Mentorship',
    shortTag: 'Direct Senior Guidance',
    description:
      'Dedicated mentorship from 14+ year veteran legal professionals who monitor your academic progress, resolve doubts, and build courtroom confidence.',
    highlights: [
      'Weekly Personal Progress & Strategy Check-ins',
      'Case File Reading & Client Counseling Simulations',
      'Direct Doubt Resolution via Live Sessions',
    ],
    iconName: 'mentorship',
  },
];

export const TRUST_PILLARS = [
  {
    id: 'experience',
    title: '14+ Years of Experience',
    subtitle: 'Seasoned Legal & Academic Authority',
    description:
      'Over fourteen years of proven expertise across civil, family, property, and consumer jurisdictions combined with dedicated legal teaching.',
  },
  {
    id: 'guidance',
    title: 'Personalized Guidance',
    subtitle: 'Tailored to Your Case or Career',
    description:
      'Every client consultation and student mentorship session is one-on-one, ensuring confidential attention and customized roadmaps.',
  },
  {
    id: 'solutions',
    title: 'Practical Solutions',
    subtitle: 'Clear, Actionable & Results-Driven',
    description:
      'We translate complex statutes and courtroom procedures into clear, ethical, and practical steps that safeguard your rights and time.',
  },
];

export const WEBINAR_DATA = {
  badge: 'LIVE INTERACTIVE WEBINAR',
  offerTag: 'SPECIAL OFFER • LIMITED SEATS',
  title: 'Mastering Practical Legal Drafting, Citizen Rights & The Judiciary Roadmap',
  subtitle:
    'An exclusive live session by Online Legal Aegis designed for law students, young advocates, and citizens seeking practical legal clarity.',
  originalPrice: '₹499',
  offerPrice: '₹99',
  duration: '90 Minutes + Live Q&A',
  mode: 'Live Online (Zoom / Google Meet)',
  perks: [
    'Verified Certificate of Participation',
    'Ready-to-Use Legal Notice & Contract Templates',
    'Direct Q&A with 14+ Years Experienced Mentor',
  ],
};

export const CONTACT_INFO = {
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'onlinelegalaegis@gmail.com',
  emailHref: 'mailto:onlinelegalaegis@gmail.com',
  instagramHandle: '@legal_aegis',
  instagramUrl: 'https://www.instagram.com/legal_aegis',
  whatsappChannelUrl: 'https://whatsapp.com/channel/0029VaLegalAegis',
  whatsappDirectUrl:
    'https://wa.me/919876543210?text=Hello%20Online%20Legal%20Aegis%2C%20I%20would%20like%20to%20inquire%20about%20your%20Consultancy%20%2F%20Academy%20services.',
};
