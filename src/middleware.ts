// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
//   matcher: ['/', '/(bn|en)/(dhaka|chattogram)/:path*'],
matcher: ['/', '/(bn|en)/:path*']
};
