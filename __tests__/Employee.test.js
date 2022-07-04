const Employee = require("../lib/Employee");
const employee = new Employee(
  "chase",
  "6942012",
  "christensonchase451@gmail.com"
);

test("constructor values for employee", () => {
  expect(employee.name).toBe("chase");
  expect(employee.id).toBe("6942012");
  expect(employee.email).toBe("christensonchase451@gmail.com");
});

test("testing name method for emloyee", () => {
  expect(employee.getName()).toBe("chase");
});

test("testing getId method for employee", () => {
  expect(employee.getId()).toBe("6942012");
});

test("testing getEmail method", () => {
  expect(employee.getEmail()).toBe("christensonchase451@gmail.com");
});

test("getRole method,", () => {
  expect(employee.getRole()).toBe("Employee");
});

// test("create employee", () => {
//   const employee = new Employee();
//   expect(typeof employee).toBe("object");
// });

// test("testing name value", () => {
//   const name = "chase";
//   const employee = new Employee(name);
//   expect(employee.name).toBe(name);
// });
