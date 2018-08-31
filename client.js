$(document).ready(onReady);

const arrayEmployeeInfo = [];

// constructor of new employee info
class Employee{
  constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.first = firstName;
    this.last = lastName;
    this.id = idNumber;
    this.title = jobTitle;
    this.salary = annualSalary;
  }
}

// onReady function
// click of submit button
function onReady() {
  $('#submitButton').on('click', addEmployeeInfo);
}

// creating a new employee & pushing to the array
function newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  arrayEmployeeInfo.push(new Employee(firstName, lastName, idNumber, jobTitle, annualSalary));
}

// collect form info
// add row
function addEmployeeInfo(){
  
}

// dumby data
// newEmployee('Hailee', 'Miu', 389493, 'Developer', 60000)