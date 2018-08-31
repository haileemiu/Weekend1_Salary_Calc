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

// creating a new employee & pushing to the array
function newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  arrayEmployeeInfo.push(new Employee(firstName, lastName, idNumber, jobTitle, annualSalary));
}

// onReady function
// click of submit button
function onReady() {
  $('#submitButton').on('click', addEmployeeInfo);
}

// collect form info
function addEmployeeInfo(){
  //declaring variables to use in append
  let first = $('#first').val();
  let last = $('#last').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let salary = $('#salary').val();

  // add a row
  $('#employeeTableBody').append(`
  <tr>
    <td>` + first + `</td>
    <td>` + last + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td>` + salary + `</td>
  </tr>`);

  $('#first').val('');
  $('#last').val('');
  $('#id').val('');
  $('#title').val('');
  $('#salary').val('');
}

// dumby data
// newEmployee('Hailee', 'Miu', 389493, 'Developer', 60000)