const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "chase",
  "6942012",
  "christensonchase451@gmail.com",
  "chasechri"
);

test("constructor values for engineer object", () => {
  expect(engineer.name).toBe("chase");
  expect(engineer.id).toBe("6942012");
  expect(engineer.email).toBe("christensonchase451@gmail.com");
  expect(engineer.gitHub).toBe("chasechri");
});

test("check Name method", () => {
  expect(engineer.getName()).toBe("chase");
});

test("check getId", () => {
  expect(engineer.getId()).toBe("6942012");
});

test("get email method", () => {
  expect(engineer.getEmail()).toBe("christensonchase451@gmail.com");
});

test("check github username", () => {
  expect(engineer.getGitHub()).toBe("chasechri");
});

test("check role", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
