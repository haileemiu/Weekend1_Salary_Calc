$(document).ready(onReady);

const arrayEmployeeInfo = [
  // Test Data
  // {
  //   first: 'Hailee',
  //   last: 'Ortiz',
  //   id: 380,
  //   title: 'Developer',
  //   salary: 60000
  // }, 
  // {
  //   first: 'Nikko',
  //   last: 'Miu',
  //   id: 570,
  //   title: 'Engineer',
  //   salary: 80000
  // }
];

// constructor of new employee info
class Employee {
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
  $('#employeeTableBody').on('click', '.deleteButtons', deleteEmployeeInfo);
}

function addEmployeeInfo() {
  //declaring variables to use in append
  const first = $('#first').val();
  const last = $('#last').val();
  const id = $('#id').val();
  const title = $('#title').val();
  const salary = Number($('#salary').val());

  // add a row
  $('#employeeTableBody').append(`
    <tr data-id="` + arrayEmployeeInfo.length + `">
      <td>` + first + `</td>
      <td>` + last + `</td>
      <td>` + id + `</td>
      <td>` + title + `</td>
      <td>$` + salary + `</td>
      <td><button class="deleteButtons btn btn-danger btn-sm">Delete</button></td>
    </tr>
  `);

  // add new employee to array
  arrayEmployeeInfo.push(new Employee(first, last, id, title, salary));

  // clear inputs
  $('#first').val('');
  $('#last').val('');
  $('#id').val('');
  $('#title').val('');
  $('#salary').val('');

  // calculate monthly costs
  totalMonthly();
}

function totalMonthly() {
  let result = 0;
  for (let i = 0; i < arrayEmployeeInfo.length; i++) {
    if (arrayEmployeeInfo[i]) {
      result += arrayEmployeeInfo[i].salary;
    }
  }

  result = (result / 12).toFixed(2);
  result = parseFloat(result);
  result = result.toLocaleString();

  $('#totalMonthly').html('$' + result);

  // conditional to color red if > 20,000
  if (result > 20000) {
    $('#totalMonthly').css('background-color', 'red').css('color', 'white');
  } else {
    // remove red when below/deleted
    $('#totalMonthly').css('background-color', 'transparent').css('color', 'black');
  }
}

// delete row & update monthly income
function deleteEmployeeInfo() {
  // remove index of array
  arrayEmployeeInfo[$(this).parents('tr').data('id')] = undefined;

  // remove row
  $(this).parents('tr').remove();

  // recalculate
  totalMonthly();
}