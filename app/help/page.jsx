export default function Page() {
  const topics = [
    {
      title: "Open the app",
      desc: "Launch Samsara AI to access the welcome screen."
    },
    {
      title: "Create an account",
      desc: "Tap Get Started and create your account using email."
    },
    {
      title: "Sign in",
      desc: "Login with your credentials to access the app."
    },
    {
      title: "Go to dashboard",
      desc: "After login you will be redirected to your dashboard."
    },
    {
      title: "Start a new chat",
      desc: "Use the chat input box to start interacting with Samsara AI."
    },
    {
      title: "View previous chats",
      desc: "Access your past conversations from the sidebar."
    },
    {
      title: "Delete a conversation",
      desc: "Remove chats you no longer need."
    },
    {
      title: "Update your profile",
      desc: "Change your name or account details in settings."
    },
    {
      title: "Reset your password",
      desc: "Use the Forgot Password option to recover your account."
    },
    {
      title: "Contact support",
      desc: "Reach out to the Samsara AI team if you need help."
    }
  ]

  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "60px 20px" }}>
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Samsara AI Help
        </h1>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Learn how to use the app.
        </p>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: "10px", overflow: "hidden" }}>
          {topics.map((topic, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                borderBottom: i !== topics.length - 1 ? "1px solid #eee" : "none"
              }}
            >
              <strong>{topic.title}</strong>
              <p style={{ marginTop: "6px", color: "#555" }}>{topic.desc}</p>
            </div>
          ))}
        </div>
        <footer
  style={{
    marginTop: "50px",
    textAlign: "center",
    fontSize: "14px",
    color: "#777"
  }}
>
  Built by{" "}
  <a
    href="https://aswinkrishna.in"
    target="_blank"
    style={{
      color: "#000",
      textDecoration: "none",
      fontWeight: "500"
    }}
  >
    Aswin Krishna
  </a>
</footer>
      </div>
    </main>
  )
}