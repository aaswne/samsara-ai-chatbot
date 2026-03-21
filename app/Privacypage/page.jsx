export default function PrivacyPolicy() {
  return (
    <main className="w-full flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full space-y-8">

        <div>
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mt-2">
            Last Updated: March 14, 2026
          </p>
        </div>

        <p>
          Welcome to Samsara AI. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your information when
          you use the Samsara AI web application.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">About Samsara AI</h2>
          <p>
            Samsara AI is a web application that allows users to interact with an
            AI assistant in a responsive and minimal chat interface. The
            application is designed to explore how conversational AI systems can
            be implemented using modern web technologies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Information We Collect</h2>

          <div>
            <h3 className="font-medium">Account Information</h3>
            <p>
              When you sign in using Firebase Authentication, we may collect
              your name, email address, and authentication identifiers.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Chat Data</h3>
            <p>
              Messages you send may be processed by AI services to generate
              responses.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Usage Data</h3>
            <p>We may collect technical information such as:</p>
            <ul className="list-disc list-inside mt-1">
              <li>Browser type</li>
              <li>Device type</li>
              <li>Interaction data</li>
              <li>Application performance metrics</li>
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc list-inside">
            <li>Provide AI chat functionality</li>
            <li>Authenticate users securely</li>
            <li>Improve application performance</li>
            <li>Maintain platform security</li>
            <li>Enhance user experience</li>
          </ul>
          <p>We do not sell or rent your personal information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Third-Party Services</h2>
          <p>Samsara AI uses Firebase Authentication, Gemini AI, and Vercel.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p>
            We take reasonable measures to protect user information using modern
            security practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Children's Privacy</h2>
          <p>Samsara AI is not intended for users under 13.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Developer: Aswin Krishna</p>
          <p>Email: your-email@example.com</p>
        </section>

      </div>
    </main>
  );
}
