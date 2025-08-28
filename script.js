let heart = 0;
  const heartCountEl = document.getElementById("heartCount");
  const heartBtns = document.querySelectorAll(".heartBtn");

  heartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      heart++;
      heartCountEl.textContent = heart;
    });
  });

    // Call Button select
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const serviceName = btn.dataset.name;
        const serviceNumber = btn.dataset.number;

        // cheak coin
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }
         const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true
    });

        
        alert(`Calling ${serviceName} (${serviceNumber})...`);

         const li = document.createElement("li");
    li.className = "p-3 bg-[#fafafa] rounded text-sm flex justify-between items-start";

    li.innerHTML = `
      <div>
        <p class="font-bold text-lg">${serviceName}</p>
        <p class="text-black-700">${serviceNumber}</p>
      </div>
      <span class="text-lg text-black-700">${timeString}</span>
    `;

   
    historyList.prepend(li);
  });
});

    // Clear History Btn
    document.getElementById("clearHistory").addEventListener("click", () => {
      historyList.innerHTML = "";
    });


    //coin section
    let coins = parseInt(document.getElementById('coinCount').textContent);

  // Update coin display function
  function updateCoinDisplay() {
    document.getElementById('coinCount').textContent = coins;
  }

  // Select all call buttons
  const callButtons = document.querySelectorAll('.callBtn');

  callButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (coins >= 20) {
        coins -= 20; // deduct 20 coins
        updateCoinDisplay();

        // Optional: simulate calling
        const serviceName = button.getAttribute('data-name');
        const serviceNumber = button.getAttribute('data-number'); 
      } 
      else {
        alert('You do not have enough coins to make a call!');
      }
    });
  });


  