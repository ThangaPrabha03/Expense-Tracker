  const button = document.getElementById('btn');
  const dateInput = document.getElementById('dateInput');
  const amtIp = document.getElementById('amtIp');
  const desc = document.getElementById('desc');
  const type = document.getElementById('type');
  const table = document.getElementById('tab');
  const totalVal = document.getElementById('total');
  const btnCalc = document.getElementById('calcTotal');

  let allExpenses = [];

  button.addEventListener('click', () => {
    const date = dateInput.value;
    const amount = parseFloat(amtIp.value);
    const description = desc.value;
    const selectedType = type.options[type.selectedIndex].text; 

    if (date === '' || isNaN(amount) || description === '' || type.value === '') {
      alert("Please fill out all fields!!");
      return;
    }

    allExpenses.push(amount);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${date}</td>
      <td>${selectedType}</td>
      <td>₹${amount.toFixed(2)}</td>
      <td>${description}</td>
      <td><button class="delBtn">Delete</button></td>
    `;

    table.appendChild(row);

    row.querySelector('.delBtn').addEventListener('click', () => {
      row.remove();
      allExpenses.splice(allExpenses.indexOf(amount), 1);
      updateTotal();
    });
    dateInput.value = '';
    amtIp.value = '';
    desc.value = '';
    type.selectedIndex = 0;
  });

  btnCalc.addEventListener('click', updateTotal);

  function updateTotal() {
    const total = allExpenses.reduce((sum, amt) => sum + amt, 0);
    totalVal.innerText = `Total Expense: ₹${total.toFixed(2)}`;
  }
  const resetBtn = document.getElementById('resetTable');

resetBtn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  rows.forEach((row, index) => {
    if (index !== 0) row.remove(); 
  });
  allExpenses = [];
  updateTotal();
});





    