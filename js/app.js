function addSubject() {
	var subjectCode = document.getElementById('subjectCode').value.trim();
	var subjectName = document.getElementById('subjectName').value.trim();
	var units = document.getElementById('units').value.trim();

	if (!subjectCode || !subjectName || !units) {
		alert('Please complete all subject fields.');
		return;
	}

	var row = document.createElement('tr');
	[subjectCode, subjectName, units].forEach(function(value) {
		var cell = document.createElement('td');
		cell.textContent = value;
		row.appendChild(cell);
	});

	document.getElementById('table-content').appendChild(row);
	document.getElementById('subjectForm').reset();
}

function addStudent() {
	var idNumber = document.getElementById('idNumber').value.trim();
	var firstName = document.getElementById('firstName').value.trim();
	var middleName = document.getElementById('middleName').value.trim();
	var lastName = document.getElementById('lastName').value.trim();

	if (!idNumber || !firstName || !middleName || !lastName) {
		alert('Please complete all student fields.');
		return;
	}

	var row = document.createElement('tr');
	[idNumber, firstName, middleName, lastName].forEach(function(value) {
		var cell = document.createElement('td');
		cell.textContent = value;
		row.appendChild(cell);
	});

	document.getElementById('table-content').appendChild(row);
	document.getElementById('studentForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
	var addSubjectButton = document.getElementById('addSubject');
	var addStudentButton = document.getElementById('addStudentButton');

	if (addSubjectButton) {
		addSubjectButton.addEventListener('click', addSubject);
	}

	if (addStudentButton) {
		addStudentButton.addEventListener('click', addStudent);
	}
});
