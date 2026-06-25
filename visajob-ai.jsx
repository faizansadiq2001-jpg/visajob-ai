               ? "#fff" : "#334155", fontSize: 15, fontWeight: 700, cursor: selectedCountry && selectedCategory ? "pointer" : "not-allowed", letterSpacing: "-0.2px" }}>
            {loading ? "â³ Real Jobs Dhundh Raha Hai..." : "ðŸ” Real Jobs Dhundho"}
          </button>

          {error && (
            <div style={{ marginTop: 14, background: "#1a0d0d", border: "1px solid #4a1a1a", borderRadius: 10, padding: "12px 16px", color: "#f87171", fontSize: 13 }}>âš ï¸ {error}</div>
          )}

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "1px solid #1a2235" }}>
            {[["Live", "Real Jobs"], ["6", "Countries"], ["Free", "Hamesha"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#3b82f6" }}>{val}</div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // â”€â”€ DETAIL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (step === "detail" && selectedJob) {
    const job = selectedJob;
    return (
      <div style={{ minHeight: "100vh", background: "#080c17", fontFamily: "'Inter', sans-serif", color: "#e2e8f0" }}>
        <nav style={{ borderBottom: "1px solid #1a2235", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, background: "rgba(8,12,23,0.9)", backdropFilter: "blur(12px)" }}>
          <button onClick={() => setStep("results")} style={{ background: "none", border: "none", color: "#3b82f6", cursor: "pointer", fontSize: 14 }}>â† Wapas</button>
          <div style={{ width: 1, height: 16, background: "#1a2235", margin: "0 4px" }} />
          <span style={{ fontWeight: 800, fontSize: 16 }}>VisaJob <span style={{ color: "#3b82f6" }}>AI</span></span>
        </nav>

        <div style={{ maxWidth: 640, margin: "0 auto", padding: "28px 20px" }}>
          <div style={{ background: "#0d1220", border: "1px solid #1a2235", borderRadius: 16, padding: "24px" }}>
            {/* Company */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 10, flexWrap: "wrap" }}>
              <div>
                <h2 style={{ margin: "0 0 5px", fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>{job.title}</h2>
                <div style={{ color: "#64748b", fontSize: 13 }}>{job.company?.display_name || "Company"} Â· {job.location?.display_name}</div>
              </div>
              <span style={{ background: "#0f2a1a", border: "1px solid #166534", color: "#6ee7b7", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>âœ… Real Job</span>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>ðŸ’° {formatSalary(job)}</span>
              <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>ðŸ• {formatDate(job.created)}</span>
              <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>ðŸ“‹ {job.contract_time || "Full-time"}</span>
            </div>

            {/* Description */}
            {job.description && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Job Description</div>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                  {job.description.length > 500 ? job.description.substring(0, 500) + "..." : job.description}
                </p>
              </div>
            )}

            {/* Visa Info */}
            {visaDetails && (
              <div style={{ background: "#080c17", border: "1px solid #1a2235", borderRadius: 12, padding: "14px", marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", marginBottom: 10 }}>ðŸ›‚ {selectedCountry?.name} Visa Info</div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Visa</div><div style={{ fontSize: 12, color: "#93c5fd" }}>{visaDetails.visa}</div></div>
                  <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Min Salary</div><div style={{ fontSize: 12, color: "#6ee7b7" }}>{visaDetails.minSalary}</div></div>
                  <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Language</div><div style={{ fontSize: 12, color: "#fbbf24" }}>{visaDetails.lang}</div></div>
                </div>
              </div>
            )}

            {/* Apply Button */}
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", width: "100%", padding: "14px", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", borderRadius: 10, color: "#fff", fontSize: 14, fontWeight: 700, textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
              Apply Now â€” Real Company â†—
            </a>
            <div style={{ marginTop: 10, fontSize: 11, color: "#475569", textAlign: "center" }}>Ye real job hai â€” seedha company ki website pe jaoge</div>
          </div>
        </div>
      </div>
    );
  }

  // â”€â”€ RESULTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <div style={{ minHeight: "100vh", background: "#080c17", fontFamily: "'Inter', sans-serif", color: "#e2e8f0" }}>
      <nav style={{ borderBottom: "1px solid #1a2235", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, background: "rgba(8,12,23,0.9)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
        <button onClick={() => { setStep("home"); setJobs([]); }} style={{ background: "none", border: "none", color: "#3b82f6", cursor: "pointer", fontSize: 14 }}>â† Wapas</button>
        <div style={{ width: 1, height: 16, background: "#1a2235", margin: "0 4px" }} />
        <span style={{ fontWeight: 800, fontSize: 16 }}>VisaJob <span style={{ color: "#3b82f6" }}>AI</span></span>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#10b981", background: "#0d1220", border: "1px solid #1a2235", padding: "3px 10px", borderRadius: 20 }}>ðŸŸ¢ Live Jobs</span>
      </nav>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "28px 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
            <span style={{ fontSize: 22 }}>{selectedCountry?.flag}</span>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{selectedCategory?.label} Jobs â€” {selectedCountry?.name}</h2>
          </div>
          <div style={{ color: "#475569", fontSize: 13 }}>
            {jobs.length} real jobs mili hain Â· {totalJobs.toLocaleString()} total available Â· Adzuna se live
          </div>
        </div>

        {/* Visa Banner */}
        {visaDetails && (
          <div style={{ background: "#0d1220", border: "1px solid #1a2235", borderRadius: 12, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Visa</div><div style={{ fontSize: 12, color: "#93c5fd" }}>{visaDetails.visa}</div></div>
            <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Min Salary</div><div style={{ fontSize: 12, color: "#6ee7b7" }}>{visaDetails.minSalary}</div></div>
            <div><div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Language</div><div style={{ fontSize: 12, color: "#fbbf24" }}>{visaDetails.lang}</div></div>
          </div>
        )}

        {/* Job Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {jobs.map((job, i) => (
            <div key={job.id || i} onClick={() => { setSelectedJob(job); setStep("detail"); }}
              style={{ background: "#0d1220", border: "1px solid #1a2235", borderRadius: 14, padding: "18px", cursor: "pointer", transition: "border-color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#3b82f6"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2235"}>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3, lineHeight: 1.3 }}>{job.title}</div>
                  <div style={{ color: "#64748b", fontSize: 12 }}>{job.company?.display_name || "Company"}</div>
                </div>
                <span style={{ background: "#0f2a1a", border: "1px solid #166534", color: "#6ee7b7", padding: "2px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700, whiteSpace: "nowrap" }}>âœ… Real</span>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "2px 10px", borderRadius: 20, fontSize: 11 }}>ðŸ“ {job.location?.display_name}</span>
                <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "2px 10px", borderRadius: 20, fontSize: 11 }}>ðŸ’° {formatSalary(job)}</span>
                <span style={{ background: "#111827", border: "1px solid #1a2235", color: "#64748b", padding: "2px 10px", borderRadius: 20, fontSize: 11 }}>ðŸ• {formatDate(job.created)}</span>
              </div>

              {job.description && (
                <p style={{ color: "#475569", fontSize: 12, lineHeight: 1.6, margin: "0 0 10px" }}>
                  {job.description.substring(0, 120)}...
                </p>
              )}

              <div style={{ color: "#3b82f6", fontSize: 12, fontWeight: 700 }}>Details aur Apply â†’</div>
            </div>
          ))}
        </div>

        <button onClick={() => { setStep("home"); setJobs([]); }}
          style={{ width: "100%", marginTop: 20, padding: "13px", background: "transparent", border: "1.5px solid #1a2235", borderRadius: 10, color: "#64748b", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          â† Naya Search
        </button>
      </div>
    </div>
  );
} 
