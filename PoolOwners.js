const frequencyInput = document.querySelector("#frequencyInput");
const allh2s = document.querySelectorAll("h2");
const button = document.querySelector("button");

//gross income
const monthlyCostInput = document.querySelector("#monthlyCostInput");
const totalAccountsInput = document.querySelector("#totalAccountsInput");
const totalGrossIncomeSection = document.querySelector(
    "#totalGrossIncomeSection"
);

//route techs
const stopsPerRouteInput = document.querySelector("#stopsPerRouteInput");
const payPerPoolInput = document.querySelector("#payPerPoolInput");
const totalRouteTechsSection = document.querySelector(
    "#totalRouteTechsSection"
);
const averageRouteTechSalarySection = document.querySelector(
    "#averageRouteTechSalarySection"
);
const totalRouteTechSalariesSection = document.querySelector(
    "#totalRouteTechSalariesSection"
);

//supervisors
const poolsPerSupervisorInput = document.querySelector(
    "#poolsPerSupervisorInput"
);
const supervisorSalaryInput = document.querySelector("#supervisorSalaryInput");
const numberOfSupervisorsSection = document.querySelector(
    "#numberOfSupervisorsSection"
);
const averageSupervisorSalarySection = document.querySelector(
    "#averageSupervisorSalarySection"
);
const totalSupervisorsSalariesSection = document.querySelector(
    "#totalSupervisorsSalariesSection"
);

//monthly costs
const monthlyGasCostPerRouteTechInput = document.querySelector(
    "#monthlyGasCostPerRouteTechInput"
);
const monthlyChemsCostPerRouteInput = document.querySelector(
    "#monthlyChemsCostPerRouteInput"
);

//chems costs
const chemsCostPerPoolSection = document.querySelector(
    "#chemsCostPerPoolSection"
);
const chemsCostPerTechSection = document.querySelector(
    "#chemsCostPerTechSection"
);
const totalChemsCostSection = document.querySelector("#totalChemsCostSection");

//gas costs
const gasCostPerRouteTechSection = document.querySelector(
    "#gasCostPerRouteTechSection"
);
const totalGasCostSection = document.querySelector("#totalGasCostSection");

//auto insurance costs
const monthlyAutoInsuranceCostPerTechInput = document.querySelector(
    "#monthlyAutoInsuranceCostPerTechInput"
);
const autoInsuranceCostPerTechSection = document.querySelector(
    "#autoInsuranceCostPerTechSection"
);
const totalAutoInsuranceCostSection = document.querySelector(
    "#totalAutoInsuranceCostSection"
);

//total costs
const totalCostPerRouteTechSection = document.querySelector(
    "#totalCostPerRouteTechSection"
);
const totalCostAllRouteTechsSection = document.querySelector(
    "#totalCostAllRouteTechsSection"
);
const federalTaxSection = document.querySelector("#federalTaxSection");
const stateTaxSection = document.querySelector("#stateTaxSection");
const finalNetProfitSection = document.querySelector("#finalNetProfitSection");

//final output
const finalGrossIncomeSection = document.querySelector(
    "#finalGrossIncomeSection"
);
const totalExpensesSection = document.querySelector("#totalExpensesSection");

//all selects
const allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
    select.addEventListener("change", () => {
        calculateAll();
    });
});

//all inputs
const allInputs = document.querySelectorAll("input");
allInputs.forEach((input) => {
    input.type = "number";
    input.placeholder = "-";
});
for (var i = 0; i < allInputs.length; i += 2) {
    allInputs[i].parentNode.style.backgroundColor =
        "rgba(163, 162, 162, 0.856)";
}

//all outputs
const allOutputs = document.querySelectorAll(".finalOutputSection");
allOutputs.forEach((output) => {
    for (var i = 0; i < output.children.length; i += 2) {
        output.children[i].style.backgroundColor = "rgba(163, 162, 162, 0.856)";
    }
});

finalGrossIncomeSection.parentNode.style.backgroundColor =
    "rgba(33, 179, 70, 0.856)";
totalExpensesSection.parentNode.style.backgroundColor =
    "rgba(221, 42, 42, 0.856)";
federalTaxSection.parentNode.style.backgroundColor =
    "rgba(83, 139, 212, 0.856)";
stateTaxSection.parentNode.style.backgroundColor = "rgba(83, 139, 212, 0.856)";
finalNetProfitSection.parentNode.style.backgroundColor =
    "rgba(33, 179, 70, 0.856)";

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//CHANGE FREQUENCY TEXT
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// for (var i = 0; i < allh2s.length; i++) {
//     if (i > 1) {
//         switch (frequencyInput.value) {
//             case "weekly":
//                 allh2s[i].textContent += " (weekly)";
//                 break;
//             case "monthly":
//                 allh2s[i].textContent += " (monthly)";
//                 break;
//             case "yearly":
//                 allh2s[i].textContent += " (yearly)";
//                 break;
//         }
//     }
// }

