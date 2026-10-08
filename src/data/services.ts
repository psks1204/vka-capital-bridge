import imgInsuranceRisk from '../assets/services/service-insurance-risk.jpg'
import imgUsAccounting from '../assets/services/service-us-accounting.jpg'
import imgHedgeAccounting from '../assets/services/service-hedge-accounting.jpg'
import imgInternationalTax from '../assets/services/service-international-tax.jpg'
import imgRealEstate from '../assets/services/service-real-estate.jpg'
import imgManagementConsultancy from '../assets/services/service-management-consultancy.jpg'

export interface CapabilityItem {
  number: string
  title: string
  description: string
}

export interface ApproachStep {
  number: string
  title: string
  description: string
}

export interface ClientSituation {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  number: string
  title: string
  shortTitle: string
  heroHighlightWord: string
  category: string
  kicker: string
  tag: string
  description: string
  cardImage: string
  heroImage: string
  overviewImage: string
  perspectiveImage: string
  subServices?: any[]
  parentSlug?: string
  overview: {
    heading: string
    subheading: string
    lead: string
    paragraphs: string[]
  }
  capabilities: CapabilityItem[]
  approach: {
    heading: string
    subheading: string
    lead: string
    steps: ApproachStep[]
  }
  situations: ClientSituation[]
  crossBorder: {
    heading: string
    subheading: string
    lead: string
    paragraph: string
  }
  whyVka: {
    heading: string
    subheading: string
    lead: string
    paragraph: string
    points: string[]
  }
  cta: {
    heading: string
    description: string
    buttonText: string
  }
  prev: {
    slug: string
    title: string
  }
  next: {
    slug: string
    title: string
  }
  seo: {
    title: string
    description: string
  }
}

