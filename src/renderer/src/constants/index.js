import { evaluate } from 'mathjs';

export const calculateResult = (exp) => {
  try {
    if (!exp) return ''; // Handle empty case

    // Replace 'x²' with exponentiation
    exp = exp.replace(/x²/g, '^2');

    // Convert percentages (e.g., "50%" → "50/100")
    exp = exp.replace(/(\d+)%/g, (_, num) => `(${num}/100)`);

    return String(evaluate(exp)); // Use mathjs instead of eval()
  } catch {
    return 'Error';
  }
};

export const handleButtonClick = (val, prevExp) => {
  if (val === 'C') return ''; // Clear expression
  if (val === '⌫') return prevExp.slice(0, -1); // Backspace
  if (val === '=' && prevExp) return calculateResult(prevExp); // Evaluate expression

  // Prevent multiple consecutive operators
  if (['+', '-', '*', '/'].includes(val) && ['+', '-', '*', '/'].includes(prevExp.slice(-1))) {
    return prevExp; // Ignore duplicate operators
  }

  return prevExp + val;
};

export const buttons = [
  '%', 'x²', 'C', '⌫',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '.', '0', '=', '+'
];
