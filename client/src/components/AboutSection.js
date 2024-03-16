import React from 'react';

function AboutSection() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="content">
        <h3>Fetches project count from database and displays it as &lt;number&gt; projects participated in</h3>
        <p className="hoverable">Participated in various projects, starting from UI/UX design, and ending with developing full-stack mobile, web, desktop apps for various purposes.</p>

        <h3>Counts years from 2020 and displays it as '&lt;year&gt; years of experience'</h3>
        <p className="hoverable">Studied in Valmieras tehnikums as Programming technician and later on continued to seek knowledge in boot camps, YouTube tutorials, blogs, and Reddit.</p>

        <h3>My skillset</h3>
        <ul>
          <li>UI/UX design tools</li>
          <li>Hardware and software diagnostics and repairs</li>
          <li>Server management</li>
          <li>Research and development</li>
          <li>Virtualization</li>
          <li>Scaling and deployment</li>
          <li id="languages">Programming languages:
            <ul>
              <li>Python</li>
              <li>Php</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Swift</li>
            </ul>
          </li>
        </ul>

        <h3>More about me</h3>
        <p className="hoverable">Text I will write about myself</p>
      </div>
      <button>Get in touch</button>
    </div>
  );
}

export default AboutSection;
