"use client";
import { FileText, Send } from "lucide-react";
import { useState } from "react";

const InquiryForm = () => {
  const [isTechnical, setIsTechnical] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
  });

  const email = "[EMAIL_ADDRESS]";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New ${form.projectType} Inquiry`);

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Project Type: ${form.projectType}`,
        "",
        "Project Details:",
        form.projectDetails,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  return (
    <div className="lg:col-span-8">
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-2xl shadow-zinc-200/50 dark:shadow-none">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form Header / Type Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-black tracking-tight">
              Project Inquiry
            </h3>
            <div className="flex items-center gap-3">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${!isTechnical ? "text-amber-600" : "text-zinc-400"}`}
              >
                Residential
              </span>
              <button
                type="button"
                onClick={() => setIsTechnical(!isTechnical)}
                className="w-12 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full relative transition-colors"
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full transition-all ${isTechnical ? "left-7 bg-amber-600" : "left-1 bg-zinc-400"}`}
                />
              </button>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${isTechnical ? "text-amber-600" : "text-zinc-400"}`}
              >
                Engineering / B2B
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Project Type
              </label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm appearance-none"
              >
                <option>Select Option</option>
                <option>New Driveway</option>
                <option>Replacement Slab</option>
                <option>Commercial Foundation</option>
                <option>Decorative / Stamped</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Project Details / SQ FT
            </label>
            <textarea
              rows={5}
              placeholder="Describe the current condition and desired outcome..."
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm resize-none"
              name="projectDetails"
              value={form.projectDetails}
              onChange={(e) =>
                setForm({ ...form, projectDetails: e.target.value })
              }
            ></textarea>
          </div>

          {isTechnical && (
            <div className="p-6 bg-zinc-900 border-l-4 border-amber-600 flex items-start gap-4">
              <FileText className="text-amber-500 mt-1" size={20} />
              <div className="space-y-1">
                <p className="text-xs font-bold text-white uppercase tracking-widest">
                  Technical Attachment Required
                </p>
                <p className="text-[10px] text-zinc-400">
                  Please have your site plans (PDF/CAD) ready for the follow-up
                  email from our engineers.
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-600 text-white font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-xl shadow-amber-900/20 active:scale-[0.98]"
          >
            Submit Inquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
