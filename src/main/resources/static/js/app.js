// Employee Directory Application
class EmployeeDirectory {
    constructor() {
        this.employees = [...mockEmployees]; // Copy mock data
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.filteredEmployees = [...this.employees];
        this.currentSort = { field: null, direction: 'asc' };
        this.searchTerm = '';
        this.filterCriteria = {};
        
        this.init();
    }

    init() {
        this.renderEmployeeList();
        this.setupEventListeners();
        this.setupPagination();
    }

    setupEventListeners() {
        // Add employee button
        document.getElementById('add-employee-btn').addEventListener('click', () => {
            this.showAddForm();
        });

        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.searchTerm = e.target.value;
            this.applyFiltersAndRender();
        });

        // Filter functionality
        document.getElementById('department-filter').addEventListener('change', (e) => {
            this.filterCriteria.department = e.target.value || null;
            this.applyFiltersAndRender();
        });

        document.getElementById('role-filter').addEventListener('input', (e) => {
            this.filterCriteria.role = e.target.value || null;
            this.applyFiltersAndRender();
        });

        // Sort functionality
        document.getElementById('sort-select').addEventListener('change', (e) => {
            const [field, direction] = e.target.value.split('-');
            this.currentSort = { field: field || null, direction: direction || 'asc' };
            this.applyFiltersAndRender();
        });

        // Event delegation for edit and delete buttons
        document.getElementById('employee-list-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('edit-btn')) {
                const employeeId = parseInt(e.target.dataset.id);
                this.showEditForm(employeeId);
            } else if (e.target.classList.contains('delete-btn')) {
                const employeeId = parseInt(e.target.dataset.id);
                this.deleteEmployee(employeeId);
            }
        });
    }

    renderEmployeeList() {
        const container = document.getElementById('employee-list-container');
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const employeesToShow = this.filteredEmployees.slice(startIndex, endIndex);

        if (employeesToShow.length === 0) {
            container.innerHTML = '<p class="no-employees">No employees found.</p>';
            return;
        }

        container.innerHTML = employeesToShow.map(employee => `
            <div class="employee-card" data-employee-id="${employee.id}">
                <h3>${employee.firstName} ${employee.lastName}</h3>
                <p><strong>ID:</strong> ${employee.id}</p>
                <p><strong>Email:</strong> ${employee.email}</p>
                <p><strong>Department:</strong> ${employee.department}</p>
                <p><strong>Role:</strong> ${employee.role}</p>
                <div class="card-actions">
                    <button class="edit-btn" data-id="${employee.id}">Edit</button>
                    <button class="delete-btn" data-id="${employee.id}">Delete</button>
                </div>
            </div>
        `).join('');
    }

    showAddForm() {
        this.showForm();
    }

    showEditForm(employeeId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) return;

        this.showForm(employee);
    }

    showForm(employee = null) {
        const isEdit = employee !== null;
        const formHTML = `
            <div id="employee-form-overlay" class="form-overlay">
                <div class="form-container">
                    <h2>${isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
                    <form id="employee-form">
                        <div class="form-group">
                            <label for="firstName">First Name *</label>
                            <input type="text" id="firstName" name="firstName" value="${isEdit ? employee.firstName : ''}" required>
                            <span class="error-message" id="firstName-error"></span>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" value="${isEdit ? employee.lastName : ''}" required>
                            <span class="error-message" id="lastName-error"></span>
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" value="${isEdit ? employee.email : ''}" required>
                            <span class="error-message" id="email-error"></span>
                        </div>
                        <div class="form-group">
                            <label for="department">Department *</label>
                            <select id="department" name="department" required>
                                <option value="">Select Department</option>
                                <option value="HR" ${isEdit && employee.department === 'HR' ? 'selected' : ''}>HR</option>
                                <option value="IT" ${isEdit && employee.department === 'IT' ? 'selected' : ''}>IT</option>
                                <option value="Finance" ${isEdit && employee.department === 'Finance' ? 'selected' : ''}>Finance</option>
                                <option value="Marketing" ${isEdit && employee.department === 'Marketing' ? 'selected' : ''}>Marketing</option>
                                <option value="Sales" ${isEdit && employee.department === 'Sales' ? 'selected' : ''}>Sales</option>
                            </select>
                            <span class="error-message" id="department-error"></span>
                        </div>
                        <div class="form-group">
                            <label for="role">Role *</label>
                            <input type="text" id="role" name="role" value="${isEdit ? employee.role : ''}" required>
                            <span class="error-message" id="role-error"></span>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="save-btn">${isEdit ? 'Update' : 'Save'}</button>
                            <button type="button" class="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', formHTML);
        
        // Setup form event listeners
        this.setupFormEventListeners(employee);
    }

    setupFormEventListeners(employee) {
        const form = document.getElementById('employee-form');
        const overlay = document.getElementById('employee-form-overlay');
        const cancelBtn = document.querySelector('.cancel-btn');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(employee);
        });

        cancelBtn.addEventListener('click', () => {
            this.hideForm();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.hideForm();
            }
        });
    }

    handleFormSubmit(employee) {
        const formData = new FormData(document.getElementById('employee-form'));
        const employeeData = {
            firstName: formData.get('firstName').trim(),
            lastName: formData.get('lastName').trim(),
            email: formData.get('email').trim(),
            department: formData.get('department'),
            role: formData.get('role').trim()
        };

        // Clear previous errors
        this.clearFormErrors();

        // Validate form
        if (!this.validateForm(employeeData)) {
            return;
        }

        if (employee) {
            // Edit existing employee
            Object.assign(employee, employeeData);
        } else {
            // Add new employee
            const newEmployee = {
                id: Math.max(...this.employees.map(emp => emp.id)) + 1,
                ...employeeData
            };
            this.employees.push(newEmployee);
        }

        this.hideForm();
        this.applyFiltersAndRender();
    }

    validateForm(data) {
        let isValid = true;

        // Required fields validation
        if (!data.firstName) {
            this.showFieldError('firstName', 'First name is required');
            isValid = false;
        }

        if (!data.lastName) {
            this.showFieldError('lastName', 'Last name is required');
            isValid = false;
        }

        if (!data.email) {
            this.showFieldError('email', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(data.email)) {
            this.showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!data.department) {
            this.showFieldError('department', 'Department is required');
            isValid = false;
        }

        if (!data.role) {
            this.showFieldError('role', 'Role is required');
            isValid = false;
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearFormErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });
    }

    hideForm() {
        const overlay = document.getElementById('employee-form-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    deleteEmployee(employeeId) {
        if (confirm('Are you sure you want to delete this employee?')) {
            this.employees = this.employees.filter(emp => emp.id !== employeeId);
            this.applyFiltersAndRender();
        }
    }

    applyFiltersAndRender() {
        this.filteredEmployees = [...this.employees];

        // Apply search filter
        if (this.searchTerm) {
            this.filteredEmployees = this.filteredEmployees.filter(emp => 
                emp.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                emp.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                emp.email.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }

        // Apply other filters
        if (this.filterCriteria.department) {
            this.filteredEmployees = this.filteredEmployees.filter(emp => 
                emp.department === this.filterCriteria.department
            );
        }

        if (this.filterCriteria.role) {
            this.filteredEmployees = this.filteredEmployees.filter(emp => 
                emp.role.toLowerCase().includes(this.filterCriteria.role.toLowerCase())
            );
        }

        // Apply sorting
        if (this.currentSort.field) {
            this.filteredEmployees.sort((a, b) => {
                const aValue = a[this.currentSort.field].toLowerCase();
                const bValue = b[this.currentSort.field].toLowerCase();
                
                if (this.currentSort.direction === 'asc') {
                    return aValue.localeCompare(bValue);
                } else {
                    return bValue.localeCompare(aValue);
                }
            });
        }

        // Reset to first page when filters change
        this.currentPage = 1;
        this.renderEmployeeList();
        this.setupPagination();
    }

    setupPagination() {
        const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        
        // Remove existing pagination
        const existingPagination = document.getElementById('pagination');
        if (existingPagination) {
            existingPagination.remove();
        }

        if (totalPages <= 1) return;

        const paginationHTML = `
            <div id="pagination" class="pagination">
                <button class="pagination-btn" ${this.currentPage === 1 ? 'disabled' : ''} onclick="employeeDirectory.goToPage(${this.currentPage - 1})">Previous</button>
                <span class="page-info">Page ${this.currentPage} of ${totalPages}</span>
                <button class="pagination-btn" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="employeeDirectory.goToPage(${this.currentPage + 1})">Next</button>
            </div>
        `;

        document.getElementById('app').insertAdjacentHTML('beforeend', paginationHTML);
    }

    goToPage(page) {
        const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.renderEmployeeList();
            this.setupPagination();
        }
    }
}

// Initialize the application
let employeeDirectory;
document.addEventListener('DOMContentLoaded', () => {
    employeeDirectory = new EmployeeDirectory();
});
