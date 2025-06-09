"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Frontend Developer Certification",
    issuer: "Coursera",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/frontend-cert",
  },
  {
    id: 2,
    title: "Backend with Node.js",
    issuer: "Udemy",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/backend-cert",
  },
  {
    id: 3,
    title: "Soft Skills Training",
    issuer: "Internshala",
    category: "Soft Skills",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/softskills-cert",
  },
];

const categories = ["All", "Frontend", "Backend", "Soft Skills"];

export default function CertificatesPage() {
  return (
    <section className="w-full px-4 py-10 md:py-16 max-w-6xl mx-auto flex flex-col justify-center items-center space-y-9">
      <h1 className="text-2xl font-bold sm:text-4xl">
            Our
            <span className="ml-3 w-fit border-b-2 border-b-purple-600 text-purple-600">
              Certifications
            </span>
          </h1>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize sm:text-[16px]">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-10 w-full">
              {certificates
                .filter((cert) => category === "All" || cert.category === category)
                .map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="rounded-xl backdrop-blur-sm bg-purple-100 dark:bg-purple-100 shadow-xl border border-gray-200 dark:border-zinc-700 transition-transform hover:scale-[1.05] hover:shadow-2xl hover:border-primary/60 duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                          {cert.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="relative mb-3 overflow-hidden rounded-lg">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                        <p className="text-sm mb-3">
                          <span className="inline-block px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-xs font-medium">
                            {cert.issuer}
                          </span>
                        </p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="default"
                            className="cursor-pointer w-full bg-purple-400 text-black hover:bg-purple-600 hover:text-white"
                          >
                            View Certificate
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
