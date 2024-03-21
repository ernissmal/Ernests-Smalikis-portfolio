// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProgressBar from './components/ProgressBar'; 
import SmallerHeader from './components/SmallerHeader'; 
import Paragraph from './components/Paragraph'; 
import Button from './components/Button'; 
import Form from './components/Form'; 
import ProjectContainerBox from './components/ProjectContainerBox';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer/Footer';

function App() {
  const sections = [
    {
      id: 'about',
      title: 'About me',
      content: (
        <div className="about-section">
          <SmallerHeader text="Strong foundation for my skills" />
          <Paragraph text="Studied in Valmieras tehnikums as Programming technician and later on continued to seek knowledge through bootcamps, YouTube tutorials, blogs, and Reddit." />
          <SmallerHeader text="Years of Experience" />
          <Paragraph text="Bringing over X years of experience in software development, UI/UX design, and project management." />
          <SmallerHeader text="Skills" />
          <ProgressBar label="UI/UX Design Tools" percentage={80} />
          <ProgressBar label="Software Diagnostics" percentage={75} />
          <ProgressBar label="Server Management" percentage={85} />

          <SmallerHeader text="Programming languages" />
          <ProgressBar label="Python" percentage={90} />
          <ProgressBar label="Swift" percentage={90} />
          <ProgressBar label="Javascript" percentage={90} />
          <ProgressBar label="HTML" percentage={90} />
          <ProgressBar label="CSS" percentage={90} />
          <ProgressBar label="PHP" percentage={90} />
          <ProgressBar label="SQL" percentage={90} />
          <SmallerHeader text="Have a programming project idea? Let's talk!"/>
          <Button text="Get in Touch" onClick={() => console.log("Contact Me clicked")} />
        </div>
      ),
    },
    {
      id: 'portfolio',
      title: 'My work:',
      content: (
        // Generates ProjectContainerBox based on fetched data from database
        <ProjectContainerBox imageSrc="#" title="Project 1" description="THIS IS REPRESENTATION OF PROJECT CONTAINER BOX" />
      ),
    },
    {
      id: 'contacts',
      title: 'Contact me',
      content: (
        <div>
          <SmallerHeader text='Contact me using social media:' />,
          <SocialMedia />,
          <SmallerHeader text="Or just simply leave me a message:" />
          <Form />
        </div>
      )
    },

  ];

  return (
    <div className="App">
      <Header />
      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          header={section.header}
          content={section.content}
        />
      ))},
      <Footer /> {/* This will render the Footer component */},
    </div>
  );
}

export default App;
