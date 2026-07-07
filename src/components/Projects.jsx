"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import projectData from "@/data/projects"
import { useSearchParams,useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
export default function Projects() {
    const projectData = {
  design: {
    categories: [
      {
        name: "ARCHITECTURAL DESIGN",
        slug: "architectural-design",
        projects: [
          {
            title: "Luxury Villa",
            image: "/design/ARCHITECTURAL DESIGN/1.jpg",
            slug: "luxury-villa",
          },
          {
            title: "Modern House",
            image: "/design/ARCHITECTURAL DESIGN/2.jfif",
            slug: "modern-house",
          },
          {
            title: "Classic Home",
            image: "/design/ARCHITECTURAL DESIGN/3.jfif",
            slug: "classic-home",
          },
          {
            title: "Luxury Villa",
            image: "/design/ARCHITECTURAL DESIGN/4.jfif",
            slug: "luxury-villa",
          },
          {
            title: "Modern House",
            image: "/design/ARCHITECTURAL DESIGN/5.jfif",
            slug: "modern-house",
          },
          {
            title: "Classic Home",
            image: "/design/ARCHITECTURAL DESIGN/6.jfif",
            slug: "classic-home",
          },
        ],
      },

      {
        name: "GREEN & SUSTIANABLE DESIGN",
        slug: "commercial",
        projects: [
          {
            title: "Office Tower",
            image: "/design/GREEN & SUSTIANABLE DESIGN/1.jpg",
            slug: "office-tower",
          },
          {
            title: "Shopping Mall",
            image: "/design/GREEN & SUSTIANABLE DESIGN/2.jfif",
            slug: "shopping-mall",
          },
          {
            title: "Office Tower",
            image: "/design/GREEN & SUSTIANABLE DESIGN/3.jfif",
            slug: "office-tower",
          },
          {
            title: "Shopping Mall",
            image: "/design/GREEN & SUSTIANABLE DESIGN/4.jfif",
            slug: "shopping-mall",
          },
          {
            title: "Office Tower",
            image: "/design/GREEN & SUSTIANABLE DESIGN/5.jfif",
            slug: "office-tower",
          },
        ],
      },

      {
        name: "INTERIOR DESIGN",
        slug: "industrial",
        projects: [
          {
            title: "Factory Design",
            image: "/design/INTERIOR DESIGN/1.jfif",
            slug: "factory-design",
          },
          {
            title: "Factory Design",
            image: "/design/INTERIOR DESIGN/2.jfif",
            slug: "factory-design",
          },
          {
            title: "Factory Design",
            image: "/design/INTERIOR DESIGN/3.jfif",
            slug: "factory-design",
          },
          {
            title: "Factory Design",
            image: "/design/INTERIOR DESIGN/4.jfif",
            slug: "factory-design",
          },
          {
            title: "Factory Design",
            image: "/design/INTERIOR DESIGN/5.jfif",
            slug: "factory-design",
          },
        ],
      },

      {
        name: "PRODUCT & INDUSTRIAL DESIGN",
        slug: "landscape",
        projects: [
          {
            title: "Luxury Garden",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/1.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Luxury Garden",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/2.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Luxury Garden",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/3.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Luxury Garden",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/4.jpg",
            slug: "luxury-garden",
          },
        ],
      },

      {
        name: "URBAN DESIGN",
        slug: "interior",
        projects: [
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/1.jpg",
            slug: "living-room",
          },
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/2.jfif",
            slug: "living-room",
          },
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/3.jfif",
            slug: "living-room",
          },
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/4.jfif",
            slug: "living-room",
          },
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/5.jfif",
            slug: "living-room",
          },
          {
            title: "Living Room",
            image: "/design/URBAN DESIGN/6.jpeg",
            slug: "living-room",
          },
        ],
      },
    ],
  },

  build: {
    categories: [
      {
        name: "COMMERCIAL CONSTRUCTION",
        slug: "luxury-villas",
        projects: [
          {
            title: "Palm Villa",
            image: "/build/COMMERCIAL CONSTRUCTION/1.jpg",
            slug: "palm-villa",
          },
          {
            title: "Palm Villa",
            image: "/build/COMMERCIAL CONSTRUCTION/2.jfif",
            slug: "palm-villa",
          },
          {
            title: "Palm Villa",
            image: "/build/COMMERCIAL CONSTRUCTION/3.jfif",
            slug: "palm-villa",
          },
          {
            title: "Palm Villa",
            image: "/build/COMMERCIAL CONSTRUCTION/4.jpg",
            slug: "palm-villa",
          },
          {
            title: "Palm Villa",
            image: "/build/COMMERCIAL CONSTRUCTION/5.jfif",
            slug: "palm-villa",
          },
        ],
      },

      {
        name: "CONTRACTOR & SPECIALIST SERVICES",
        slug: "commercial-buildings",
        projects: [
          {
            title: "Business Plaza",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/1.jfif",
            slug: "business-plaza",
          },
          {
            title: "Business Plaza",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/2.jfif",
            slug: "business-plaza",
          },
          {
            title: "Business Plaza",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/3.webp",
            slug: "business-plaza",
          },
          {
            title: "Business Plaza",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/4.jfif",
            slug: "business-plaza",
          },
          {
            title: "Business Plaza",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/5.jfif",
            slug: "business-plaza",
          },
        ],
      },

      {
        name: "PROJECT MANAGEMENT",
        slug: "industrial",
        projects: [
          {
            title: "Warehouse",
            image: "/build/PROJECT MANAGEMENT/1.jfif",
            slug: "warehouse",
          },
          {
            title: "Warehouse",
            image: "/build/PROJECT MANAGEMENT/2.jfif",
            slug: "warehouse",
          },
          {
            title: "Warehouse",
            image: "/build/PROJECT MANAGEMENT/3.jpeg",
            slug: "warehouse",
          },
          {
            title: "Warehouse",
            image: "/build/PROJECT MANAGEMENT/4.jfif",
            slug: "warehouse",
          },
          {
            title: "Warehouse",
            image: "/build/PROJECT MANAGEMENT/5.jpg",
            slug: "warehouse",
          },
        ],
      },

      {
        name: "RENOVATION & REMOLDING",
        slug: "renovation",
        projects: [
          {
            title: "House Remodel",
            image: "/build/RENOVATION & REMOLDING/1.jfif",
            slug: "house-remodel",
          },
          {
            title: "House Remodel",
            image: "/build/RENOVATION & REMOLDING/2.jfif",
            slug: "house-remodel",
          },
          {
            title: "House Remodel",
            image: "/build/RENOVATION & REMOLDING/3.jpg",
            slug: "house-remodel",
          },
          {
            title: "House Remodel",
            image: "/build/RENOVATION & REMOLDING/4.jfif",
            slug: "house-remodel",
          },
        ],
      },

      {
        name: "RESIDENTIAL CONSTRUCTION",
        slug: "infrastructure",
        projects: [
          {
            title: "Bridge Project",
            image: "/build/RESIDENTIAL CONSTRUCTION/1.jfif",
            slug: "bridge-project",
          },
          {
            title: "Bridge Project",
            image: "/build/RESIDENTIAL CONSTRUCTION/2.jfif",
            slug: "bridge-project",
          },
          {
            title: "Bridge Project",
            image: "/build/RESIDENTIAL CONSTRUCTION/3.jpeg",
            slug: "bridge-project",
          },
          {
            title: "Bridge Project",
            image: "/build/RESIDENTIAL CONSTRUCTION/4.jfif",
            slug: "bridge-project",
          },
        ],
      },
    ],
  },

  grow: {
    categories: [
      {
        name: "AI CONTENT CREATION",
        slug: "brand-identity",
        projects: [
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/1.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/2.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/3.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/4.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/5.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Kit",
            image: "/grow/AI CONTENT CREATION/6.jpg",
            slug: "brand-kit",
          },
        ],
      },
      {
        name: "BRANDING & CREATIVE",
        slug: "website",
        projects: [
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/1.jpg",
            slug: "corporate-website",
          },
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/2.webp",
            slug: "corporate-website",
          },
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/3.jpg",
            slug: "corporate-website",
          },
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/4.jpg",
            slug: "corporate-website",
          },
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/5.jpg",
            slug: "corporate-website",
          },
          {
            title: "Corporate Website",
            image: "/grow/BRANDING & CREATIVE/6.jpg",
            slug: "corporate-website",
          },
        ],
      },

      {
        name: "SEO & DIGITAL ADVERTISING",
        slug: "seo",
        projects: [
          {
            title: "SEO Campaign",
            image: "/grow/SEO & DIGITAL ADVERTISING/1.jpg",
            slug: "seo-campaign",
          },
          {
            title: "SEO Campaign",
            image: "/grow/SEO & DIGITAL ADVERTISING/2.jpg",
            slug: "seo-campaign",
          },
          {
            title: "SEO Campaign",
            image: "/grow/SEO & DIGITAL ADVERTISING/3.jpg",
            slug: "seo-campaign",
          },
          {
            title: "SEO Campaign",
            image: "/grow/SEO & DIGITAL ADVERTISING/4.jpg",
            slug: "seo-campaign",
          },
          {
            title: "SEO Campaign",
            image: "/grow/SEO & DIGITAL ADVERTISING/5.jpg",
            slug: "seo-campaign",
          }
        ],
      },

      {
        name: "SOCIAL MEDIA MARKETING",
        slug: "social-media",
        projects: [
          {
            title: "Instagram Growth",
            image: "/grow/SOCIAL MEDIA MARKETING/1.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Instagram Growth",
            image: "/grow/SOCIAL MEDIA MARKETING/2.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Instagram Growth",
            image: "/grow/SOCIAL MEDIA MARKETING/3.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Instagram Growth",
            image: "/grow/SOCIAL MEDIA MARKETING/4.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Instagram Growth",
            image: "/grow/SOCIAL MEDIA MARKETING/5.jpg",
            slug: "instagram-growth",
          },
        ],
      },

      {
        name: "WEB & APP DEVELOPMENT",
        slug: "ai-marketing",
        projects: [
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/1.jpg",
            slug: "ai-ads",
          },
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/2.jpg",
            slug: "ai-ads",
          },
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/3.jpg",
            slug: "ai-ads",
          },
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/4.jpg",
            slug: "ai-ads",
          },
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/5.jpg",
            slug: "ai-ads",
          },
          {
            title: "AI Ads",
            image: "/grow/WEB & APP DEVELOPMENT/6.jpg",
            slug: "ai-ads",
          },
        ],
      },
    ],
  },
};
const router = useRouter();
const searchParams = useSearchParams();

