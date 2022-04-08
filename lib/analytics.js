export const trackEvent = (...args) => {
  if (window.umami) {
    window.umami.trackEvent(...args);
  }
};
