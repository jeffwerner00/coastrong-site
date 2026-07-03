import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 px-6 text-center text-sm text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <span>© {new Date().getFullYear()} COA Strong. All rights reserved.</span>
        <span className="hidden sm:inline text-gray-700">·</span>
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <span className="hidden sm:inline text-gray-700">·</span>
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </Link>
        <span className="hidden sm:inline text-gray-700">·</span>
        <Link href="mailto:support@coastrong.com" className="hover:text-white transition-colors">
          Support
        </Link>
      </div>
    </footer>
  );
}
