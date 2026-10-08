const fs = require('fs');
const file = 'src/data/services.ts';
let content = fs.readFileSync(file, 'utf8');

const dubaiService = `  {
    slug: 'dubai-real-estate-capital-bridge',
    number: '01',
    title: 'Dubai Real Estate Capital Bridge',
    shortTitle: 'Dubai Real Estate',
    heroHighlightWord: 'Dubai',
    category: 'Real Estate Investment',
    kicker: 'Global Asset Allocation',
    tag: 'Dubai \u00b7 Premium Assets',
    description: "Exclusive access to Dubai's tier-one master developers and high-yield real estate assets, structured for international investors seeking capital appreciation, secure rental yields, and jurisdictional diversification.",
    cardImage: '/images/services/real-estate-investment.jpg',
    heroImage: '/images/services/real-estate-investment.jpg',
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
      slug: 'real-estate-investment',
      title: 'Real Estate Investment'
    },
    next: {
      slug: 'advisory-management-consultancy',
      title: 'Advisory & Management Consultancy'
    },
    seo: {
      title: 'Dubai Real Estate Capital Bridge | VKA Capital Bridge',
      description: 'Exclusive access to tier-one Dubai real estate investments, offering capital appreciation, high yields, and tax efficiency.'
    }
  },`;

const marker = `export const subServicesData: ServiceData[] = [`;
content = content.replace(marker, marker + '\n' + dubaiService);

fs.writeFileSync(file, content);
console.log("Added Dubai Real Estate to subServicesData");
