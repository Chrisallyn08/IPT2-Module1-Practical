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

document.addEventListener('DOMContentLoaded', function() {
	var addSubjectButton = document.getElementById('addSubject');

	if (addSubjectButton) {
		addSubjectButton.addEventListener('click', addSubject);
	}
});
