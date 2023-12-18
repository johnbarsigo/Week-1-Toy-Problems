// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants based on KRA, NHIF, and NSSF rates
    const PAYE_RATES = [0.1, 0.15, 0.2, 0.25, 0.3];
    const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900];
    const NSSF_RATE_EMPLOYEE = 0.06;
    const NSSF_RATE_EMPLOYER = 0.06;
  
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate NHIF Deductions
    let nhifDeductions = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
      if (grossSalary <= NHIF_RATES[i]) {
        nhifDeductions = NHIF_RATES[i];
        break;
      }
    }
  
    // Calculate NSSF Deductions for both employee and employer
    const nssfDeductionsEmployee = grossSalary * NSSF_RATE_EMPLOYEE;
    const nssfDeductionsEmployer = grossSalary * NSSF_RATE_EMPLOYER;
  
    // Calculate taxable income for PAYE
    const taxableIncome = grossSalary - nhifDeductions - nssfDeductionsEmployee;
  
    // Calculate PAYE (Tax)
    let payee = 0;
    let remainingIncome = taxableIncome;
    for (let i = 0; i < PAYE_RATES.length; i++) {
      if (remainingIncome <= 0) {
        break;
      }
      const rate = PAYE_RATES[i];
      const threshold = i === 0 ? 0 : 24000;
      const taxableAmount = Math.max(remainingIncome - threshold, 0);
      payee += taxableAmount * rate;
      remainingIncome -= taxableAmount;
    }
  
    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductionsEmployee;
  
    // Return the results
    return {
      grossSalary,
      nhifDeductions,
      nssfDeductionsEmployee,
      nssfDeductionsEmployer,
      payee,
      netSalary,
    };
  }
console.log("Gross Salary:", result.grossSalary);
console.log("NHIF Deductions:", result.nhifDeductions);
console.log("NSSF Deductions (Employee):", result.nssfDeductionsEmployee);
console.log("NSSF Deductions (Employer):", result.nssfDeductionsEmployer);
console.log("PAYE (Tax):", result.payee);
console.log("Net Salary:", result.netSalary);