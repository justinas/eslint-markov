var MESSAGES = [
  "Unexpected use of new with require",
  "Unexpected lexical declaration in case block",
  "use `{{recommendation}}` instead",
  "Unary operator '{{operator}}' used",
  "Ternary operator used",
  "'{{name}}' is already declared in the upper scope",
  "Identifier '{{name}}' is not in camel case",
  "Unexpected duplicate 'super()'",
  "Unexpected duplicate 'super()'",
  "Unexpected 'super()' because 'super' is not a constructor",
  "Unexpected 'super()'",
  "Implied eval. Consider passing a function instead of a string",
  "Expected a line break after this opening brace",
  "Expected a line break before this closing brace",
  "Unexpected line break after this opening brace",
  "Unexpected line break before this closing brace",
  "Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'",
  "Unexpected require()",
  "Value of '{{name}}' may be overwritten in IE 8 and earlier",
  "Missing '()' invoking a constructor",
  "Useless constructor",
  "Do not nest ternary expressions",
  "'{{module}}' {{message}",
  "Unexpected usage of {{description}}",
  "Use the spread operator instead of '.apply()'",
  "Function name `{{funcName}}` should match property name `{{name}}",
  "Function name `{{funcName}}` should match variable name `{{name}}",
  "Function name `{{funcName}}` should not match property name `{{name}}",
  "Function name `{{funcName}}` should not match variable name `{{name}}",
  "Unexpected chained assignment",
  "Do not use 'new' for side effects",
  "Blocks are nested too deeply ({{depth}})",
  "Unexpected use of process.env",
  "Bad line breaking before and after '{{operator}}'",
  "'{{operator}}' should be placed at the beginning of the line",
  "'{{operator}}' should be placed at the end of the line",
  "There should be no line break before or after '{{operator}}'",
  "Empty block statement",
  "Empty switch statement",
  "unnecessary '.{{name}}()'",
  "Unexpected string concatenation",
  "Unexpected use of continue statement",
  "Expected blank line after variable declarations",
  "Unexpected blank line after variable declarations",
  "'{{name}}' is not modified in this loop",
  "Unexpected trailing comma",
  "Missing trailing comma",
  "Unexpected mix of shorthand and non-shorthand properties",
  "Expected shorthand for all properties",
  "Expected longform method syntax for string literal key",
  "Expected longform property syntax",
  "Expected method shorthand",
  "Expected property shorthand",
  "Expected property shorthand",
  "There should be no space after '{{tokenValue}}'",
  "There should be no space before '{{tokenValue}}'",
  "A space is required after '{{tokenValue}}'",
  "A space is required before '{{tokenValue}}'",
  "Expected comment to be above code",
  "Expected comment to be beside code",
  "There should be no space after '{{tokenValue}}'",
  "There should be no space before '{{tokenValue}}'",
  "A space is required after '{{tokenValue}}'",
  "A space is required before '{{tokenValue}}'",
  "Unreachable code",
  "All 'var' declarations must be at the top of the function scope",
  "Unexpected control character(s) in regular expression: {{controlChars}}",
  "Spaces are hard to count. Use {{{count}}}",
  "The array literal notation [] is preferrable",
  "Expected whitespace after {{type}} operator",
  "Unexpected whitespace after {{type}} operator",
  "Unexpected var, use let or const instead",
  "Variable '{{idName}}' should be initialized on declaration",
  "Variable '{{idName}}' should not be initialized on declaration",
  "Expected newline before return statement",
  "Line {{lineNumber}} exceeds the maximum comment line length of {{maxCommentLength}}",
  "Line {{lineNumber}} exceeds the maximum line length of {{maxLength}}",
  "Duplicate param '{{name}}'",
  "Unexpected space between function name and paren",
  "Missing space between function name and paren",
  "Unexpected newline between function name and paren",
  "Use '{{expectedType}}' instead of '{{currentType}}'",
  "JSDoc type missing brace",
  "JSDoc syntax error",
  "Missing JSDoc parameter type for '{{name}}'",
  "Missing JSDoc parameter description for '{{name}}'",
  "Duplicate JSDoc parameter '{{name}}'",
  "Unexpected @{{title}} tag; function has no return statement",
  "Missing JSDoc return type",
  "Missing JSDoc return description",
  "Use @{{name}} instead",
  "Missing JSDoc @{{returns}} for function",
  "Expected JSDoc for '{{name}}' but found '{{jsdocName}}'",
  "Missing JSDoc for parameter '{{name}}'",
  "JSDoc description does not satisfy the regex pattern",
  "Newline required at end of file but not found",
  "Newline not allowed at end of file",
  "Expected object keys to be in {{natual}}{{insensitive}}{{order}}ending order. '{{thisName}}' should be before '{{prevName}}'",
  "This line has {{numberOfStatementsOnThisLine}} {{statements}}. Maximum allowed is {{maxStatementsPerLine}}",
  "Expected Unicode BOM (Byte Order Mark)",
  "Unexpected Unicode BOM (Byte Order Mark)",
  "Unexpected use of '{{name}}'",
  "Unexpected sync method: '{{propertyName}}'",
  "Expected line before comment",
  "Expected line after comment",
  "Use the isNaN function to compare with NaN",
  "'{{name}}:' is defined but never used",
  "Move {{type}} declaration to {{body}} root",
  "It's not necessary to initialize '{{name}}' to undefined",
  "Unnecessary semicolon",
  "Unexpected empty object pattern",
  "Unexpected empty array pattern",
  "'{{name}}' is a function",
  "Unexpected `await` inside a loop",
  "Comparing to itself is potentially pointless",
  "Script URL is a form of eval",
  "{{prefix}} space(s) before '}'",
  "{{prefix}} space(s) after '${'",
  "File must be at most {{max}} lines long. It's {{actual}} lines long",
  "'{{moduleName}}' module is restricted from being used",
  "'{{moduleName}}' module is restricted from being used by a pattern",
  "Expected Symbol to have a description",
  "Unexpected console statement",
  "Unexpected comma in middle of array",
  "There must be a space inside this paren",
  "There should be no spaces inside this paren",
  "Missing semicolon",
  "Extra semicolon",
  "Unexpected whitespace before property {{propName}}",
  "Missing parameters",
  "Missing radix parameter",
  "Redundant radix parameter",
  "Invalid radix parameter",
  "Unexpected block statement surrounding arrow body",
  "Expected block statement surrounding arrow body",
  "{{type}} space {{side}} *",
  "'{{objectName}}.{{propertyName}}' is restricted from being used.{{message}",
  "'{{propertyName}}' is restricted from being used.{{message}",
  "'{{name}}' is constant",
  "Octal literals should not be used",
  "`Symbol` cannot be called as a constructor",
  "Multiple spaces found before '{{value}}'",
  "Expected literal to be on the {{expectedSide}} side of {{operator}}",
  "Read-only global '{{name}}' should not be modified",
  "{{name}} has too many statements ({{count}}). Maximum allowed is {{max}}",
  "Avoid using {{existing}}, instead use {{substitute}}",
  "Use {{radixName}} literals instead of parseInt()",
  "Don't use octal: '\\{{octalDigit}}'. Use '\\u....' instead",
  "Do not use {{fn}} as a constructor",
  "A regular expression literal can be confused with '/='",
  "Block must be padded by blank lines",
  "Block must not be padded by blank lines",
  "Strings must use {{description}}",
  "Strings must use {{description}}",
  "'{{name}}' is assigned to itself",
  "Assignment to function parameter '{{name}}'",
  "Assignment to property of function parameter '{{name}}'",
  "Combine this with the previous '{{type}}' statement",
  "Combine this with the previous '{{type}}' statement with initialized variables",
  "Combine this with the previous '{{type}}' statement with uninitialized variables",
  "Split '{{type}}' declarations into multiple statements",
  "Split initialized '{{type}}' declarations into multiple statements",
  "Split uninitialized '{{type}}' declarations into multiple statements",
  "Trailing spaces not allowed",
  "This generator function does not have 'yield'",
  "Use the rest parameters instead of 'arguments'",
  "Missing space before =>",
  "Unexpected space before =>",
  "Missing space after =>",
  "Unexpected space after =>",
  "Infix operators must be spaced",
  "Using '{{type}}' is not allowed",
  "Expected parentheses around arrow function argument",
  "Unexpected parentheses around single function argument",
  "Unexpected parentheses around single function argument having a body with no curly brace",
  "Expected parentheses around arrow function argument having a body with curly braces",
  "[{{propertyValue}}] is better written in dot notation",
  ".{{propertyName}} is a syntax error",
  "Arrow function used ambiguously with a conditional expression",
  "Unnecessary 'else' after 'return'",
  "'{{kind}}' is not allowed before 'super()'",
  "Unexpected tab character",
  "Reserved name '__iterator__'",
  "Expected dot to be on same line as object",
  "Expected dot to be on same line as property",
  "Unexpected if as the only statement in an else block",
  "The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype",
  "Mixed spaces and tabs",
  "Expected a default case",
  "Unexpected string concatenation of literals",
  "Unexpected use of '{{operator}}'",
  "Unnecessary escape character: \\{{character}}",
  "Implicit global variable, assign as global property instead",
  "Implicit global variable, assign as global property instead",
  "Wrap an immediate function invocation in parentheses",
  "Wrap only the function expression in parens",
  "Move the invocation into the parens that contain the function",
  "Unexpected use of 'with' statement",
  "Return statement should not contain assignment",
  "Arrow function should not return assignment",
  "Getter is not present",
  "Setter is not present",
  "Unexpected template string expression",
  "Don't use process.exit(); throw an error instead",
  "Redundant double negation",
  "Redundant Boolean call",
  "Unexpected dangling '_' in '{{identifier}}'",
  "Unexpected dangling '_' in '{{identifier}}'",
  "Unexpected dangling '_' in '{{identifier}}'",
  "Expected an assignment or function call and instead saw an expression",
  "Requires a space",
  "Unexpected space(s",
  "{{message}} after '{'",
  "{{message}} before '}'",
  "{{name}} has a complexity of {{complexity}}",
  "Expected the Promise rejection reason to be an Error",
  "Unary word operator '{{word}}' must be followed by whitespace",
  "Unexpected space after unary word operator '{{word}}'",
  "Unary operator '{{operator}}' must be followed by whitespace",
  "Space is required before unary expressions '{{token}}'",
  "Unexpected space after unary operator '{{operator}}'",
  "Unexpected space before unary operator '{{operator}}'",
  "Do not access Object.prototype method '{{prop}}' from target object",
  "'{{name}}' is not a function",
  "Unsafe usage of {{nodeType}}",
  "A leading decimal point can be confused with a dot",
  "A trailing decimal point can be confused with a dot",
  "Unexpected comment inline with code",
  "Unexpected named {{name}}",
  "Unexpected unnamed {{name}}",
  "Unexpected space before function parentheses",
  "Missing space before function parentheses",
  "Unnecessary use of boolean literals in conditional expression",
  "Unnecessary use of conditional expression for default assignment",
  "{{type}} space {{side}} *",
  "This label '{{name}}' is unnecessary",
  "Missing space before opening brace",
  "Unexpected space before opening brace",
  "Variables should not be deleted",
  "Read-only global '{{name}}' should not be modified",
  "Bad line breaking before and after ','",
  "',' should be placed first",
  "',' should be placed last",
  "Comments should not begin with a lowercase characte",
  "Comments should not begin with an uppercase characte",
  "Too many blank lines at the beginning of file. Max of {{max}} allowed",
  "Too many blank lines at the end of file. Max of {{max}} allowed",
  "More than {{max}} blank {{pluralizedLines}} not allowed",
  "Unnecessarily quoted property '{{property}}' found",
  "Unquoted property '{{property}}' found",
  "Unquoted number literal '{{property}}' used as key",
  "Unquoted reserved word '{{property}}' used as key",
  "Properties shouldn't be quoted as all quotes are redundant",
  "Properties should be quoted as '{{property}}' is a reserved word",
  "Inconsistently quoted property '{{key}}' found",
  "Unexpected newline between function and ( of function call",
  "Unexpected newline between object and [ of property access",
  "Unexpected newline between template tag and template literal",
  "Unexpected '{{matchedTerm}}' comment",
  "Duplicate case label",
  "Unnecessary return statement",
  "The 'in' expression's left operand is negated",
  "The '__proto__' property is deprecated",
  "'{{importName}}' import is restricted from being used",
  "'{{importName}}' import is restricted from being used by a pattern",
  "Empty class",
  "Too many nested callbacks ({{num}}). Maximum allowed is {{max}}",
  "Unexpected function expression",
  "{{name}} has no 'await' expression",
  "{{builtin}} prototype is read only, properties should not be added",
  "{{objectName}} prototype is read only, properties should not be added",
  "Expected return with your callback function",
  "'{{name}}' used outside of binding context",
  "Duplicate name '{{name}}'",
  "Unexpected use of comma operator",
  "{{expected}} newline {{location}} \"{{value}}\" directive",
  "Expected space(s) before \"{{value}}\"",
  "Unexpected space(s) before \"{{value}}\"",
  "Expected space(s) after \"{{value}}\"",
  "Unexpected space(s) after \"{{value}}\"",
  "Expected error to be handled",
  "Missing JSDoc comment",
  "Do not assign to the exception parameter",
  "The object literal notation {} is preferrable",
  "Expected '{{syntaxA}}' syntax before '{{syntaxB}}' syntax",
  "Imports should be sorted alphabetically",
  "Member '{{memberName}}' of the import declaration should be sorted alphabetically",
  "Invalid flags supplied to RegExp constructor '{{flags}}'",
  "Identifier '{{name}}' does not match the pattern '{{pattern}}'",
  "Expected a 'break' statement before '{{type}}'",
  "Redundant use of `await` on a return value",
  "Expected line break before `{{callee}}`",
  "Expected 'this' to be used by class method '{{classMethod}}'",
  "{{expected}} newline between {{typeOfError}} of ternary expression",
  "'{{name}}' is not defined",
  "'{{name}}' is defined but never used",
  "'{{name}}' is assigned a value but never used",
  "Expected a function expression",
  "Expected a function declaration",
  "Expected a function declaration",
  "Gratuitous parentheses around expression",
  "Expected { after '{{name}}'{{suffix}}",
  "Unnecessary { after '{{name}}'{{suffix}}",
  "'{{name}}' is a class",
  "eval can be harmful",
  "The Function constructor is eval",
  "Expected a conditional expression and instead saw an assignment",
  "Unexpected assignment within {{type}}",
  "Multiline support is limited to browsers supporting ES5 only",
  "Unexpected space between function name and paren",
  "Expected variable declaration to be on a new line",
  "Found identifier with same name as label",
  "Unexpected 'this'",
  "Unexpected constant condition",
  "Unexpected space between template tag and template literal",
  "Missing space between template tag and template literal",
  "Unexpected labeled statement",
  "Unexpected label in break statement",
  "Unexpected label in continue statement",
  "'{{name}}' is never reassigned. Use 'const' instead",
  "Wrap the regexp literal in parens to disambiguate the slash",
  "Unnecessarily computed property [{{property}}] found",
  "Assignment can be replaced with operator assignment",
  "Assignment can be replaced with operator assignment",
  "Unexpected operator assignment shorthand",
  "'{{a}}' is already defined",
  "Variables within the same declaration block should be sorted alphabetically",
  "{{type}} {{name}} unnecessarily renamed",
  "Unexpected empty {{name}}",
  "{{name}} expected a return value",
  "Unexpected use of undefined",
  "Do not mix 'require' and other declarations",
  "Do not mix core, module, file and computed requires",
  "The function binding is unnecessary",
  "{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}",
  "Expected 'undefined' and instead saw 'void'",
  "Identifier '{{name}}' is blacklisted",
  "Unexpected negating the left operand of '{{operator}}' operator",
  "Unexpected negated condition",
  "Unexpected negated condition",
  "There should be no space after '{{token}}'",
  "There should be no space before '{{token}}'",
  "A space is required after '{{token}}'",
  "A space is required before '{{token}}'",
  "Use ‘===’ to compare with ‘null’",
  "Duplicate key '{{name}}'",
  "Unexpected 'debugger' statement",
  "Nested block is redundant",
  "Block is redundant",
  "Shadowing of global property '{{idName}}'",
  "'{{name}}' was used before it was defined",
  "Invalid typeof comparison value",
  "Typeof comparisons should be to string literals",
  "Don't make functions within a loop",
  "Avoid arguments.{{property}}",
  "Expected to return a value at the end of {{name}}",
  "{{name}} expected {{which}} return value",
  "Use path.join() or path.resolve() instead of + to create paths",
  "Unexpected whitespace before semicolon",
  "Missing whitespace before semicolon",
  "Unexpected whitespace after semicolon",
  "Missing whitespace after semicolon",
  "Expected an object to be thrown",
  "Do not throw undefined",
  "Number constants declarations must use 'const'",
  "No magic number: {{raw}}",
  "Opening curly brace does not appear on the same line as controlling statement",
  "Opening curly brace appears on the same line as controlling statement",
  "Statement inside of curly braces should be on next line",
  "Closing curly brace does not appear on the same line as the subsequent block",
  "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block",
  "Closing curly brace appears on the same line as the subsequent block",
  "Designated alias '{{alias}}' is not assigned to 'this'",
  "Unexpected alias '{{name}}' for 'this'"
];

