const fs = require('fs');
let txt = fs.readFileSync('src/data/services.ts', 'utf8');

// The correct order of slugs
const order = [
  { slug: 'insurance-risk-management', title: 'Insurance & Risk Management Advisory' },
  { slug: 'infrastructure-advisory', title: 'Infrastructure Advisory' },
  { slug: 'surety-bonds-bg-advisory', title: 'Surety Bonds & BG Advisory' },
  { slug: 'us-accounting-tax-compliance-advisory', title: 'U.S. Accounting, Tax & Compliance Advisory' },
  { slug: 'real-estate-investment', title: 'Real Estate Investment' },
  { slug: 'advisory-management-consultancy', title: 'Advisory & Management Consultancy' }
];

for (let i = 0; i < order.length; i++) {
  const current = order[i];
  const prev = order[(i - 1 + order.length) % order.length];
  const next = order[(i + 1) % order.length];
  
  const regex = new RegExp(`(slug:\\s*'${current.slug}'.*?prev:\\s*\\{\\s*slug:\\s*')[^']+('\\s*,\\s*title:\\s*')[^']+('.*?next:\\s*\\{\\s*slug:\\s*')[^']+('\\s*,\\s*title:\\s*')[^']+(')`, 's');
  txt = txt.replace(regex, `$1${prev.slug}$2${prev.title}$3${next.slug}$4${next.title}$5`);
}

fs.writeFileSync('src/data/services.ts', txt, 'utf8');
console.log('Fixed links');
