export default function Maintenance() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚧 Feature Under Maintenance</h1>
        <p style={styles.text}>
          This section is currently being developed.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "clamp(24px, 4vw, 36px)",
    marginBottom: "10px",
  },
  text: {
    fontSize: "clamp(16px, 2.5vw, 18px)",
    color: "#555",
  },
};