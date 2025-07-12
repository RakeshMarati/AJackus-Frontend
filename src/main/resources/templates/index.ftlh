<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/static/css/style.css">
</head>
<body>
    <header class="main-header">
        <div class="header-left">
            <img src="https://ajackus.com/wp-content/uploads/2022/06/ajackus-logo.svg" alt="Ajackus Logo" class="ajackus-logo">
        </div>
        <div class="header-right">
            For more information visit&nbsp;<a href="https://www.ajackus.com" target="_blank" rel="noopener" class="ajackus-link">www.ajackus.com</a>
        </div>
    </header>
    <div id="app">
        <h1>Employee Directory</h1>
        
        <!-- Search and Filter Controls -->
        <div class="controls-section">
            <div class="search-section">
                <input type="text" id="search-input" placeholder="Search by name or email..." class="search-input">
            </div>
            
            <div class="filter-sort-section">
                <div class="filter-controls">
                    <select id="department-filter" class="filter-select">
                        <option value="">All Departments</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>
                    
                    <input type="text" id="role-filter" placeholder="Filter by role..." class="filter-input">
                </div>
                
                <div class="sort-controls">
                    <select id="sort-select" class="sort-select">
                        <option value="">Sort by...</option>
                        <option value="firstName-asc">First Name (A-Z)</option>
                        <option value="firstName-desc">First Name (Z-A)</option>
                        <option value="department-asc">Department (A-Z)</option>
                        <option value="department-desc">Department (Z-A)</option>
                    </select>
                </div>
            </div>
        </div>

        <div id="employee-list-container">
            <#list employees as employee>
                <div class="employee-card" data-employee-id="${employee.id}">
                    <h3>${employee.firstName} ${employee.lastName}</h3>
                    <p>ID: ${employee.id}</p>
                    <p>Email: ${employee.email}</p>
                    <p>Department: ${employee.department}</p>
                    <p>Role: ${employee.role}</p>
                    <button class="edit-btn" data-id="${employee.id}">Edit</button>
                    <button class="delete-btn" data-id="${employee.id}">Delete</button>
                </div>
            </#list>
        </div>
        
        <button id="add-employee-btn">Add Employee</button>
    </div>
    <script src="/static/js/data.js"></script>
    <script src="/static/js/app.js"></script>
</body>
</html>