const activePillar = searchParams.get("pillar") || "design";
const activeCategory = searchParams.get("category") || "All";
const updateQuery = (pillar, category) => {
  const params = new URLSearchParams();

  params.set("pillar", pillar);
  params.set("category", category);

  router.push(`?${params.toString()}`);
};

const current = projectData[activePillar] || projectData.design;  

  const categories = useMemo(() => {
    return ["All", ...current.categories.map((item) => item.name)];
  }, [current]);

  const projects = useMemo(() => {
    if (activeCategory === "All") {
      return current.categories.flatMap((category) =>
        category.projects.map((project) => ({
          ...project,
          category: category.name,
          categorySlug: category.slug,
        }))
      );
    }

    const selected = current.categories.find(
      (item) => item.name === activeCategory
    );

    if (!selected) return [];

    return selected.projects.map((project) => ({
      ...project,
      category: selected.name,
      categorySlug: selected.slug,
    }));
  }, [current, activeCategory]);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}

      <section className="relative py-24 overflow-hidden">
        <img
          src="/images/projecthero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 lg:px-16">
          <span className="uppercase tracking-[4px] text-theme">
            Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Our Projects
          </h1>

          <p className="text-white/70 mt-5 max-w-xl">
            Explore our Design, Build & Grow portfolio.
          </p>
        </div>
      </section>

      {/* Filters */}

      <section className="py-20">

        <div className="container mx-auto px-6 lg:px-16">



