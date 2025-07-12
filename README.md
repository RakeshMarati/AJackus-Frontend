# Employee Directory Web Interface

A responsive web application for managing employee information with full CRUD operations, search, filtering, sorting, and pagination functionality.

## 🚀 Features

### Core Functionality
- **Display Employees**: View all employees in a responsive card layout
- **Add Employee**: Add new employees with form validation
- **Edit Employee**: Modify existing employee information
- **Delete Employee**: Remove employees with confirmation dialog

### Advanced Features
- **Search**: Real-time search by name or email
- **Filter**: Filter by department and role
- **Sort**: Sort by first name or department (ascending/descending)
- **Pagination**: Navigate through large datasets with pagination controls
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Technical Features
- **Form Validation**: Client-side validation for all required fields
- **Email Validation**: Proper email format validation
- **Error Handling**: Clear error messages and user feedback
- **Clean UI/UX**: Modern, intuitive interface design

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, responsive design, and animations
- **Vanilla JavaScript (ES6+)**: All interactivity and data management
- **Freemarker Templates**: Server-side rendering structure (simulated for client-side)

## 📁 Project Structure

```
Ajackus-Frontend/
├── src/main/resources/
│   ├── templates/
│   │   └── index.ftlh          # Freemarker template
│   └── static/
│       ├── css/
│       │   └── style.css       # Main stylesheet
│       └── js/
│           ├── data.js         # Mock employee data
│           └── app.js          # Main application logic
├── index.html                  # Standalone HTML for testing
└── README.md                   # Project documentation
```

## 🚀 Setup and Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Running the Application

#### Option 1: Direct HTML File (Recommended for Testing)
1. Clone the repository:
   ```bash
   git clone https://github.com/RakeshMarati/AJackus-Frontend.git
   cd AJackus-Frontend
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Drag and drop into your browser, or
   - Use a local server (see Option 2)

#### Option 2: Using a Local Server (For Freemarker Simulation)
1. Install a simple HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## 📖 Usage Guide

### Viewing Employees
- The dashboard displays all employees in card format
- Each card shows: ID, Name, Email, Department, and Role
- Use pagination controls to navigate through large datasets

### Adding a New Employee
1. Click the "Add Employee" button
2. Fill in all required fields:
   - First Name (required)
   - Last Name (required)
   - Email (required, must be valid format)
   - Department (required, select from dropdown)
   - Role (required)
3. Click "Save" to add the employee
4. Click "Cancel" to close without saving

### Editing an Employee
1. Click the "Edit" button on any employee card
2. Modify the information in the form
3. Click "Update" to save changes
4. Click "Cancel" to discard changes

### Deleting an Employee
1. Click the "Delete" button on any employee card
2. Confirm the deletion in the dialog box
3. The employee will be permanently removed

### Searching and Filtering
- **Search**: Type in the search box to filter by name or email
- **Department Filter**: Select a department from the dropdown
- **Role Filter**: Type to filter by role
- **Sort**: Choose sorting options from the dropdown

### Pagination
- Navigate through pages using "Previous" and "Next" buttons
- View current page and total pages information
- Pagination automatically adjusts based on filtered results

## 🎨 Design Features

### Responsive Design
- **Desktop**: Full-width layout with multiple cards per row
- **Tablet**: Adjusted spacing and layout for medium screens
- **Mobile**: Single-column layout with optimized touch targets

### User Experience
- Clean, modern interface with consistent styling
- Intuitive navigation and clear visual hierarchy
- Smooth interactions and immediate feedback
- Accessible color scheme and readable typography

### Form Design
- Modal overlay for add/edit forms
- Clear field labels and validation messages
- Responsive form layout for all screen sizes
- Keyboard navigation support

## 🔧 Technical Implementation

### Data Management
- In-memory JavaScript array for employee data
- No backend dependencies or external APIs
- Local storage simulation for data persistence

### JavaScript Architecture
- Object-oriented design with ES6 classes
- Modular code structure for maintainability
- Event delegation for dynamic content
- Efficient DOM manipulation and rendering

### CSS Architecture
- BEM methodology for class naming
- Flexbox and CSS Grid for layouts
- Mobile-first responsive design
- Consistent design system with variables

## 🧪 Testing

### Manual Testing Checklist
- [ ] Add new employee with valid data
- [ ] Add new employee with invalid data (validation)
- [ ] Edit existing employee information
- [ ] Delete employee with confirmation
- [ ] Search functionality (name and email)
- [ ] Filter by department
- [ ] Filter by role
- [ ] Sort by first name (ascending/descending)
- [ ] Sort by department (ascending/descending)
- [ ] Pagination navigation
- [ ] Responsive design on different screen sizes
- [ ] Form validation and error messages

## 🚀 Future Enhancements

If given more time, I would implement:

1. **Advanced Features**:
   - Bulk operations (select multiple employees)
   - Export functionality (CSV, PDF)
   - Advanced search with multiple criteria
   - Employee photo upload

2. **Technical Improvements**:
   - Local storage for data persistence
   - Offline functionality with service workers
   - Keyboard shortcuts for power users
   - Accessibility improvements (ARIA labels, screen reader support)

3. **UI/UX Enhancements**:
   - Dark mode toggle
   - Customizable themes
   - Drag and drop for reordering
   - Animated transitions and micro-interactions

4. **Performance Optimizations**:
   - Virtual scrolling for large datasets
   - Debounced search input
   - Lazy loading for images
   - Code splitting and optimization

## 📝 Reflection

### Challenges Faced
1. **Freemarker Integration**: Simulating server-side rendering in a client-side environment required careful planning of the template structure.
2. **State Management**: Managing complex state (filters, sorting, pagination) while maintaining clean code was challenging.
3. **Responsive Design**: Ensuring consistent experience across all device sizes required extensive testing and CSS adjustments.
4. **Form Validation**: Implementing comprehensive client-side validation with clear user feedback required careful UX consideration.

### Learning Outcomes
- Enhanced understanding of vanilla JavaScript ES6+ features
- Improved CSS skills with modern layout techniques
- Better appreciation for user experience and accessibility
- Deeper knowledge of responsive design principles

### Code Quality Achievements
- Clean, modular, and well-commented code
- Consistent naming conventions and structure
- Efficient DOM manipulation and event handling
- Responsive and accessible design implementation

## 📄 License

This project is created for the AJACKUS Frontend Assignment.

## 👨‍💻 Author

**Rakesh Marati**
- GitHub: [@RakeshMarati](https://github.com/RakeshMarati)
- Project: Employee Directory Web Interface

---

*This project demonstrates proficiency in modern frontend development with HTML, CSS, and vanilla JavaScript, following best practices for responsive design, user experience, and code quality.*
