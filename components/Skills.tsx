const Skills = () => {
    return (
      <section className="shadow-lg rounded-xl p-8  glow-effect">
        <h2 className="text-4xl font-bold text-[#05fcec] mb-4 border-b pb-2 border-blue-200">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
           {["Figma", "Photoshop", "Html", "Css", "Javascript"].map((skill) => (
             <span
                key={skill}
                className="bg-[#05fcec] text-black text-sm font-medium px-4 py-1 rounded-full"
                >
              {skill}
              </span>
     ))}
</div>
      </section>
    );
  };

  export default Skills;
  