<div className="flex justify-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{
      y: -4,
      rotateX: 6,
      boxShadow: "0 25px 50px rgba(0,0,0,.18)",
    }}
    transition={{ duration: 0.3 }}
    className="relative w-full max-w-sm [perspective:1000px]"
  >
    <select
      value={activePillar}
      onChange={(e) => updateQuery(e.target.value, "All")}
      className="
        appearance-none
        w-full
        rounded-2xl
        px-6
        py-4
        pr-14
        text-lg
        font-semibold
        bg-white/80
        backdrop-blur-xl
        border
        border-white/30
        shadow-xl
        text-gray-800
        outline-none
        transition-all
        duration-300
        hover:shadow-2xl
        focus:scale-[1.02]
        focus:border-theme
      "
    >
      {Object.keys(projectData).map((pillar) => (
        <option key={pillar} value={pillar}>
          {pillar.charAt(0).toUpperCase() + pillar.slice(1)}
        </option>
      ))}
    </select>

    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-theme"
    >
      <ChevronDown size={22} />
    </motion.div>

    {/* Top Highlight */}
    <div className="absolute inset-x-4 top-1 h-px bg-white/80 rounded-full" />

    {/* Bottom Shadow */}
    <div className="absolute inset-x-5 -bottom-2 h-5 bg-black/20 blur-xl rounded-full -z-10" />
  </motion.div>
</div>

          {/* Categories */}

          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-16">

            {categories.map((category)=>(

              <motion.button
                key={category}
                whileHover={{scale:1.05}}
                whileTap={{scale:.95}}
               onClick={() => {
  updateQuery(activePillar, category);
}}
                className={`px-6 py-2 rounded-full text-sm transition cursor-pointer ${
                  activeCategory===category
                  ? "bg-theme text-white"
                  : "bg-theme/10 hover:bg-theme hover:text-white"
                }`}
              >
                {category}
              </motion.button>

            ))}

          </div>

          {/* Gallery */}

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            <AnimatePresence mode="popLayout">

              {projects.map((project,i)=>(

                <motion.div
                  key={i}
                  layout
                  initial={{opacity:0,y:40}}
                  animate={{opacity:1,y:0}}
                  exit={{opacity:0,y:40}}
                  transition={{duration:.35}}
                  className="group relative overflow-hidden rounded-3xl"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[360px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"/>

                </motion.div>

              ))}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>

    </div>
  );
}