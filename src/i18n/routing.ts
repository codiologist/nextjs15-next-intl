// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Define locales and default
export const routing = defineRouting({
  locales: ['en', 'bn'],
  defaultLocale: 'en',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
