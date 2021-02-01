import { useEffect, useState } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.addEventListener("scroll", handleScroll);
    }
  }, [scrollPosition])

  return scrollPosition
}

export default useScrollPosition;