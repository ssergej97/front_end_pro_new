"use strict";

class Student {
  name = null;
  surname = null;
  birthAge = null;
  scores = null;
  presence = null;

  constructor(name, surname, birthAge, scores) {
    this.name = name;
    this.surname = surname;
    this.birthAge = birthAge;
    this.scores = scores;
    this.presence = [];
  }

  studentAge() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - this.birthAge;
  }
  averageScore() {
    const sumScores = this.scores.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return Math.round(sumScores / this.scores.length);
  }
  present() {
    if (this.presence.length > 24)
      return console.log("Number of presence is max");
    else {
      this.presence.push(true);
    }
  }
  absent() {
    if (this.presence.length > 24)
      return console.log("Number of presence is max");
    else {
      this.presence.push(false);
    }
  }
  summary() {
    const numOfPresence = this.presence.filter((item) => item === true);
    const averagePresence = numOfPresence.length / this.presence.length;
    console.log(`Average presence: ${averagePresence}`);
    if (this.averageScore() > 90 && averagePresence > 0.9) return "Well done";
    else if (this.averageScore() > 90 && averagePresence < 0.9) return "Good";
    else if (this.averageScore() < 90 && averagePresence > 0.9) return "Good";
    else if (this.averageScore() < 90 && averagePresence < 0.9)
      return "Radish!";
  }
}

const newStudent = new Student("Sergey", "Subota", 1997, [10, 50]);
console.log(newStudent);
const studentAge = newStudent.studentAge();
console.log(`Age: ${studentAge}`);
const averageScoreOfStudent = newStudent.averageScore();
console.log(`Average score: ${averageScoreOfStudent}`);
newStudent.absent();
newStudent.absent();
newStudent.absent();
newStudent.absent();
newStudent.present();
newStudent.present();
newStudent.present();
newStudent.present();
const result = newStudent.summary();
console.log(`Summary: ${result}`);
