// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid

const expressionMap = new Map();

expressionMap
  .set("*", /([+-]*\d+(\.\d+)?[*][+-]*\d+(\.\d+)?)/g)
  .set("/", /([+-]*\d+(\.\d+)?[/][+-]*\d+(\.\d+)?)/g)
  .set("md", /([/*])/g)
  .set("as", /([+-]*\d+(\.\d+)?([-+])[+-]*\d+(\.\d+)?)/dg)
  .set("mr", /-+/g)
  .set("pr", /\++/g);

export const calc = function calculate(expression) {
  let parenthesisRegex = /\(/g;
  let value, valueObj;

  if (parenthesisRegex.test(expression)) {
    valueObj = parenthesisEvaluator(expression, { index: 0, value: null });
    value = valueObj.value;
  } else {
    value = evaluator(reducer(expression));
  }

  return Number.parseFloat(value);
};

function parenthesisEvaluator(expr, data) {
  let exprAccumulator = "";

  for (let i = data.index; i < expr.length; i++) {
    let currLetter = expr[i];

    if (currLetter === "(") {
      data = parenthesisEvaluator(expr, {
        index: i + 1,
        value: exprAccumulator,
      });
      exprAccumulator += data.value;
      i = data.index;
    } else if (currLetter === ")") {
      let evaluatedExpr = evaluator(reducer(exprAccumulator));
      return { index: i, value: evaluatedExpr };
    } else {
      exprAccumulator += currLetter;
    }

    if (i === expr.length - 1) {
      data.value = evaluator(reducer(exprAccumulator));
    }
  }

  return data;
}

function reducer(expr) {
  let minusRegex = expressionMap.get("mr");
  let plusRegex = expressionMap.get("pr");

  expr = expr.replaceAll(" ", "");

  let minusMatches = expr.match(minusRegex);

  if (minusMatches) {
    minusMatches.forEach((e) => {
      expr = e.length % 2 === 0 ? expr.replace(e, "+") : expr.replace(e, "-");
    });
  }

  let plusMatches = expr.match(plusRegex);

  if (plusMatches) {
    plusMatches.forEach((e) => {
      expr = expr.replace(e, "+");
    });
  }

  expr = expr.replace("+-", "-").replace("-+", "-");

  return expr;
}

function evaluator(expr) {
  let mdRegEx, asRegEx, mdOperationRegex;
  let mdExpression, mdOperations;

  const asSignGroup = 3;

  mdOperationRegex = expressionMap.get("md");

  mdOperations = expr.match(mdOperationRegex);

  if (mdOperations) {
    mdOperations.forEach((mdOperation) => {
      mdRegEx = expressionMap.get(mdOperation);
      mdExpression = expr.match(mdRegEx);

      let numbers = mdExpression[0].split(mdOperation);
      let mathResult = doMath(mdOperation, numbers);
      expr = expr.replace(mdExpression[0], mathResult);
    });
  }

  asRegEx = expressionMap.get("as");

  for (
    let execArray = asRegEx.exec(expr);
    execArray;
    execArray = asRegEx.exec(expr)
  ) {
    let asOperation = execArray[asSignGroup];
    let asOperationIdx = execArray.indices[asSignGroup][0];

    let numbers = [
      expr.substring(0, asOperationIdx),
      expr.substring(asOperationIdx + 1, execArray[0].length),
    ];

    let sumOrDiff = doMath(asOperation, numbers);
    expr = expr.replace(execArray[0], sumOrDiff);
    asRegEx.lastIndex = 0;
  }

  return expr;
}

function doMath(operation, nums) {
  let total;

  nums.forEach((e) => {
    let numElement = Number.parseFloat(e);

    if (!total) total = numElement;
    else if (operation === "*") total *= numElement;
    else if (operation === "/") total /= numElement;
    else if (operation === "+") total += numElement;
    else if (operation === "-") total -= numElement;
  });

  return total && total > 0 ? "+".concat(total) : total;
}
