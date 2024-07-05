'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Text3D } from '@react-three/drei';
import ParticleBackground from './ParticleBackground';
import Link from 'next/link';

const FuturisticHeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <ParticleBackground />
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <AnimatedCodeSymbol3D />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center "
        >
          Códigos usados nos meus projetos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl text-center md:text-2xl mb-8 text-gray-300 px-20 mt-10"
        >
          Encontre aqui os códigos usados nos meus projetos, você pode se inspirar e usar como quiser.
        </motion.p>
        <Link href="#code">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mt-20"
          >
            Descubra os Códigos
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

const AnimatedCodeSymbol3D = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {'</>'}
          <meshStandardMaterial color="white" emissive="blue" metalness={0.8} roughness={0.2} />
        </Text3D>
      </group>
    </Center>
  );
};

export default FuturisticHeroSection;