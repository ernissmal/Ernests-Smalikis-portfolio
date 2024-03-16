// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProgressBar from './components/ProgressBar'; // Import ProgressBar component
import SmallerHeader from './components/SmallerHeader'; // Import SmallerHeader component
import Paragraph from './components/Paragraph'; // Import Paragraph component
import Image from './components/Image'; // Import Image component
import File from './components/File'; // Import File component
import Button from './components/Button'; // Import Button component
import Form from './components/Form'; // Import Form component
import ProjectContainerBox from './components/ProjectContainerBox'; // Import ProjectContainerBox component

function App() {
  const sections = [
    {
      id: 'about',
      title: 'About',
      header: <SmallerHeader />,
      content: (
        <>
          <Paragraph text="This is a paragraph about me." />
          <ProgressBar label="Skill 1" percentage={80} />
          <ProgressBar label="Skill 2" percentage={60} />
          <Image src="path_to_image" alt="Description" />
        </>
      ),
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      content: (
        <>
          <ProjectContainerBox project={project1} />
          <ProjectContainerBox project={project2} />
        </>
      ),
    },
    {
      id: 'contacts',
      title: 'Contacts',
      content: <Form />,
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
      ))}
    </div>
  );
}

export default App;
