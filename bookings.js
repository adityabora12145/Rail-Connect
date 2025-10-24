// 🧑‍💼 User check
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
  alert("Please login first!");
  window.location.href = "index.html";
} else {
  document.getElementById(
    "userGreeting"
  ).innerText = `Hello, ${user.username}!`;
}

// 🚪 Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully!");
  window.location.href = "index.html";
}

// 📖 Load bookings
function loadBookings() {
  const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const list = document.getElementById("bookingsList");
  list.innerHTML = "";

  const userBookings = allBookings.filter((b) => b.user === user.username);

  if (userBookings.length === 0) {
    list.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  userBookings.forEach((b, index) => {
    const passenger = b.passengers[0];
    const div = document.createElement("div");
    div.className = "booking-card";
    div.innerHTML = `
          <h3>${b.trainName}</h3>
         <p><strong>Date:</strong> ${b.date}</p>
         <p><strong>Coach:</strong> ${b.coach} | <strong>Seat:</strong> ${b.seatNo}</p>
         <p><strong>Fare:</strong> ₹${b.price}</p>


          <p><strong>Passenger:</strong> ${passenger.name} (${passenger.age}, ${passenger.gender})</p>
          <button class="cancel-btn" onclick="cancelBooking(${b.pnr})">Cancel</button>
        `;
    list.appendChild(div);
  });
}

// ❌ Cancel booking (with seat restoration)
function cancelBooking(pnr) {
  let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const bookingToCancel = allBookings.find((b) => b.pnr === pnr);
  if (!bookingToCancel) return;

  // Restore seat availability
  let trainData = JSON.parse(localStorage.getItem("trainData")) || [];
  const train = trainData.find(
    (t) => t.trainName === bookingToCancel.trainName
  );
  if (train) {
    const coach = train.coaches.find(
      (c) => c.coachCode === bookingToCancel.coach
    );
    if (coach && coach.seats[bookingToCancel.seatNo - 1] !== undefined) {
      coach.seats[bookingToCancel.seatNo - 1] = false; // make seat available again
    }
    localStorage.setItem("trainData", JSON.stringify(trainData));
  }

  // Remove booking
  allBookings = allBookings.filter((b) => b.pnr !== pnr);
  localStorage.setItem("bookings", JSON.stringify(allBookings));

  alert(`Booking with PNR ${pnr} canceled and seat restored.`);
  loadBookings();
}

loadBookings();
