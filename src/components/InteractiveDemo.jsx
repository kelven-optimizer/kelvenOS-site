import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Gamepad2, Wifi, Settings, Shield, Mouse, Trash2, Zap } from 'lucide-react';

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('gpu');

  const tabs = [
    { id: 'gpu', label: 'GPU / FPS', icon: Monitor },
    { id: 'games', label: 'Jogos', icon: Gamepad2 },
    { id: 'network', label: 'Rede', icon: Wifi },
    { id: 'windows', label: 'Windows', icon: Settings },
    { id: 'privacy', label: 'Privacidade', icon: Shield },
    { id: 'input', label: 'Input', icon: Mouse },
    { id: 'cleaner', label: 'Limpeza', icon: Trash2 },
    { id: 'quick', label: 'Rápido', icon: Zap },
  ];

  const demoContent = {
    gpu: {
      title: 'Otimização de GPU Avançada',
      description: 'Maximize o desempenho gráfico com tweaks profissionais',
      features: [
        'Prioridade de GPU em jogos',
        'Hardware Acceleration habilitado',
        'Agendamento de GPU otimizado',
        'Desativar otimizações de tela cheia',
        'Modo de alto desempenho',
        'Cache de shader otimizado'
      ],
      stats: { before: '60 FPS', after: '95 FPS', improvement: '+58%' }
    },
    games: {
      title: 'Perfis para +100 Jogos',
      description: 'Otimizações específicas para os jogos mais populares',
      features: [
        'Valorant - 8 otimizações',
        'CS2 - 12 otimizações',
        'Fortnite - 10 otimizações',
        'GTA V - 15 otimizações',
        'Warzone - 13 otimizações',
        'E muito mais...'
      ],
      stats: { before: '80 FPS', after: '120 FPS', improvement: '+50%' }
    },
    network: {
      title: 'Otimização de Rede',
      description: 'Reduza ping e latência drasticamente',
      features: [
        'TCP Optimizer habilitado',
        'DNS otimizado (Cloudflare/Google)',
        'QoS desativado',
        'Nagle Algorithm desativado',
        'MTU otimizado',
        'Buffer de rede ajustado'
      ],
      stats: { before: '45ms', after: '18ms', improvement: '-60%' }
    },
    windows: {
      title: 'Tweaks do Windows',
      description: 'Desative serviços desnecessários e libere recursos',
      features: [
        '50+ serviços otimizados',
        'Telemetria desativada',
        'Efeitos visuais otimizados',
        'Game Mode habilitado',
        'Plano de energia configurado',
        'Indexação de busca otimizada'
      ],
      stats: { before: '4GB RAM', after: '2.5GB RAM', improvement: '-38%' }
    },
    privacy: {
      title: 'Proteção de Privacidade',
      description: 'Desative rastreamento e telemetria',
      features: [
        'Telemetria do Windows bloqueada',
        'Rastreamento de apps desativado',
        'Dados de diagnóstico bloqueados',
        'Cortana desativada',
        'Publicidade personalizada bloqueada',
        'Compartilhamento de dados desativado'
      ],
      stats: { before: '100%', after: '0%', improvement: 'Bloqueado' }
    },
    input: {
      title: 'Otimização de Input',
      description: 'Minimize latência de mouse e teclado',
      features: [
        'Taxa de polling otimizada',
        'Precisão de ponteiro maximizada',
        'Aceleração de mouse desativada',
        'Delay de teclado minimizado',
        'Raw input habilitado',
        'DPI scaling otimizado'
      ],
      stats: { before: '8ms', after: '1ms', improvement: '-87%' }
    },
    cleaner: {
      title: 'Limpeza Profunda',
      description: 'Remova arquivos desnecessários automaticamente',
      features: [
        'Arquivos temporários',
        'Cache do Windows',
        'Logs do sistema',
        'Prefetch limpo',
        'Downloads antigos',
        'Lixeira esvaziada'
      ],
      stats: { before: '450GB', after: '480GB', improvement: '+30GB' }
    },
    quick: {
      title: 'Otimização em 1 Clique',
      description: 'Aplique todas as melhorias recomendadas instantaneamente',
      features: [
        'GPU otimizada',
        'Rede configurada',
        'Windows otimizado',
        'Privacidade protegida',
        'Input otimizado',
        'Sistema limpo'
      ],
      stats: { before: 'Padrão', after: 'Otimizado', improvement: '100%' }
    },
  };

  const activeContent = demoContent[activeTab];

  return (
    <section id="demo" className="section-container">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
        >
          <span className="text-sm font-semibold text-primary">Demonstração Interativa</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black mb-4"
        >
          Explore todos os
          <br />
          <span className="gradient-text">módulos de otimização</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Clique nas abas abaixo para ver cada módulo em ação
        </motion.p>
      </div>

      <div className="glass-card p-4 sm:p-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-accent-violet text-white'
                    : 'bg-dark-secondary text-gray-400 hover:text-white hover:bg-dark-secondary/70'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left - Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{activeContent.title}</h3>
                <p className="text-gray-400">{activeContent.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Recursos incluídos:</h4>
                {activeContent.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent-violet flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="bg-dark-secondary rounded-xl p-6 space-y-6">
              <h4 className="font-semibold text-lg mb-4">Resultados:</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Antes:</span>
                  <span className="text-2xl font-bold text-red-400">{activeContent.stats.before}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Depois:</span>
                  <span className="text-2xl font-bold text-green-400">{activeContent.stats.after}</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Melhoria:</span>
                    <span className="text-3xl font-black gradient-text">{activeContent.stats.improvement}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="h-3 bg-dark rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary via-accent-violet to-accent-blue"
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">Otimização aplicada com sucesso</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveDemo;
