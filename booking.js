// =====================
// 🧩 User Authentication Check
// =====================
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
  alert("Please login first!");
  window.location.href = "index.html";
} else {
  document.getElementById(
    "userGreeting"
  ).innerText = `Hello, ${user.username}!`;
}

// =====================
// 🚪 Logout
// =====================
function logout() {
  // Show confirmation popup
  const confirmLogout = confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    // Clear login info from localStorage and redirect
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  } else {
    // If user clicks Cancel, do nothing
    return;
  }
}

// =====================
// 🚆 Dehradun Train Dataset
// =====================
const defaultTrainData = [
  // --- Dehradun to New Delhi ---
  {
    trainNo: 12017,
    trainName: "Dehradun Shatabdi Express",
    from: "Dehradun",
    to: "New Delhi",
    departure: "06:45",
    arrival: "11:30",
    coaches: [
      {
        coachType: "Executive Class",
        coachCode: "E1",
        totalSeats: 5,
        price: 1450,
        seats: Array(5).fill(false),
      },
      {
        coachType: "AC Chair Car",
        coachCode: "C1",
        totalSeats: 5,
        price: 850,
        seats: Array(5).fill(false),
      },
    ],
  },
  {
    trainNo: 14317,
    trainName: "Dehradun Express",
    from: "Dehradun",
    to: "New Delhi",
    departure: "09:15",
    arrival: "15:00",
    coaches: [
      {
        coachType: "Sleeper Class",
        coachCode: "S1",
        totalSeats: 8,
        price: 400,
        seats: Array(8).fill(false),
      },
      {
        coachType: "AC 3-Tier",
        coachCode: "B1",
        totalSeats: 6,
        price: 750,
        seats: Array(6).fill(false),
      },
    ],
  },
  {
    trainNo: 12018,
    trainName: "Jan Shatabdi Express",
    from: "Dehradun",
    to: "New Delhi",
    departure: "15:45",
    arrival: "22:00",
    coaches: [
      {
        coachType: "AC Chair Car",
        coachCode: "C2",
        totalSeats: 8,
        price: 550,
        seats: Array(8).fill(false),
      },
      {
        coachType: "Second Sitting",
        coachCode: "D1",
        totalSeats: 12,
        price: 250,
        seats: Array(12).fill(false),
      },
    ],
  },
  {
    trainNo: 14319,
    trainName: "Mussoorie Express",
    from: "Dehradun",
    to: "New Delhi",
    departure: "22:00",
    arrival: "05:45",
    coaches: [
      {
        coachType: "AC 2-Tier",
        coachCode: "A1",
        totalSeats: 10,
        price: 850,
        seats: Array(10).fill(false),
      },
      {
        coachType: "Sleeper Class",
        coachCode: "S2",
        totalSeats: 15,
        price: 450,
        seats: Array(15).fill(false),
      },
    ],
  },

  // --- Dehradun to Haridwar ---
  {
    trainNo: 14325,
    trainName: "Dehradun-Kathgodam Express",
    from: "Dehradun",
    to: "Haridwar",
    departure: "07:30",
    arrival: "09:00",
    coaches: [
      {
        coachType: "Sleeper Class",
        coachCode: "S1",
        totalSeats: 10,
        price: 120,
        seats: Array(10).fill(false),
      },
      {
        coachType: "AC 3-Tier",
        coachCode: "A3",
        totalSeats: 5,
        price: 60,
        seats: Array(5).fill(false),
      },
      {
        coachType: "AC 2-Tier",
        coachCode: "A1",
        totalSeats: 6,
        price: 100,
        seats: Array(6).fill(false),
      },
      {
        coachType: "First Class AC",
        coachCode: "1A",
        totalSeats: 2,
        price: 1220,
        seats: Array(2).fill(false),
      },
    ],
  },
  {
    trainNo: 14326,
    trainName: "Dehradun Intercity Express",
    from: "Dehradun",
    to: "Haridwar",
    departure: "10:45",
    arrival: "12:05",
    coaches: [
      {
        coachType: "AC Chair Car",
        coachCode: "C1",
        totalSeats: 10,
        price: 120,
        seats: Array(10).fill(false),
      },
      {
        coachType: "General",
        coachCode: "G2",
        totalSeats: 40,
        price: 40,
        seats: Array(40).fill(false),
      },
    ],
  },

  // --- Dehradun to Rishikesh ---
  {
    trainNo: 14330,
    trainName: "Dehradun Passenger",
    from: "Dehradun",
    to: "Rishikesh",
    departure: "06:00",
    arrival: "07:00",
    coaches: [
      {
        coachType: "General",
        coachCode: "G1",
        totalSeats: 50,
        price: 25,
        seats: Array(50).fill(false),
      },
    ],
  },
  {
    trainNo: 14331,
    trainName: "Doon Express",
    from: "Dehradun",
    to: "Rishikesh",
    departure: "14:00",
    arrival: "15:00",
    coaches: [
      {
        coachType: "General",
        coachCode: "G2",
        totalSeats: 40,
        price: 25,
        seats: Array(40).fill(false),
      },
      {
        coachType: "Second Sitting",
        coachCode: "D1",
        totalSeats: 20,
        price: 45,
        seats: Array(20).fill(false),
      },
    ],
  },

  // --- Delhi to Lucknow ---
  {
    trainNo: 12230,
    trainName: "Lucknow Mail",
    from: "Delhi",
    to: "Lucknow",
    departure: "22:00",
    arrival: "06:45",
    coaches: [
      {
        coachType: "AC 2-Tier",
        coachCode: "A2",
        totalSeats: 10,
        price: 1200,
        seats: Array(10).fill(false),
      },
      {
        coachType: "Sleeper Class",
        coachCode: "S1",
        totalSeats: 20,
        price: 600,
        seats: Array(20).fill(false),
      },
    ],
  },
  {
    trainNo: 12234,
    trainName: "Rajdhani Express",
    from: "Delhi",
    to: "Lucknow",
    departure: "19:00",
    arrival: "01:00",
    coaches: [
      {
        coachType: "AC 1-Tier",
        coachCode: "A1",
        totalSeats: 8,
        price: 1800,
        seats: Array(8).fill(false),
      },
      {
        coachType: "AC 2-Tier",
        coachCode: "A2",
        totalSeats: 10,
        price: 1300,
        seats: Array(10).fill(false),
      },
    ],
  },

  // --- Delhi to Jaipur ---
  {
    trainNo: 12986,
    trainName: "JP Double Decker Express",
    from: "Delhi",
    to: "Jaipur",
    departure: "17:35",
    arrival: "22:15",
    coaches: [
      {
        coachType: "AC Chair Car",
        coachCode: "C1",
        totalSeats: 20,
        price: 550,
        seats: Array(20).fill(false),
      },
      {
        coachType: "Executive Class",
        coachCode: "E1",
        totalSeats: 5,
        price: 950,
        seats: Array(5).fill(false),
      },
    ],
  },
  {
    trainNo: 12015,
    trainName: "Ajmer Shatabdi Express",
    from: "Delhi",
    to: "Jaipur",
    departure: "06:05",
    arrival: "10:35",
    coaches: [
      {
        coachType: "AC Chair Car",
        coachCode: "C2",
        totalSeats: 15,
        price: 650,
        seats: Array(15).fill(false),
      },
      {
        coachType: "Executive Class",
        coachCode: "E2",
        totalSeats: 5,
        price: 1050,
        seats: Array(5).fill(false),
      },
    ],
  },
];

