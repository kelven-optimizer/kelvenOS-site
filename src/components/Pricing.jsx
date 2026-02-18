import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Download, Shield, RefreshCw } from 'lucide-react';

const Pricing = () => {
  const features = [
    '8 Módulos de Otimização Completos',
    'Perfis para +100 Jogos',
    'Atualizações Vitalícias Grátis',
    'Suporte Premium',
    'Interface em Português',
    'Código Aberto no GitHub',
    'Sem Mensalidades',
    'Garantia de 30 Dias',
  ];

  const badges = [
    { icon: Shield, label: '100% Seguro' },
    { icon: RefreshCw, label: 'Atualizações Grátis' },
    { icon: Crown, label: 'Acesso VIP' },
  ];

  return (
    <section id="pricing" className="section-container">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
        >
          <span className="text-sm font-semibold text-primary">Preço Especial</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black mb-4"
        >
          Invista no seu
          <br />
          <span className="gradient-text">desempenho máximo</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Acesso completo por um pagamento único. Sem mensalidades.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-xl mx-auto"
      >
        <div className="relative glass-card p-8 sm:p-10 border-2 border-primary/50 overflow-hidden">
          {/* VIP Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-accent-violet px-6 py-2 rounded-bl-2xl">
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-white" />
              <span className="text-sm font-bold text-white">VIP 2.0</span>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-violet/5 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Price */}
            <div className="text-center mb-8 pt-6">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$ 50</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">-40% OFF</span>
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-3">
                <span className="text-6xl sm:text-7xl font-black gradient-text">R$ 30</span>
              </div>
              <p className="text-gray-400 text-lg">Pagamento único • Acesso vitalício</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent-violet flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://github.com/kelven-optimizer/ktxoptimizer-vip"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center text-lg py-5 mb-6"
            >
              <Download className="inline-block mr-2" size={20} />
              Baixar Agora - R$ 30
            </a>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-border">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-400">
                    <Icon size={16} className="text-primary" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Shield size={16} className="text-green-500" />
            <span className="text-sm text-green-400 font-semibold">
              Garantia de satisfação de 30 dias ou seu dinheiro de volta
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
