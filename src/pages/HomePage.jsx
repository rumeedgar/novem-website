import React from "react";
import { Button, Card, Tile, StepItem } from "../components/common";
import { customStyles } from "../styles/customStyles";

const HomePage = () => {
  return (
    <>
      <header style={{ padding: "var(--space-xl) 0" }}>
        <span className="block font-mono text-sm uppercase tracking-wider text-black mb-2">
          Infrastructure V.1.0
        </span>
        <h1 className="font-mono text-4xl leading-tight mb-4 tracking-tight">
          Move money at scale—without the operational drag_
        </h1>
        <p className="text-gray-600 mb-4" style={customStyles.heroSubtext}>
          Payments infrastructure for product teams, with tracking, issue
          resolution, and reconciliation built in—so you know what happened
          without manual chasing.
        </p>

        <ul className="list-none mb-8" style={customStyles.heroList}>
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            Launch payments faster across more bank partners
          </li>
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            <span
              className="inline px-1"
              style={{ backgroundColor: "var(--c-accent-highlight)" }}
            >
              Know what finished, what's stuck, and what needs action
            </span>
          </li>
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            Reconcile outcomes to bank activity for finance confidence
          </li>
        </ul>

        <div style={customStyles.heroActions}>
          <Button variant="primary" href="#">
            Talk to Sales
          </Button>
          <Button variant="secondary" href="#">
            View Product
          </Button>
        </div>
      </header>

      <hr style={customStyles.hr} />

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          01. Product Suite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          <Card
            label="PAYMENTS"
            title="Infrastructure for teams that move money"
            items={[
              "Send payouts, transfers, and treasury moves through partners",
              "Track progress and outcomes in one place",
              "Built for exceptions, retries, and status drift",
            ]}
            link="Explore Payments →"
          />
          <Card
            label="CASH"
            title="Management across accounts"
            items={[
              "See cash positions across all accounts and entities",
              "Turn balances into reporting ready for workflows",
              "Reconciled cash views that reduce surprises",
            ]}
            link="Explore Cash →"
          />
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          02. The Problem
        </h2>
        <h3 style={customStyles.problemTitle}>
          Payments don't fail at initiation.{" "}
          <span
            className="inline px-1"
            style={{ backgroundColor: "var(--c-accent-highlight)" }}
          >
            They fail in the messy middle.
          </span>
        </h3>
        <p className="text-gray-600 mb-4">
          Built for the full journey: send money, track it, resolve issues,
          reconcile outcomes, and produce finance-ready records.
        </p>

        <div className="grid gap-8 mt-8">
          <Tile
            title="Fewer escalations"
            description="Faster answers when it says successful isn't true at the bank."
          />
          <Tile
            title="Faster resolution"
            description="Clear handling for returns, delays, and exceptions."
          />
          <Tile
            title="Cleaner reporting"
            description="Reconciled activity feeds cash reporting and close."
          />
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          03. How It Works
        </h2>
        <div>
          <StepItem number="01" description="Connect your bank accounts" />
          <StepItem number="02" description="Send payments from one place" />
          <StepItem
            number="03"
            description="Track and resolve issues as they happen"
          />
          <StepItem
            number="04"
            description="Reconcile and report cash and outcomes for finance"
          />
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          04. Novem connects directly to your bank.
        </h2>
        <ul className="list-none mb-4 mt-8">
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            Add new bank partners without rebuilding your product
          </li>
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            Standardize the messy differences between banks
          </li>
          <li className="relative pl-8 mb-2 text-gray-600 text-sm">
            <span className="absolute left-0 text-black">—</span>
            Centralize connectivity so teams stop maintaining one-off
            integrations
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          05. Developers
        </h2>
        <div className="bg-gray-50 border border-gray-300 rounded p-8 font-mono text-xs text-gray-600 overflow-x-auto my-8">
          <span className="block leading-relaxed">
            <span className="text-black">const</span> payment ={" "}
            <span className="text-black">await</span> client.payments.create(
            {"{"}
          </span>
          <span className="block leading-relaxed">
            &nbsp;&nbsp;amount: <span className="text-gray-500">500000</span>,
          </span>
          <span className="block leading-relaxed">
            &nbsp;&nbsp;currency:{" "}
            <span className="text-gray-500">&apos;USD&apos;</span>,
          </span>
          <span className="block leading-relaxed">
            &nbsp;&nbsp;destination:{" "}
            <span className="text-gray-500">&apos;acct_98s7df8&apos;</span>,
          </span>
          <span
            className="block leading-relaxed px-1 text-black"
            style={{ backgroundColor: "var(--c-accent-highlight)" }}
          >
            &nbsp;&nbsp;reconciliation_strategy: &apos;automatic&apos;
          </span>
          <span className="block leading-relaxed">{"});"}</span>
          <span className="block leading-relaxed">
            {"// Returns unified status across any bank partner"}
          </span>
        </div>
        <div className="my-8">
          <h3 className="font-mono text-base font-semibold mb-2">
            Built for scale.
          </h3>
          <ul className="list-none">
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Simple API to send payments
            </li>
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Predictable behavior in production
            </li>
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Dashboard visibility for debugging
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xl mb-4 mt-16 border-b border-gray-300 pb-2">
          06. Finance
        </h2>
        <div className="my-16">
          <h3 className="font-mono text-base font-semibold mb-2">
            Answers, not excuses.
          </h3>
          <ul className="list-none">
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Reconciled activity matched to bank reports
            </li>
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Current cash position plus history
            </li>
            <li className="relative pl-8 mb-2 text-gray-600 text-sm">
              <span className="absolute left-0 text-black">—</span>
              Close-ready evidence of what happened
            </li>
          </ul>
        </div>
      </section>

      <div className="my-24 py-16 border-t border-gray-300 text-center">
        <h1
          className="font-mono leading-tight mb-4"
          style={customStyles.footerCtaTitle}
        >
          Move money at scale_
        </h1>
        <p className="text-gray-600 mb-4">
          Talk to sales to see how payments, reconciliation, and cash management
          fit together.
        </p>
        <div style={customStyles.footerCtaActions}>
          <Button variant="primary" href="#">
            Talk to Sales
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
