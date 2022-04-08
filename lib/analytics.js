export const trackEvent = (...args) => {
  if (window.umami && typeof window.umami.trackEvent === "function") {
    window.umami.trackEvent(...args);
  }
};
