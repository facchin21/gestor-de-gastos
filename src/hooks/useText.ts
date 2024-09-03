import { useEffect, useState } from "react";

export function useText (text : string) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); 

      return () => clearTimeout(timer);
    }
  }, [index, displayedText, text]);

  return {displayedText}
}