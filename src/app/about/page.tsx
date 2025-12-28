'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Star, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Person1 from '@/assets/images/Person-1.jpg';
import Person2 from '@/assets/images/Person-2.jpg';
import Person3 from '@/assets/images/Person-3.jpg';

import Navbar from '../applications/components/Navbar';
import IndustrySection from '../applications/components/Industry';
import FooterSection from '../applications/components/Footer';
import Clock from '../applications/components/Clock';
import heroImage from "@/assets/images/smk.png";

export default function AboutPage() {
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

    /* ================= STATS BKK ================= */
    const stats = [
        { value: '1.500+', label: 'ALUMNI TERSALURKAN', color: 'text-black' },
        { value: '120+', label: 'MITRA INDUSTRI', color: 'text-black' },
        { value: '15+', label: 'TAHUN PENGALAMAN', color: 'text-black' },
        { value: '95%', label: 'TINGKAT PENEMPATAN', color: 'text-black' },
    ];

    /* ================= TIM BKK ================= */
    const team = [
        {
            photo: Person1, 
            name: 'H. Arif Wijaya, S.Pd., M.M.',
            role: 'Koordinator Penyaluran Kerja',
        },
        {
            photo: Person2,
            name: 'Dewi Sartika, S.Kom.',
            role: 'Hubungan Dunia Usaha & Industri',
        },
        {
            photo: Person3,
            name: 'Mario Santoso, S.Pd.',
            role: 'Pendampingan & Konseling Karier',
        },
    ];

    /* ================= TESTIMONI ================= */
    const testimonials = [
        {
            rating: 5,
            text: 'BKK sangat membantu saya mendapatkan pekerjaan sesuai jurusan. Prosesnya jelas dan didampingi sampai diterima kerja.',
            author: 'Alumni SMK',
            role: 'Karyawan Industri Manufaktur',
        },
        {
            rating: 5,
            text: 'Informasi lowongan selalu valid dan berasal dari perusahaan resmi. Sangat direkomendasikan untuk lulusan SMK.',
            author: 'Alumni BKK',
            role: 'Teknisi Otomotif',
        },
        {
            rating: 5,
            text: 'Melalui BKK, saya bisa langsung terhubung dengan perusahaan mitra tanpa bingung mencari lowongan.',
            author: 'Peserta Rekrutmen',
            role: 'Operator Produksi',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-36 pb-20 bg-white">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6 leading-tight">
                                Tentang <span className="text-neutral-500">BKK</span>
                                <br />
                                Bursa Kerja Khusus
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                                Bursa Kerja Khusus (BKK) merupakan unit layanan sekolah
                                yang bertugas menjembatani lulusan dengan dunia usaha
                                dan dunia industri melalui kerja sama yang profesional
                                dan berkelanjutan.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link href="/lowongan" className="px-8 py-3 bg-neutral-500 text-black rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                Lihat Lowongan
              </Link>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        <span className="font-semibold">4.5</span> 120+ User
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="bg-gray-100 rounded-3xl overflow-hidden aspect-[4/3] relative">
                                <Image
                                    src={heroImage}
                                    alt="Hero"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>


                </div>
                {/* Partner Logos */}
                <div className="mt-20">
                    <IndustrySection />
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-20 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                        {/* Left - Title */}
                        <div>
                            <h2 className="text-5xl font-medium text-black leading-tight">
                                Menyiapkan lulusan{' '}
                                <span className="text-gray-400">siap kerja & berdaya saing</span>
                            </h2>
                        </div>

                        {/* Right - Stats */}
                        <div className="grid grid-cols-2 gap-16">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className={`text-5xl font-semibold ${stat.color} mb-2`}>
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-medium tracking-wider">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center - Description (Full Width) */}
                        <div className="md:col-span-2 text-center max-w-4xl mx-auto">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Melalui pendampingan karier, rekrutmen resmi,
                                dan kerja sama industri, BKK berkomitmen
                                membantu lulusan mendapatkan pekerjaan yang
                                sesuai dengan kompetensi dan kebutuhan industri.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Video Section */}
            <section className="py-20 bg-[#132133]">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-semibold text-white mb-6">
                            Peran BKK dalam <span className="text-gray-400">Dunia Kerja</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            BKK menjadi penghubung antara sekolah, alumni,
                            dan perusahaan untuk menciptakan lulusan yang siap kerja.
                        </p>
                    </div>

                    {/* Video Placeholder */}
                    <div className="mx-auto">
                        <div className="relative aspect-video bg-gray-200 rounded-3xl overflow-hidden">
                            <Image
                                src={heroImage}
                                alt="Video"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <button className="w-20 h-20 bg-white/50 backdrop-blur-lg border border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto">
                    <div className="mb-12">
                        <h2 className="text-5xl font-semibold text-black mb-4">
                            Tim BKK <span className="text-gray-400">SMKN 1 Purwosari</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Tim BKK terdiri dari tenaga profesional yang berpengalaman
                            dalam penyaluran kerja dan pendampingan alumni.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
                                    {member.photo && (
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-semibold text-black">{member.name}</h3>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                    <button className="text-neutral-500 hover:text-neutral-600 transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-semibold text-black mb-4">
                            Testimoni <span className="text-gray-400">Alumni</span>
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                            </div>
                            <span className="text-sm text-gray-600">50+ Reviews</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black">{testimonial.author}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
            <Clock />
        </div>
    );
}