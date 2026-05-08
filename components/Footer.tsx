import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-zinc-900 dark:bg-black border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-xl font-bold text-white uppercase tracking-widest">
            Steel Bird
          </div>
          <p className="text-zinc-400 font-['Space_Grotesk'] text-sm tracking-normal">
            Engineering a legacy of trust through architectural precision and
            structural innovation since 1984.
          </p>
        </div>
        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-amber-500 font-label-bold uppercase tracking-wider">
            Company
          </h4>
          <div className="flex flex-col gap-4">
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Our Process
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Sustainability
            </a>
          </div>
        </div>
        {/* Policy Links */}
        <div className="space-y-6">
          <h4 className="text-amber-500 font-label-bold uppercase tracking-wider">
            Resources
          </h4>
          <div className="flex flex-col gap-4">
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Safety Protocols
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-zinc-400 hover:text-amber-400 transition-opacity"
              href="#"
            >
              BIM Modeling
            </a>
          </div>
        </div>
        {/* Contact */}
        <div className="space-y-6">
          <Link
            href="mailto:info@steelbirdconstruction.com"
            className="flex gap-4"
          >
            <Mail className="text-zinc-400" size={20} />
            <span className="text-zinc-400 text-sm">
              info@steelbirdconstruction.com
            </span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 font-['Space_Grotesk'] text-sm tracking-normal">
            © {new Date().getFullYear()} Steel Bird Construction. Engineered
            Trust.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-600 hover:text-amber-500 cursor-pointer transition-colors">
              hub
            </span>
            <span className="material-symbols-outlined text-zinc-600 hover:text-amber-500 cursor-pointer transition-colors">
              apartment
            </span>
            <span className="material-symbols-outlined text-zinc-600 hover:text-amber-500 cursor-pointer transition-colors">
              construction
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
