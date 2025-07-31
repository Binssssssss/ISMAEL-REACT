import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS'];

  return (
    <ul className="skills">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default Skills;
