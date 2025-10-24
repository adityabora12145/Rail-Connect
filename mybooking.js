 // ✅ Check if user is logged in
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("Please login first!");
      window.location.href = "index.html";
    }

    // ✅ Load bookings from localStorage
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const userBookings = allBookings.filter(b => b.user === user.username);
    const bookingList = document.getElementById("bookingList");

    if (userBookings.length === 0) {
      bookingList.innerHTML = "<p>No bookings yet. Go book your first train!</p>";
    } else {
      userBookings.forEach(b => {
        const div = document.createElement("div");
        div.className = "booking";
        div.innerHTML = `
          <h3>${b.trainName}</h3>
          <p><strong>From:</strong> ${b.from} ➜ <strong>To:</strong> ${b.to}</p>
          <p><strong>Date:</strong> ${b.date}</p>
          <p><strong>Coach:</strong> ${b.coach}</p>
          <p><strong>Seat No:</strong> ${b.seatNo}</p>
          <p><strong>PNR:</strong> ${b.pnr}</p>
          <button class="cancel" onclick="cancelBooking(${b.pnr})">Cancel</button>
        `;
        bookingList.appendChild(div);
      });
    }

    // 🗑 Cancel booking
    function cancelBooking(pnr) {
      if (!confirm("Are you sure you want to cancel this booking?")) return;

      let updatedBookings = allBookings.filter(b => b.pnr !== pnr);
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      alert("Booking canceled successfully!");
      location.reload();
    }

    // 🚪 Logout function
    function logout() {
      localStorage.removeItem("loggedInUser");
      alert("Logged out successfully!");
      window.location.href = "index.html";
    }