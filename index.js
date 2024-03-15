// Initialize employee object
let employee = {
    name: 'JSam',
    streetAddress: '11 Broadway'
};

// Function to update employee object with key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update employee object with key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a property from employee object non-destructively
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a property from employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage
console.log("Original employee:", employee);

// Update employee non-destructively
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log("Updated employee (non-destructive):", updatedEmployee);

// Update employee destructively
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
console.log("Updated employee (destructive):", employee);

// Delete property non-destructively
let newEmployeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
console.log("Employee without name (non-destructive):", newEmployeeWithoutName);

// Delete property destructively
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Employee without street address (destructive):", employee);
