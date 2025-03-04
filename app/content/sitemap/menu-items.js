const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services", submenu: [
    { href: "/services/all-kinds-tiling-services-melbourne", label: "All Kinds of Tiling Services in Melbourne" },
    { href: "/services/balcony-repair-melbourne", label: "Balcony Repair & Restoration in Melbourne" },
    { href: "/services/bathroom-renovations-melbourne", label: "Bathroom Renovations in Melbourne" },
    { href: "/services/bathroom-tiling-melbourne", label: "Bathroom Tiling Services in Melbourne" },
    { href: "/services/caulking-services-melbourne", label: "Professional Caulking Services in Melbourne" },
    { href: "/services/kitchen-renovations-melbourne", label: "Kitchen Renovations & Tiling in Melbourne" },
    { href: "/services/regrouting-services-melbourne", label: "Professional Regrouting Services in Melbourne" },
    { href: "/services/stones-pavers-services-melbourne", label: "All Kinds of Stones & Pavers Services in Melbourne" },
    { href: "/services/waterproofing-services-melbourne", label: "Expert Waterproofing Services in Melbourne" },
  ]},
  { href: "/blog", label: "Blog" },
  {
    href: "/pages",
    label: "Pages",
    submenu: [
      { href: "/", label: "Home Page" },
      { href: "/about", label: "About Page" },
      { href: "/projects", label: "Projects Page" },
      { href: "/services", label: "Services Page" },
      { href: "/blog", label: "Blog Page" },
      { href: "/contact", label: "Contact Page" },
    ],
  }
];

export default menuItems;