export const servicesData: ServiceData[] = [
  {
    slug: 'insurance-risk-management',
    number: '01',
    title: 'Insurance & Risk Management Advisory',
    shortTitle: 'Insurance & Risk',
    heroHighlightWord: 'Advisory',
    category: 'Risk & Capital Protection',
    kicker: 'Risk Architecture & Placements',
    tag: 'Surety Bonds Lender Compliant',
    description:
      'Enterprise risk assessment and insurance program structuring surety bonds, political risk, trade credit and property/casualty placement aligned to lender and regulatory requirements.',
    cardImage: imgInsuranceRisk,
    heroImage: imgInsuranceRisk,
    overviewImage: '/images/services/insurance-risk-management.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Managing risk.',
      subheading: 'Enabling progress.',
      lead: 'We help clients identify, assess and mitigate risk through structured insurance and risk management solutions.',
      paragraphs: [
        'Our advisory approach aligns with lender, regulatory and operational requirements, ensuring long-term resilience and confidence in your capital and assets.',
        'Risk rarely sits in one place. A project may depend on financing terms, contractual obligations, insurance covenants and the counterparties behind them. We bring those exposures into one clear view, then structure coverage around how the business actually operates.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Enterprise Risk Assessment',
        description: 'Evaluate and prioritize risks across operations, balance sheet assets and operating markets.'
      },
      {
        number: '02',
        title: 'Insurance Program Structuring',
        description: 'Design tailored insurance architectures for optimal asset protection and cost efficiency.'
      },
      {
        number: '03',
        title: 'Surety Bonds',
        description: 'Support project and performance requirements with reliable, collateral-efficient surety solutions.'
      },
      {
        number: '04',
        title: 'Political Risk',
        description: 'Mitigate sovereign, regulatory and expropriation exposure in cross-border capital investments.'
      },
      {
        number: '05',
        title: 'Trade Credit',
        description: 'Manage accounts receivable and counterparty insolvency risk across global supply routes.'
      },
      {
        number: '06',
        title: 'Property & Casualty Placement',
        description: 'Arrange comprehensive physical asset and liability coverage matched to operational risk profiles.'
      },
      {
        number: '07',
        title: 'Lender & Regulatory Requirements',
        description: 'Ensure institutional compliance with bank syndicates, multilateral lenders and statutory standards.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Practical. Structured. Global.',
      lead: 'We combine deep sector knowledge with a disciplined process to deliver insurance and risk solutions that support your commercial objectives.',
      steps: [
        {
          number: '01',
          title: 'Assess',
          description: 'Map balance sheet exposures, contract terms and lender debt covenants across all operational units.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Design program specifications, deductible structures and syndicated risk placement layers.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Coordinate with domestic and international underwriting syndicates for seamless policy issuance.'
        }
      ]
    },
    situations: [
      {
        title: 'Large-Scale Infrastructure Bidding',
        description: 'Contractors requiring performance surety bonds to replace bank guarantee lines and preserve working capital.'
      },
      {
        title: 'Cross-Border Capital Deployment',
        description: 'Institutional investors structuring political risk and currency inconvertibility protection in frontier markets.'
      },
      {
        title: 'Project Finance Debt Syndication',
        description: 'Developers satisfying stringent technical insurance due diligence mandated by multilateral project lenders.'
      }
    ],
    crossBorder: {
      heading: 'Cross-border insight.',
      subheading: 'Local execution.',
      lead: 'Risk does not stop at national borders.',
      paragraph:
        'Our global market perspective helps you navigate disparate regulatory environments, regional political developments, and international reinsurance markets with clarity and institutional rigor.'
    },
    whyVka: {
      heading: 'Experience. Independence. Focus.',
      subheading: 'WHY VKA',
      lead: 'We provide objective advisory and structured solutions that protect balance sheets and create commercial value.',
      paragraph:
        'Unlike volume-driven brokers, our role is strictly fiduciary and strategic. We evaluate your obligations from a lender and contractor perspective, eliminating redundant premiums while closing critical coverage gaps.',
      points: [
        'Independent advisory approach',
        'Global underwriting market access',
        'Deep infrastructure sector understanding',
        'Long-term commercial partnership mindset'
      ]
    },
    cta: {
      heading: "Let's build a more resilient future.",
      description:
        'Talk to our team to discuss how our enterprise risk and insurance advisory services can protect your capital and projects.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'advisory-management-consultancy',
      title: 'Advisory & Management Consultancy'
    },
    next: {
      slug: 'infrastructure-advisory',
      title: 'Infrastructure Advisory'
    },
    seo: {
      title: 'Insurance & Risk Management Advisory | VKA Capital Bridge',
      description:
        'Enterprise risk assessment, surety bond program structuring, and lender-compliant insurance placement for infrastructure and corporate enterprises.'
    }
  },
  {
    slug: 'infrastructure-advisory',
    number: '02',
    title: 'Infrastructure Advisory',
    shortTitle: 'Infrastructure',
    heroHighlightWord: 'Advisory',
    category: 'Asset Development',
    kicker: 'Project Structuring & Viability',
    tag: 'Large-Scale Capital Projects',
    description: 'We structure complex infrastructure projects, providing technical and financial advisory from initial feasibility through project delivery and commercial operation.',
    cardImage: '/images/services/us-accounting-compliance.jpg',
    heroImage: '/images/services/us-accounting-compliance.jpg',
    overviewImage: '/images/services/us-accounting-compliance.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Building resilience.',
      subheading: 'Structured execution.',
      lead: 'Infrastructure projects demand precise capital structuring and uncompromising risk allocation.',
      paragraphs: [
        'We advise governments, sponsors, and investors on structuring public-private partnerships (PPPs) and direct investments into critical infrastructure.',
        'Our focus remains on predictable cash yields, robust contractor guarantees, and long-term asset operability over multi-decade concession lifecycles.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Project Feasibility & Structuring',
        description: 'Comprehensive financial modeling and technical viability assessments for greenfield and brownfield projects.'
      },
      {
        number: '02',
        title: 'Risk Allocation & Mitigation',
        description: 'Drafting optimal risk matrices between public authorities, sponsors, and engineering contractors.'
      },
      {
        number: '03',
        title: 'Capital Procurement',
        description: 'Sourcing optimal senior debt, mezzanine, and equity tranches to achieve required project IRRs.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Technical. Financial. Legal.',
      lead: 'We integrate engineering realities with sophisticated capital structures.',
      steps: [
        {
          number: '01',
          title: 'Model',
          description: 'Construct detailed life-cycle financial models and scenario analyses.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Design the special purpose vehicle (SPV) and draft concession terms.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Reach financial close and oversee initial capital drawdown.'
        }
      ]
    },
    situations: [
      {
        title: 'Public-Private Partnerships (PPP)',
        description: 'Sponsors bidding on national infrastructure concessions requiring bankable financing packages.'
      }
    ],
    crossBorder: {
      heading: 'Global asset standards.',
      subheading: 'Local execution.',
      lead: 'Infrastructure capital flows globally, but assets are uniquely constrained by local regulations.',
      paragraph: 'We navigate disparate municipal frameworks to ensure international project finance standards are met without alienating local stakeholders.'
    },
    whyVka: {
      heading: 'Integrated oversight. Commercial clarity.',
      subheading: 'WHY VKA',
      lead: 'We align technical engineering inputs with rigorous financial modeling.',
      paragraph: 'Our team bridges the gap between project engineers and institutional credit committees, ensuring technical milestones translate directly into bankable security.',
      points: [
        'Deep PPP structuring experience',
        'Direct relationships with multilateral lenders',
        'Independent financial modeling'
      ]
    },
    cta: {
      heading: 'Advance your infrastructure pipeline.',
      description: 'Speak with our infrastructure advisory team to evaluate your project feasibility and capital strategy.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'insurance-risk-management',
      title: 'Insurance & Risk Management Advisory'
    },
    next: {
      slug: 'surety-bonds-bg-advisory',
      title: 'Surety Bonds & BG Advisory'
    },
    seo: {
      title: 'Infrastructure Advisory | VKA Capital Bridge',
      description: 'Infrastructure project structuring, feasibility modeling, and capital procurement.'
    }
  },
  {
    slug: 'surety-bonds-bg-advisory',
    number: '03',
    title: 'Surety Bonds & BG Advisory',
    shortTitle: 'Surety & BGs',
    heroHighlightWord: 'Surety',
    category: 'Risk & Capital Protection',
    kicker: 'Performance Guarantees',
    tag: 'Collateral Efficiency Contract Bonding',
    description: 'We structure performance bonds and bank guarantees to free up working capital and satisfy stringent employer and regulatory contractual requirements.',
    cardImage: imgHedgeAccounting,
    heroImage: imgHedgeAccounting,
    overviewImage: '/images/services/hedge-accounting.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Capital freedom.',
      subheading: 'Contractual certainty.',
      lead: 'Performance security shouldn\'t paralyze your balance sheet.',
      paragraphs: [
        'Contractors and suppliers are frequently required to post significant collateral to secure performance bonds or bank guarantees. We structure alternative surety facilities that satisfy obligee requirements without tying up critical working capital.',
        'Our advisory ensures you meet complex international and domestic bidding requirements while maintaining the liquidity needed to actually execute the project.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Surety Program Design',
        description: 'Establishing enterprise-wide surety facilities to replace traditional bank guarantee lines.'
      },
      {
        number: '02',
        title: 'Complex Contract Bonding',
        description: 'Structuring advance payment, performance, and retention bonds for large-scale projects.'
      },
      {
        number: '03',
        title: 'Cross-Border Guarantees',
        description: 'Navigating international guarantee requirements and local fronting arrangements.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Analytical. Efficient. Scalable.',
      lead: 'We align your performance security strategy with your overall liquidity objectives.',
      steps: [
        {
          number: '01',
          title: 'Assess',
          description: 'Evaluate current guarantee obligations and collateral utilization.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Design a comprehensive surety program that minimizes cash collateral.'
        },
        {
          number: '03',
          title: 'Place',
          description: 'Negotiate capacity and terms with leading international surety markets.'
        }
      ]
    },
    situations: [
      {
        title: 'Liquidity Optimization',
        description: 'Contractors seeking to release cash collateral trapped in legacy bank guarantees.'
      }
    ],
    crossBorder: {
      heading: 'Navigating jurisdictions.',
      subheading: 'Acceptable security.',
      lead: 'A bond is only effective if the ultimate employer accepts it.',
      paragraph: 'We ensure cross-border surety arrangements meet the exact legal formatting and credit-rating thresholds required by international project owners and government authorities.'
    },
    whyVka: {
      heading: 'Market leverage. Technical precision.',
      subheading: 'WHY VKA',
      lead: 'We understand both the underwriting requirements of the surety market and the commercial realities of the contractor.',
      paragraph: 'Our independence allows us to source the most capital-efficient solutions without being tied to a single financial institution\'s credit appetite.',
      points: [
        'Extensive surety market relationships',
        'Deep understanding of construction finance',
        'Proven collateral reduction strategies'
      ]
    },
    cta: {
      heading: 'Optimize your performance security.',
      description: 'Contact our advisory team to discuss restructuring your bank guarantee and surety bond facilities.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'infrastructure-advisory',
      title: 'Infrastructure Advisory'
    },
    next: {
      slug: 'us-accounting-tax-compliance-advisory',
      title: 'U.S. Accounting, Tax & Compliance Advisory'
    },
    seo: {
      title: 'Surety Bonds & BG Advisory | VKA Capital Bridge',
      description: 'Capital-efficient performance bonds and bank guarantee structuring.'
    }
  },
  {
    slug: 'us-accounting-tax-compliance-advisory',
    number: '04',
    title: 'U.S. Accounting & Compliance Advisory',
    shortTitle: 'U.S. Accounting & Compliance',
    heroHighlightWord: 'Advisory',
    category: 'Cross-Border Structuring',
    kicker: 'U.S. Accounting & Compliance',
    tag: 'GAAP Hedge',
    description: 'Accurate financial reporting and correctly documented hedges for U.S. entities and multinational groups operating in the U.S. Handled as one coordinated practice, because they rarely stay separate in real financial statements.',
    cardImage: imgInternationalTax,
    heroImage: imgInternationalTax,
    overviewImage: '/images/services/international-taxation.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    subServices: [
      {
        title: 'U.S. Accounting & Compliance',
        description: "We keep a company's financial records accurate, aligned with U.S. GAAP, and structured so they hold up under scrutiny — whether that scrutiny comes from an auditor, a regulator, a lender, or a prospective investor.",
        route: '/services/us-accounting-compliance',
        slug: 'us-accounting-compliance'
      },
      {
        title: 'U.S. Investment Hedge Accounting',
        description: "Companies use financial contracts to protect themselves against price swings. Hedge accounting under ASC 815 is the technical discipline of documenting and testing these hedges so financial statements reflect the underlying economics rather than unnecessary accounting volatility.",
        route: '/services/us-investment-hedge-accounting',
        slug: 'us-investment-hedge-accounting'
      }
    ],
    overview: {
      heading: 'Coordinated execution.',
      subheading: 'Technical precision.',
      lead: 'Financial reporting and hedge documentation are deeply intertwined. A decision in one area cascades into the other.',
      paragraphs: [
        'We manage these disciplines as a unified practice. Our approach ensures that your U.S. GAAP compliance and derivative risk management work together seamlessly, rather than creating conflicting objectives or unexpected liabilities.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Integrated Financial Reporting',
        description: 'Synchronized delivery of U.S. GAAP statements and ASC 815 disclosures.'
      },
      {
        number: '02',
        title: 'Cross-Border Harmonization',
        description: 'Aligning international parent-company reporting with distinct U.S. regulatory requirements.'
      },
      {
        number: '03',
        title: 'Audit & Regulatory Defense',
        description: 'Comprehensive documentation and liaison services to satisfy external auditors and regulatory bodies.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Unified. Defensible. Strategic.',
      lead: 'We eliminate the friction of managing disparate advisory teams across interconnected financial disciplines.',
      steps: [
        {
          number: '01',
          title: 'Align',
          description: 'Assess the combined impact of accounting policies and hedge structures.'
        },
        {
          number: '02',
          title: 'Document',
          description: 'Draft robust, contemporaneous documentation that satisfies stringent U.S. regulatory standards.'
        },
        {
          number: '03',
          title: 'Defend',
          description: 'Provide ongoing technical support during complex audit and regulatory reviews.'
        }
      ]
    },
    situations: [
      {
        title: 'Holistic Market Entry',
        description: 'Foreign multinationals establishing U.S. operations requiring simultaneous GAAP compliance and FX risk management.'
      }
    ],
    crossBorder: {
      heading: 'Bridging standards.',
      subheading: 'Unified compliance.',
      lead: 'U.S. financial regulations are uniquely demanding and strictly enforced.',
      paragraph: 'We ensure that international groups can operate within the U.S. market with total confidence, knowing their accounting and hedging positions are technically sound and fully integrated.'
    },
    whyVka: {
      heading: 'One practice. Total clarity.',
      subheading: 'WHY VKA',
      lead: 'By unifying these disciplines, we deliver faster execution and eliminate contradictory advice.',
      paragraph: 'Our team possesses the technical depth to handle complex standalone ASC 815 issues, combined with the strategic breadth to see how they impact your broader U.S. compliance posture.',
      points: [
        'Integrated multi-disciplinary advisory',
        'Deep U.S. GAAP and ASC 815 expertise',
        'Streamlined audit defense and coordination'
      ]
    },
    cta: {
      heading: 'Unify your U.S. compliance strategy.',
      description: 'Speak with our team to discuss how our integrated accounting and compliance services can protect your enterprise.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'surety-bonds-bg-advisory',
      title: 'Surety Bonds & BG Advisory'
    },
    next: {
      slug: 'dubai-real-estate-capital-bridge',
      title: 'Dubai Investment Real Estate'
    },
    seo: {
      title: 'U.S. Accounting & Compliance Advisory | VKA Capital Bridge',
      description: 'Integrated U.S. GAAP reporting and ASC 815 hedge accounting.'
    }
  },
  {
    slug: 'dubai-real-estate-capital-bridge',
    number: '05',
    title: 'Dubai Investment Real Estate',
    shortTitle: 'Dubai Investment Real Estate',
    heroHighlightWord: 'Dubai',
    category: 'Real Estate Investment',
    kicker: 'Global Asset Allocation',
    tag: 'Dubai Premium Assets',
    description: "Exclusive access to Dubai's tier-one master developers and high-yield real estate assets, structured for international investors seeking capital appreciation, secure rental yields, and jurisdictional diversification.",
    cardImage: imgRealEstate,
    heroImage: imgRealEstate,
    overviewImage: '/images/services/real-estate-investment.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Gateway to global assets.',
      subheading: 'Unmatched structural advantages.',
      lead: "Dubai has transitioned from a regional hub into a primary destination for global capital preservation and yield generation.",
      paragraphs: [
        'Through our direct relationships with tier-one master developers in the UAE, we bypass traditional broker networks to secure premium inventory for our clients before it reaches the retail market.',
        'We guide investors through the entire acquisition lifecycle—from initial asset selection and financial underwriting to structural closing and long-term property management.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Direct Developer Access',
        description: 'Priority allocations and VIP inventory access with top-tier Dubai master developers.'
      },
      {
        number: '02',
        title: 'Investment Underwriting',
        description: 'Rigorous financial analysis of projected capital appreciation and net rental yields.'
      },
      {
        number: '03',
        title: 'Golden Visa & Structuring',
        description: 'Facilitating investor residency programs and optimal corporate holding structures.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Selective. Strategic. Secure.',
      lead: 'We treat real estate acquisition as a serious capital allocation exercise, not a speculative purchase.',
      steps: [
        {
          number: '01',
          title: 'Source',
          description: 'Identify premium off-plan and secondary market assets aligned with your yield requirements.'
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Navigate escrow payments, DLD registration, and secure transactional frameworks.'
        },
        {
          number: '03',
          title: 'Manage',
          description: 'Provide end-to-end post-handover management to ensure consistent cash flow realization.'
        }
      ]
    },
    situations: [
      {
        title: 'Capital Flight & Diversification',
        description: "High-net-worth families reallocating capital from volatile jurisdictions into Dubai's secure, tax-efficient real estate market."
      }
    ],
    crossBorder: {
      heading: 'A tax-efficient safe haven.',
      subheading: 'Global liquidity.',
      lead: 'Dubai offers zero capital gains tax and no property taxes, creating an unparalleled environment for asset growth.',
      paragraph: 'We ensure international investors can efficiently deploy capital into the UAE while maintaining full compliance with their home country reporting requirements.'
    },
    whyVka: {
      heading: 'Institutional access. Fiduciary care.',
      subheading: 'WHY VKA',
      lead: 'We are not real estate agents; we are capital advisors managing your global asset exposure.',
      paragraph: 'Our Capital Bridge provides a direct, un-intermediated conduit to Dubai’s most lucrative real estate opportunities, backed by our rigorous financial diligence.',
      points: [
        'Zero-commission, fiduciary-first advisory model',
        'Direct relationships with government-backed developers',
        'End-to-end transaction and residency facilitation'
      ]
    },
    cta: {
      heading: 'Diversify into global real estate.',
      description: 'Speak with our Dubai investment desk to explore current premium allocations and structural requirements.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-accounting-tax-compliance-advisory',
      title: 'U.S. Accounting & Compliance Advisory'
    },
    next: {
      slug: 'advisory-management-consultancy',
      title: 'Advisory & Management Consultancy'
    },
    seo: {
      title: 'Dubai Real Estate Capital Bridge | VKA Capital Bridge',
      description: 'Exclusive access to tier-one Dubai real estate investments, offering capital appreciation, high yields, and tax efficiency.'
    }
  },
  {
    slug: 'advisory-management-consultancy',
    number: '06',
    title: 'Advisory & Management Consultancy',
    shortTitle: 'Management Consultancy',
    heroHighlightWord: 'Consultancy',
    category: 'Strategic Growth & Transition',
    kicker: 'Strategic Growth & Transition',
    tag: 'Capital Raising M&A Strategy',
    description:
      'Strategic and operational consulting business planning, capital raising support and organizational restructuring for businesses navigating growth or transition.',
    cardImage: imgManagementConsultancy,
    heroImage: imgManagementConsultancy,
    overviewImage: '/images/services/advisory-management.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Decisive strategy.',
      subheading: 'Commercial momentum.',
      lead: 'Significant enterprise transitions require seasoned strategic perspective and rigorous operational execution.',
      paragraphs: [
        'We advise owners, boards, and leadership teams navigating pivotal commercial moments ΓÇö whether preparing for institutional capital raising, restructuring underperforming divisions, or entering new international markets.',
        'We do not deliver theoretical slide decks. Our advisory is anchored in balance sheet realities, capital structure discipline, and executive-level governance that drives measurable commercial outcomes.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Business Planning & Modeling',
        description: 'Developing defensible five-year financial models, sensitivity scenarios, and commercial business plans.'
      },
      {
        number: '02',
        title: 'Capital Raising Support',
        description: 'Preparation of institutional information memorandums, dataroom readiness, and debt/equity syndicate facilitation.'
      },
      {
        number: '03',
        title: 'Organizational Restructuring',
        description: 'Refining executive reporting lines, cost structures, and operational governance for scalable efficiency.'
      },
      {
        number: '04',
        title: 'M&A Transaction Advisory',
        description: 'Strategic target evaluation, synergy modeling, and commercial negotiation support during M&A discussions.'
      },
      {
        number: '05',
        title: 'Joint Venture Formations',
        description: 'Structuring governance agreements, capital contribution schedules, and dispute mechanisms for strategic partnerships.'
      },
      {
        number: '06',
        title: 'Corporate Turnaround Strategy',
        description: 'Crisis cash management, debt renegotiation, and non-core asset divestment for stressed operations.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Pragmatic. Commercial. Decisive.',
      lead: 'We partner closely with leadership to resolve bottlenecks and unlock enterprise growth.',
      steps: [
        {
          number: '01',
          title: 'Diagnose',
          description: 'Conduct rapid financial, operational, and commercial audits to identify structural constraints.'
        },
        {
          number: '02',
          title: 'Formulate',
          description: 'Develop concrete strategic initiatives with assigned accountability, capital requirements, and timelines.'
        },
        {
          number: '03',
          title: 'Execute',
          description: 'Work alongside management through critical implementation stages and stakeholder negotiations.'
        }
      ]
    },
    situations: [
      {
        title: 'Scaling from Mid-Market to Institutional',
        description: 'Privately held companies professionalizing governance and reporting to secure institutional private equity.'
      },
      {
        title: 'Generational or Leadership Transition',
        description: 'Family-owned enterprises establishing independent board structures and transparent management succession frameworks.'
      },
      {
        title: 'Strategic Market Entry',
        description: 'Established corporations evaluating cross-border joint ventures or direct corporate expansion into new territories.'
      }
    ],
    crossBorder: {
      heading: 'Navigating international growth.',
      subheading: 'Strategic clarity.',
      lead: 'Expanding across borders challenges traditional operating models and leadership bandwidth.',
      paragraph:
        'We help management teams evaluate cultural, legal, and operational nuances in target jurisdictions, structuring international operations to ensure sustainable long-term performance.'
    },
    whyVka: {
      heading: 'Direct experience. Uncompromising integrity.',
      subheading: 'WHY VKA',
      lead: 'We operate as an extension of the executive suite, bringing decades of commercial deal-making experience.',
      paragraph:
        'Our advice is candid, objective, and solely aligned with long-term shareholder value creation, unencumbered by corporate bureaucracy or conflicts of interest.',
      points: [
        'Board-level strategic and operational advisory',
        'Demonstrated track record in complex capital raising',
        'Hands-on execution support from senior partners',
        'Deep network across institutional capital providers'
      ]
    },
    cta: {
      heading: 'Accelerate your commercial strategy.',
      description:
        'Schedule a confidential discussion with our senior advisory team to review your corporate growth or transition objectives.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'dubai-real-estate-capital-bridge',
      title: 'Dubai Real Estate Capital Bridge'
    },
    next: {
      slug: 'insurance-risk-management',
      title: 'Insurance & Risk Management Advisory'
    },
    seo: {
      title: 'Advisory & Management Consultancy | VKA Capital Bridge',
      description:
        'Strategic and operational consultancy, business planning, institutional capital raising support, and organizational restructuring.'
    }
  }
]

