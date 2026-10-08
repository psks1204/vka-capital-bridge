const fs = require('fs');

const content = fs.readFileSync('src/data/services.ts', 'utf8');

const startStr = `  {
    slug: 'us-accounting-compliance',
    number: '02',`;

const endStr = `  {
    slug: 'real-estate-investment',
    number: '05',`;

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find start or end strings!");
  process.exit(1);
}

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);

const newMiddle = `  {
    slug: 'infrastructure-advisory',
    number: '02',
    title: 'Infrastructure Advisory',
    shortTitle: 'Infrastructure',
    heroHighlightWord: 'Advisory',
    category: 'Asset Development',
    kicker: 'Project Structuring & Viability',
    tag: 'Large-Scale ┬╖ Capital Projects',
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
    tag: 'Collateral Efficiency ┬╖ Contract Bonding',
    description: 'We structure performance bonds and bank guarantees to free up working capital and satisfy stringent employer and regulatory contractual requirements.',
    cardImage: imgHedgeAccounting,
    heroImage: imgHedgeAccounting,
    overviewImage: '/images/services/hedge-accounting.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Capital freedom.',
      subheading: 'Contractual certainty.',
      lead: 'Performance security shouldn\\'t paralyze your balance sheet.',
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
      paragraph: 'Our independence allows us to source the most capital-efficient solutions without being tied to a single financial institution\\'s credit appetite.',
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
    title: 'U.S. Accounting, Tax & Compliance Advisory',
    shortTitle: 'U.S. Accounting & Tax',
    heroHighlightWord: 'Advisory',
    category: 'Cross-Border Structuring',
    kicker: 'U.S. Accounting, Tax & Compliance',
    tag: 'GAAP ┬╖ Hedge ┬╖ Tax',
    description: 'Accurate financial reporting, correctly documented hedges, and cross-border tax structuring — for U.S. entities and multinational groups operating in the U.S. Three disciplines, handled as one coordinated practice, because they rarely stay separate in real financial statements.',
    cardImage: imgInternationalTax,
    heroImage: imgInternationalTax,
    overviewImage: '/images/services/international-taxation.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    subServices: [
      {
        title: 'U.S. Accounting & Compliance',
        description: "We keep a company's financial records accurate, aligned with U.S. GAAP, and structured so they hold up under scrutiny — whether that scrutiny comes from an auditor, a regulator, a lender, or a prospective investor.",
        route: '/services/us-accounting-compliance'
      },
      {
        title: 'U.S. Investment Hedge Accounting',
        description: "Companies use financial contracts to protect themselves against price swings. Hedge accounting under ASC 815 is the technical discipline of documenting and testing these hedges so financial statements reflect the underlying economics rather than unnecessary accounting volatility.",
        route: '/services/us-investment-hedge-accounting'
      },
      {
        title: 'International Taxation',
        description: "A company operating across multiple countries can face overlapping tax obligations. We focus on areas such as tax treaties, transfer pricing and applicable international tax rules to help structure cross-border operations and compliance appropriately.",
        route: '/services/international-taxation'
      }
    ],
    overview: {
      heading: 'Coordinated execution.',
      subheading: 'Technical precision.',
      lead: 'Financial reporting, hedge documentation, and international tax structuring are deeply intertwined. A decision in one area cascades into the others.',
      paragraphs: [
        'We manage these three disciplines as a unified practice. Our approach ensures that your U.S. GAAP compliance, derivative risk management, and cross-border tax strategies work together seamlessly, rather than creating conflicting objectives or unexpected liabilities.'
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Integrated Financial Reporting',
        description: 'Synchronized delivery of U.S. GAAP statements, ASC 815 disclosures, and tax provision calculations.'
      },
      {
        number: '02',
        title: 'Cross-Border Harmonization',
        description: 'Aligning international parent-company reporting with distinct U.S. regulatory and tax requirements.'
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
          description: 'Assess the combined impact of accounting policies, hedge structures, and tax positions.'
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
        description: 'Foreign multinationals establishing U.S. operations requiring simultaneous GAAP compliance, tax structuring, and FX risk management.'
      }
    ],
    crossBorder: {
      heading: 'Bridging standards.',
      subheading: 'Unified compliance.',
      lead: 'U.S. financial regulations are uniquely demanding and strictly enforced.',
      paragraph: 'We ensure that international groups can operate within the U.S. market with total confidence, knowing their accounting, hedging, and tax positions are technically sound and fully integrated.'
    },
    whyVka: {
      heading: 'One practice. Total clarity.',
      subheading: 'WHY VKA',
      lead: 'By unifying these three disciplines, we deliver faster execution and eliminate contradictory advice.',
      paragraph: 'Our team possesses the technical depth to handle complex standalone ASC 815 or transfer pricing issues, combined with the strategic breadth to see how they impact your broader U.S. compliance posture.',
      points: [
        'Integrated multi-disciplinary advisory',
        'Deep U.S. GAAP, ASC 815, and International Tax expertise',
        'Streamlined audit defense and coordination'
      ]
    },
    cta: {
      heading: 'Unify your U.S. compliance strategy.',
      description: 'Speak with our team to discuss how our integrated accounting, tax, and compliance services can protect your enterprise.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'surety-bonds-bg-advisory',
      title: 'Surety Bonds & BG Advisory'
    },
    next: {
      slug: 'real-estate-investment',
      title: 'Real Estate Investment'
    },
    seo: {
      title: 'U.S. Accounting, Tax & Compliance Advisory | VKA Capital Bridge',
      description: 'Integrated U.S. GAAP reporting, ASC 815 hedge accounting, and international tax structuring.'
    }
  },
`;

