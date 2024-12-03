// theme/theme-btn.tsx
'use client';
import dynamic from 'next/dynamic';

export const ModeToggle = dynamic(
  () => import('./ThemeToggleClient').then((mod) => mod.ModeToggle),
  {
    ssr: false,
    loading: () => null,
  }
);
