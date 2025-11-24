// copyDefaultConfig.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Definition of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the default configuration file
const defaultConfigPath = path.resolve(__dirname, "../default.config.mjs");

// Path for the copy of the file in the project root
const userConfigPath = path.resolve(__dirname, "../../../../breakpoints.config.js");

// Check if the user configuration already exists
if (!fs.existsSync(userConfigPath)) {
    fs.copyFileSync(defaultConfigPath, userConfigPath);
    console.log(
        "Default configuration file has been copied to the root of the project as breakpoints.config.js"
    );
} else {
    console.log("User configuration file already exists.");
}