var chains = Object.create(null);
chains[""] = [];

MESSAGES.forEach(function(el) {
  var words = el.split(" ").map(function(w) {
    return w.toLowerCase();
  });
  if (words[0]) {
    chains[""].push(words[0]);
  }
  for (var i = 0; i < words.length; i++) {
    var key = words[i];
    if (!chains[key]) {
      chains[key] = [];
    }
    chains[key].push(words[i+1] || "");
  }
});

function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

function generate() {
  var words = [];

  var key = "";
  words.push(randomChoice(chains[key]));

  for (;;) {
    key = words[words.length-1];
    var choice = randomChoice(chains[key]);
    if (choice === "") {
      break;
    }
    words.push(choice);
  }

  var text = words.join(" ");
  text = resolvePlaceholders(text);
  return text[0].toUpperCase() + text.slice(1) + ".";
}

function generateOnSteroids() { // eslint-disable-line no-unused-vars
  for (;;) {
    var text = generate();
    // Artificially skip some short chains.
    // Getting five 2-word rules in a row is not fun.
    if (text.split(" ").length >= 5 || Math.random() <= 0.25) {
      return text;
    }
  }
}

function resolvePlaceholders(string) {
  return string.replace(/\{{2,3}(\w+?)\}{2,3}/g, function($0, type) {
    if (typeof PLACEHOLDERS[type] === "function") {
      return PLACEHOLDERS[type]();
    }
    return $0;
  });
}

