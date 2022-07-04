const Manager = require("../lib/Manager");
const manager = new Manager(
  "chase",
  "6942012",
  "christensonchase451@gmail.com",
  "123"
);

test("constructor values for manager object", () => {
  expect(manager.name).toBe("chase");
  expect(manager.id).toBe("6942012");
  expect(manager.email).toBe("christensonchase451@gmail.com");
  expect(manager.officeNumber).toBe("123");
});

test("check Name method", () => {
  expect(manager.getName()).toBe("chase");
});

test("check getId", () => {
  expect(manager.getId()).toBe("6942012");
});

test("get email method", () => {
  expect(manager.getEmail()).toBe("christensonchase451@gmail.com");
});

test("check office number", () => {
  expect(manager.getOfficeNumber()).toBe("123");
});

test("check role", () => {
  expect(manager.getRole()).toBe("Manager");
});
