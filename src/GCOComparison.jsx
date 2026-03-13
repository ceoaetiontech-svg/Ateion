import React from "react";

const GCOComparison = () => {
  const traditionalItems = [
    "Subject-based",
    "Coaching dependent",
    "One correct answer",
    "Local ranking",
    "Penalizes deviation",
  ];

  const gcoItems = [
    "Scenario-based",
    "Preparation-free",
    "Multiple reasoning paths",
    "Globally normalized",
    "Rewards originality",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Manrope:wght@400;500;600&display=swap');
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: "#f0ece4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1a1a2e", margin: "0 0 8px 0", fontFamily: "'Playfair Display', serif", letterSpacing: "-0.5px" }}>
            What Makes GCO Different
          </h1>
          <p style={{ fontSize: "15px", color: "#666", margin: 0, fontFamily: "'Manrope', sans-serif" }}>
            Traditional Exams vs GCO
          </p>
        </div>

        <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "row", alignItems: "center", maxWidth: "950px", width: "100%", boxShadow: "none", gap: "40px" }}>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#1a1a2e", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
              Traditional
            </h2>
            {traditionalItems.map((item, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 0", borderBottom: index < traditionalItems.length - 1 ? "1px solid #e8e8e8" : "none" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2L10 10M10 2L2 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "15px", color: "#1a1a2e", fontFamily: "'Manrope', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, backgroundColor: "#1a1a2e", borderRadius: "20px", padding: "36px", display: "flex", flexDirection: "column", transform: "rotate(2deg)", boxShadow: "none" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffffff", marginBottom: "28px", fontFamily: "'Playfair Display', serif" }}>
              GCO
            </h2>
            <div style={{ marginBottom: "30px" }}>
              {gcoItems.map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#ffffff", flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "#ffffff", fontFamily: "'Manrope', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", margin: 0, fontFamily: "'Manrope', sans-serif" }}>
              GCO redefines assessment by valuing creativity, adaptability, and global fairness empowering learners to showcase originality beyond traditional boundaries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GCOComparison;