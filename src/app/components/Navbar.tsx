"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

export function Navbar() {
	const t = useTranslations("common");

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold">
							ABC Healthcare
						</Link>
						<div className="ml-10 flex items-center space-x-4">
							<Link href="/dhaka" className="text-gray-700 hover:text-gray-900">
								{t("nav.home")}
							</Link>
							<Link href="/services" className="text-gray-700 hover:text-gray-900">
								{t("nav.services")}
							</Link>
							<Link href="/dhaka" className="text-gray-700 hover:text-gray-900">
								{t("locations.dhaka")}
							</Link>
							<Link href="/chattogram" className="text-gray-700 hover:text-gray-900">
								{t("locations.chattogram")}
							</Link>
						</div>
					</div>
					<LocaleSwitcher />
				</div>
			</div>
		</nav>
	);
}
