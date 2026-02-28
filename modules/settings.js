// Remember to change the restoreDefaults() method and testSuite() if you change any of these default values

let lightMode = "light";
const lightModeOptions = ["light", "dark", "auto"];

let tempUnit = "Fahrenheit";
const tempUnitOptions = ["Celsius", "Fahrenheit"];

let colorTheme = "blue";
const colorThemeOptions = [
  "blue",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
];

let firstDayOfWeek = "Sunday";
const firstDayOfWeekOptions = ["Sunday", "Monday"];

let displayHolidays = true;
const diplayHolidaysOptions = [true, false];

/**
 * Manages application settings, including saving to and loading from localStorage.
 * Each setting has a getter and setter that validates input against predefined options.
 * Invalid values are logged to the console with a warning message.
 * The restoreDefaults() method resets all settings to their default values.
 */
const appSettings = {
  get lightMode() {
    return lightMode;
  },
  set lightMode(value) {
    if (lightModeOptions.includes(value)) {
      lightMode = value;
    } else {
      logInvalidValue(value, "lightMode", lightModeOptions);
    }
  },
  get tempUnit() {
    return tempUnit;
  },
  set tempUnit(value) {
    if (tempUnitOptions.includes(value)) {
      tempUnit = value;
    } else {
      logInvalidValue(value, "tempUnit", tempUnitOptions);
    }
  },
  get colorTheme() {
    return colorTheme;
  },
  set colorTheme(value) {
    if (colorThemeOptions.includes(value)) {
      colorTheme = value;
    } else {
      logInvalidValue(value, "colorTheme", colorThemeOptions);
    }
  },
  get firstDayOfWeek() {
    return firstDayOfWeek;
  },
  set firstDayOfWeek(value) {
    if (firstDayOfWeekOptions.includes(value)) {
      firstDayOfWeek = value;
    } else {
      logInvalidValue(value, "firstDayOfWeek", firstDayOfWeekOptions);
    }
  },
  get displayHolidays() {
    return displayHolidays;
  },
  set displayHolidays(value) {
    if (diplayHolidaysOptions.includes(value)) {
      displayHolidays = value;
    } else {
      logInvalidValue(value, "displayHolidays", diplayHolidaysOptions);
    }
  },

  restoreDefaults() {
    this.lightMode = "light";
    this.tempUnit = "Fahrenheit";
    this.colorTheme = "blue";
    this.firstDayOfWeek = "Sunday";
    this.displayHolidays = true;
  },

  saveSettings() {
    const settings = {
      lightMode,
      tempUnit,
      colorTheme,
      firstDayOfWeek,
      displayHolidays,
    };
    localStorage.setItem("DayPlannerSettings", JSON.stringify(settings));
  },

  loadSettings() {
    const settingsString = localStorage.getItem("DayPlannerSettings");
    if (settingsString) {
      try {
        const settings = JSON.parse(settingsString);
        this.lightMode = settings.lightMode;
        this.tempUnit = settings.tempUnit;
        this.colorTheme = settings.colorTheme;
        this.firstDayOfWeek = settings.firstDayOfWeek;
        this.displayHolidays = settings.displayHolidays;
      } catch (error) {
        console.error("Error parsing settings from localStorage:", error);
      }
    } else {
      console.log("No saved settings found in localStorage.");
    }
  },

  runTestSuite() {
    testSuite();
  },
};

/**
 * Logs a warning message to the console when an invalid value is assigned to a setting, including the setting name and valid options.
 * @param {*} value
 * @param {string} settingName
 * @param {Array} validOptions
 */
function logInvalidValue(value, settingName, validOptions) {
  console.warn(
    `Invalid value for ${settingName}: ${value}. Valid options are: ${validOptions.join(
      ", ",
    )}.`,
  );
}

/**
 * Test suite for the appSettings module, covering validation of setting assignments and persistence to localStorage.
 * Each setting is tested with both valid and invalid values, with assertions to verify correct behavior.
 * Default values are tested by calling restoreDefaults() and verifying that settings are reset correctly.
 * The save and load functionality is also tested to ensure settings are correctly persisted and restored.
 */
