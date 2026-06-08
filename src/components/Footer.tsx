/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border-custom py-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-dim">
      <span>© 2026 Reveza Technologies · All rights reserved</span>
      <div className="flex items-center gap-6">
        <span className="font-sans font-light text-text-dim">Engineered with intelligence</span>
        <a href="#top" className="text-text-dim hover:text-text-muted transition-colors">
          Bengaluru · Global
        </a>
      </div>
    </footer>
  );
}
