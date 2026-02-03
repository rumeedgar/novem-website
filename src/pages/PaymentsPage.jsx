import React, { useState } from "react";

const ActivityPanel = () => {
  const [activeArtifactTab, setActiveArtifactTab] = useState("Activity");

  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        height: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid var(--c-border)",
          padding: "12px 16px",
          display: "flex",
          gap: "16px",
          background: "#fff",
          flexWrap: "wrap",
        }}
      >
        {["Activity", "Exceptions", "Reconciliation"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveArtifactTab(tab)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              color:
                activeArtifactTab === tab
                  ? "var(--c-text-primary)"
                  : "var(--c-text-secondary)",
              cursor: "pointer",
              textDecoration: activeArtifactTab === tab ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      <div style={{ padding: "16px", flex: 1, overflowY: "auto" }}>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#999",
                fontSize: "0.6rem",
                marginBottom: "4px",
              }}
            >
              Volume (30d)
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem" }}>
              $24,592,100.00
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "#22c55e",
            }}
          >
            +12% vs prev
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "flex-end",
            height: "60px",
            marginBottom: "24px",
            borderBottom: "1px solid #eee",
            paddingBottom: "8px",
          }}
        >
          {[40, 60, 30, 80, 50, 70, 90].map((height, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                background:
                  idx === 6 ? "var(--c-accent-highlight)" : "#eee",
                height: `${height}%`,
              }}
            />
          ))}
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid #EAEAEA",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "#999",
            }}
          >
            <span>TRANSACTION</span>
            <span>STATUS</span>
          </div>
          {[
            { id: "8921", desc: "Stripe Payout", status: "Settled", color: "green" },
            { id: "8922", desc: "Vendor Wire", status: "Processing", color: "yellow" },
            { id: "8923", desc: "Refund #229", status: "Settled", color: "green" },
            { id: "8924", desc: "Batch 004", status: "Queued", color: "gray" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: idx === 3 ? "none" : "1px solid #EAEAEA",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>
                PAY-{item.id} • {item.desc}
              </span>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  flexShrink: 0,
                  background:
                    item.color === "green"
                      ? "#E0F2E9"
                      : item.color === "yellow"
                      ? "#FCF5CE"
                      : "#EEEEEE",
                  color:
                    item.color === "green"
                      ? "#0D5C35"
                      : item.color === "yellow"
                      ? "#6B5C00"
                      : "#666666",
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DashboardPanel = () => {
  const [dashboardTab, setDashboardTab] = useState("All");

  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--c-border)",
          padding: "12px 16px",
          display: "flex",
          background: "#fff",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["All", "Pending", "Failed"].map((tab) => (
            <span
              key={tab}
              onClick={() => setDashboardTab(tab)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                color:
                  dashboardTab === tab
                    ? "var(--c-text-primary)"
                    : "var(--c-text-secondary)",
                cursor: "pointer",
                textDecoration: dashboardTab === tab ? "underline" : "none",
                textUnderlineOffset: "4px",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        <div
          style={{
            width: "80px",
            height: "24px",
            background: "#eee",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ padding: "0", overflowX: "auto" }}>
        <div
          className="hidden md:grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr 1.5fr",
            padding: "12px 20px",
            borderBottom: "1px solid #eee",
            background: "#fcfcfc",
            minWidth: "400px",
          }}
        >
          {["DATE", "DESCRIPTION", "AMOUNT", "RECONCILIATION"].map((header) => (
            <span
              key={header}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#999",
              }}
            >
              {header}
            </span>
          ))}
        </div>
        {[
          { date: "Oct 24", desc: "Uber Technologies", amount: "$42.50", status: "Matched", color: "green" },
          { date: "Oct 24", desc: "AWS Services", amount: "$1,204.00", status: "Matched", color: "green" },
          { date: "Oct 23", desc: "Wire Outbound", amount: "$15,000.00", status: "Review", color: "yellow" },
          { date: "Oct 23", desc: "Stripe Payout", amount: "$8,420.20", status: "Matched", color: "green" },
          { date: "Oct 22", desc: "Refund #9921", amount: "-$50.00", status: "Matched", color: "green" },
        ].map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr_1.5fr]"
            style={{
              padding: "12px 20px",
              borderBottom: idx === 4 ? "none" : "1px solid #f0f0f0",
              alignItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              gap: "8px",
            }}
          >
            <span style={{ color: "#666" }}>{row.date}</span>
            <span className="truncate">{row.desc}</span>
            <span className="hidden md:block">{row.amount}</span>
            <div className="hidden md:block">
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  background: row.color === "green" ? "#E0F2E9" : "#FCF5CE",
                  color: row.color === "green" ? "#0D5C35" : "#6B5C00",
                }}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#999",
            fontSize: "0.6rem",
          }}
        >
          Transaction log with filters, status, and reconciliation state
        </span>
      </div>
    </div>
  );
};

