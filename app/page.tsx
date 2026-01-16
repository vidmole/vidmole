export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        🚀 Vidmole is Live
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "600px" }}>
        Your Next.js app is running successfully on Vercel.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 28px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#38bdf8",
          color: "#020617",
          fontWeight: "bold",
        }}
      >
        Start Video Experience
      </button>
    </main>
  );
}