var PLACEHOLDERS = {
  count: function() {
    return Math.floor(Math.random() * 10);
  },
  linenumber: function() {
    return Math.floor(Math.random() * 200);
  },
  name: function() {
    return randomChoice(['foo', 'bar', 'baz', 'qux', 'quux']);
  },
  operator: function() {
    return randomChoice([
      '=', '+', '-', '/', '*', '%', '**', '<<',
      '>>', '>>>', '&', '^', '|', '==', '!=', '===',
      '!==', '>', '>=', '<', '<=', '++', '--', '~',
      '&&', '||', '!'
    ]);
  },
  type: function() {
    return randomChoice([
      "undefined", "null", "boolean", "number",
      "string", "symbol", "function", "object"
    ]);
  }
};
PLACEHOLDERS.actualoperator = PLACEHOLDERS.expectedoperator =
  PLACEHOLDERS.operator;
PLACEHOLDERS.depth = PLACEHOLDERS.numberofstatementsonthisline =
  PLACEHOLDERS.maxlength = PLACEHOLDERS.maxcommentlength =
  PLACEHOLDERS.numberofstatementsonthisline =
  PLACEHOLDERS.maxstatementsperline = PLACEHOLDERS.max =
  PLACEHOLDERS.count;
PLACEHOLDERS.funcname = PLACEHOLDERS.idname =
  PLACEHOLDERS.importname = PLACEHOLDERS.modulename =
  PLACEHOLDERS.prevname = PLACEHOLDERS.objectname =
  PLACEHOLDERS.property = PLACEHOLDERS.propertyname =
  PLACEHOLDERS.propname = PLACEHOLDERS.idname =
  PLACEHOLDERS.thisname = PLACEHOLDERS.prevname =
  PLACEHOLDERS.name;
PLACEHOLDERS.expectedtype = PLACEHOLDERS.currenttype =
  PLACEHOLDERS.type;

if (typeof process !== 'undefined') {
  // Running in Node.js
  console.log(generate()); // eslint-disable-line no-console
}