function testSuite() {
  console.log("Running settings module test suite...");
  appSettings.restoreDefaults();

  // Test valid and invalid assignments for each setting, with assertions to verify
  // that invalid values do not change the setting and valid values do change it
  console.log("Attempting to assign invalid value to lightMode...");
  appSettings.lightMode = "fail"; // Invalid value
  console.assert(
    appSettings.lightMode === "light",
    "lightMode should remain 'light' after invalid assignment",
  );

  console.log("Attempting to assign valid value to lightMode...");
  appSettings.lightMode = "dark";
  console.assert(
    appSettings.lightMode === "dark",
    "lightMode should be 'dark' after valid assignment",
  );

  console.log("Attempting to assign invalid value to tempUnit...");
  appSettings.tempUnit = "Kelvin"; // Invalid value
  console.assert(
    appSettings.tempUnit === "Fahrenheit",
    "tempUnit should remain 'Fahrenheit' after invalid assignment",
  );

  console.log("Attempting to assign valid value to tempUnit...");
  appSettings.tempUnit = "Celsius";
  console.assert(
    appSettings.tempUnit === "Celsius",
    "tempUnit should be 'Celsius' after valid assignment",
  );

  console.log("Attempting to assign invalid value to colorTheme...");
  appSettings.colorTheme = "invalid"; // Invalid value
  console.assert(
    appSettings.colorTheme === "blue",
    "colorTheme should remain 'blue' after invalid assignment",
  );

  console.log("Attempting to assign valid value to colorTheme...");
  appSettings.colorTheme = "purple";
  console.assert(
    appSettings.colorTheme === "purple",
    "colorTheme should be 'purple' after valid assignment",
  );

  console.log("Attempting to assign invalid value to firstDayOfWeek...");
  appSettings.firstDayOfWeek = "Tuesday"; // Invalid value
  console.assert(
    appSettings.firstDayOfWeek === "Sunday",
    "firstDayOfWeek should remain 'Sunday' after invalid assignment",
  );

  console.log("Attempting to assign valid value to firstDayOfWeek...");
  appSettings.firstDayOfWeek = "Monday";
  console.assert(
    appSettings.firstDayOfWeek === "Monday",
    "firstDayOfWeek should be 'Monday' after valid assignment",
  );

  console.log("Attempting to assign invalid value to displayHolidays...");
  appSettings.displayHolidays = "yes"; // Invalid value
  console.assert(
    appSettings.displayHolidays === true,
    "displayHolidays should remain true after invalid assignment",
  );

  console.log("Attempting to assign valid value to displayHolidays...");
  appSettings.displayHolidays = false;
  console.assert(
    appSettings.displayHolidays === false,
    "displayHolidays should be false after valid assignment",
  );

  // Test saving and loading settings to/from localStorage, with assertions to verify
  // that settings are correctly restored after loading

  console.log("Testing save and load settings...");
  console.log("Saving current settings to localStorage...");
  appSettings.saveSettings();

  console.log("Restoring defaults before loading settings...");
  appSettings.restoreDefaults();
  console.log("Checking that defaults were restored correctly...");
  console.assert(
    appSettings.lightMode === "light",
    "lightMode should be 'light' after restoring defaults",
  );
  console.assert(
    appSettings.tempUnit === "Fahrenheit",
    "tempUnit should be 'Fahrenheit' after restoring defaults",
  );
  console.assert(
    appSettings.colorTheme === "blue",
    "colorTheme should be 'blue' after restoring defaults",
  );
  console.assert(
    appSettings.firstDayOfWeek === "Sunday",
    "firstDayOfWeek should be 'Sunday' after restoring defaults",
  );
  console.assert(
    appSettings.displayHolidays === true,
    "displayHolidays should be true after restoring defaults",
  );

  console.log("Loading previous settings from localStorage...");
  appSettings.loadSettings();
  console.log("Checking that settings were loaded correctly...");
  console.assert(
    appSettings.lightMode === "dark",
    "lightMode should be 'dark' after saving and loading settings",
  );
  console.assert(
    appSettings.tempUnit === "Celsius",
    "tempUnit should be 'Celsius' after saving and loading settings",
  );
  console.assert(
    appSettings.colorTheme === "purple",
    "colorTheme should be 'purple' after saving and loading settings",
  );
  console.assert(
    appSettings.firstDayOfWeek === "Monday",
    "firstDayOfWeek should be 'Monday' after saving and loading settings",
  );
  console.assert(
    appSettings.displayHolidays === false,
    "displayHolidays should be false after saving and loading settings",
  );

  console.log("AppSettings test suite completed.");
}

export default appSettings;
