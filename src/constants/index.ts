
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/navbar2', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/navabr3', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];

  export const Reviews = [
    {
      name: 'Max Khamrovsyki',
      position: 'Senior Eng @ Red Hat', 
      comment: 'Nearly done with a MVP in 3 days of part-time work... and deployed on Fly.io in 10 minutes.',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name: 'Tim Skaggs',
      position: 'Founder @ Atles US',      
      comment: 'In just 6 nights... my SaaS app is live 🎉! Huge thanks to the amazing @wasplang community 🙌 for their guidance along the way. These tools are incredibly efficient 🤯!',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      name: 'Bob Smith',
      position: 'Entreprenuer',
      comment: 'I used Wasp to build and sell my AI-augmented SaaS app for marketplace vendors within two months!',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
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