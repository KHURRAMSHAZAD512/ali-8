export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">FinVerse 🌍</h3>
          <p className="text-sm">
            Your global finance companion — track exchange rates, analyze trends, and make smarter financial decisions.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/converter" className="hover:text-yellow-300">Currency Converter</a></li>
            <li><a href="/analytics" className="hover:text-yellow-300">Analytics</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Stay Connected</h4>
          <p className="text-sm mb-3">Follow us on social media for latest finance trends.</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">🐦</a>
            <a href="#" className="hover:text-yellow-400">💼</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FinVerse. All Rights Reserved.
      </div>
    </footer>
  );
}
