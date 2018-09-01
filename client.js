$(document).ready(onReady);

const arrayEmployeeInfo = [
  {
    first: 'Hailee',
    last: 'Ortiz',
    id: 380,
    title: 'Developer',
    salary: 60000
  }, 
  {
    first: 'Nikko',
    last: 'Miu',
    id: 570,
    title: 'Engineer',
    salary: 80000
  }
];

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


function addEmployeeInfo() {
  //declaring variables to use in append
  let first = $('#first').val();
  let last = $('#last').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let salary = $('#salary').val();

  arrayEmployeeInfo.push(new Employee(first, last, id, title, salary));

  // add a row
  $('#employeeTableBody').append(`
  <tr>
    <td>` + first + `</td>
    <td>` + last + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td>` + salary + `</td>
    <td><button class="`+ id +`">Delete</button></td>
  </tr>`);
//not sure about this class id thing//

  // clear inputs
  $('#first').val('');
  $('#last').val('');
  $('#id').val('');
  $('#title').val('');
  $('#salary').val('');

  // collect form info
  //console.log($('.'+ id).className);
  
  totalMonthly();
}
// calculate monthly costs
function totalMonthly() {
  let sum = 0;
  for (let i = 0; i < arrayEmployeeInfo.length; i++) {
    sum += arrayEmployeeInfo[i].salary;
  }

  $('#totalMonthly').html(sum / 12);
}