// frequencyInput.addEventListener("change", () => {
//     for (var i = 0; i < allh2s.length; i++) {
//         if (i > 1) {
//             switch (frequencyInput.value) {
//                 case "weekly":
//                     allh2s[i].textContent += " (weekly)";
//                     break;
//                 case "monthly":
//                     allh2s[i].textContent += " (monthly)";
//                     break;
//                 case "yearly":
//                     allh2s[i].textContent += " (yearly)";
//                     break;
//             }
//         }
//     }
// });

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//VARIABLES
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//gross income
let monthlyServicePrice;
let totalAccounts;
let totalGrossIncome;

//route techs
let stopsPerRoute;
let payPerPool;
let totalRouteTechs;
let averageRouteTechSalary;
let totalRouteTechsSalaries;

//supervisors
let poolsPerSupervisor;
let numberOfSupervisors;
let supervisorSalary;
let totalSupervisorsSalaries;

//chems costs
let chemsCostPerPool;
let chemsCostPerRouteTech;
let totalChemsCost;

//gas costs
let gasCostPerRouteTech;
let totalGasCost;

//auto insurance costs
let autoInsuranceCostPerTech;
let totalAutoInsuranceCost;

//final output
let allInputsFilled;
let totalExpenses;

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//FUNCTIONS
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//route techs
//gross income
function calculateGrossIncome() {
    // monthlyCostInput.value = 230;
    // totalAccountsInput.value = 500;

    monthlyServicePrice = monthlyCostInput.value;
    totalAccounts = totalAccountsInput.value;

    totalGrossIncome = monthlyServicePrice * totalAccounts;

    switch (frequencyInput.value) {
        case "weekly":
            totalGrossIncome /= 4;
            break;
        case "monthly":
            totalGrossIncome = totalGrossIncome;
            break;
        case "yearly":
            totalGrossIncome *= 12;
            break;
    }
}

function calculateChemsCost() {
    // monthlyChemsCostPerRouteInput.value = 1000;

    chemsCostPerRouteTech = monthlyChemsCostPerRouteInput.value;

    switch (frequencyInput.value) {
        case "weekly":
            chemsCostPerRouteTech /= 4;
            break;
        case "monthly":
            chemsCostPerRouteTech;
            break;
        case "yearly":
            chemsCostPerRouteTech *= 12;
            break;
    }
    totalChemsCost = chemsCostPerRouteTech * totalRouteTechs;
    chemsCostPerPool = totalChemsCost / totalAccounts;

    chemsCostPerPoolSection.textContent = `$${chemsCostPerPool}`;
    chemsCostPerTechSection.textContent = `$${chemsCostPerRouteTech}`;
    totalChemsCostSection.textContent = `$${totalChemsCost}`;
}

function calculateGas() {
    // monthlyGasCostPerRouteTechInput.value = 300;

    gasCostPerRouteTech = monthlyGasCostPerRouteTechInput.value;

    switch (frequencyInput.value) {
        case "weekly":
            gasCostPerRouteTech /= 4;
            break;
        case "monthly":
            gasCostPerRouteTech;
            break;
        case "yearly":
            gasCostPerRouteTech *= 12;
            break;
    }
    totalGasCost =
        gasCostPerRouteTech * (totalRouteTechs + numberOfSupervisors);

    gasCostPerRouteTechSection.textContent = `$${gasCostPerRouteTech}`;
    totalGasCostSection.textContent = `$${totalGasCost}`;

    // //monthly cost per tech
    // if (
    //     monthlyGasCostPerRouteTechInput !== "" &&
    //     monthlyChemsCostPerRouteInput !== ""
    // ) {
    //     totalMonthlyCostPerRouteTechSection.textContent =
    //         totalMonthlyCostPerRouteTech;
    // }

    // //monthly cost all techs
    // totalMonthlyCostAllRouteTechsSection.textContent =
    //     totalMonthlyCostAllRouteTechs;
}

