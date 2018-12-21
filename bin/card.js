#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("Whoofy Atap Mogre /"),
  handle: chalk.cyan("whoofythecutegolden"),
  work: chalk.white("The cutest doggo in the world"),
  instagram: chalk.cyan("https://www.instagram.com/whoofythecutegolden"),
  npx: chalk.white("npx whoofy"),
  labelWork: chalk.white.bold("      Work:"),
  labelInstagram: chalk.white.bold(" Instagram:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const instagramming = `${data.labelInstagram}  ${data.instagram}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  instagramming +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
