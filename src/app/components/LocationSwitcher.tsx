"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LocationSwitcher() {
	const t = useTranslations("common");
	const router = useRouter();
	const pathname = usePathname();

	// Extract current location from pathname
	const getCurrentLocation = () => {
		const pathParts = pathname.split("/");
		return pathParts[pathParts.length - 1] || "dhaka";
	};

	const [currentLocation, setCurrentLocation] = useState(getCurrentLocation());

	const switchLocation = (newLocation: string) => {
		setCurrentLocation(newLocation);

		// Get the language part from the current path (en or bn)
		const pathParts = pathname.split("/");
		const language = pathParts[1]; // This will be 'en' or 'bn'

		// Construct new path with selected location
		const newPath = `/${language}/${newLocation}`;

		// Navigate to new path
		router.push(newPath);
	};

	return (
		<div className="relative group">
			<button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
				<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				<span>{currentLocation === "dhaka" ? t("locations.dhaka") : t("locations.chattogram")}</span>
				<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<div className="absolute hidden group-hover:block right-0 mt-1 bg-white rounded-lg shadow-lg z-10">
				<div className="py-1">
					<button
						className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100
              ${currentLocation === "dhaka" ? "bg-gray-50" : ""}`}
						onClick={() => switchLocation("dhaka")}
					>
						{t("locations.dhaka")}
					</button>
					<button
						className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100
              ${currentLocation === "chattogram" ? "bg-gray-50" : ""}`}
						onClick={() => switchLocation("chattogram")}
					>
						{t("locations.chattogram")}
					</button>
				</div>
			</div>
		</div>
	);
}
