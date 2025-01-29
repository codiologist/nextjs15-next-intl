import { NextIntlClientProvider, useMessages } from "next-intl";
import { Navbar } from "../components/Navbar";
import "@/app/globals.css";

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	const messages = useMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<Navbar />
					<main>{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
