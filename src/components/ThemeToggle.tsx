import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme mode"
      type="button"
      className="relative w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 self-center my-auto m-0"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {darkMode ? (
          <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 fill-amber-500/10" />
        )}
      </motion.div>
    </button>
  );
}