let finalContent = before + newMiddle + after;

// Now append subServicesData and modify navServicesHierarchy
const navStr = "export const navServicesHierarchy: NavServiceItem[] = [";
const navStartIdx = finalContent.indexOf(navStr);

if (navStartIdx === -1) {
  console.error("Could not find navServicesHierarchy!");
  process.exit(1);
}

const beforeNav = finalContent.substring(0, navStartIdx);

const subServicesAndNav = `export const subServicesData: ServiceData[] = [
  {
    slug: 'us-accounting-compliance',
    number: '01',
    title: 'U.S. Accounting & Compliance',
    shortTitle: 'U.S. Accounting',
    heroHighlightWord: 'Compliance',
    category: 'GAAP & Regulatory Governance',
    kicker: 'U.S. GAAP & Governance',
    tag: 'U.S. GAAP ┬╖ Audit Readiness',
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
      title: 'U.S. Accounting, Tax & Compliance Advisory'
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
    tag: 'ASC 815 ┬╖ FX & Derivatives',
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
      slug: 'international-taxation',
      title: 'International Taxation'
    },
    seo: {
      title: 'U.S. Investment Hedge Accounting (ASC 815) | VKA Capital Bridge',
      description: 'ASC 815 hedge accounting design, contemporaneous documentation, and effectiveness testing.'
    }
  },
  {
    slug: 'international-taxation',
    number: '03',
    title: 'International Taxation',
    shortTitle: 'International Tax',
    heroHighlightWord: 'Taxation',
    category: 'Cross-Border Structuring & BEPS',
    kicker: 'Cross-Border & BEPS Pillar Two',
    tag: 'Transfer Pricing ┬╖ Tax Treaties',
    description: "A company operating in more than one country risks paying tax twice on the same income — once where it's earned, again where the company is based. We structure operations to legally minimize that exposure, using tax treaties between countries, correct pricing for transactions between a company's own overseas divisions (transfer pricing), and compliance with newer global rules like the Pillar Two minimum tax.",
    cardImage: imgInternationalTax,
    heroImage: imgInternationalTax,
    overviewImage: '/images/services/international-taxation.jpg',
    perspectiveImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    overview: {
      heading: 'Cross-border efficiency.',
      subheading: 'Global compliance.',
      lead: "A company operating in more than one country risks paying tax twice on the same income — once where it's earned, again where the company is based.",
      paragraphs: [
        "We structure operations to legally minimize that exposure, using tax treaties between countries, correct pricing for transactions between a company's own overseas divisions (transfer pricing), and compliance with newer global rules like the Pillar Two minimum tax."
      ]
    },
    capabilities: [
      {
        number: '01',
        title: 'Cross-Border Holding Structuring',
        description: 'Design of holding company and capital repatriation corridors aligned with bilateral tax treaty benefits.'
      },
      {
        number: '02',
        title: 'Transfer Pricing Policy',
        description: 'Formulation of defensible intercompany pricing, management fees, and intellectual property licensing models.'
      },
      {
        number: '03',
        title: 'BEPS & Pillar Two Readiness',
        description: 'Assessment of Effective Tax Rates (ETR) and Top-Up tax exposures under OECD Pillar Two global minimum rules.'
      }
    ],
    approach: {
      heading: 'Our Approach',
      subheading: 'Substantive. Compliant. Forward-Looking.',
      lead: 'We prioritize operational substance and defensibility over fragile artificial tax engineering.',
      steps: [
        {
          number: '01',
          title: 'Map',
          description: 'Analyze entity ownership hierarchies, cross-border revenue flows, and existing bilateral tax treaty reliance.'
        },
        {
          number: '02',
          title: 'Model',
          description: 'Calculate effective tax rates, withholding friction points, and transfer pricing margins under current rules.'
        },
        {
          number: '03',
          title: 'Implement',
          description: 'Establish intercompany agreements, economic substance policies, and local documentation protocols.'
        }
      ]
    },
    situations: [
      {
        title: 'In Practice',
        description: "A U.S. software company opens a subsidiary in Germany to serve European clients directly. Without a clear transfer pricing policy, tax authorities in both countries could challenge how much profit is allocated to each entity — and both could try to tax the same income. We set a defensible pricing policy between the U.S. parent and German subsidiary, documented to satisfy both tax authorities, so the company pays what it owes once, correctly, in each jurisdiction."
      }
    ],
    crossBorder: {
      heading: 'Global tax architecture.',
      subheading: 'Substance over form.',
      lead: 'Tax authorities worldwide now share transaction data seamlessly under multilateral conventions.',
      paragraph: 'Success requires establishing genuine economic substance, governance controls, and documentary evidence that support your tax positions in every jurisdiction where you operate.'
    },
    whyVka: {
      heading: 'Commercial clarity. Treaty expertise.',
      subheading: 'WHY VKA',
      lead: 'We view tax as an integral component of overall capital efficiency and risk management.',
      paragraph: 'Our advisory bridges commercial intent with statutory reality, helping corporate groups expand internationally without accumulating hidden tax liabilities or regulatory friction.',
      points: [
        'Deep bilateral treaty and withholding analysis',
        'Pragmatic transfer pricing documentation frameworks'
      ]
    },
    cta: {
      heading: 'Structure your cross-border operations effectively.',
      description: 'Speak with our international tax advisory team to evaluate your cross-border structures and treaty protections.',
      buttonText: 'Start a conversation'
    },
    prev: {
      slug: 'us-investment-hedge-accounting',
      title: 'U.S. Investment Hedge Accounting'
    },
    next: {
      slug: 'real-estate-investment',
      title: 'Real Estate Investment'
    },
    seo: {
      title: 'International Taxation & Cross-Border Structuring | VKA Capital Bridge',
      description: 'Cross-border tax structuring, transfer pricing documentation, and treaty analysis.'
    }
  }
];

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
    title: 'U.S. Accounting, Tax & Compliance Advisory',
    children: [
      {
        slug: 'us-accounting-compliance',
        title: 'U.S. Accounting & Compliance'
      },
      {
        slug: 'us-investment-hedge-accounting',
        title: 'U.S. Investment Hedge Accounting'
      },
      {
        slug: 'international-taxation',
        title: 'International Taxation'
      }
    ]
  },
  {
    slug: 'real-estate-investment',
    title: 'Real Estate Investment',
    children: [
      {
        slug: 'dubai-real-estate-capital-bridge',
        title: 'Dubai Real Estate Capital Bridge'
      }
    ]
  },
  {
    slug: 'advisory-management-consultancy',
    title: 'Advisory & Management Consultancy'
  }
]
`;

finalContent = beforeNav + subServicesAndNav;

finalContent = finalContent.replace(
  'return getServiceBySlug(slug)',
  'return getServiceBySlug(slug) || subServicesData.find(s => s.slug === slug)'
);

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('Successfully updated src/data/services.ts');
