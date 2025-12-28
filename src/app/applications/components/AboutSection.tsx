"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

export default function StrategicPartnerStats() {
  /* ================= STATE ANGKA ================= */
  const [percent, setPercent] = useState(0);
  const [mitra, setMitra] = useState(0);
  const [alumni, setAlumni] = useState(0);

  /* ================= TARGET ================= */
  const percentTarget = 100;
  const mitraTarget = 50;
  const alumniTarget = 700;

  /* ================= SCROLL TRIGGER (SECTION) ================= */
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  const duration = 2000;

  /* ================= COUNT ANIMATION ================= */
  const animateCount = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setter(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setter(target);
      }
    };

    requestAnimationFrame(step);
  };

  /* ================= TRIGGER COUNT ================= */
  useEffect(() => {
    if (isInView) {
      animateCount(percentTarget, setPercent);
      animateCount(mitraTarget, setMitra);
      animateCount(alumniTarget, setAlumni);
    }
  }, [isInView]);

  /* ================= DATA ================= */
  const stats = [
    {
      value: percent,
      suffix: "%",
      description:
        "Strategi penyaluran kerja dan pengembangan karier untuk siswa & alumni.",
    },
    {
      value: mitra,
      suffix: "+",
      description:
        "Perusahaan mitra nasional & multinasional bekerja sama dengan BKK.",
    },
    {
      value: alumni,
      suffix: "+",
      description:
        "Siswa dan alumni difasilitasi untuk mencapai tujuan karier mereka.",
    },
  ];

  /* ================= VARIANTS ================= */
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const divider: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const verticalDivider: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-950 leading-tight">
              Partner Strategis Anda dalam Penyaluran Kerja
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            className="space-y-6 sm:space-y-8 lg:space-y-12 text-gray-700 text-sm sm:text-base lg:text-lg"
          >
            <motion.p variants={fadeUp}>
              BKK SMKN 1 Purwosari hadir sebagai penghubung antara siswa, alumni,
              dan dunia industri. Kami menyediakan layanan konseling, pelatihan,
              serta penyaluran kerja yang dirancang untuk membantu Anda memasuki
              dunia kerja dengan percaya diri.
            </motion.p>
            <motion.p variants={fadeUp}>
              Dengan dukungan tim berpengalaman dan jaringan industri luas, kami
              memastikan setiap peserta mendapatkan arahan yang tepat, informasi
              peluang kerja yang akurat, dan proses penyaluran yang transparan.
            </motion.p>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          variants={divider}
          className="w-full h-px bg-gray-200 mb-12 sm:mb-14 lg:mb-16"
        />

        {/* ================= STATS ================= */}
        <motion.div 
          variants={container} 
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={fadeUp}
                className="space-y-3 sm:space-y-4 py-4 md:py-0 flex-1 md:max-w-[320px]"
              >
                <h3 className="text-4xl sm:text-5xl heading-3_regular text-gray-900 tabular-nums">
                  {stat.value}
                  {stat.suffix}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>

              {index < stats.length - 1 && (
                <>
                  {/* Horizontal divider for mobile */}
                  <motion.div
                    variants={divider}
                    className="md:hidden w-full h-px bg-gray-200"
                  />
                  {/* Vertical divider for desktop */}
                  <motion.div
                    variants={verticalDivider}
                    className="hidden md:block w-px bg-gray-200 self-stretch"
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}