// Part 3:
// 2:
var employees = [
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
function calculateSalary(employee) {
    var salary = employee.salary + employee.hoursWorked * employee.hourlyRate;
    // 4:
    if (employee.hoursWorked > 20) {
        salary *= 1.1;
    }
    return Math.floor(salary);
}
employees.forEach(function (employee) {
    console.log("Name: ".concat(employee.name, ", Salary: ").concat(calculateSalary(employee), "."));
});
