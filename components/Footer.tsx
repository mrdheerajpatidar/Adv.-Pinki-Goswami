import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-zinc-500" />
            <p className="text-zinc-500 text-sm">Adv. Pinki Goswami · Jodhpur, Rajasthan</p>
          </div>
          <p className="text-zinc-600 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} All rights reserved.{" "}
            <span className="text-zinc-700">
              Website by{" "}
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Ins Solution
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
