const Intern = require("../lib/Intern");
const intern = new Intern(
  "chase",
  "6942012",
  "christensonchase451@gmail.com",
  "U of M"
);

test("constructor values for intern object", () => {
  expect(intern.name).toBe("chase");
  expect(intern.id).toBe("6942012");
  expect(intern.email).toBe("christensonchase451@gmail.com");
  expect(intern.school).toBe("U of M");
});

test("check Name method", () => {
  expect(intern.getName()).toBe("chase");
});

test("check getId", () => {
  expect(intern.getId()).toBe("6942012");
});

test("get email method", () => {
  expect(intern.getEmail()).toBe("christensonchase451@gmail.com");
});

test("check school", () => {
  expect(intern.getSchool()).toBe("U of M");
});

test("check role", () => {
  expect(intern.getRole()).toBe("Intern");
});
