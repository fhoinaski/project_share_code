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
    name: "Efeito de Digitação (React)",
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
  {
    name: "Codigo efeito digitação (HTML)",
    description:
      "Um efeito de texto sendo digitado letra por letra com múltiplas frases.",
    component: TypingEffect,
    code: `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Efeito de Digitação</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #1f2937;
            }
            .typing-effect {
                margin: 1rem 0;
                height: 4rem;
                text-align: center;
                font-size: 0.875rem;
                color: white;
            }
            .typing-text {
                font-size: 14px;
                line-height: 20px;
                color: #d1d5db;
            }
            .blinking-cursor {
                display: inline-block;
                width: 2px;
                height: 14px;
                background-color: #d1d5db;
                margin-left: 2px;
                animation: blink 0.7s infinite;
            }
            @keyframes blink {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
            @media (min-width: 640px) {
                .typing-effect {
                    margin-top: 2.5rem;
                    text-align: left;
                }
            }
            @media (min-width: 768px) {
                .typing-effect {
                    margin: 2rem 0;
                    height: auto;
                }
                .typing-text {
                    font-size: 0.875rem;
                }
            }
            @media (min-width: 1024px) {
                .typing-effect {
                    margin: 3rem 0;
                }
            }
        </style>
    </head>
    <body>
        <div class="typing-effect">
            <p>
                <span class="typing-text"></span>
                <span class="blinking-cursor"></span>
            </p>
        </div>
    
        <script>
            const sequence = [
                "Proteja-se contra spam e vazamento de dados.",
                "Gerencie facilmente seus e-mails no dashboard.",
                "Crie múltiplos e-mails de redirecionamento.",
                "Identifique a origem de cada e-mail com marcações personalizadas.",
            ];
    
            let index = 0;
            let text = "";
            let isDeleting = false;
    
            function typeEffect() {
                const currentText = sequence[index];
                const typingSpeed = isDeleting ? 50 : 100;
                const pauseDuration = 4000;
    
                if (!isDeleting && text === currentText) {
                    setTimeout(() => { isDeleting = true; typeEffect(); }, pauseDuration);
                } else if (isDeleting && text === "") {
                    isDeleting = false;
                    index = (index + 1) % sequence.length;
                    setTimeout(typeEffect, 500);
                } else {
                    text = isDeleting
                        ? currentText.substring(0, text.length - 1)
                        : currentText.substring(0, text.length + 1);
                    document.querySelector('.typing-text').textContent = text;
                    setTimeout(typeEffect, typingSpeed);
                }
            }
    
            typeEffect();
        </script>
    </body>
    </html>
        `,
  }
];
