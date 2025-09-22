"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  quote?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Ashara",
    title: "Naturopathic Doctor & Founder",
    bio: "Dr. Ashara brings over 15 years of experience in naturopathic medicine, specializing in autoimmune conditions, hormone optimization, and functional medicine. She is passionate about addressing root causes and empowering patients on their healing journey.",
    image: "/images/team/dr-ashara.jpg", // You'll need to add actual images
    specialties: ["Autoimmune Conditions", "Hormone Optimization", "Functional Medicine"],
    quote: "True healing happens when we address the root cause, not just the symptoms."
  },
  {
    name: "Jessica Martinez",
    title: "Licensed Acupuncturist",
    bio: "Jessica is a skilled acupuncturist with expertise in Traditional Chinese Medicine. She specializes in pain management, stress reduction, and fertility support, bringing a holistic approach to healing.",
    image: "/images/team/jessica-martinez.jpg",
    specialties: ["Pain Management", "Stress Reduction", "Fertility Support"],
    quote: "Acupuncture helps restore the body's natural balance and innate healing wisdom."
  },
  {
    name: "Michael Chen",
    title: "Functional Medicine Practitioner",
    bio: "Michael focuses on digestive health, metabolic optimization, and detoxification protocols. His analytical approach combined with personalized care helps patients achieve lasting wellness.",
    image: "/images/team/michael-chen.jpg",
    specialties: ["Digestive Health", "Metabolic Optimization", "Detoxification"],
    quote: "Every patient is unique, and their treatment plan should be too."
  },
  {
    name: "Emma Thompson",
    title: "Wellness Coordinator",
    bio: "Emma ensures every patient feels welcomed and supported throughout their wellness journey. She coordinates care plans and helps patients navigate their path to optimal health.",
    image: "/images/team/emma-thompson.jpg",
    specialties: ["Patient Care", "Wellness Coordination", "Health Education"],
    quote: "Healing is a journey, and no one should walk it alone."
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 border border-teal-200/50 dark:border-teal-700/50 flex items-center justify-center">
                <Icon
                  icon="mdi:account-group"
                  className="w-6 h-6 text-teal-600 dark:text-teal-400"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                Meet Our Team
              </h2>
            </div>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of healthcare professionals is committed to providing personalized, 
              compassionate care to help you achieve optimal wellness.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group"
              >
                <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-200/50 dark:border-stone-700/50">
                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 flex items-center justify-center">
                      {/* Placeholder for actual photos */}
                      <div className="w-24 h-24 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                        <Icon
                          icon="mdi:account"
                          className="w-12 h-12 text-white"
                        />
                      </div>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name & Title */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">
                        {member.title}
                      </p>
                    </div>

                    {/* Quote */}
                    {member.quote && (
                      <div className="mb-4 p-3 bg-stone-50 dark:bg-stone-700/50 rounded-lg border-l-4 border-teal-500">
                        <p className="text-sm italic text-stone-700 dark:text-stone-300">
                          "{member.quote}"
                        </p>
                      </div>
                    )}

                    {/* Bio */}
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div>
                      <h4 className="text-xs font-semibold text-stone-900 dark:text-stone-100 mb-2 uppercase tracking-wide">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full border border-teal-200/50 dark:border-teal-700/50"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg border border-stone-200/50 dark:border-stone-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                Ready to Meet Our Team?
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-6">
                Schedule a consultation to discuss your health goals and discover how our team can support your wellness journey.
              </p>
              <button className="bg-teal-800 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto">
                <Icon icon="mdi:calendar-check" className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
