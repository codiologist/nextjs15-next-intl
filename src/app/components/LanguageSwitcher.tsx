"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
	const t = useTranslations("common");
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const switchLanguage = (newLanguage: string) => {
		startTransition(() => {
			router.replace(pathname, { locale: newLanguage });
		});
	};

	return (
		<div className="relative group">
			<button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100" disabled={isPending}>
				<span>{locale === "en" ? "English" : "বাংলা"}</span>
				<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<div className="absolute hidden group-hover:block right-0 mt-1 bg-white rounded-lg shadow-lg z-10">
				<div className="py-1">
					<button
						className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100
              ${locale === "en" ? "bg-gray-50" : ""}`}
						onClick={() => switchLanguage("en")}
						disabled={isPending}
					>
						English
					</button>
					<button
						className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100
              ${locale === "bn" ? "bg-gray-50" : ""}`}
						onClick={() => switchLanguage("bn")}
						disabled={isPending}
					>
						বাংলা
					</button>
				</div>
			</div>
		</div>
	);
}
