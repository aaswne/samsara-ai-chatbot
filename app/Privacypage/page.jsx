export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 width-50%">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: March 24, 2026
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Welcome to Samsara AI. This Privacy Policy explains how we collect,
            use, and protect your information when you use the Samsara AI web
            application.
          </p>
        </div>

        <div className="space-y-4">
          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">About Samsara AI</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Samsara AI is a web application that lets users interact with an
                AI assistant in a minimal chat interface. It is built to explore
                conversational AI using modern web technologies.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Information We Collect</h2>

              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-medium">Account Information</h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    When you sign in, we may collect limited account information
                    such as your email address and authentication identifiers.
                    For testing and project purposes, dummy email addresses may
                    be used where allowed.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Chat Data</h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    Chat messages may be stored locally on your device for app
                    functionality. When you use AI features, your messages may
                    be transmitted to third-party AI providers, including
                    Gemini, to generate responses.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Usage Data</h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    We may collect limited technical information such as browser
                    type, device type, interaction data, and performance
                    metrics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Local Storage</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Some chat history and session-related data may be saved in your
                browser or device local storage so the application can function
                properly.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">
                How We Use Your Information
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                We use information to provide AI chat functionality,
                authenticate users securely, improve application performance,
                maintain platform security, and enhance user experience. We do
                not sell or rent your personal information.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Third-Party Services</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Samsara AI may use third-party services such as Firebase
                Authentication, Gemini AI, and Vercel. When you use AI-powered
                features, submitted messages may be processed by those services
                to generate responses.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Data Security</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                We take reasonable measures to protect user information using
                modern security practices. However, no method of storage or
                transmission is completely secure.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Testing Disclaimer</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Samsara AI may be used for testing or educational purposes.
                Please avoid entering sensitive personal, financial, medical, or
                confidential information into the chat.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Children&apos;s Privacy</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Samsara AI is not intended for users under 13.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 px-6 py-5">
            <div className="max-w-2xl">
              <h2 className="text-lg font-semibold">Contact</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Developer: Aswin Krishna
              </p>
              <p className="text-sm leading-7 text-gray-600">
                Email: your-email@example.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}