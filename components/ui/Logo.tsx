import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<>
			<img
				// eslint-disable-next-line @next/next/no-img-element
				src="/logo-light.svg"
				alt=""
				role="presentation"
				aria-hidden="true"
				className={cn("block dark:hidden", className)}
			/>
			<img
				// eslint-disable-next-line @next/next/no-img-element
				src="/logo-dark.svg"
				alt=""
				role="presentation"
				aria-hidden="true"
				className={cn("hidden dark:block", className)}
			/>
		</>
	);
}