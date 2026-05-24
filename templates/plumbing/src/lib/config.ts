import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Allen & Sons Plumbing",
    tagline: "Expert Plumbing. Done Right. Always.",
    phone: "(510) 726-8100",
    phoneHref: "tel:+15107268100",
    email: "info@allenandsonsplumbing.com",
    address: "7645 MacArthur Blvd, Oakland, CA 94605, USA",
    city: "Oakland",
    serviceAreas: ["Oakland", "Berkeley", "Alameda", "San Leandro", "Hayward", "Piedmont"],
    license: "CA C36-PLUMBING-123456",
    since: "1998",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "noir",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Drain Cleaning", desc: "We clear clogs fast, restoring your drains to perfect flow.", urgent: false },
    { icon: "thermometer", title: "Water Heater Repair", desc: "Expert repair and installation for all types of water heaters.", urgent: true },
    { icon: "droplets", title: "Leak Repair", desc: "Pinpoint and fix leaks quickly to prevent water damage.", urgent: true },
    { icon: "phone", title: "Emergency Service", desc: "24/7 rapid response for all your urgent plumbing needs.", urgent: true },
    { icon: "wrench", title: "Pipe Repair", desc: "From minor fixes to full repiping, we handle all pipe issues.", urgent: false },
    { icon: "hammer", title: "Fixture Installation", desc: "Professional installation of faucets, toilets, showers, and more.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Oakland, CA", stars: 5, text: "Allen & Sons saved us! Our water heater burst on a Saturday morning. Their technician, Mark, arrived within an hour, was incredibly professional, and had it replaced by lunchtime. The price was fair, and the peace of mind was priceless. Highly recommend their emergency service!" },
    { name: "David L.", location: "Berkeley, CA", stars: 5, text: "Had a persistent slow drain in my kitchen sink for weeks. Called Allen & Sons, and they sent out a plumber the same day. He used a camera to find the blockage and cleared it completely. No more standing water! Very impressed with their efficiency and clear communication." },
    { name: "Maria P.", location: "Alameda, CA", stars: 5, text: "We needed a new toilet installed in our guest bathroom. The team from Allen & Sons was prompt, courteous, and did a fantastic job. They even took the old toilet away. Everything was spotless when they left. Excellent service from start to finish." }
  ],

  trustBadges: [
    "Licensed & Insured", "GAF Master Elite", "5-Star Rated", "24/7 Emergency", "Same-Day Service", "NATE Certified"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 25, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your urgent needs with rapid dispatch and quick arrival times." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises. You'll know the cost before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, licensed, and continuously educated." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent system ensures you can always reach us, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with the right tools and parts for efficient service." }
  ],

  formServiceOptions: ["Drain Cleaning", "Water Heater Repair", "Leak Repair", "Emergency Service", "Pipe Repair", "Fixture Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!