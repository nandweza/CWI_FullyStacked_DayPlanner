import StorageManager from "./dataStorage.js";
import submitEvent from "./eventManager.js";

// Load all saved calendar events from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();

// Show/hide/submit new event form
const addEventButton = document.getElementById("addEventButton");
const cancelEventButton = document.getElementById("cancelEventButton");
const eventForm = document.getElementById("eventForm");

addEventButton.addEventListener("click", () => {
  showEventCreator();
});

cancelEventButton.addEventListener("click", () => {
  hideEventCreator();
});

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitEvent(e.target);
  hideEventCreator();
});

function showEventCreator() {
  const eventPopupContainer = document.getElementById("eventPopupContainer");
  eventPopupContainer.classList.remove("hidden");
  eventPopupContainer.classList.add("visible");
}

function hideEventCreator() {
  const eventPopupContainer = document.getElementById("eventPopupContainer");
  eventPopupContainer.classList.remove("visible");
  eventPopupContainer.classList.add("hidden");
  eventForm.reset();
}
