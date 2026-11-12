const addButton = document.querySelector(".add-button");
const applicationForm = document.getElementById("application-form");
const table = document.querySelector(".dashboard-section table tbody");

// Open application form
addButton.addEventListener("click", function() {
    applicationForm.hidden = false;
});

// Add edit and delete buttons to a row
function addActions(row) {
    const actionsCell = row.insertCell(-1);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    editButton.addEventListener("click", function() {
        const jobTitle = prompt("Edit job title:", row.cells[0].textContent);
        if (jobTitle === null) return;

        const company = prompt("Edit company:", row.cells[1].textContent);
        if (company === null) return;

        const date = prompt("Edit application date:", row.cells[2].textContent);
        if (date === null) return;

        const status = prompt("Edit status:", row.cells[3].textContent);
        if (status === null) return;

        row.cells[0].textContent = jobTitle;
        row.cells[1].textContent = company;
        row.cells[2].textContent = date;
        row.cells[3].textContent = status;
    });

    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this application?")) {
            row.remove();
        }
    });
}

// Add buttons to existing sample applications
table.querySelectorAll("tr").forEach(addActions);

// Save a new application
applicationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const dateApplied = document.getElementById("date-applied").value;
    const status = document.getElementById("status").value;

    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = jobTitle;
    newRow.insertCell(1).textContent = company;
    newRow.insertCell(2).textContent = dateApplied;
    newRow.insertCell(3).textContent = status;

    addActions(newRow);

    applicationForm.reset();
    applicationForm.hidden = true;
});

// Appointment Booking

const bookButton = document.getElementById("book-button");
const appointmentForm = document.getElementById("appointment-form");
const appointmentTable = document.getElementById("appointment-table-body");

bookButton.addEventListener("click", function() {
    appointmentForm.hidden = !appointmentForm.hidden;
});

appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const type = document.getElementById("appointment-type").value;
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;
    const location = document.getElementById("appointment-location").value;

    const row = appointmentTable.insertRow();

    row.insertCell(0).textContent = type;
    row.insertCell(1).textContent = date;
    row.insertCell(2).textContent = time;
    row.insertCell(3).textContent = location;

    const actionCell = row.insertCell(4);
    const cancelButton = document.createElement("button");

    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", function() {
        if (confirm("Cancel this appointment?")) {
            row.remove();
        }
    });

    actionCell.appendChild(cancelButton);

    appointmentForm.reset();
    appointmentForm.hidden = true;

    alert("Appointment booked successfully!");
});