type Student = {
  name: string;
  grade: number;
};

export class GradeSchool {
  private students: Student[] = [];

  constructor() {
    this.students = [];
  }

  roster() : any {
    if(this.students.length === 0) {
      // should return an empty {} if not students exist
      return {};
    } else {
        // need to return students in this format { 2: ['Aimee'] }
        let studentsByGrade = this.students.reduce((acc, student) => {
          if (!acc[student.grade]) {
              acc[student.grade] = [];
          }
          acc[student.grade].push(student.name);
          return acc;
        }, {} as { [key: number]: string[] });
        // Sort the names within each grade
        for (let grade in studentsByGrade) {
          studentsByGrade[grade].sort();
        }
        return studentsByGrade;
    }
  }

  add(name: string, grade: number) : string {
    // check if the student is already in a different grade
    let existingStudentIndex = this.students.findIndex(student => student.name === name && student.grade !== grade);
    if (existingStudentIndex !== -1) {
        // remove the student from the previous grade
        this.students.splice(existingStudentIndex, 1);
    }

    // check if the student is already in the same grade
    if (this.students.some(student => student.name === name && student.grade === grade)) {
        return "Student already exists in the same grade.";
    } else {
        this.students.push({ name, grade });
        return "OK.";
    }
}

  grade(grade: number) : any{
    if (this.students.length === 0) {
      return [];
    } else {
      return this.students
        .filter(student => student.grade === grade)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(student => student.name);
    }
  }
}
