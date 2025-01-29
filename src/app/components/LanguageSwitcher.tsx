'use client';

import Link from 'next/link';
import { usePathname } from 'next-intl/client';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const alternateLocale = pathname.startsWith('/en') ? 'bn' : 'en';
  const newPathname = pathname.replace(/\/(en|bn)/, `/${alternateLocale}`);

  return (
    <Link href={newPathname}>
      <button>
        Switch to {alternateLocale === 'en' ? 'English' : 'Bangla'}
      </button>
    </Link>
  );
}
