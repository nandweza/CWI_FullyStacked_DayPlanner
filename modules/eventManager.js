import generateUID from "./UIDGenerator.js";
import StorageManager from "./dataStorage.js";

/** Handle form submission for creating a new calendar event
 * @param {HTMLFormElement} eventForm - The form element containing event details
 * Extracts data from the form, creates an event object, and assigns it a unique identifier (UID)
 * Uses StorageManager to store the event in localStorage
 */
export default function submitEvent(eventForm) {
  const data = new FormData(eventForm);
  const event = Object.fromEntries(data);
  const id = generateUID();
  event.UID = id;
  StorageManager.saveEvent(event);
  console.log("Event saved (UID: " + id + ")");
}
