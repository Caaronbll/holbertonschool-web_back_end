export default function createEmployeesObject(departmentName, employees) {
  const empList = {
    [departmentName]: employees,
  };
  return empList;
}
