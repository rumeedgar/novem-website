import React from "react";
import { ArtifactPanel, MiniArtifact } from "../components/cash";

const CashPage = () => {
  return (
    <>
      <header
        style={{
          padding: "var(--space-xl) 0",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "var(--space-xl)",
          alignItems: "start",
        }}
      >
        <div style={{ paddingRight: "var(--space-md)" }}>
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
            Product / Cash
          </span>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              color: "var(--c-text-primary)",
              fontSize: "2.5rem",
              lineHeight: 1.1,
              marginBottom: "var(--space-sm)",
              letterSpacing: "-0.02em",
            }}
          >
            All your bank accounts in one place_
          </h1>
          <p
            style={{
              color: "var(--c-text-secondary)",
              fontSize: "1.1rem",
              marginBottom: "var(--space-sm)",
              maxWidth: "600px",
            }}
          >
            Centralize accounts, track balances, move funds, and reconcile
            automatically—without juggling portals and spreadsheets.
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "var(--space-md) 0",
            }}
          >
            {[
              "Real-time cash position across accounts and entities",
              "Less manual work for finance",
              "Faster close with reconciled activity",
            ].map((item, idx) => (
              <li
                key={idx}
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

        <ArtifactPanel />
      </header>

      <section>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            color: "var(--c-text-primary)",
            fontSize: "1.25rem",
            marginBottom: "var(--space-lg)",
            marginTop: "120px",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          01. Overview
        </h2>
        <div style={{ marginBottom: "var(--space-md)" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "var(--space-sm)",
              textTransform: "none",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            One platform to manage every bank account your business uses.
          </h3>
          <p style={{ maxWidth: "700px", color: "var(--c-text-secondary)" }}>
            Forget tokens, portals, and scattered data. Track balances, move
            funds, and reconcile from a single workspace.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-lg)",
            marginTop: "var(--space-md)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85em",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--c-text-secondary)",
                marginBottom: "var(--space-xs)",
                display: "block",
              }}
            >
              Before — Fragmented operations
            </span>
            <ul style={{ listStyle: "none", marginTop: "var(--space-sm)" }}>
              {[
                "Switching between bank portals",
                "Manual reconciliation",
                "Errors from disconnected systems",
                "No real-time visibility",
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "var(--space-xs)",
                    paddingLeft: "1.5rem",
                    position: "relative",
                    color: "var(--c-text-secondary)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#999",
                    }}
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--c-border)",
              paddingLeft: "var(--space-md)",
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
              With Cash — Streamlined operations
            </span>
            <ul style={{ listStyle: "none", marginTop: "var(--space-sm)" }}>
              {[
                "Real-time balances in one view",
                "Initiate one-time or bulk transfers",
                "Automatic reconciliation and clean reporting",
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "var(--space-xs)",
                    paddingLeft: "1.5rem",
                    position: "relative",
                    color: "var(--c-text-secondary)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--c-text-primary)",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-md)" }}>
          <a
            href="#capabilities"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85em",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--c-text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid currentColor",
            }}
          >
            Explore Cash →
          </a>
        </div>
      </section>

      <section id="capabilities">
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            color: "var(--c-text-primary)",
            fontSize: "1.25rem",
            marginBottom: "var(--space-lg)",
            marginTop: "120px",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          02. Capabilities
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-md)",
          }}
        >
          <div
            style={{
              border: "1px solid var(--c-border)",
              padding: "var(--space-md)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <MiniArtifact type="bars" />
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                color: "var(--c-text-primary)",
                fontSize: "1rem",
                textTransform: "uppercase",
                marginBottom: "var(--space-sm)",
              }}
            >
              See cash positions
            </h3>
            <p style={{ color: "var(--c-text-secondary)" }}>
              View balances across every account and entity—current and
              historical.
            </p>
          </div>

          <div
            style={{
              border: "1px solid var(--c-border)",
              padding: "var(--space-md)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <MiniArtifact type="transfer" />
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                color: "var(--c-text-primary)",
                fontSize: "1rem",
                textTransform: "uppercase",
                marginBottom: "var(--space-sm)",
              }}
            >
              Move funds
            </h3>
            <p style={{ color: "var(--c-text-secondary)" }}>
              Move money between accounts from one place (single or bulk).
            </p>
          </div>

          <div
            style={{
              border: "1px solid var(--c-border)",
              padding: "var(--space-md)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <MiniArtifact type="reconcile" />
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 400,
                color: "var(--c-text-primary)",
                fontSize: "1rem",
                textTransform: "uppercase",
                marginBottom: "var(--space-sm)",
              }}
            >
              Reconcile automatically
            </h3>
            <p style={{ color: "var(--c-text-secondary)" }}>
              Match activity to what the bank reports so reporting reflects
              reality.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            color: "var(--c-text-primary)",
            fontSize: "1.25rem",
            marginBottom: "var(--space-lg)",
            marginTop: "120px",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          03. How it Works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-md)",
            counterReset: "steps",
          }}
        >
          {[
            {
              title: "Connect",
              desc: "Connect bank accounts securely via API or credentials.",
            },
            {
              title: "Sync",
              desc: "Pull balances and activity automatically.",
            },
            {
              title: "Transact",
              desc: "Move funds when needed directly from the dashboard.",
            },
            {
              title: "Report",
              desc: "Reconcile and export reports to your ERP.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                paddingTop: "var(--space-md)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "var(--c-text-primary)",
                  borderBottom: "2px solid var(--c-accent-highlight)",
                  paddingBottom: "4px",
                }}
              >
                0{idx + 1}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 400,
                  color: "var(--c-text-primary)",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "var(--c-text-secondary)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            color: "var(--c-text-primary)",
            fontSize: "1.25rem",
            marginBottom: "var(--space-lg)",
            marginTop: "120px",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          04. Integrations
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "var(--space-lg)",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "var(--space-sm)",
                textTransform: "none",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              Connect once. Keep adding banks without rewrites.
            </h3>
            <ul style={{ listStyle: "none", margin: "var(--space-md) 0" }}>
              {[
                "Add accounts across banks and entities",
                "Standardize differences between banks",
                "Centralize access for finance and ops",
              ].map((item, idx) => (
                <li
                  key={idx}
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
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: "var(--radius-pill)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: "transparent",
                color: "var(--c-text-primary)",
                border: "1px solid var(--c-border)",
                marginTop: "var(--space-sm)",
              }}
            >
              View bank coverage
            </a>
          </div>

          <div
            style={{
              background: "#FAFAFA",
              border: "1px solid var(--c-border)",
              padding: "var(--space-md)",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {["CHASE", "BOA", "SVB", "WELLS", "CITI", "AMEX"].map(
              (bank, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85em",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--c-text-primary)",
                    border: "1px solid #ddd",
                    padding: "4px 8px",
                    background: "white",
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
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 400,
            color: "var(--c-text-primary)",
            fontSize: "1.25rem",
            marginBottom: "var(--space-lg)",
            marginTop: "120px",
            borderBottom: "1px solid var(--c-border)",
            paddingBottom: "var(--space-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          05. Outcomes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-lg)",
            alignItems: "start",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "var(--space-sm)",
                textTransform: "none",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              Close with confidence.
            </h3>
            <p style={{ color: "var(--c-text-secondary)" }}>
              Stop chasing discrepancies at month-end. Let automation handle the
              matching.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: "none", margin: "var(--space-md) 0" }}>
              {[
                "Reconciled activity tied to bank-reported records",
                "Less spreadsheet work and fewer surprises",
                "Clear evidence trail for review",
              ].map((item, idx) => (
                <li
                  key={idx}
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
        </div>
      </section>

      <footer
        style={{
          padding: "var(--space-xl) 0 var(--space-md)",
          borderTop: "1px solid var(--c-border)",
          marginTop: "var(--space-xl)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          display: "flex",
          justifyContent: "space-between",
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

export default CashPage;