// =====================
// 🚉 Station Name List for Autocomplete
// =====================
const stationList = [
  "Dehradun",
  "Delhi",
  "New Delhi",
  "Haridwar",
  "Rishikesh",
  "Meerut",
  "Saharanpur",
  "Roorkee",
  "Ghaziabad",
  "Mussoorie",
];

// Store in localStorage if not already
if (!localStorage.getItem("trainData")) {
  localStorage.setItem("trainData", JSON.stringify(defaultTrainData));
}

// =====================
// 🔍 Search Functionality
// =====================
function searchTrains() {
  const from = document.getElementById("from").value.trim().toLowerCase();
  const to = document.getElementById("to").value.trim().toLowerCase();
  const journeyDate = document.getElementById("date").value; // ⬅️ get selected date
  const trainListDiv = document.getElementById("trainList");
  const whySection = document.getElementById("whyRailYatri");

  if (!journeyDate) {
    const dateInput = document.getElementById("date");

    // Add red border animation
    dateInput.classList.add("input-error");

    // Remove error class after a second
    setTimeout(() => {
      dateInput.classList.remove("input-error");
    }, 1000);

    // Smoothly scroll to the date field
    dateInput.scrollIntoView({ behavior: "smooth", block: "center" });

    return;
  }

  // Hide the "Why book" section when searching
  if (whySection) whySection.style.display = "none";

  trainListDiv.innerHTML = "";

  const trainData = JSON.parse(localStorage.getItem("trainData")) || [];
  const results = trainData.filter(
    (t) =>
      t.from.toLowerCase().includes(from) && t.to.toLowerCase().includes(to)
  );

  // Sort trains by departure time (earliest first)
  results.sort((a, b) => {
    const timeA = a.departure.split(":").map(Number);
    const timeB = b.departure.split(":").map(Number);
    const minutesA = timeA[0] * 60 + timeA[1];
    const minutesB = timeB[0] * 60 + timeB[1];
    return minutesA - minutesB;
  });

  if (results.length === 0) {
    trainListDiv.innerHTML = "<p>No trains found for this route.</p>";
    return;
  }

  // Display train cards with date info
  results.forEach((train) => {
    const trainDiv = document.createElement("div");
    trainDiv.className = "train-card";
    trainDiv.innerHTML = `
      <h3>${train.trainName} (${train.trainNo})</h3>
      <p>${train.from} ➜ ${train.to}</p>
      <p>Departure: ${train.departure} | Arrival: ${train.arrival}</p>
      <p><strong>Date of Journey:</strong> ${journeyDate}</p>
     <div class="coach-container">
  ${train.coaches
    .map((coach) => {
      const available = coach.seats.filter((s) => s === false).length;
      return `
        <div class="coach-card">
          <strong>${coach.coachType}</strong> (${coach.coachCode})<br>
          ₹${coach.price} per ticket<br>
          ${available} seats available<br>
          <button onclick="openPassengerForm(${train.trainNo}, '${coach.coachCode}', '${journeyDate}')">
            Book
          </button>
        </div>`;
    })
    .join("")}
      </div>
      `;
    trainListDiv.appendChild(trainDiv);
  });

  trainListDiv.scrollIntoView({ behavior: "smooth" });
}