function calculateAutoInsuranceCost() {
    // monthlyAutoInsuranceCostPerTechInput.value = 150;

    autoInsuranceCostPerTech = monthlyAutoInsuranceCostPerTechInput.value;

    switch (frequencyInput.value) {
        case "weekly":
            autoInsuranceCostPerTech /= 4;
            break;
        case "monthly":
            autoInsuranceCostPerTech;
            break;
        case "yearly":
            autoInsuranceCostPerTech *= 12;
            break;
    }
    totalAutoInsuranceCost =
        autoInsuranceCostPerTech * (totalRouteTechs + numberOfSupervisors);

    autoInsuranceCostPerTechSection.textContent = `$${autoInsuranceCostPerTech}`;
    totalAutoInsuranceCostSection.textContent = `$${totalAutoInsuranceCost}`;
}

function calculateRouteTechs() {
    // stopsPerRouteInput.value = 50;
    // payPerPoolInput.value = 18;

    stopsPerRoute = stopsPerRouteInput.value;
    payPerPool = payPerPoolInput.value;
    totalRouteTechs = totalAccounts / stopsPerRoute;
    averageRouteTechSalary = stopsPerRoute * payPerPool;
    totalRouteTechsSalaries = averageRouteTechSalary * totalRouteTechs;

    switch (frequencyInput.value) {
        case "weekly":
            averageRouteTechSalary = averageRouteTechSalary;
            totalRouteTechsSalaries = totalRouteTechsSalaries;
            break;
        case "monthly":
            averageRouteTechSalary *= 4;
            totalRouteTechsSalaries *= 4;
            break;
        case "yearly":
            averageRouteTechSalary *= 52;
            totalRouteTechsSalaries *= 52;
            break;
    }

    //total amount of techs
    if (totalAccounts !== "" && stopsPerRoute != "") {
        totalRouteTechsSection.textContent = totalRouteTechs.toFixed(1);
    }
    //average salary
    if (stopsPerRoute !== "" && payPerPool !== "") {
        averageRouteTechSalarySection.textContent = `$${averageRouteTechSalary.toLocaleString()}`;
    }
    //total salary
    if (totalAccounts !== "" && payPerPool != "") {
        totalRouteTechSalariesSection.textContent = `$${totalRouteTechsSalaries.toLocaleString()}`;
    }
}

//route techs
function calculateSupervisors() {
    // poolsPerSupervisorInput.value = 250;
    // supervisorSalaryInput.value = 1000;

    poolsPerSupervisor = poolsPerSupervisorInput.value;
    supervisorSalary = supervisorSalaryInput.value;

    numberOfSupervisors = Math.ceil(totalAccounts / poolsPerSupervisor);

    switch (frequencyInput.value) {
        case "weekly":
            supervisorSalary = supervisorSalary;
            break;
        case "monthly":
            supervisorSalary *= 4;
            break;
        case "yearly":
            supervisorSalary *= 52;
            break;
    }

    totalSupervisorsSalaries = supervisorSalary * numberOfSupervisors;

    numberOfSupervisorsSection.textContent = numberOfSupervisors;
    averageSupervisorSalarySection.textContent = `$${supervisorSalary}`;
    totalSupervisorsSalariesSection.textContent = `$${totalSupervisorsSalaries}`;
}

//monthly costs
function calculateExpenses() {
    calculateChemsCost();
    calculateGas();
    calculateAutoInsuranceCost();

    totalExpenses =
        +totalChemsCost +
        +totalGasCost +
        +totalAutoInsuranceCost +
        +totalRouteTechsSalaries +
        totalSupervisorsSalaries;
}

function calculateTotalIncome() {
    finalGrossIncomeSection.textContent = `$${totalGrossIncome.toLocaleString()}`;

    totalExpensesSection.textContent = `-$${totalExpenses.toLocaleString()}`;

    federalTaxWithholdings = totalGrossIncome * 0.2;
    federalTaxSection.textContent = `-$${federalTaxWithholdings.toLocaleString()}`;

    stateTaxWithholdings = totalGrossIncome * 0.1;
    stateTaxSection.textContent = `-$${stateTaxWithholdings.toLocaleString()}`;

    netProfit =
        totalGrossIncome -
        totalExpenses -
        federalTaxWithholdings -
        stateTaxWithholdings;
    finalNetProfitSection.textContent = `$${netProfit.toLocaleString()}`;
}

function calculateAll() {
    calculateGrossIncome();

    calculateRouteTechs();
    calculateSupervisors();

    calculateExpenses();
    calculateTotalIncome();
}

button.addEventListener("click", () => {
    allInputsFilled = true;
    allInputs.forEach((input) => {
        if (input.value == "") {
            allInputsFilled = false;
        }
    });
    if (allInputsFilled === true) {
        button.parentNode.href = "#outputsContainer";
        calculateAll();
    } else {
        button.parentNode.href = "#";
        alert("Please fill out every section");
    }
});
