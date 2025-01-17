// Data for all loans
const loanData = {
  loan1: {
    principal: 200000,
    totalAmount: 240000,
    totalInterest: 40000,
    paidAmount: 136000,
    balanceAmount: 104000,
    emiSchedule: [
      { emiNumber: 1, principal: 1333, interest: 1333, total: 8000, date: "05-September-2023", balance: 232000 },
      { emiNumber: 2, principal: 1333, interest: 1333, total: 8000, date: "04-October-2023", balance: 224000 },
      // Add more EMIs as required
    ]
  },
  loan2: {
    principal: 150000,
    totalAmount: 180000,
    totalInterest: 30000,
    paidAmount: 90000,
    balanceAmount: 90000,
    emiSchedule: [
      { emiNumber: 1, principal: 1500, interest: 1500, total: 7500, date: "05-September-2023", balance: 148500 },
      { emiNumber: 2, principal: 1500, interest: 1500, total: 7500, date: "04-October-2023", balance: 147000 },
      // Add more EMIs as required
    ]
  },
  loan3: {
    principal: 250000,
    totalAmount: 300000,
    totalInterest: 50000,
    paidAmount: 150000,
    balanceAmount: 150000,
    emiSchedule: [
      { emiNumber: 1, principal: 2000, interest: 2000, total: 10000, date: "05-September-2023", balance: 248000 },
      { emiNumber: 2, principal: 2000, interest: 2000, total: 10000, date: "04-October-2023", balance: 246000 },
      // Add more EMIs as required
    ]
  }
};

// Function to load the loan details dynamically
function loadLoanDetails() {
  const loanSelect = window.location.pathname.split("/").pop().split(".")[0];  // Extract loan ID from URL (e.g., loan1, loan2)
  const loan = loanData[loanSelect];

  // Update the loan summary dynamically
  document.getElementById("principal").textContent = `₹${loan.principal}`;
  document.getElementById("totalAmount").textContent = `₹${loan.totalAmount}`;
  document.getElementById("totalInterest").textContent = `₹${loan.totalInterest}`;
  document.getElementById("paidAmount").textContent = `₹${loan.paidAmount}`;
  document.getElementById("balanceAmount").textContent = `₹${loan.balanceAmount}`;

  // Update the EMI schedule table dynamically
  const emiRows = document.getElementById("emiRows");
  emiRows.innerHTML = ""; // Clear any existing rows
  loan.emiSchedule.forEach((emi) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emi.emiNumber}</td>
      <td>${emi.principal}</td>
      <td>${emi.interest}</td>
      <td>${emi.total}</td>
      <td>${emi.date}</td>
      <td>${emi.balance}</td>
    `;
    emiRows.appendChild(row);
  });
}

// Load loan details when the page is loaded
window.onload = loadLoanDetails;
