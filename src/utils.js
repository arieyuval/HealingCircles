export function createPageUrl(name) {
  switch (name) {
    case 'Home': return '/';
    case 'About': return '/about';
    case 'WhatWeOffer': return '/whatweoffer';
    case 'WhyJoin': return '/whyjoin';
    default: return '/';
  }
}
