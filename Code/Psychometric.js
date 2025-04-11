function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const userEmail = document.getElementById('userEmail').value;
    let score = 0;
    const totalQuestions = 20;
  
    for (let i = 1; i <= totalQuestions; i++) {
      const options = form[`q${i}`];
      if (options) {
        const selected = [...options].find(opt => opt.checked);
        if (selected) {
          score += parseFloat(selected.value);
        }
      }
    }
  
    const credit = (score / totalQuestions) * 100;
    let personality = '';
  
    if (credit >= 85) {
      personality = "Analytical Thinker";
    } else if (credit >= 70) {
      personality = "Creative Visionary";
    } else if (credit >= 50) {
      personality = "Empathetic Supporter";
    } else {
      personality = "Adaptable Explorer";
    }
  
    // Show result
    resultDiv.innerHTML = `
      <div class="score">
        Score: <h2><strong>${score.toFixed(1)} / ${totalQuestions}</strong></h2><br>
        Credit: <h3><strong>${credit.toFixed(0)}%</strong></h3><br>
        <div class="feedback">${personality}</div>
      </div>
    `;
  }
  
  //   // Send Email
  //   const templateParams = {
  //     to_email: userEmail,
  //     subject: "Your Psychometric Test Result",
  //     message: `Thank you for completing the test.\n\nScore: ${score}/${totalQuestions}\nCredit: ${credit.toFixed(0)}%\nPersonality Type: ${personality}`
  //   };
  
  //   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
  //     .then(() => {
  //       alert("Result sent to your email!");
  //     }, (error) => {
  //       alert("Failed to send email. Please try again.");
  //       console.error("EmailJS Error:", error);
  //     });
  // }
  