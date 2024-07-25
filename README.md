# Tip Calculator

## Overview

This project is a Tip Calculator built using TypeScript and React. The application prompts the user to input the bill amount and tip percentage, then calculates and displays the total bill rounded to the nearest cent.

## Features

- **Bill Amount**: Input field for the user to enter the total amount of the bill.
- **Tip Percentage**: Input field for the user to specify the tip percentage (e.g., "15").
- **Total Bill**: Displays the total bill amount including the tip, rounded to the nearest cent.

## Instructions

1. **Input**:
   - **Bill Amount**: Enter the total amount of the bill.
   - **Tip Percentage**: Enter the percentage of the tip to be added to the bill.

2. **Output**:
   - The application will display the total bill amount formatted as "Your total bill is $16.23".

## TypeScript Usage

Ensure that you use proper TypeScript types for the input values and calculated outputs. Avoid using `any` if you are not sure about the type.

## Example

- **Input**:
  - Bill Amount: 50
  - Tip Percentage: 15

- **Output**:
  - Your total bill is $57.50

## Notes

- The total bill amount is rounded to the nearest cent for accurate representation.

## Setup Instructions

1. **Install Dependencies**

   ```bash
   npm install
   npm run dev