"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Frontend Developer Certification",
    issuer: "Coursera",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlciUyMGNlcnRpZmljYXRlfGVufDB8fDB8fHww",
    link: "./certificationpage",
  },
  {
    id: 2,
    title: "Backend with Node.js",
    issuer: "Udemy",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2VuZCUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/backend-cert",
  },
  {
    id: 3,
    title: "Advanced Soft Skills Training",
    issuer: "Internshala",
    category: "Soft Skills",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMHdvcmt8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/softskills-cert",
  },
  {
    id: 4,
    title: "React Specialist",
    issuer: "Meta",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
    link: "https://example.com/react-cert",
  },
  {
    id: 5,
    title: "Database Design",
    issuer: "MongoDB University",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
    link: "https://example.com/database-cert",
  },
  {
    id: 6,
    title: "Leadership Masterclass",
    issuer: "LinkedIn Learning",
    category: "Soft Skills",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhZGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://example.com/leadership-cert",
  },
];

const categories = ["All", "Frontend", "Backend", "Soft Skills"];

export default function CertificatesPage() {
  return (
    <section className="bg-[url('/images/bg4.jpg')] bg-cover bg-no-repeat bg-center sm:bg-fixed min-h-screen w-full px-4 py-12 md:py-20 max-w-full mx-auto">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl font-bold sm:text-5xl mb-4">
          <span className="relative text-slate-200">
            Our
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></span>
          </span>
          <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
           Projects
          </span>
        </h1>
        <p className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Verified credentials that demonstrate our expertise and commitment to
          professional development
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-3 mb-12 bg-transparent">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TabsTrigger
                value={category}
                className="capitalize px-6 py-2 text-sm sm:text-base rounded-full border border-white text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:border-transparent data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 transition-all"
              >
                {category}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>

        {/* Certificate Cards */}
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {certificates
                .filter(
                  (cert) => category === "All" || cert.category === category
                )
                .map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          width={300}
                          height={300}
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <span className="text-white font-medium text-sm bg-purple-600 px-3 py-1 rounded-full">
                            {cert.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-bold line-clamp-2">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Issued by {cert.issuer}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="default"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all"
                          >
                            View Projects
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">
          Want to see more credentials?
        </h3>
        <Button
          variant="outline"
          className="px-8 py-6 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors text-lg font-medium"
        >
          View Full Portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </motion.div>
    </section>
  );
}
