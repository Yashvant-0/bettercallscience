// Show Details
function showDetails(element) {
    document.getElementById("elementName").textContent =
        element.getAttribute("data-name") + " (" + element.getAttribute("data-symbol") + ")";
    document.getElementById("atomicNumber").textContent = element.getAttribute("data-atomic-number");
    document.getElementById("atomicMass").textContent = element.getAttribute("data-atomic-mass");
    document.getElementById("standardState").textContent = element.getAttribute("data-standard-state");
    document.getElementById("electronConfig").textContent = element.getAttribute("data-electron-configuration");
    document.getElementById("oxidationStates").textContent = element.getAttribute("data-oxidation-states");
    document.getElementById("electronegativity").textContent = element.getAttribute("data-electronegativity");
    document.getElementById("atomicRadius").textContent = element.getAttribute("data-atomic-radius");
    document.getElementById("ionizationEnergy").textContent = element.getAttribute("data-ionization-energy");
    document.getElementById("electronAffinity").textContent = element.getAttribute("data-electron-affinity");
    document.getElementById("meltingPoint").textContent = element.getAttribute("data-melting-point");
    document.getElementById("boilingPoint").textContent = element.getAttribute("data-boiling-point");
    document.getElementById("density").textContent = element.getAttribute("data-density");
    document.getElementById("discoveredBy").textContent = element.getAttribute("data-discovered-by");
    document.getElementById("yearDiscovered").textContent = element.getAttribute("data-year-discovered");

    // Show the detail container and overlay
    document.getElementById("elementDetail").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Close Details on Click Outside
document.getElementById("overlay").addEventListener("click", function () {
    document.getElementById("elementDetail").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

// Attach Event Listeners to All Elements
document.querySelectorAll(".element").forEach((el) => {
    el.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from immediately closing the container
        showDetails(this);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");
    const body = document.body;

    // Move cursor with mouse
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Detect when hovering over clickable elements
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest("button, a, .clickable")) {
            body.classList.add("clickable-hover");
        } else {
            body.classList.remove("clickable-hover");
        }
    });

    // Click animation effect
    document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.9)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
window.onload = function() {
    window.scrollTo(0, 0);
  };
  