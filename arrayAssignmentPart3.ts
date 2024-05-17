// Part 3:

// 1:
type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};

// 2:
let employees: Employee[] = [
  {
    name: "Imran",
    hoursWorked: 10,
    hourlyRate: 30,
    salary: 100,
  },
  {
    name: "Irtiza",
    hoursWorked: 10,
    hourlyRate: 40,
    salary: 150,
  },
  {
    name: "Ibrahim",
    hoursWorked: 25,
    hourlyRate: 50,
    salary: 250,
  },
];

// 3:
function calculateSalary(employee: Employee) {
  let salary = employee.salary + employee.hoursWorked * employee.hourlyRate;

  // 4:
  if (employee.hoursWorked > 20) {
    salary *= 1.1;
  }

  return Math.floor(salary);
}

employees.forEach((employee) => {
  console.log(`Name: ${employee.name}, Salary: ${calculateSalary(employee)}.`);
});
