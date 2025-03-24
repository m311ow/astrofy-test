import AOS from 'aos';

const defaultOptions = {
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
  // can be overriden on per element basis
  once: false,
  mirror: false
};

export function aosInit() {
  AOS.init(defaultOptions);
}
