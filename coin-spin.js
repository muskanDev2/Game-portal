const coinResult = document.getElementById("coin-result");
        const spinBtn = document.getElementById("spin-btn");
        const resetBtn = document.getElementById("reset-btn");

        spinBtn.addEventListener("click", () => {
            // Randomly pick 0 or 1
            const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
            coinResult.textContent = `Result: ${outcome}`;
        });

        resetBtn.addEventListener("click", () => {
            coinResult.textContent = "Click the button to spin the coin";
        });