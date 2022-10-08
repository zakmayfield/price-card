import { createBreakpoints } from '@chakra-ui/theme-tools';

/**
 * Breakpoints for responsive design
 */
export const breakpoints = createBreakpoints({
  sm: '30em', // 480
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '96em', // 1536
  '3xl': '105em', // 1680
  '4xl': '120em', // 1920
  '5xl': '150em', // 2400 - Can be used for handling very large viewport edge cases
});
