import React, { useState, useEffect } from "react";

export const TypingEffect = () => {
  const sequence = [
    "Proteja-se contra spam e vazamento de dados.",
    "Gerencie facilmente seus e-mails no dashboard.",
    "Crie múltiplos e-mails de redirecionamento.",
    "Identifique a origem de cada e-mail com marcações personalizadas.",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = sequence[index];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 4000;

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    } else {
      const timer = setTimeout(() => {
        setText((prevText) =>
          isDeleting
            ? prevText.slice(0, -1)
            : currentText.slice(0, prevText.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [index, isDeleting, text, sequence]);

  return (
    <div className="my-4 h-16 text-center text-sm text-white sm:mt-10 sm:text-left sm:text-sm md:my-8 md:h-auto lg:my-12">
      <p style={{ fontSize: "14px", lineHeight: "20px" }}>
        <span className="text-[#d1d5db] md:text-sm text-xs">{text}</span>
        <span className="blinking-cursor" style={{ height: "14px" }}>
          |
        </span>
      </p>
    </div>
  );
};

export const codeExamples = [
  {
    name: "Efeito de Digitação",
    description:
      "Um efeito de texto sendo digitado letra por letra com múltiplas frases.",
    component: TypingEffect,
    code: `
    //importaçao do react e useState, useEffect
    import React, { useState, useEffect } from 'react';

    //função TypingEffect
    const TypingEffect = () => {

    //array de string com o texto que você quer usar
    const sequence = [
    "Proteja-se contra spam e vazamento de dados.",
    "Gerencie facilmente seus e-mails no dashboard.",
    "Crie múltiplos e-mails de redirecionamento.",
    "Identifique a origem de cada e-mail com marcações personalizadas.",
  ];

    //useState para o index, texto e se está deletando
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    //useEffect para o efeito de digitação
     useEffect(() => {
    const currentText = sequence[index];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 4000;

    //condições para o efeito de digitação
    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    } else {
      const timer = setTimeout(() => {
        setText((prevText) => 
          isDeleting 
            ? prevText.slice(0, -1)
            : currentText.slice(0, prevText.length + 1)
        );
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
    }, [index, isDeleting, text, sequence]);

      /*
      return para o efeito de digitação usando as classes do tailwindcss
      */
      return (
        <div className="my-4 h-16 text-center text-sm text-white sm:mt-10 sm:text-left sm:text-sm md:my-8 md:h-auto lg:my-12">
          <p style={{ fontSize: "14px", lineHeight: "20px" }}>
            <span className="text-[#d1d5db] md:text-sm text-xs">{text}</span>
            <span className="blinking-cursor" style={{ height: "14px" }}>|</span>
          </p>
        </div>
      );
    };
    `,
  },
];
