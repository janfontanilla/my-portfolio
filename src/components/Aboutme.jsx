//Aboutme.jsx, Jan Fontanilla, 301380907, 2025-01-29
import myImage from '../assets/images/image.png';
import resumePDF from '../assets/JanRafaelFontanilla_Resume.pdf'; 

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={myImage} alt="Myself" width="150" height="auto" />
      <h3>Jan Rafael Fontanilla</h3>
      <p>Junior Software Developer with a strong foundation in full-stack development, AI, and database management, currently pursuing an Advanced Diploma in Software Engineering Technology at Centennial College. With a 4.11/4.5 GPA, I have practical experience in developing AI-driven applications, user interfaces, and complex databases. I am passionate about leveraging technology to solve real-world problems and continually expanding my skill set.</p>
      <a href={resumePDF} download>Download My Resume</a>
    </div>
  );
};

export default AboutMe;
