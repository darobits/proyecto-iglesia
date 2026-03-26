export default function AdminPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            padding: "3rem",
            background: "rgba(232, 183, 84, 0.08)",
            borderRadius: "12px",
            border: "1px solid rgba(232, 183, 84, 0.3)",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1rem", color: "var(--gold)" }}>🔐</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text-main)" }}>
            Panel de Administración
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-soft)", lineHeight: 1.8 }}>
            Esta área es solo para administradores autorizados.
          </p>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "1.5rem" }}>
            Si eres administrador, por favor inicia sesión con tus credenciales.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem" }}>
              Esta página será implementada con autenticación en futuras actualizaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