function resetSearch() {
  const toInput = document.getElementById("to").value.trim();
  const whySection = document.getElementById("whyRailYatri");
  const trainList = document.getElementById("trainList");

  if (toInput === "") {
    // Show WhyRailYatri section again with animation
    whySection.style.display = "block";
    whySection.classList.add("fade-in");

    // Clear train cards
    trainList.innerHTML = "";

    // Remove the animation class after it finishes (so it can re-trigger next time)
    setTimeout(() => {
      whySection.classList.remove("fade-in");
    }, 600);
  }
}

// =====================
// 🎫 Booking Logic
// =====================
let selectedTrainNo = null;
let selectedCoachCode = null;
let selectedJourneyDate = null; // ⬅️ add this variable

function openPassengerForm(trainNo, coachCode, journeyDate) {
  selectedTrainNo = trainNo;
  selectedCoachCode = coachCode;
  selectedJourneyDate = journeyDate; // ⬅️ store selected date
  document.getElementById("passengerPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("passengerPopup").style.display = "none";
  selectedTrainNo = null;
  selectedCoachCode = null;
}

function confirmBooking() {
  const name = document.getElementById("pName").value.trim();
  const age = document.getElementById("pAge").value.trim();
  const gender = document.getElementById("pGender").value;

  if (!name || !age || !gender) {
    alert("Please fill all passenger details!");
    return;
  }

  const trainData = JSON.parse(localStorage.getItem("trainData")) || [];
  const train = trainData.find((t) => t.trainNo === selectedTrainNo);
  const coach = train.coaches.find((c) => c.coachCode === selectedCoachCode);

  const seatIndex = coach.seats.indexOf(false);
  if (seatIndex === -1) {
    alert(
      "All seats full in this coach — future step: Add to waiting list queue!"
    );
    closePopup();
    return;
  }

  coach.seats[seatIndex] = true;
  localStorage.setItem("trainData", JSON.stringify(trainData));

  const pnr = Math.floor(1000000000 + Math.random() * 9000000000);
  const price = coach.price;
  const booking = {
    user: user.username,
    trainName: train.trainName,
    trainNo: train.trainNo,
    coach: selectedCoachCode,
    seatNo: seatIndex + 1,
    date: selectedJourneyDate,
    price: price,
    pnr,
    passengers: [{ name, age, gender }],
  };

  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  allBookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(allBookings));

  alert(`✅ Ticket Booked!
 Train: ${train.trainName}
 Coach: ${selectedCoachCode}
 Seat: ${seatIndex + 1}
 Date: ${selectedJourneyDate}
 Price: ₹${price}
 PNR: ${pnr}

 Passenger: ${name}, ${age}, ${gender}`);

  closePopup();
}

function setupDynamicSuggestions(inputId, datalistId) {
  const input = document.getElementById(inputId);
  const datalist = document.getElementById(datalistId);

  input.addEventListener("input", function () {
    const val = this.value.toLowerCase();
    datalist.innerHTML = "";

    const filtered = stationList.filter((station) =>
      station.toLowerCase().startsWith(val)
    );

    filtered.forEach((station) => {
      const option = document.createElement("option");
      option.value = station;
      datalist.appendChild(option);
    });
  });
}

// Activate for both inputs
setupDynamicSuggestions("from", "stationsFrom");
setupDynamicSuggestions("to", "stationsTo");

const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);
