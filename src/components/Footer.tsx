export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-white">Basalt</span>
          <a
            href="https://basalt-foundation.github.io/basalt-docs/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Docs
          </a>
          <a
            href="https://testnet.basalt.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Testnet
          </a>
          <a
            href="https://github.com/basalt-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Basalt Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
