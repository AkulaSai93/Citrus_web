"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is Citrus?",
    answer:
      "Citrus is project management software for one workspace: teams, projects, tasks, sprints, and people. It is invite-only. There is no public sign-up and no extra suite.",
  },
  {
    question: "Why does a team need project management software?",
    answer:
      "So everyone can see the plan, the owner, and where the work stands — this week and later. Citrus does that with one board, Sunday–Sunday sprints, and roles that sit on a team.",
  },
  {
    question: "What are the key features?",
    answer:
      "Task management on a five-status board. Sprints on a Sunday–Sunday calendar. A team tracker for load. Projects that live on a team. Invite-only members with head, lead, and member seats.",
  },
  {
    question: "How do I get access?",
    answer:
      "Ask an admin. They create your account and share a login link with a temporary password you change after first sign-in.",
  },
  {
    question: "Who can add a project?",
    answer:
      "A head or lead on their own team. Super admin can add to any team. Heads can still view every project.",
  },
  {
    question: "What are the five statuses?",
    answer:
      "Upcoming, Ongoing, In review, Completed, Live. Same language on every task, every team.",
  },
  {
    question: "Where does a new task go?",
    answer:
      "This week — it needs an owner and lands on the sprint calendar. Or park it for later, and assign an owner when you are ready.",
  },
  {
    question: "Who can use Citrus?",
    answer:
      "Heads, leads, members, and a super admin. If you sit on a team, you work the board. If you head or lead a team, you accept work and add projects there.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ease-out ${
        open ? "rotate-45" : ""
      }`}
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-t border-black/10 bg-neutral-100/70"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-12 px-5 py-20 sm:px-8 md:py-28 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col lg:sticky lg:top-28 lg:basis-[30rem] lg:self-start">
          <h2
            id="faq-heading"
            className="flex flex-col text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-ink"
          >
            <span className="whitespace-nowrap">Got questions?</span>
            <span className="font-display font-medium whitespace-nowrap text-brand">
              We’ve got answers
            </span>
          </h2>
        </div>

        <div className="w-full border-t border-black/10 lg:flex-1">
          {FAQS.map((item, index) => {
            const open = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-black/10"
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[15px] font-medium text-ink outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                  >
                    <span>{item.question}</span>
                    <PlusIcon open={open} />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 text-[15px] leading-[1.65] text-ink-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
