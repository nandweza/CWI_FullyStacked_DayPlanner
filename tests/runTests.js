import eventTests from "./classCalendarEvent_test.js";
import storageTests from "./dataStorage_test.js";
import settingsTests from "./settings_test.js";

function runTests() {
  eventTests();
  storageTests();
  settingsTests();
}

export default runTests;
