const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", submenu: [
    { href: "/services/ai-solutions", label: "AI Solutions" },
    { href: "/services/custom-mobile-apps", label: "Mobile App Development" },
    { href: "/services/e-commerce-solutions", label: "E-Commerce Development" },
    { href: "/services/google-ads-management", label: "Google Ads Management" },
    { href: "/services/seo", label: "Search Engine Optimization" },
    { href: "/services/social-media-management", label: "Social Media Marketing" },
    { href: "/services/logo-design", label: "Custom Logo Design" },
    { href: "/services/web-responsive-solutions", label: "Responsive Web Design" },
    { href: "/services/it-career-training", label: "Online Learning and Coaching" }
  ]},
  { href: "/blog", label: "Blog" },
  {
    href: "/pages",
    label: "Pages",
    submenu: [
      { href: "/", label: "Home Page" },
      { href: "/about", label: "About Page" },
      { href: "/portfolio", label: "Portfolio Page" },
      { href: "/services", label: "Services Page" },
      { href: "/blog", label: "Blog Page" },
      { href: "/contact-us", label: "Contact Page" },
    ],
  }
];

export default menuItems;