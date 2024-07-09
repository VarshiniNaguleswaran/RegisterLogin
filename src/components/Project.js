import React from 'react';
import { useNavigate } from 'react-router-dom';

function Project() {
  
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
        <h1>project showcase</h1>
        <div class="container">
        <div class="box box1">
          <h1>Child growth Indicator</h1>
          <p>It is a web application that show the baby's health recode</p>
          <br></br>
          <p>we are normaly keep harcopy so we create the softcopy</p>
          <br></br>
          <h4>Languages </h4>
          <p>Backend : JavaScript</p>
          <p>Frontend : reactJs</p>
          <p>Database : MySql</p>
        </div>

        <div class="box box2">
          <h1>Image based Search App</h1>
            <p>It is a web application that we can search related images</p>
            <br></br>
            <h4>Languages </h4>
            <p>Backend : JavaScript, Python</p>
            <p>Frontend : reactJs</p>
            <p>Api : Tineye</p>
        </div>
        <div class="box box3"></div>
    </div>

        <div className='gallery'>

            <div className='div1'>
                
            </div>

            <div className='div1'>
            
            </div>
            <div className='div1'>hai</div>
          </div>
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

export default Project;

