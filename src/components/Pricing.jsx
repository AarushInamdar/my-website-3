import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const plans = [
  {
    name: "Monthly", eyebrow: "Maximum flexibility", price: "$299.99",
    billing: "$299.99 charged monthly",
    description: "A low-commitment way to keep campaigns moving while your needs evolve.",
    features: [
      ["Pause anytime", "Scale your subscription around seasonal campaigns"],
      ["Monthly planning", "Stay agile with a short billing cycle"],
      ["Full platform access", "Use every creator discovery and workflow tool"],
    ],
  },
  {
    name: "6 months", eyebrow: "Save $360/year", badge: "Better value", price: "$269.99",
    billing: "$1,619.94 charged every 6 months",
    description: "Built for teams ready to run a complete campaign season from one workspace.",
    features: [
      ["Season-long continuity", "Plan and publish six months of creator work"],
      ["Priority matching", "Build a reliable shortlist for repeat campaigns"],
      ["Campaign reporting", "Compare results across every activation"],
    ],
  },
  {
    name: "Annual", eyebrow: "Save $600/year", badge: "Best value", price: "$249.99",
    billing: "$2,999.88 charged annually", featured: true,
    description: "The best rate for established programs that recruit and collaborate year-round.",
    features: [
      ["Year-round strategy", "Manage an always-on creator pipeline"],
      ["Team onboarding", "Give every collaborator a consistent workflow"],
      ["Annual insights", "Turn a full year of results into smarter planning"],
    ],
  },
];

const Pricing = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Simple pricing</p>
      <h2 className={styles.sectionHeadText}>Pick your pace.</h2>
      <p className='mt-4 max-w-2xl text-secondary text-[17px] leading-[30px]'>
        Choose the commitment that fits your creator program. Every option includes
        the complete toolkit, with benefits tailored to how your team plans.
      </p>
    </motion.div>

    <div className='mt-12 grid gap-7 lg:grid-cols-3'>
      {plans.map((plan, index) => (
        <motion.article key={plan.name} variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          className={`flex h-full flex-col rounded-2xl border bg-tertiary p-7 ${plan.featured ? "border-[#915eff] shadow-[0_0_30px_rgba(145,94,255,0.2)]" : "border-white/10"}`}>
          <div className='flex min-h-[70px] items-start justify-between gap-4'>
            <div>
              <h3 className='text-white text-[26px] font-bold'>{plan.name}</h3>
              {plan.badge && <span className='mt-2 inline-block rounded-full border border-[#915eff]/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#b99aff]'>{plan.badge}</span>}
            </div>
            <p className='text-right text-sm font-semibold text-[#b99aff]'>{plan.eyebrow}</p>
          </div>
          <div className='mt-8'>
            <p className='text-white text-[42px] font-bold leading-none'>{plan.price}<span className='text-secondary text-base font-normal'> /mo</span></p>
            <p className='mt-3 text-secondary text-sm'>{plan.billing}</p>
            <p className='mt-5 min-h-[72px] text-secondary leading-6'>{plan.description}</p>
          </div>
          <ul className='mt-7 flex-1 space-y-5 border-t border-white/10 pt-7'>
            {plan.features.map(([title, detail]) => (
              <li key={title} className='flex gap-3'>
                <span aria-hidden='true' className='mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#915eff] text-xs text-white'>✓</span>
                <div><p className='font-semibold text-white'>{title}</p><p className='mt-1 text-sm leading-5 text-secondary'>{detail}</p></div>
              </li>
            ))}
          </ul>
          <a href='#contact' className='mt-8 rounded-xl bg-[#915eff] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#7d4ee8] focus:outline-none focus:ring-2 focus:ring-[#b99aff] focus:ring-offset-2 focus:ring-offset-tertiary'>
            Get started <span aria-hidden='true'>→</span>
          </a>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Pricing, "pricing");