export const subServicesData: ServiceData[] = [
  {
    slug: 'us-accounting-compliance',
    number: '01',
    title: 'U.S. Accounting & Compliance',
    shortTitle: 'U.S. Accounting',
    heroHighlightWord: 'Compliance',
    category: 'GAAP & Regulatory Governance',
    kicker: 'U.S. GAAP & Governance',
    tag: 'U.S. GAAP Audit Readiness',
    description: "We keep a company's financial records accurate, aligned with U.S. GAAP, and structured so they hold up under scrutiny — whether that scrutiny comes from an auditor, a regulator, a lender, or a prospective investor. This covers financial statement preparation, internal controls design, and building a compliance calendar so nothing — a filing deadline, a disclosure requirement — gets missed.",
    cardImage: '/images/services/us-accounting-compliance.jpg',
    heroImage: '/images/services/us-accounting-compliance.jpg',
    overviewImage: '/images/services/us-accounting-compliance.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Financial discipline.',
      subheading: 'Audit certainty.',
      lead: "We keep a company's financial records accurate, aligned with U.S. GAAP, and structured so they hold up under scrutiny — whether that scrutiny comes from an auditor, a regulator, a lender, or a prospective investor.",
      paragraphs: [
        'This covers financial statement preparation, internal controls design, and building a compliance calendar so nothing — a filing deadline, a disclosure requirement — gets missed.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'U.S. GAAP Reporting',
        description: 'Preparation of financial statements, balance sheet reconciliations, and disclosures compliant with U.S. GAAP.'
      },
      {
        number: '02',
        title: 'Internal Control Design',
        description: 'Design and review of internal control frameworks to safeguard corporate assets and mitigate reporting errors.'
      },
      {
        number: '03',
        title: 'Bookkeeping Oversight',
        description: 'Executive supervision of general ledgers, revenue recognition, and multi-currency consolidation.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Methodical. Rigorous. Transparent.',
      lead: 'We establish structured financial workflows that eliminate surprises during year-end audit reviews.',
      steps: [
        {
          number: '01',
          title: 'Diagnostic',
          description: 'Assess existing accounting policies, control points, and transaction workflows against U.S. GAAP benchmarks.'
        },
        {
          number: '02',
          title: 'Remediate',
          description: 'Formalize revenue schedules, journal documentation, and reconciliation standards.'
        },
        {
          number: '03',
          title: 'Maintain',
          description: 'Provide ongoing technical accounting oversight and pre-audit packaging for independent audit teams.'
        }
      ]
    },
    situations: [
      {
        title: 'In Practice',
        description: "A mid-sized manufacturer preparing for its first outside audit, ahead of a planned bank refinancing, discovers its internal records don't reconcile cleanly across three years. We rebuild the reconciliation, document the internal controls the auditor will expect to see, and get the company to a clean audit opinion — the difference between the bank approving the refinancing on schedule or delaying it by a quarter."
      }
    ],
    crossBorder: {
      heading: 'Bridging standards.',
      subheading: 'Local governance.',
      lead: 'Differences between international frameworks and U.S. GAAP create persistent reconciliation friction.',
      paragraph: 'We help management teams bridge accounting terminology, convert trial balances accurately, and maintain documentation that satisfies both foreign boards and U.S. financial counterparties.'
    },
    whyVka: {
      heading: 'Precision. Experience. Governance.',
      subheading: 'WHY VKA',
      lead: 'We treat accounting as a strategic asset that protects enterprise value and informs capital allocation.',
      paragraph: 'Our background in cross-border finance means we grasp both the high-level strategic objectives of the executive committee and the ground-level ledger details required by external audit partners.',
      points: [
        'Dedicated U.S. GAAP technical literacy',
        'Rigorous pre-audit workpaper documentation'
      ]
    },
    cta: {
      heading: 'Establish audit-ready financial governance.',
      description: 'Connect with our accounting advisory team to review your U.S. compliance structure and financial reporting readiness.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-accounting-tax-compliance-advisory',
      title: 'U.S. Accounting & Compliance Advisory'
    },
    next: {
      slug: 'us-investment-hedge-accounting',
      title: 'U.S. Investment Hedge Accounting'
    },
    seo: {
      title: 'U.S. Accounting & Compliance Advisory | VKA Capital Bridge',
      description: 'U.S. GAAP reporting, internal control design, and audit readiness.'
    }
  },
  {
    slug: 'us-investment-hedge-accounting',
    number: '02',
    title: 'U.S. Investment Hedge Accounting',
    shortTitle: 'Hedge Accounting',
    heroHighlightWord: 'Accounting',
    category: 'ASC 815 & Derivative Risk',
    kicker: 'ASC 815 & Derivative Risk',
    tag: 'ASC 815 FX & Derivatives',
    description: "Companies use financial contracts to protect themselves against price swings — locking in today's price for something they'll need later. Done right, this is smart risk management. Recorded wrong, it can make otherwise stable profits look artificially volatile on paper.",
    cardImage: imgHedgeAccounting,
    heroImage: imgHedgeAccounting,
    overviewImage: '/images/services/hedge-accounting.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'What Hedge Accounting Means.',
      subheading: 'Preserving margins.',
      lead: "Companies use financial contracts to protect themselves against price swings — locking in today's price for something they'll need later. Done right, this is smart risk management. Recorded wrong, it can make otherwise stable profits look artificially volatile on paper.",
      paragraphs: [
        "Hedge accounting, under the rule ASC 815, is the technical discipline of documenting and testing these hedges so the financial statements reflect what's actually happening economically, not accounting noise."
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'ASC 815 Program Design',
        description: 'Structuring formal cash flow, fair value, and net investment hedging programs under U.S. GAAP standards.'
      },
      {
        number: '02',
        title: 'Contemporaneous Documentation',
        description: 'Drafting rigorous designation memos, risk management objectives, and instrument classification files.'
      },
      {
        number: '03',
        title: 'Effectiveness Testing',
        description: 'Conducting prospective and retrospective regression analysis and dollar-offset calculations.'
      }
    ],
    approach: {
      heading: 'Process / Approach',
      subheading: 'Technical. Quantitative. Compliant.',
      lead: 'A disciplined mathematical and documentation process designed to satisfy the strictest technical accounting reviews.',
      steps: [
        {
          number: '01',
          title: 'Designate',
          description: 'Formulate precise hedging relationships and draft contemporaneous designation files on trade date.'
        },
        {
          number: '02',
          title: 'Model',
          description: 'Establish statistical testing models, benchmark curves, and ineffectiveness tracking protocols.'
        },
        {
          number: '03',
          title: 'Report',
          description: 'Generate quarterly journal entries, OCI rollforwards, and mandatory financial statement disclosures.'
        }
      ]
    },
    situations: [
      {
        title: 'In Practice',
        description: "An airline locks in next year's jet fuel price through a financial contract, to protect its budget from a spike in oil prices. Without proper hedge accounting, the contract's value moves on the books every quarter independent of the actual fuel expense — making profits swing for reasons that have nothing to do with how the airline is really performing. We document and test the hedge relationship so the contract and the fuel expense move together in the financial statements, the way they do in reality."
      }
    ],
    crossBorder: {
      heading: 'Capital market complexity.',
      subheading: 'Balanced outcomes.',
      lead: 'Cross-border treasuries operate across multiple rate environments and foreign currency regimes.',
      paragraph: 'We help management teams evaluate whether economic hedging arrangements translate cleanly into financial reporting, avoiding costly audit disqualifications and retroactive mark-to-market adjustments.'
    },
    whyVka: {
      heading: 'Why Documentation & Testing Matter.',
      subheading: 'CAPABILITIES',
      lead: 'We understand both the trading desk economics and the strict procedural rules of U.S. technical accounting.',
      paragraph: 'Our advisory ensures your treasury team can hedge commercial exposures with confidence, backed by robust econometric models and comprehensive audit defense packages.',
      points: [
        'Exhaustive ASC 815 technical documentation',
        'Proven statistical effectiveness methodologies'
      ]
    },
    cta: {
      heading: 'Protect earnings from derivative volatility.',
      description: 'Schedule a confidential discussion with our hedge accounting specialists to evaluate your program documentation.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-accounting-compliance',
      title: 'U.S. Accounting & Compliance'
    },
    next: {
      slug: 'us-accounting-compliance',
      title: 'U.S. Accounting & Compliance'
    },
    seo: {
      title: 'U.S. Investment Hedge Accounting (ASC 815) | VKA Capital Bridge',
      description: 'ASC 815 hedge accounting design, contemporaneous documentation, and effectiveness testing.'
    }
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug) || subServicesData.find((s) => s.slug === slug)
}

export function getAnyServiceBySlug(slug: string): ServiceData | undefined {
  return getServiceBySlug(slug)
}

export function getSubServiceBySlug(slug: string): ServiceData | undefined {
  return getServiceBySlug(slug)
}

export interface NavServiceItem {
  slug: string
  title: string
  children?: NavServiceItem[]
}

export const navServicesHierarchy: NavServiceItem[] = [
  {
    slug: 'infrastructure-advisory',
    title: 'Infrastructure Advisory'
  },
  {
    slug: 'surety-bonds-bg-advisory',
    title: 'Surety Bonds & BG Advisory'
  },
  {
    slug: 'us-accounting-tax-compliance-advisory',
    title: 'U.S. Accounting & Compliance Advisory',
    children: [
      {
        slug: 'us-accounting-compliance',
        title: 'U.S. Accounting & Compliance'
      },
      {
        slug: 'us-investment-hedge-accounting',
        title: 'U.S. Investment Hedge Accounting'
      }
    ]
  },
  {
    slug: 'dubai-real-estate-capital-bridge',
    title: 'Dubai Real Estate Capital Bridge'
  },
  {
    slug: 'advisory-management-consultancy',
    title: 'Advisory & Management Consultancy'
  }
]
