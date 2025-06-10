import { useEffect } from "react";
import logo from "./assets/backupbuddy-logo.png"; // Import the renamed logo

export default function App() {
  useEffect(() => {
    // Google Analytics (replace with your own ID)
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // Replace with your GA ID
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={logo} // Use imported logo here
          alt="BackupBuddy Logo"
          className="mx-auto h-20 mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
          BackupBuddy
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 px-2">
          Your on-demand human companion for walking, commuting, or moving through public spaces.
          Feel safer, never alone.
        </p>

        <div className="space-y-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0zbWuDfXxqza-cUODxd4U_WaEpqjMXCcXcTan86uk6F4Phg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700"
          >
            Request a Buddy
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600 px-4">
          Have questions? Email us at{' '}
          <a
            href="mailto:backupbuddyemail@gmail.com"
            className="text-blue-600"
          >
            backupbuddyemail@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
