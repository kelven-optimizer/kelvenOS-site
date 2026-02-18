import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, Users, Star } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, suffix = '', delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-violet mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
        <Icon size={28} className="text-white" />
      </div>
      <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
        {count.toLocaleString('pt-BR')}
        {suffix}
      </div>
      <p className="text-gray-400 font-medium">{label}</p>
    </motion.div>
  );
};

const SocialProof = () => {
  const stats = [
    { icon: Download, value: 10000, label: 'Downloads', suffix: '+' },
    { icon: TrendingUp, value: 40, label: 'Melhoria de Desempenho', suffix: '%' },
    { icon: Users, value: 99, label: 'Satisfação dos Usuários', suffix: '%' },
    { icon: Star, value: 4.9, label: 'Avaliação Média', suffix: '' },
  ];

  return (
    <section className="section-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
