# 💰 Smart Expense Tracker

A modern and responsive **Expense Tracker** built with **React.js and Tailwind CSS** to help users manage their daily expenses, set monthly budgets, and understand their spending patterns through charts and reports.

The application provides expense management, category-wise analysis, filtering, searching, sorting, budgeting, and dark mode in a clean and responsive interface.

---

## 🚀 Features

### 📊 Dashboard

* View total income and total expenses
* Track total transactions
* Set and monitor monthly budget
* View recent expenses
* Visual spending charts
* Responsive dashboard for desktop, tablet, and mobile

### 💸 Expense Management

* Add new expenses
* Edit existing expenses
* Delete individual expenses
* Delete all expenses
* Search transactions
* Filter expenses by category
* Sort expenses by highest or lowest amount

### 📂 Category Analysis

* Identify the top spending category
* View category-wise spending using a pie chart
* Calculate average spending per transaction
* Visualize spending distribution

### 📈 Reports

* Monthly expense trends
* Category-based expense visualization
* View total spending
* Export reports

### 🎨 UI & UX

* Fully responsive design
* Light mode and dark mode
* Mobile-friendly layouts
* Clean and simple interface
* Responsive tables and modals

---

## 🛠️ Tech Stack

| Technology   | Purpose                            |
| ------------ | ---------------------------------- |
| React.js     | Frontend framework                 |
| Tailwind CSS | Styling & responsive design        |
| Context API  | State management                   |
| Recharts     | Data visualization                 |
| Font Awesome | Icons                              |
| JavaScript   | Application logic                  |
| LocalStorage | Persisting expense and budget data |

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Responsive layouts are implemented using Tailwind CSS breakpoints.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/smart-expense-tracker.git
```

### 2. Navigate to the project

```bash
cd smart-expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   └── ...
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Expenses.jsx
│   ├── Categories.jsx
│   └── Reports.jsx
│
├── context/
│   └── ExpenseContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 What I Learned

While building this project, I practiced:

* React component architecture
* React Hooks
* Context API
* State management
* Array methods such as `map()`, `filter()`, and `sort()`
* Expense aggregation and calculations
* Data visualization with Recharts
* Responsive design with Tailwind CSS
* Dark mode implementation
* Working with LocalStorage
* Creating reusable UI components
* Building responsive tables and modals

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* User authentication
* Backend API integration
* MongoDB database
* Cloud data synchronization
* Recurring expenses
* Multiple income sources
* Advanced financial analytics
* CSV/PDF expense export
* Monthly and yearly comparison
* Cu
