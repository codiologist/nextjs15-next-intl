"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LocaleSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const switchLocale = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<select onChange={(e) => switchLocale(e.target.value)} value={locale} className="bg-white border rounded px-2 py-1">
			<option value="en">English</option>
			<option value="bn">বাংলা</option>
		</select>
	);
}
