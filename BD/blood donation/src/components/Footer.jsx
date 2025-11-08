import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ImpactLife. All Rights Reserved.</p>
      <ul className="footer-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
        <li><a href="/helpdesk">HelpDesk</a></li>
      </ul>
    </footer>
  );
}