const PaymentsPage = () => {
  return (
    <>
      <header
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center"
        style={{
          padding: "var(--space-xl) 0",
        }}
      >
        <div className="pr-0 lg:pr-8">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85em",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--c-text-primary)",
              marginBottom: "var(--space-xs)",
              display: "block",
            }}
          >
            Product / Payment Hub
          </span>
          <h1
            className="text-2xl md:text-4xl"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "var(--space-sm)",
              letterSpacing: "-0.02em",
              color: "var(--c-text-primary)",
            }}
          >
            A payments hub for teams that move money_
          </h1>
          <p
            className="text-sm md:text-base"
            style={{
              maxWidth: "600px",
              color: "var(--c-text-secondary)",
              marginBottom: "var(--space-sm)",
            }}
          >
            Connect your bank partners, send payments from one place, then track
            outcomes and reconcile to what the bank reports—so teams stop chasing
            &quot;what happened.&quot;
          </p>
          <ul style={{ listStyle: "none", margin: "var(--space-md) 0" }}>
            {[
              "Centralize how you send and track incoming and outgoing payments",
              "Improve reliability with built-in checks, controls, and retries",
              "Track money movements faster with automated reconciliation",
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-sm"
                style={{
                  marginBottom: "var(--space-xs)",
                  paddingLeft: "1.2rem",
                  position: "relative",
                  color: "var(--c-text-secondary)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "var(--c-text-primary)",
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ActivityPanel />
      </header>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          01. Challenges
        </h2>
        <h3
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-sm)",
            lineHeight: 1.2,
            color: "var(--c-text-primary)",
          }}
        >
          Eliminate hidden payment complexity.
        </h3>
        <p
          className="text-sm md:text-base"
          style={{
            color: "var(--c-text-secondary)",
            marginBottom: "var(--space-sm)",
            maxWidth: "600px",
          }}
        >
          Making a payment is easy. Making instant, reliable payments at scale
          isn&apos;t.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8"
        >
          {[
            {
              num: "01",
              title: "Less manual work",
              desc: "Keep payments running without constant manual intervention and spreadsheet wrangling.",
            },
            {
              num: "02",
              title: "Fewer failures",
              desc: "Reduce technical failures and operational escalations with smart routing and retries.",
            },
            {
              num: "03",
              title: "Clear outcomes",
              desc: "Get deterministic states for every transaction that the business can stand behind.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              style={{
                padding: "var(--space-md)",
                border: "1px solid var(--c-border)",
                background: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85em",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--c-text-primary)",
                  marginBottom: "var(--space-xs)",
                  display: "block",
                }}
              >
                {card.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                  color: "var(--c-text-primary)",
                }}
              >
                {card.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          02. Dashboard
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          <div className="pr-0 lg:pr-8">
            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                marginBottom: "var(--space-sm)",
                lineHeight: 1.2,
                color: "var(--c-text-primary)",
              }}
            >
              A dashboard to run payment operations.
            </h3>
            <p
              className="text-sm md:text-base"
              style={{
                color: "var(--c-text-secondary)",
                marginBottom: "var(--space-sm)",
                maxWidth: "600px",
              }}
            >
              See every movement, its status, and whether it matches what the
              bank reports—so the team resolves issues instead of hunting for
              updates.
            </p>
            <ul style={{ listStyle: "none", margin: "var(--space-md) 0" }}>
              {[
                "One activity log across accounts and partners",
                "Clear status for what's pending vs settled",
                "Reconciliation state: matched, unlinked, needs review",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm"
                  style={{
                    marginBottom: "var(--space-xs)",
                    paddingLeft: "1.2rem",
                    position: "relative",
                    color: "var(--c-text-secondary)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--c-text-primary)",
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <DashboardPanel />
        </div>
      </section>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          03. How It Works
        </h2>
        <h3
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-sm)",
            lineHeight: 1.2,
            color: "var(--c-text-primary)",
          }}
        >
          Connect. Build. Run.
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8"
        >
          {[
            {
              title: "Connect your banks",
              desc: "Connect the banks you already use so instructions and updates land in a consistent format.",
            },
            {
              title: "Build payment flows",
              desc: "Embed initiation and controls into your product with one integration pattern.",
            },
            {
              title: "Run payments at scale",
              desc: "Track what's pending, settled, failed, or returned—and reconcile outcomes to what posted.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              style={{ position: "relative", paddingTop: "var(--space-md)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "var(--c-text-primary)",
                  borderBottom: "2px solid var(--c-accent-highlight)",
                  paddingBottom: "4px",
                  fontWeight: "bold",
                }}
              >
                0{idx + 1}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                  color: "var(--c-text-primary)",
                }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          04. Platform
        </h2>
        <h3
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-sm)",
            lineHeight: 1.2,
            color: "var(--c-text-primary)",
          }}
        >
          Rely on a comprehensive payments hub.
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8"
        >
          {[
            {
              title: "Payment Processing",
              items: [
                "Centralize incoming and outgoing payments",
                "Checks before sending",
                "Controls and retries",
              ],
              icon: "arrow",
            },
            {
              title: "Liquidity Management",
              items: [
                "Move money between accounts with visibility",
                "Multi-entity and multi-currency support",
                "Rule-based moves",
              ],
              icon: "chart",
            },
            {
              title: "Reconciliations",
              items: [
                "Automated reconciliation between instructions and settlement",
                "Support one-to-one and batched matching",
                "Review workflow for exceptions",
              ],
              icon: "connect",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: "var(--space-md)",
                border: "1px solid var(--c-border)",
                background: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "80px",
                  background: "#FAFAFA",
                  border: "1px solid var(--c-border)",
                  marginBottom: "var(--space-sm)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {feature.icon === "arrow" && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "40px",
                        height: "2px",
                        background: "#ccc",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(10px, -50%) rotate(45deg)",
                        width: "10px",
                        height: "2px",
                        background: "#ccc",
                        marginTop: "-3px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(10px, -50%) rotate(-45deg)",
                        width: "10px",
                        height: "2px",
                        background: "#ccc",
                        marginTop: "3px",
                      }}
                    />
                  </>
                )}
                {feature.icon === "chart" && (
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "flex-end",
                      height: "100%",
                      justifyContent: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    {[20, 30, 25, 40].map((height, i) => (
                      <div
                        key={i}
                        style={{
                          width: "10px",
                          height: `${height}px`,
                          background:
                            i === 2 ? "var(--c-accent-highlight)" : "#eee",
                        }}
                      />
                    ))}
                  </div>
                )}
                {feature.icon === "connect" && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: "30px",
                        left: "30px",
                        width: "20px",
                        height: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "30px",
                        right: "30px",
                        width: "20px",
                        height: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "40px",
                        left: "55px",
                        width: "30px",
                        height: "1px",
                        background: "var(--c-accent-highlight)",
                      }}
                    />
                  </>
                )}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                  color: "var(--c-text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <ul style={{ listStyle: "none", margin: "8px 0" }}>
                {feature.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm"
                    style={{
                      marginBottom: "var(--space-xs)",
                      paddingLeft: "1.2rem",
                      position: "relative",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--c-text-primary)",
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          05. Integrations
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          <div>
            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                marginBottom: "var(--space-sm)",
                lineHeight: 1.2,
                color: "var(--c-text-primary)",
              }}
            >
              Explore a growing network of direct bank integrations.
            </h3>
            <p
              className="text-sm md:text-base"
              style={{
                color: "var(--c-text-secondary)",
                marginBottom: "var(--space-sm)",
                maxWidth: "600px",
              }}
            >
              Keep your bank relationships. Expand coverage without rebuilding
              your product.
            </p>
            <ul style={{ listStyle: "none", margin: "var(--space-md) 0" }}>
              {[
                "Add banks and accounts without rewrites",
                "Standardize differences that cause breakage",
                "One place for visibility and controls",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm"
                  style={{
                    marginBottom: "var(--space-xs)",
                    paddingLeft: "1.2rem",
                    position: "relative",
                    color: "var(--c-text-secondary)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--c-text-primary)",
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "#FAFAFA",
              border: "1px solid var(--c-border)",
              padding: "var(--space-md)",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {["CHASE", "BOA", "SVB", "WELLS", "CITI", "AMEX", "PNC", "HSBC", "GOLDMAN"].map(
              (bank) => (
                <span
                  key={bank}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75em",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--c-text-primary)",
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    background: "white",
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >
                  {bank}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section>
        <h2
          className="text-lg md:text-xl mt-16 md:mt-24"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-lg)",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--c-text-primary)",
          }}
        >
          06. Use Cases
        </h2>
        <h3
          className="text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            marginBottom: "var(--space-sm)",
            lineHeight: 1.2,
            color: "var(--c-text-primary)",
          }}
        >
          Built for payment flows that break at scale.
        </h3>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8"
        >
          {[
            {
              title: "Payouts at volume",
              desc: "Send, track, and resolve exceptions fast for high volume disbursements.",
            },
            {
              title: "Treasury moves",
              desc: "Move funds between accounts and automatically reconcile what posted.",
            },
            {
              title: "Multi-bank ops",
              desc: "Centralize activity across all your bank partners in one view.",
            },
            {
              title: "Reconciliation",
              desc: "Export clean, matched records for faster month-end reporting.",
            },
          ].map((useCase, idx) => (
            <div
              key={idx}
              style={{
                padding: "var(--space-md)",
                background: "#FAFAFA",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                  color: "var(--c-text-primary)",
                }}
              >
                {useCase.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-center md:text-left"
        style={{
          padding: "var(--space-xl) 0 var(--space-md)",
          borderTop: "1px solid var(--c-border)",
          marginTop: "var(--space-xl)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--c-text-secondary)",
        }}
      >
        <div>© 2026 Novem</div>
        <div>V.1.0.4 BUILD_STABLE</div>
        <div>TERMS / PRIVACY / API_STATUS</div>
      </footer>
    </>
  );
};

export default PaymentsPage;
