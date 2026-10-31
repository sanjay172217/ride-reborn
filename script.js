const bikeData = {
  ninja: {
    name: "KAWASAKI NINJA ZX-10R",
    engine: "998",
    power: "203",
    speed: "299",
    accel: "3.0",
    image: "assets/kawasaki.jpg"
  },

  r1: {
    name: "YAMAHA YZF-R1",
    engine: "998",
    power: "200",
    speed: "299",
    accel: "3.1",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=90"
  },

  ducati: {
    name: "DUCATI PANIGALE V4",
    engine: "1103",
    power: "215",
    speed: "300+",
    accel: "2.9",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=90"
  },

  ktm: {
    name: "KTM RC 390",
    engine: "373",
    power: "43",
    speed: "170",
    accel: "5.5",
    image: "ktm390.jpg"
  }

};

function chooseBike(key) {

  const bike = bikeData[key];

  if (!bike) return;

  document.getElementById("heroBikeName").textContent = bike.name;

  document.getElementById("engine").innerHTML =
    `${bike.engine} <i>cc</i>`;

  document.getElementById("power").innerHTML =
    `${bike.power} <i>PS</i>`;

  document.getElementById("speed").innerHTML =
    `${bike.speed} <i>km/h</i>`;

  document.getElementById("accel").innerHTML =
    `${bike.accel} <i>sec</i>`;

  const heroImage = document.querySelector(".hero-image");

  heroImage.style.backgroundImage = `url("${bike.image}")`;

  heroImage.animate(
    [
      { opacity: 0.2, transform: "scale(1.12)" },
      { opacity: 1, transform: "scale(1.04)" }
    ],
    {
      duration: 800,
      easing: "ease-out"
    }
  );

  document.querySelectorAll(".model").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.bike === key
    );
  });

}

document.querySelectorAll(".model, .select-bike").forEach(button => {
  button.addEventListener("click", () => {
    chooseBike(button.dataset.bike);
  });
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

function compareBikes() {
  const first = document.getElementById("bikeOne").value;
  const second = document.getElementById("bikeTwo").value;

  const bike1 = bikeData[first];
  const bike2 = bikeData[second];

  const result = document.getElementById("comparisonResult");

  if (first === second) {
    result.innerHTML = "<p>Please select two different bikes!</p>";
    return;
  }

  result.innerHTML = `
        <table>
            <tr>
                <th>SPECIFICATION</th>
                <th>${bike1.name}</th>
                <th>${bike2.name}</th>
            </tr>
            <tr>
                <td>Engine</td>
                <td>${bike1.engine} cc</td>
                <td>${bike2.engine} cc</td>
            </tr>
            <tr>
                <td>Power</td>
                <td>${bike1.power} PS</td>
                <td>${bike2.power} PS</td>
            </tr>
            <tr>
                <td>Top Speed</td>
                <td>${bike1.speed} km/h</td>
                <td>${bike2.speed} km/h</td>
            </tr>
            <tr>
                <td>Acceleration</td>
                <td>${bike1.accel} sec</td>
                <td>${bike2.accel} sec</td>
            </tr>
        </table>
    `;
}

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("visitorName").value;

  document.getElementById("formMessage").textContent =
    "Thank you, " + name + "! Your enquiry has been submitted successfully.";

  this.reset();
});