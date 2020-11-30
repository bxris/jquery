let arr = [];
let table = $('<table></table>');
$('body').append(table);

const Student = (function () {

const fill = (arr) => {
let tr = $('<tr></tr>');
const name = $('<th>Name</th>');
tr.append(name);
const surname = $('<th>Surname</th>');
tr.append(surname);
const age = $('<th>Age</th>');
tr.append(age);
const average = $('<th>Average</th>');
tr.append(average);
table.append(tr);

$.each(arr, function(index, elem) {
let tr = $('<tr></tr>');
const name = $('<td></td>');
name.text(elem.name);
tr.append(name);
const surname = $('<td></td>');
surname.text(elem.surname);
tr.append(surname);
const age = $('<td></td>');
age.text(elem.age);
tr.append(age);
const average = $('<td></td>');
average.text(elem.average);
tr.append(average);
table.append(tr);
});
console.log(arr);
sumAverage();

};

function refreshData() {
console.log(arr);
let last = arr[arr.length - 1];
let tr = $('<tr></tr>');
const name = $('<td></td>');
name.text(last.name);
tr.append(name);
const surname = $('<td></td>');
surname.text(last.surname);
tr.append(surname);
const age = $('<td></td>');
age.text(last.age);
tr.append(age);
const average = $('<td></td>');
average.text(last.average);
tr.append(average);
$('table').append(tr);
sumAverage();
}


function sumAverage() {
let sum = 0;
$.each($('tbody').children().toArray(), function(index, child) {
if (index !== 0) {
sum += +$(child).children().last().text();
}
});
$('#result').text(+(sum / arr.length).toFixed(2));
}


return {
fill,
refreshData,
sumAverage
}
})();


function request(){
return $.ajax({
url: 'https://run.mocky.io/v3/885684f7-653d-41dd-a55b-ed03eb27ebb1',
type: 'GET',
datatype: 'json'
});
}

request()
.done(function(data) {
return data.result;
})
.done(function(data) {
arr = data;
Student.fill(arr);
})
.fail(function(err){
console.log(err)
})

function pushFunction() {
arr.push({
name: $('#name').val(),
surname: $('#surname').val(),
age: $('#age').val(),
average: $('#average').val()
});
Student.refreshData();
}

function deleteRow() {
let k = $('#del').val();
let m = k - 1;
const el = $($('tbody').children()[k]);
el.remove();
arr.splice(m, 1);
Student.sumAverage();
}