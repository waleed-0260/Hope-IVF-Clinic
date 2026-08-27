"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  PartyPopper,
  Phone,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SERVICES, SITE } from "@/lib/constants";
import { useStore } from "@/store/useStore";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "date", string>>;

type FormFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass =
  "block text-sm font-semibold text-ink";

function validateStep1(form: FormFields): Errors {
  const errors: Errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

function validateStep2(form: FormFields): Errors {
  const errors: Errors = {};
  if (!form.service) errors.service = "Please select a service.";
  if (!form.date) errors.date = "Please choose a preferred date.";
  return errors;
}

export default function AppointmentForm() {
  const form = useStore((s) => s.appointmentForm);
  const setFormField = useStore((s) => s.setFormField);
  const nextStep = useStore((s) => s.nextStep);
  const prevStep = useStore((s) => s.prevStep);
  const resetForm = useStore((s) => s.resetForm);

  const [errors, setErrors] = useState<Errors>({});
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const step = form.step;
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const summary = [
    { label: "Name", value: form.name, field: "name" as const, step: 1 },
    { label: "Phone", value: form.phone, field: "phone" as const, step: 1 },
    { label: "Email", value: form.email, field: "email" as const, step: 1 },
    {
      label: "Service",
      value:
        SERVICES.find((s) => s.slug === form.service)?.name ?? form.service,
      field: "service" as const,
      step: 2,
    },
    { label: "Preferred Date", value: form.date, field: "date" as const, step: 2 },
    { label: "Notes", value: form.message || "—", field: "message" as const, step: 2 },
  ];

  const handleNext = () => {
    const stepErrors =
      step === 1 ? validateStep1(form) : validateStep2(form);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    setDirection(1);
    nextStep();
  };

  const handleBack = () => {
    setErrors({});
    setDirection(-1);
    prevStep();
  };

  const handleEdit = (targetStep: number) => {
    setErrors({});
    setDirection(targetStep > step ? 1 : -1);
    const diff = targetStep - step;
    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) nextStep();
      else prevStep();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    resetForm();
    setSubmitted(false);
    setErrors({});
    setDirection(1);
  };

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const angle = (i / 18) * Math.PI * 2 + (i % 3) * 0.4;
        const dist = 60 + (i % 5) * 26;
        const colors = ["#0D7377", "#D4788C", "#C9A84C", "#14939A"];
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          c: colors[i % colors.length],
          d: i * 0.03,
        };
      }),
    []
  );

  const stepsLabel = ["Personal Info", "Appointment Details", "Review & Confirm"];
  const progress = ((step - 1) / 2) * 100;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-lg">
      {!submitted ? (
        <>
          <div className="border-b border-ink/5 bg-cream/60 px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between">
              {stepsLabel.map((label, i) => {
                const stepNumber = i + 1;
                const active = stepNumber === step;
                const done = stepNumber < step;
                return (
                  <div
                    key={label}
                    className={`flex items-center gap-2 text-xs font-semibold sm:text-sm ${
                      active
                        ? "text-primary"
                        : done
                          ? "text-primary/70"
                          : "text-muted/50"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition ${
                        active
                          ? "bg-primary text-white"
                          : done
                            ? "bg-primary/20 text-primary"
                            : "bg-ink/10 text-muted"
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-4 w-4" /> : stepNumber}
                    </span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <p className="mt-2 text-xs text-muted">
              Step {step} of 3 — {stepsLabel[step - 1]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        <User className="mr-1.5 inline h-4 w-4 text-secondary-dark" />
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setFormField("name", e.target.value)}
                        placeholder="e.g. Ayesha & Omar"
                        className={inputClass}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-secondary-dark">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        <Phone className="mr-1.5 inline h-4 w-4 text-secondary-dark" />
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setFormField("phone", e.target.value)}
                        placeholder="03XX XXXXXXX"
                        className={inputClass}
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-secondary-dark">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        <Mail className="mr-1.5 inline h-4 w-4 text-secondary-dark" />
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setFormField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-secondary-dark">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Select Service
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setFormField("service", e.target.value)}
                        className={`${inputClass} ${form.service ? "" : "text-muted/60"}`}
                      >
                        <option value="" disabled>
                          Choose a treatment…
                        </option>
                        {SERVICES.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs font-medium text-secondary-dark">
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="date" className={labelClass}>
                        <CalendarDays className="mr-1.5 inline h-4 w-4 text-secondary-dark" />
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => setFormField("date", e.target.value)}
                        className={inputClass}
                      />
                      {errors.date && (
                        <p className="mt-1.5 text-xs font-medium text-secondary-dark">
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message / Notes <span className="font-normal text-muted">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setFormField("message", e.target.value)}
                        placeholder="Share anything you would like us to know — it all stays confidential."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      Review Your Details
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Please confirm everything looks right before submitting.
                    </p>
                    <dl className="mt-5 divide-y divide-ink/5 rounded-2xl border border-ink/5 bg-cream/60">
                      {summary.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between gap-3 px-5 py-3.5"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                            {row.label}
                          </dt>
                          <dd className="max-w-[60%] truncate text-right text-sm font-medium text-ink">
                            {row.value}
                          </dd>
                          <button
                            type="button"
                            onClick={() => handleEdit(row.step)}
                            className="text-xs font-bold text-primary transition hover:text-secondary-dark"
                          >
                            Edit
                          </button>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:scale-[1.03]"
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.03]"
                >
                  <PartyPopper className="h-4 w-4" /> Submit Request
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-8">
          <div className="relative flex h-24 w-24 items-center justify-center">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                aria-hidden
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: p.c }}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{ opacity: 0, x: p.x, y: p.y, scale: 0 }}
                transition={{ duration: 0.9, delay: 0.25 + p.d, ease: "easeOut" }}
              />
            ))}
            <motion.span
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <CheckCircle2 className="h-11 w-11" />
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mt-6 font-display text-2xl font-bold text-ink">
              Thank You!
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Our team will contact you within 24 hours to confirm your
              appointment. We can&apos;t wait to walk this journey with you.
            </p>
            <button
              onClick={handleReset}
              className="mt-8 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary"
            >
              Book Another Appointment
            </button>
          </motion.div>
        </div>
      )}

      {!submitted && (
        <p className="border-t border-ink/5 bg-cream/60 px-6 py-4 text-xs text-muted sm:px-8">
          Your information is kept strictly confidential.
          {SITE.doctor}&apos;s team will reach out on {SITE.phone}.
        </p>
      )}
    </div>
  );
}