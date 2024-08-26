import React from "react";
import "./cardStyle.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function DevCard() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/logo512.png" alt="React JS" />;
}

function Data() {
  return (
    <div className="data">
      <Intro />
      <SkillList />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Amy Ramadhan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        libero corrupti ea voluptate iure a commodi nobis eaque qui? Sint illo
        fuga aut rerum veritatis soluta quibusdam numquam nostrum harum?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default DevCard;
