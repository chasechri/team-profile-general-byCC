const generateProfiles = (profiles) => {
  const html = [];
  const generateManager = (manager) => {
    let managerHtml = ` 
      <div>
          <h2>${manager.name}</h2>
          <h3>Manager</h3>
         <ul>
          <li>ID: ${manager.id}</li>
          <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
          <li>Office Number: ${manager.officeNumber}</li>
          </ul>
      </div>
      `;
    html.push(managerHtml);
  };
  const generateEngineer = (engineer) => {
    let engineerHtml = ` 
      <div>
          <h2>${engineer.name}</h2>
          <h3>Engineer</h3>
         <ul>
          <li>ID: ${engineer.id}</li>
          <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
          <li>Github Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
          </ul>
      </div>
      `;
    html.push(engineerHtml);
  };
  const generateIntern = (intern) => {
    let internHtml = ` 
      <div>
          <h2>${intern.name}</h2>
          <h3>Intern</h3>
         <ul>
          <li>ID: ${intern.id}</li>
          <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
          <li>School: ${intern.school}</li>
          </ul>
      </div>
      `;
    html.push(internHtml);
  };

  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].getRole() === "Manager") {
      generateManager(profiles[i]);
    }
    if (profiles[i].getRole() === "Engineer") {
      generateEngineer(profiles[i]);
    }
    if (profiles[i].getRole() === "Intern") {
      generateIntern(profiles[i]);
    }
  }

  return html.join("");
};

module.exports = (profiles) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../dist/styles.css" />
  <title>Team Profile Generator</title>
</head>
<body>
  <header>
  <h1> Team </h1>
  </header>
  <main> ${generateProfiles(profiles)} </main>
   
</body>
</html>
  `;
};
