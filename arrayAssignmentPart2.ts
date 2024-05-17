// Part 2:

// 1:
type Student = {
  name: string;
  grades: number[];
};

// 2:

let students: Student[] = [
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
function calculateAverageGrade(grades: number[]) {
  return grades.reduce((total, current) => total + current) / grades.length;
}

// 4:
students.forEach((student) => {
  console.log(
    `Name: ${student.name}, Average Grade: ${calculateAverageGrade(
      student.grades
    )}%.`
  );
});
