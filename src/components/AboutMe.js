import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutMe() {
  
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
      };
    
      const handleProject = () => {
        navigate('/project');
      };
      const handleAboutme = () => {
        navigate('/aboutme');
      };
    
      const handleContact = () => {
        navigate('/contact_me');
      };
    

  return (
    <div>
        
        <h1>Aboutme</h1>
        <p>
            Hai!<br></br>
            This is varshini Naguleswaran Hello! an enthusiastic IT undergraduate passionate about exploring new things and pushing the boundaries of technology. My journey in the world of Information Technology has been an exciting adventure of learning, discovery, and innovation.
        </p>
        <h4>Professional Background</h4>
        <p>
        As an IT student, I've immersed myself in various aspects of technology, from software development and network security to data analysis and artificial intelligence. My academic experiences have equipped me with a solid foundation in computer science principles and practical skills in programming languages like Python, Java, and C++.
        </p>
        <h4>Skills and Expertise</h4>
        <ol>
            <li>Programming Languages: Python, Java, C++,</li>
            <li>Web Development: HTML, CSS, JavaScript, React</li>
            <li>Mobile App Development : React-native</li>
            <li>Database Management: SQL, MongoDB</li>
        </ol>
        <footer className="homepage-footer">
        <div className="homepage-links">
          <a href="#" className="homepage-link" onClick={handleHome}>HomePage</a>
          <a href="#" className="homepage-link" onClick={handleProject}>Projects</a>
          <a href="#" className="homepage-link" onClick={handleAboutme}>About me</a>
          <a href="#" className="homepage-link" onClick={handleContact}>Contact me</a>
        </div>
      </footer>
     </div>
    
  );
}

export default AboutMe;

