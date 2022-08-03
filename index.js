  //variable assigning

  let formEl = document.querySelector("form");
  let tbodyEl = document.querySelector("tbody");
  let tableEl = document.querySelector("table");

  //adding row function
  function onAdd(e) {
      e.preventDefault();
      let namee = document.getElementById("nameid").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      tbodyEl.innerHTML += `
      <tr>
          <td>${namee}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td><button class="removeBtn">Remove</button></td>
      </tr>
  `;
  }

  //delete the row function
  function onDeleteRow(e) {
      if (!e.target.classList.contains("removeBtn")) {
          return;
      }

      const btn = e.target;
      btn.closest("tr").remove();
  }

  formEl.addEventListener("submit", onAdd);
  tableEl.addEventListener("click", onDeleteRow);