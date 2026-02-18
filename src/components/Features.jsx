import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Gamepad2, 
  Wifi, 
  Settings, 
  Shield, 
  Mouse, 
  Trash2, 
  Zap 
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, delay, size = 'normal' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`glass-card p-6 group hover:scale-105 transition-all duration-300 ${
        size === 'large' ? 'sm:col-span-2' : ''
      }`}
    >
      <div 
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300`}
      >
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Otimizador de GPU',
      description: 'Maximize o desempenho gráfico com tweaks avançados para NVIDIA e AMD.',
      color: 'from-primary to-accent-violet',
      size: 'large'
    },
    {
      icon: Gamepad2,
      title: 'Otimização de Jogos',
      description: 'Perfis otimizados para os jogos mais populares. Aumente FPS instantaneamente.',
      color: 'from-accent-blue to-accent-cyan',
      size: 'normal'
    },
    {
      icon: Wifi,
      title: 'Tweaks de Rede',
      description: 'Reduza ping e latência com otimizações de rede profissionais.',
      color: 'from-green-500 to-emerald-600',
      size: 'normal'
    },
    {
      icon: Settings,
      title: 'Otimização Windows',
      description: 'Desative serviços desnecessários e libere recursos do sistema.',
      color: 'from-orange-500 to-red-600',
      size: 'normal'
    },
    {
      icon: Shield,
      title: 'Privacidade',
      description: 'Proteja seus dados desativando telemetria e rastreamento do Windows.',
      color: 'from-purple-500 to-pink-600',
      size: 'normal'
    },
    {
      icon: Mouse,
      title: 'Input & Mouse',
      description: 'Otimize configurações de mouse, teclado e periféricos para gaming.',
      color: 'from-yellow-500 to-amber-600',
      size: 'normal'
    },
    {
      icon: Trash2,
      title: 'Limpeza do Sistema',
      description: 'Remova arquivos temporários e libere espaço em disco automaticamente.',
      color: 'from-cyan-500 to-blue-600',
      size: 'normal'
    },
    {
      icon: Zap,
      title: 'Otimizador Rápido',
      description: 'Aplique todas as otimizações recomendadas com um único clique.',
      color: 'from-indigo-500 to-purple-600',
      size: 'large'
    },
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
        >
          <span className="text-sm font-semibold text-primary">Recursos Completos</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black mb-4"
        >
          Tudo que você precisa para
          <br />
          <span className="gradient-text">máximo desempenho</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          8 módulos profissionais de otimização para transformar seu PC
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} delay={index * 0.05} />
        ))}
      </div>
    </section>
  );
};

export default Features;
