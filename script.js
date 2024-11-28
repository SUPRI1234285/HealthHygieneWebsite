let selectedDisease = "";
let step = 0;

window.onload = function() {
  setTimeout(() => {
    document.getElementById('doctor-animation').style.display = 'none';
    document.getElementById('disease-options').style.display = 'block';
  }, 3000);
};

function openModal(disease) {
  selectedDisease = disease;
  step = 0;
  document.getElementById("modal").style.display = "block";
  showStep();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function showStep() {
  document.getElementById('age-step').style.display = 'none';
  document.getElementById('weight-step').style.display = 'none';
  document.getElementById('sex-step').style.display = 'none';
  document.getElementById('female-options').style.display = 'none';
  
  if (step === 0) {
    document.getElementById('age-step').style.display = 'block';
  } else if (step === 1) {
    document.getElementById('weight-step').style.display = 'block';
  } else if (step === 2) {
    document.getElementById('sex-step').style.display = 'block';
  }
}

function nextStep() {
  step++;
  showStep();
}

function showFemaleOptions() {
  const sex = document.getElementById("sex").value;
  if (sex === "female") {
    document.getElementById("female-options").style.display = "block";
  } else {
    document.getElementById("female-options").style.display = "none";
  }
}

function showMedicine() {
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const sex = document.getElementById("sex").value;
  let medicine = "";

  if (selectedDisease === "flu") {
    medicine = "Flu medicine: Tamiflu, Paracetamol.";
  } else if (selectedDisease === "cold") {
    medicine = "Cold medicine: Cough Syrup, Vitamin C.";
  } else if (selectedDisease === "dengue") {
    medicine = "Dengue treatment: Pain relievers like Paracetamol.";
  } else if (selectedDisease === "malaria") {
    medicine = "Malaria medicine: Chloroquine, Artemisinin.";
  } else if (selectedDisease === "diarrhea") {
    medicine = "Diarrhea treatment: Oral rehydration salts (ORS), Antibiotics if necessary.";
  }

  document.getElementById("disease-info").innerHTML = `
    <h3>Medicine for ${selectedDisease}:</h3>
    <p>${medicine}</p>
  `;
  document.getElementById("modal").style.display = "none";
}
