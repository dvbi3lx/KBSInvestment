import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Performance optimization utilities for mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const isLowEndDevice = () => {
  if (typeof navigator === 'undefined') return false;

  // Check for low-end device indicators
  const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
  const memory = (performance as Performance & { memory?: { jsHeapSizeLimit?: number } }).memory;

  // Check connection speed
  if (connection && connection.effectiveType) {
    if (['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
      return true;
    }
  }

  // Check available memory (if available)
  if (memory && memory.jsHeapSizeLimit) {
    if (memory.jsHeapSizeLimit < 2147483648) { // Less than 2GB
      return true;
    }
  }

  // Check for low-end mobile devices
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('android') && userAgent.includes('mobile')) {
    return true;
  }

  return false;
};

export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getOptimizedAnimationDuration = (baseDuration: number) => {
  if (isMobile() || isLowEndDevice() || shouldReduceMotion()) {
    return Math.min(baseDuration * 0.6, 0.3); // Reduce duration on mobile/low-end devices
  }
  return baseDuration;
};

export const getOptimizedViewportMargin = (baseMargin: string) => {
  if (isMobile() || isLowEndDevice()) {
    return '-20px'; // Reduce viewport margin for better performance
  }
  return baseMargin;
};

// Debounce function for performance
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer options optimized for mobile
export const getIntersectionObserverOptions = (threshold = 0.1) => ({
  root: null,
  rootMargin: isMobile() ? '0px 0px -50px 0px' : '0px 0px -100px 0px',
  threshold: isMobile() ? Math.min(threshold, 0.05) : threshold,
});

// Optimize scroll performance
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  if (isMobile() || isLowEndDevice()) {
    // Use instant scroll on mobile/low-end devices for better performance
    element.scrollIntoView();
  } else {
    // Use smooth scroll on desktop
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Lazy loading utility
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageObserver.observe(img);
  } else {
    // Fallback for older browsers
    img.src = src;
  }
};
