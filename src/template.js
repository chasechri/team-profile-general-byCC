const generateProfs = (profs) => {
  console.log(profs);

  const generateManager = (manager) => {
    return ``;
  };

  const generateEngineer = (engineer) => {
    return ``;
  };

  const generateIntern = (intern) => {
    return ``;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join;
};
