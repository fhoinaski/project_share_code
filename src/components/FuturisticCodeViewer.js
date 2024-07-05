'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Eye, Copy, Check, X } from 'lucide-react';
import { codeExamples } from './codeExamples';

const ImmersiveCodeMenu = () => {
  const [selectedCode, setSelectedCode] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') setSelectedCode(null);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div 
    id="code"
    className="min-h-screen bg-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8 text-center text-blue-400">Galeria de Componentes React</h1>
      <p className="text-lg text-center">Todos os componentes aqui disponíveis estão com estilização usando Tailwind CSS.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 ">
        {codeExamples.map((example, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedCode(example)}
          >
            <div className="flex items-center mb-4">
              <Code className="text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold">{example.name}</h2>
            </div>
            <p className="text-gray-400 mb-4">{example.description}</p>
            <div className="bg-gray-900 p-4 rounded-lg mb-4 h-32 flex items-center justify-center overflow-hidden">
              {React.createElement(example.component)}
            </div>
            <div className="flex justify-end">
              <Eye className="text-blue-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 h-screen w-screen z-50"
            onClick={() => setSelectedCode(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl h-[90vh] relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCode(null)}
                className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 z-10"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{selectedCode.name}</h2>
              <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Código:</h3>
                    <div className="relative">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomDark}
                        customStyle={{
                          padding: '1.5rem',
                          borderRadius: '0.5rem',
                          fontSize: '14px',
                        }}
                      >
                        {selectedCode.code}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => copyToClipboard(selectedCode.code)}
                        className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
                      >
                        {copiedCode === selectedCode.code ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className='mb-10'>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">Demonstração:</h3>
                    <div className="bg-gray-900 p-4 rounded-lg h-full flex items-center justify-center">
                      {React.createElement(selectedCode.component)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CodeViewer = () => {
  return <ImmersiveCodeMenu />;
};

export default CodeViewer;