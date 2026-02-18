import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="relative border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-violet flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">KT Optimizer</h3>
                <span className="text-sm text-primary font-semibold">VIP 2.0</span>
              </div>
            </div>
            <p className="text-gray-400">
              Otimização profissional para Windows. Maximize o desempenho do seu PC com ferramentas avançadas.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-primary transition-colors">
                  Demonstração
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">
                  Preço
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kelven-optimizer/ktxoptimizer-vip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Creators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Criadores</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                Desenvolvido com <Heart size={14} className="inline text-red-500" /> por
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-semibold">THUR</span>
                <span className="text-primary font-semibold">KELVEN</span>
              </div>
              <a
                href="https://github.com/kelven-optimizer/ktxoptimizer-vip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span>Veja no GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} KT Optimizer VIP 2.0. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Código aberto e disponível no GitHub
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
