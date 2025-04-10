'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Innovation is the ability to see change as an opportunity, not a threat.",
    author: "Steve Jobs"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg"
  },
  {
    text: "The art of progress is to preserve order amid change and to preserve change amid order.",
    author: "Alfred North Whitehead"
  },
  {
    text: "Digital design is like painting, except the paint never dries.",
    author: "Neville Brody"
  }
];

export default function RotatingQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <blockquote className="text-xl italic text-qasly-gray">
        "{quotes[currentQuote].text}"
      </blockquote>
      <p className="mt-2 text-sm text-qasly-gray">- {quotes[currentQuote].author}</p>
    </div>
  );
} 