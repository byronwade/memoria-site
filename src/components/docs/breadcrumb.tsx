import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo/constants";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

interface BreadcrumbItem {
	label: string;
	href: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
	const schemaItems = [
		{ name: "Home", url: siteConfig.url },
		...items.map((item) => ({
			name: item.label,
			url: `${siteConfig.url}${item.href}`,
		})),
	];

	return (
		<nav aria-label="Breadcrumb" className="mb-6">
			<ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
				<li>
					<Link
						href="/"
						className="hover:text-foreground transition-colors flex items-center"
					>
						<Home className="w-4 h-4" />
						<span className="sr-only">Home</span>
					</Link>
				</li>
				{items.map((item, index) => (
					<li key={item.href} className="flex items-center gap-2">
						<ChevronRight className="w-4 h-4 flex-shrink-0" />
						{index === items.length - 1 ? (
							<span className="text-foreground font-medium">{item.label}</span>
						) : (
							<Link
								href={item.href}
								className="hover:text-foreground transition-colors"
							>
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ol>
			<JsonLd schema={generateBreadcrumbSchema(schemaItems)} />
		</nav>
	);
}
