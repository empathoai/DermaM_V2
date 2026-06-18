import { useReducedMotion } from 'motion/react';

/**
 * Custom hook that returns motion variants adapted dynamically for prefers-reduced-motion.
 * This guarantees accessibility and a clean central hub for all visual details.
 */
export function useMotionSystem() {
  const shouldReduce = useReducedMotion();

  // 1. Soft Section Reveal
  const sectionReveal = {
    hidden: { 
      opacity: 0, 
      y: shouldReduce ? 0 : 16 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0.2 : 0.85,
        ease: [0.16, 1, 0.3, 1] // Clinical, elegant cubic-bezier
      }
    }
  };

  // 2. Staggered Entrances for Card Groups
  const cardStaggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.08,
        delayChildren: shouldReduce ? 0 : 0.05
      }
    }
  };

  const cardReveal = {
    hidden: { 
      opacity: 0, 
      y: shouldReduce ? 0 : 12 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0.2 : 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // 3 & 4. Premium Hover animations for whileHover prop
  const cardHover = shouldReduce ? {} : {
    y: -4,
    transition: { 
      duration: 0.3, 
      ease: [0.16, 1, 0.3, 1] 
    }
  };

  const buttonHover = shouldReduce ? {} : {
    y: -1,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  };

  const imageHover = shouldReduce ? {} : {
    scale: 1.025,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  };

  // Simple clean viewport configuration
  const viewportConfig = {
    once: true,
    margin: "-80px"
  };

  return {
    shouldReduce,
    sectionReveal,
    cardStaggerContainer,
    cardReveal,
    cardHover,
    buttonHover,
    imageHover,
    viewportConfig
  };
}

// Static fallback variants for standard imports when hooks are not ideal
const isServer = typeof window === 'undefined';
const staticReduce = !isServer && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const staticSectionReveal = {
  hidden: { opacity: 0, y: staticReduce ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: staticReduce ? 0.2 : 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const staticCardStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staticReduce ? 0 : 0.08,
      delayChildren: staticReduce ? 0 : 0.05
    }
  }
};

export const staticCardReveal = {
  hidden: { opacity: 0, y: staticReduce ? 0 : 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: staticReduce ? 0.2 : 0.65,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
