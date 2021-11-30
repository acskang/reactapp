import React from 'react';
import "./layout-holygrail.css"

const LayoutHolyGrail = () => {
  return (
    <div className="layout">
      <header className="flex-header">
        Header
      </header>
      <main className="flex-main">
        <nav className="flex-nav">
          Side Nav
        </nav>
        <article className="flex-article">
          Main Content
        </article>
        <aside className="flex-aside">
          Side Bar
        </aside>
      </main>
      <footer className="flex-footer">
        Footer
      </footer>
    </div>
  );
};

export default LayoutHolyGrail;