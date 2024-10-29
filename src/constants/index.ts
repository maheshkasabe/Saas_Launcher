
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/navbar2', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/navabr3', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];

  interface Plan {
    name: string;
    priceid: string;
    amount: number;
    description: string;
    features: string[];
  }
  
  export const plans: Plan[] = [
    {
      name: 'Free',
      priceid: "price_1QFKR3E9zdHlWOZmVOysY7WH",
      amount: 0,
      description: 'per user/month, billed annually',
      features: [
        "No-email alerts",
        "30-minute checks",
        "No Data enrichment",
        "5 monitors",
        "Up to 1 seats",
      ],
    }, 

    {
      name: 'Pro',
      priceid: "price_1QFKRJE9zdHlWOZmOPCRwN5N",
      amount: 99,
      description: 'per user/month, billed annually',
      features: [
        "Free-email alerts",
        "3-minute checks",
        "Data enrichment",
        "100 monitors",
        "Up to 10 seats",
      ],
    }, 

    {
      name: 'Plus',
      priceid: "price_1QFKRWE9zdHlWOZmf5ShDh4P",
      amount: 999,
      description: 'per user/month, billed annually',
      features: [
        "Free-email+ alerts",
        "Live checks",
        "AI data enrichment",
        "Unlimited monitors",
        "Up to 100 seats",
      ],
    }

]