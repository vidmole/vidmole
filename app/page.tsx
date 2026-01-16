export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>
        🚀 Vidmole
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          opacity: 0.85,
          marginBottom: "32px",
        }}
      >
        Connect instantly with people around the world through live video.
        No sign-up. No limits. Just real conversations.
      </p>

      <button
        style={{
          padding: "14px 28px",
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
          color: "#020617",
        }}
        onClick={() => alert("Next step: Video matching coming soon 🔥")}
      >
        Start Video Chat
      </button>
    </main>
  );
}
