"use client"
import { useState } from 'react';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills = [
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 75, category: 'backend' },
    { name: 'Java', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'MySql', level: 80, category: 'bd' },
    { name: 'PostgreSQL', level: 70, category: 'bd' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'GitHub', level: 85, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
    { name: 'Jira', level: 65, category: 'tools' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'bd', name: 'Database' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Technical Skills</h2>
          <p className="text-lg text-gray-600">My professional toolkit and expertise</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <span className="text-green-500 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full  rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}