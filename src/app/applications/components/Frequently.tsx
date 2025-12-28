"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* 🔑 Jadikan AccordionItem sebagai motion component */
const MotionAccordionItem = motion(AccordionItem);

const FrequentlySection: React.FC = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Apa itu BKK SMKN I Purwosari?",
      answer:
        "Bursa Kerja Khusus (BKK) SMKN I Purwosari adalah lembaga resmi di sekolah yang berfungsi sebagai penghubung antara alumni dengan dunia usaha dan dunia industri (DUDI), khususnya dalam penyaluran lulusan ke dunia kerja.",
    },
    {
      id: "item-2",
      question: "Bagaimana cara mendaftar lowongan kerja di BKK?",
      answer:
        "Untuk mendaftar lowongan kerja, Anda perlu: 1) Membuat akun alumni di website BKK, 2) Melengkapi profil dan CV, 3) Memilih lowongan yang tersedia, 4) Mengirim lamaran melalui sistem kami.",
    },
    {
      id: "item-3",
      question: "Apakah BKK bekerja sama dengan perusahaan industri?",
      answer:
        "Ya, BKK SMKN I Purwosari telah bekerja sama dengan lebih dari 50+ mitra industri dari berbagai sektor untuk memastikan lulusan mendapatkan kesempatan kerja yang terbaik sesuai dengan kompetensi mereka.",
    },
    {
      id: "item-4",
      question: "Apakah pendaftaran dan layanan BKK dipungut biaya?",
      answer:
        "Tidak, seluruh layanan BKK SMKN I Purwosari sepenuhnya GRATIS tanpa biaya pendaftaran atau administrasi apapun.",
    },
    {
      id: "item-5",
      question: "Siapa saja yang dapat mendaftar melalui BKK?",
      answer:
        "Seluruh alumni SMKN I Purwosari dapat mendaftar melalui BKK, termasuk siswa tingkat akhir.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-start lg:max-w-md xl:max-w-lg lg:flex-shrink-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-normal leading-tight">
            Frequently Asked Question
          </h2>
          <p className="text-base sm:text-lg text-black opacity-50">
            Berikut adalah beberapa pertanyaan yang sering diajukan terkait
            layanan BKK SMKN I Purwosari.
          </p>
        </motion.div>

        {/* ================= FAQ ================= */}
        <div className="w-full lg:flex-1">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <MotionAccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#818181]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <AccordionTrigger className="text-left py-4 sm:py-5 md:py-6 hover:no-underline">
                  <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-4 sm:pb-5 md:pb-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </MotionAccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentlySection;