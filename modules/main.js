import StorageManager from "./dataStorage.js";
import appSettings from "./settings.js";

// Load user settings from localStorage when the application starts
appSettings.loadSettings();

// Load all saved calendar events from localStorage when the application starts
const allEvents = StorageManager.loadAllEvents();
