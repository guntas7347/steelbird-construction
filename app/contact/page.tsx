import InquiryForm from "@/components/InquiryForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  FileText,
  Hammer,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Header --- */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              LET'S TALK <br />
              FOUNDATIONS.
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              Whether you're looking for a residential driveway estimate or a
              commercial structural consultation, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Contact Info Sidebar --- */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <Phone className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Call Us
                  </h4>
                  <p className="text-lg font-black text-zinc-800 dark:text-zinc-200">
                    (306) 213 7602
                  </p>
                  <p className="text-xs text-zinc-500">
                    Mon-Fri: 8am — 6pm CST
                  </p>
                </div>
              </div>

              <Link
                href="mailto:info@steelbirdconstruction.com"
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <Mail className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Email
                  </h4>
                  <p className="text-lg font-black text-zinc-800 dark:text-zinc-200">
                    info@steelbirdconstruction.com
                  </p>
                  <p className="text-xs text-zinc-500">
                    24/7 Response within 1 business day
                  </p>
                </div>
              </Link>

              {/* <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Office
                  </h4>
                  <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
                    1200 Industrial Way, Suite 400
                    <br />
                    Asheville, NC 28801
                  </p>
                </div>
              </div> */}
            </div>

            {/* --- Trust Badge --- */}
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm space-y-4">
              <ShieldCheck className="text-amber-600" size={32} />
              <h5 className="font-black tracking-tight">
                The Precision Guarantee
              </h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                All inquiries are reviewed by a licensed project manager. We
                provide firm, no-obligation quotes valid for 30 calendar days.
              </p>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      {/* --- Secondary CTA / Visit Office --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
            <div className="bg-white dark:bg-zinc-950 p-12 space-y-6">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 w-fit">
                <Hammer className="text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight">
                Visit the Showroom
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                Want to see stamp patterns and color samples in person? Visit
                our Asheville headquarters to touch and feel our various
                concrete finishes before you commit.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-widest">
                Get Directions <Send size={14} />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-12 space-y-6">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 w-fit">
                <Clock className="text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight">
                Emergency Repair
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                We offer structural stabilization and emergency patching for
                high-risk commercial failures. Our teams are available for rapid
                mobilization 24/7.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-widest">
                Call Emergency Line <Phone size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
