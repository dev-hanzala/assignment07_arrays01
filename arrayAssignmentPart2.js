// Part 2:
// 2:
var students = [
    {
        name: "Ali",
        grades: [78, 89, 90],
    },
    {
        name: "Adil",
        grades: [75, 23, 67],
    },
    {
        name: "Hanzala",
        grades: [100, 100, 100],
    },
];
// 3:
function calculateAverageGrade(grades) {
    return grades.reduce(function (total, current) { return total + current; }) / grades.length;
}
students.forEach(function (student) {
    console.log("Name: ".concat(student.name, ", Average Grade: ").concat(calculateAverageGrade(student.grades), "%."));
});
