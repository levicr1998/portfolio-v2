import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';
import { useEffect, useState } from 'react';

const fullConfig = resolveConfig(tailwindConfig);

export function useCurrentBreakpoints() {
  const [breakpoints, setBreakpoints] = useState<string[]>([]);
  const screens = fullConfig?.theme?.screens;
  const updateBreakpoints = () => {
    if (screens) {
      setBreakpoints(
        Object.keys(screens)?.filter(
          (key) => window.innerWidth > parseInt(`${(screens as any)?.[key] ?? '0'}`)
        )
      );
      return;
    }
    setBreakpoints([]);
  };

  useEffect(() => {
    updateBreakpoints();
    window.addEventListener('resize', updateBreakpoints);
    return () => {
      window.removeEventListener('resize', updateBreakpoints);
    };
  }, []);

  return breakpoints;
}
