import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Shield, Download } from 'lucide-react';

const Hero = () => {
  const floatingCards = [
    { icon: Zap, label: 'FPS', value: '+40%', color: 'from-primary to-accent-violet' },
    { icon: TrendingUp, label: 'Desempenho', value: '99%', color: 'from-accent-blue to-accent-cyan' },
    { icon: Shield, label: 'Seguro', value: '100%', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Hero Content */}
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-primary">Lançamento VIP 2.0</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                MAXIMIZE
                <br />
                <span className="gradient-text">SEU PC</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Otimização profissional para jogos e desempenho. Aumente FPS, reduza latência e libere o potencial máximo do seu sistema.
              </p>
            </div>

            {/* Price Tag */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-black gradient-text">R$ 30</span>
              <span className="text-gray-400">pagamento único</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/kelven-optimizer/ktxoptimizer-vip" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Download className="inline-block mr-2" size={20} />
                Baixar Agora
              </a>
              <a href="#demo" className="btn-secondary">
                Ver Demonstração
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-500" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                <span>10.000+ Downloads</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Main Preview Card */}
            <div className="absolute inset-0 glass-card p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-blue/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Dashboard Principal</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                    <span className="text-gray-300">CPU</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-dark rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent-violet"></div>
                      </div>
                      <span className="text-sm font-semibold">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                    <span className="text-gray-300">RAM</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-dark rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-accent-blue to-accent-cyan"></div>
                      </div>
                      <span className="text-sm font-semibold">50%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-dark/50 rounded-lg">
                    <span className="text-gray-300">GPU</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-dark rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                      </div>
                      <span className="text-sm font-semibold">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`absolute glass-card p-4 animate-float`}
                style={{
                  top: `${index * 120 + 50}px`,
                  right: index % 2 === 0 ? '-20px' : 'auto',
                  left: index % 2 === 1 ? '-20px' : 'auto',
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color}`}>
                    <card.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{card.label}</p>
                    <p className="text-xl font-bold">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
