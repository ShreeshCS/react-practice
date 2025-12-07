# Introduction

TypeScript is a typed superset of JavaScript designed to enhance the development experience without altering how JavaScript runs. It brings static typing, allowing developers to define the expected shape of data before the code executes. This reduces runtime errors, increases code clarity, and enables tools like editors and linters to catch problems early.

TypeScript behaves like a layer of predictability on top of JavaScript’s dynamic nature. It doesn’t restrict creativity or flexibility; instead, it offers guardrails that guide code toward better structure. For modern frontend development—especially with React—TypeScript has become a practical necessity for building scalable and maintainable applications.

In essence, TypeScript ensures that your intentions in code are clear, enforced, and easy for both humans and tools to understand.
# Why JavaScript & React Developers Should Learn TypeScript

JavaScript is flexible, dynamic, and expressive—but this flexibility creates common sources of bugs:
- Passing the wrong props to components  
- Mis-typing property names  
- Handling unexpected API responses  
- Maintaining large codebases with inconsistent data shapes  
- Losing track of what a function expects or returns  

TypeScript addresses these issues by enforcing predictable data structures, allowing you to define the shape and type of values your code depends on.

For React developers, TypeScript provides:
- Strongly typed component props  
- Safer useState and useReducer patterns  
- Reliable event handling  
- Better integration with APIs and backend services  
- Autocomplete that truly understands your components  
- Code that documents itself through types  

As projects grow, TypeScript reduces cognitive load, helping developers reason about data flow and preventing regressions. It brings long-term stability while retaining JavaScript’s flexibility.

# Table of Contents
1. JS vs TS Variable Declarations
2. Primitive & Non-Primitive Types
3. Type Inference & Type Annotations
4. Functions in TS
	- Declaration
	- Return Types
	- Optional Params
	- Default Params
	- Overloads
5. Objects, Arrays, Tuples
6. Interfaces vs Types
7. Enums
8. Generics
9. Union & Intersection Types
10. Utility Types
11. Narrowing Techniques
12. Special TS-only Features
	- readonly
	- keyof
	- generics with constraints
	- mapped types
13. React + TypeScript
	- Adding TypeScript to React apps
	- Typing functional components
	- Typing props & default props
	- Typing children
	- Typing events
	- Typing refs
	- Typing state (basic + complex)
	- Using generics inside React components
	- Custom hook typing
	- Typing Context API
	- Typing Redux Toolkit & React Query (optional)

# JS vs TS Variable Declarations

TypeScript enhances JavaScript by introducing type annotations that describe the intended use of variables, functions, and objects. These annotations do not change how the code executes—they simply allow TypeScript to verify correctness before runtime.

## Variable Declarations

In JavaScript, variables can change type freely:
```js
let age = 25;
age = "now a string";
```

In TypeScript, you can add type annotations to restrict variable types:
```ts
let age: number = 25;
// age = "string"; // Error: Type 'string' is not assignable to type 'number'
```

### Comparison Table
| Feature                | JavaScript                | TypeScript                  |
|------------------------|---------------------------|-----------------------------|
| Type Safety            | No                        | Yes                         |
| Type Annotation        | No                        | Yes                         |
| Compile-time Checking  | No                        | Yes                         |
| Flexibility            | High (dynamic)            | Controlled (static)         |
| Error Detection        | Runtime                   | Compile-time                |

### More Examples
```js
// JavaScript
let value = 10;
value = "hello"; // Allowed
```
```ts
// TypeScript
let value: string = "hello";
value = 42; // Error: Type 'number' is not assignable to type 'string'
```

TypeScript helps catch mistakes early, making code more predictable and easier to maintain.
# Primitive & Non-Primitive Types

## Primitive Types

Primitive types are the basic building blocks of data in JavaScript and TypeScript. They include:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol` (ES6)
- `bigint` (ES2020)

TypeScript allows you to explicitly annotate these types:
```ts
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol("id");
let big: bigint = 9007199254740991n;
```

## Non-Primitive Types

Non-primitive types refer to objects, arrays, and functions. These are reference types:

- `object`
- `array`
- `function`

Examples:
```ts
let person: { name: string; age: number } = { name: "Bob", age: 25 };
let numbers: number[] = [1, 2, 3];
let greet: (msg: string) => void = (msg) => console.log(msg);
```

## Comparison Table
| Type                | Example                | Description                       |
|---------------------|------------------------|-----------------------------------|
| string              | "hello"                | Textual data                      |
| number              | 42                     | Numeric data                      |
| boolean             | true                   | Logical value                     |
| null                | null                   | Explicit absence of value         |
| undefined           | undefined              | Uninitialized variable            |
| symbol              | Symbol("id")           | Unique identifier                 |
| bigint              | 123n                   | Large integer                     |
| object              | { a: 1 }               | Collection of properties          |
| array               | [1, 2, 3]              | List of values                    |
| function            | () => {}               | Callable code block               |

## Key Differences
- Primitives are immutable and compared by value.
- Non-primitives are mutable and compared by reference.
- TypeScript enforces type safety for both primitive and non-primitive types.

# Type Inference & Type Annotations

## Type Inference

TypeScript can automatically determine (infer) the type of a variable based on its initial value. This makes code concise while still providing type safety.

```ts
let count = 10; // inferred as number
let username = "Alice"; // inferred as string
let isReady = true; // inferred as boolean
```

If you try to assign a value of a different type, TypeScript will show an error:
```ts
count = "ten"; // Error: Type 'string' is not assignable to type 'number'
```

## Type Annotations

Type annotations allow you to explicitly specify the type of a variable, function parameter, or return value. This is useful for clarity and for complex types.

```ts
let age: number = 25;
let name: string = "Bob";
let isActive: boolean = false;

function greet(person: string): void {
	console.log("Hello, " + person);
}
```

## Comparison
- Type inference is automatic and works for simple cases.
- Type annotations are manual and necessary for complex or ambiguous cases.

## Example: Inference vs Annotation
```ts
// Inference
let score = 100; // number

// Annotation
let score2: number = 100;
```

## When to Use Each
- Use inference for simple, obvious values.
- Use annotations for function signatures, object shapes, and when clarity is needed.

# Functions in TypeScript

## Function Declaration
TypeScript lets you specify types for function parameters and return values:
```ts
function add(a: number, b: number): number {
	return a + b;
}
```

## Optional Parameters
Use `?` to mark a parameter as optional:
```ts
function greet(name: string, greeting?: string): void {
	console.log(greeting ? `${greeting}, ${name}` : `Hello, ${name}`);
}
greet("Alice"); // Hello, Alice
greet("Bob", "Hi"); // Hi, Bob
```

## Default Parameters
Assign default values to parameters:
```ts
function log(message: string, level: string = "info"): void {
	console.log(`[${level}] ${message}`);
}
log("Server started"); // [info] Server started
log("Error occurred", "error"); // [error] Error occurred
```

## Return Types
Explicitly annotate return types for clarity:
```ts
function multiply(x: number, y: number): number {
	return x * y;
}

function printName(name: string): void {
	console.log(name);
}
```

## Function Overloads
TypeScript supports function overloads for multiple call signatures:
```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
	return a + b;
}

combine("Hello, ", "world!"); // string
combine(1, 2); // number
```

## Arrow Functions
Arrow functions can also be typed:
```ts
const square = (n: number): number => n * n;
```

## Summary
- Always annotate function parameters and return types for clarity and safety.
- Use optional and default parameters for flexibility.
- Overloads allow multiple call signatures for a single function.

# Objects, Arrays, Tuples

## Objects
TypeScript allows you to define the shape of objects using type annotations:
```ts
let user: { name: string; age: number } = {
	name: "Alice",
	age: 30
};
```
You can also use interfaces or type aliases for reusable object shapes (see next section).

## Arrays
Arrays can be typed using `type[]` or `Array<type>`:
```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```
Arrays can contain objects:
```ts
let users: { name: string; age: number }[] = [
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 25 }
];
```

## Tuples
Tuples are fixed-length arrays with specific types for each element:
```ts
let point: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ["Alice", 30, true];
```
Tuples are useful for representing structured data with a known order and type for each item.

## Comparison Table
| Feature   | Example                        | Description                       |
|-----------|--------------------------------|-----------------------------------|
| Object    | { a: 1, b: 2 }                 | Key-value pairs                   |
| Array     | [1, 2, 3]                      | List of values, same type         |
| Tuple     | ["Alice", 30, true]            | Fixed-length, specific types      |

## Summary
- Objects: Use for key-value data with named properties.
- Arrays: Use for lists of values of the same type.
- Tuples: Use for ordered collections with fixed types and length.

# Interfaces vs Types

## Interfaces
Interfaces are used to define the shape of objects. They are extendable and can be merged.
```ts
interface User {
	name: string;
	age: number;
}

let user: User = { name: "Alice", age: 30 };
```
Interfaces can extend other interfaces:
```ts
interface Person {
	name: string;
}
interface Employee extends Person {
	id: number;
}
let emp: Employee = { name: "Bob", id: 101 };
```

## Type Aliases
Type aliases can describe any type, including primitives, unions, intersections, and objects:
```ts
type Point = { x: number; y: number };
type ID = string | number;
let p: Point = { x: 10, y: 20 };
let id: ID = "abc";
```
Type aliases can also extend other types using intersections:
```ts
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
let person: Person = { name: "Alice", age: 30 };
```

## Key Differences
- Interfaces are best for object shapes and can be extended/merged.
- Types are more flexible, can represent primitives, unions, intersections, and objects.
- Interfaces are preferred for public APIs and React props.
- Types are useful for complex type compositions.

## Comparison Table
| Feature         | Interface                | Type Alias                  |
|-----------------|--------------------------|-----------------------------|
| Extends         | Yes                      | Yes (with intersections)    |
| Implements      | Yes                      | Yes                        |
| Declaration     | `interface`              | `type`                     |
| Merging         | Yes (declaration merging)| No                         |
| Use with Props  | Yes                      | Yes                        |
| Unions          | No                       | Yes                        |
| Intersections   | No                       | Yes                        |

## Example: React Props
```ts
interface Props {
	title: string;
	count?: number;
}
const Header: React.FC<Props> = ({ title, count }) => (
	<h1>{title} {count}</h1>
);
```

# Enums

## What are Enums?
Enums (enumerations) are a TypeScript feature for defining a set of named constants. They make code more readable and help represent a fixed set of options.

## Numeric Enums
The default enum type is numeric:
```ts
enum Direction {
	Up,
	Down,
	Left,
	Right
}
let move: Direction = Direction.Up;
console.log(move); // 0
```
You can assign custom values:
```ts
enum Status {
	Success = 200,
	NotFound = 404,
	ServerError = 500
}
let code: Status = Status.NotFound;
console.log(code); // 404
```

## String Enums
Enums can use string values:
```ts
enum Color {
	Red = "RED",
	Green = "GREEN",
	Blue = "BLUE"
}
let c: Color = Color.Green;
console.log(c); // "GREEN"
```

## Heterogeneous Enums
Enums can mix string and numeric values (not recommended):
```ts
enum Mixed {
	No = 0,
	Yes = "YES"
}
```

## Use Cases
- Representing states, directions, options, etc.
- Improving code readability and maintainability.

## Comparison Table
| Feature         | Enum Example                | Description                       |
|-----------------|----------------------------|-----------------------------------|
| Numeric Enum    | Direction.Up               | Maps to number (0, 1, ...)        |
| String Enum     | Color.Green                | Maps to string ("GREEN")          |
| Custom Values   | Status.NotFound            | Custom number/string values        |

## Summary
- Use enums for a fixed set of related constants.
- Prefer string enums for clarity in debugging and logging.

# Generics

## What are Generics?
Generics allow you to write reusable, type-safe code that works with any data type. They are like variables for types.

## Generic Functions
You can define functions that accept any type:
```ts
function identity<T>(value: T): T {
	return value;
}
let num = identity<number>(42); // T is number
let str = identity<string>("hello"); // T is string
```

## Generic Arrays
```ts
function firstElement<T>(arr: T[]): T | undefined {
	return arr[0];
}
let first = firstElement<string>(["a", "b", "c"]); // "a"
```

## Generic Interfaces & Types
```ts
interface Box<T> {
	value: T;
}
let box: Box<number> = { value: 123 };
let strBox: Box<string> = { value: "abc" };
```

## Generic Constraints
You can restrict generics to certain types:
```ts
function getLength<T extends { length: number }>(item: T): number {
	return item.length;
}
getLength([1, 2, 3]); // 3
getLength("hello"); // 5
```

## Generics in React
Generics are useful for typing components and hooks:
```ts
function useArray<T>(initial: T[]): [T[], (item: T) => void] {
	const [arr, setArr] = React.useState(initial);
	const add = (item: T) => setArr(a => [...a, item]);
	return [arr, add];
}
```

## Summary
- Generics make code flexible and type-safe.
- Use generics for reusable functions, types, and components.

# Union & Intersection Types

## Union Types
Union types allow a variable to be one of several types. Use the `|` operator:
```ts
let value: string | number;
value = "hello";
value = 42;
```
Unions are useful for function parameters:
```ts
function printId(id: string | number) {
	console.log("ID:", id);
}
```

## Intersection Types
Intersection types combine multiple types into one. Use the `&` operator:
```ts
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
let p: Person = { name: "Alice", age: 30 };
```
Intersections are useful for combining object shapes:
```ts
type Employee = { id: number } & Person;
let emp: Employee = { id: 101, name: "Bob", age: 25 };
```

## Comparison Table
| Feature      | Union Type (`\|`)         | Intersection Type (`&`)         |
|--------------|--------------------------|---------------------------------|
| Combines     | Multiple possible types  | Multiple required types         |
| Example      | string | number          | { name } & { age }              |
| Use Case     | Flexible parameters      | Merging object shapes           |

## Summary
- Use unions for flexibility (either/or types).
- Use intersections for combining multiple type requirements.

# Utility Types

## What are Utility Types?
Utility types are built-in TypeScript types that help transform or construct new types from existing ones. They make type manipulation easier and safer.

## Common Utility Types

- `Partial<T>`: Makes all properties optional.
	```ts
	interface User { name: string; age: number; }
	let u: Partial<User> = { name: "Alice" };
	```
- `Required<T>`: Makes all properties required.
	```ts
	interface User { name?: string; age?: number; }
	let u: Required<User> = { name: "Bob", age: 30 };
	```
- `Readonly<T>`: Makes all properties read-only.
	```ts
	interface User { name: string; }
	let u: Readonly<User> = { name: "Alice" };
	// u.name = "Bob"; // Error
	```
- `Pick<T, K>`: Selects a subset of properties.
	```ts
	interface User { name: string; age: number; email: string; }
	let u: Pick<User, "name" | "email"> = { name: "Alice", email: "a@b.com" };
	```
- `Omit<T, K>`: Removes a subset of properties.
	```ts
	interface User { name: string; age: number; email: string; }
	let u: Omit<User, "age"> = { name: "Alice", email: "a@b.com" };
	```
- `Record<K, T>`: Constructs a type with a set of properties of type T.
	```ts
	type Scores = Record<string, number>;
	let scores: Scores = { Alice: 10, Bob: 8 };
	```
- `Exclude<T, U>`: Excludes types from a union.
	```ts
	type Status = "success" | "error" | "pending";
	type Finished = Exclude<Status, "pending">; // "success" | "error"
	```
- `Extract<T, U>`: Extracts types from a union.
	```ts
	type Status = "success" | "error" | "pending";
	type OnlyPending = Extract<Status, "pending">; // "pending"
	```
- `ReturnType<T>`: Gets the return type of a function.
	```ts
	function getUser() { return { name: "Alice", age: 30 }; }
	type UserType = ReturnType<typeof getUser>;
	```

## Summary
- Utility types help you manipulate and compose types efficiently.
- They are essential for building scalable, maintainable TypeScript code.

# Narrowing Techniques

## What is Type Narrowing?
Type narrowing is the process of refining a variable’s type within a block of code, so TypeScript can safely access properties and methods specific to that type.

## Common Narrowing Techniques

- **typeof checks**
	```ts
	function printValue(val: string | number) {
		if (typeof val === "string") {
			console.log(val.toUpperCase());
		} else {
			console.log(val.toFixed(2));
		}
	}
	```
- **instanceof checks**
	```ts
	class Dog { bark() {} }
	class Cat { meow() {} }
	function speak(animal: Dog | Cat) {
		if (animal instanceof Dog) {
			animal.bark();
		} else {
			animal.meow();
		}
	}
	```
- **in operator**
	```ts
	type Fish = { swim: () => void };
	type Bird = { fly: () => void };
	function move(animal: Fish | Bird) {
		if ("swim" in animal) {
			animal.swim();
		} else {
			animal.fly();
		}
	}
	```
- **Literal type checks**
	```ts
	type Shape = { kind: "circle"; radius: number } | { kind: "square"; size: number };
	function area(shape: Shape) {
		if (shape.kind === "circle") {
			return Math.PI * shape.radius ** 2;
		} else {
			return shape.size ** 2;
		}
	}
	```

## Summary
- Use narrowing to safely access properties and methods on union types.
- TypeScript uses control flow analysis to infer types within blocks.

# Special TS-only Features

## readonly
Marks properties as immutable after initialization:
```ts
interface User {
	readonly id: number;
	name: string;
}
let user: User = { id: 1, name: "Alice" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

## keyof
Creates a union of property names of a type:
```ts
type User = { id: number; name: string };
type UserKeys = keyof User; // "id" | "name"
function getValue(obj: User, key: UserKeys) {
	return obj[key];
}
```

## Generics with Constraints
Restrict generic types to certain shapes:
```ts
function getLength<T extends { length: number }>(item: T): number {
	return item.length;
}
getLength([1, 2, 3]); // 3
getLength("hello"); // 5
```

## Mapped Types
Create new types by transforming properties:
```ts
type ReadonlyUser = Readonly<User>;
type OptionalUser = Partial<User>;
type User = { id: number; name: string };
type CapitalizedUser = {
	[K in keyof User as Capitalize<K>]: User[K]
};
// { Id: number; Name: string }
```

## Summary
- `readonly` for immutability
- `keyof` for property name unions
- Generics with constraints for flexible, safe APIs
- Mapped types for type transformations

# React + TypeScript

## Adding TypeScript to React Apps
- Use `npx create-react-app my-app --template typescript` for new projects.
- For existing projects, add TypeScript and types:
	```sh
	npm install --save typescript @types/react @types/react-dom
	```
- Rename `.js`/`.jsx` files to `.ts`/`.tsx`.

## Typing Functional Components
```ts
import React from "react";
type Props = { title: string; count?: number };
const Header: React.FC<Props> = ({ title, count }) => (
	<h1>{title} {count}</h1>
);
```

## Typing Props & Default Props
```ts
type ButtonProps = { label: string; onClick?: () => void };
const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
	<button onClick={onClick}>{label}</button>
);
Button.defaultProps = { onClick: () => alert("Clicked!") };
```

## Typing Children
```ts
type Props = { children: React.ReactNode };
const Wrapper: React.FC<Props> = ({ children }) => <div>{children}</div>;
```

## Typing Events
```ts
const Input: React.FC = () => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	return <input onChange={handleChange} />;
};
```

## Typing Refs
```ts
const MyInput = () => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	return <input ref={inputRef} />;
};
```

## Typing State (Basic & Complex)
```ts
const Counter = () => {
	const [count, setCount] = React.useState<number>(0);
	const [user, setUser] = React.useState<{ name: string; age: number } | null>(null);
	// ...
};
```

## Using Generics in React Components
```ts
type ListProps<T> = { items: T[]; render: (item: T) => React.ReactNode };
function List<T>({ items, render }: ListProps<T>) {
	return <ul>{items.map(render)}</ul>;
}
```

## Custom Hook Typing
```ts
function useToggle(initial: boolean): [boolean, () => void] {
	const [state, setState] = React.useState(initial);
	const toggle = () => setState(s => !s);
	return [state, toggle];
}
```
With generics:
```ts
function useArray<T>(initial: T[]): [T[], (item: T) => void] {
	const [arr, setArr] = React.useState(initial);
	const add = (item: T) => setArr(a => [...a, item]);
	return [arr, add];
}
```

## Typing Context API
```ts
type Theme = "light" | "dark";
const ThemeContext = React.createContext<Theme>("light");
const useTheme = () => React.useContext(ThemeContext);
```

## Typing Redux Toolkit & React Query (Basics)
- Use `RootState` and `AppDispatch` types for Redux Toolkit.
- Use generics for React Query hooks:
	```ts
	import { useQuery } from "react-query";
	type User = { id: number; name: string };
	const { data } = useQuery<User[]>("users", fetchUsers);
	```

## Summary
- TypeScript makes React code safer, more maintainable, and easier to refactor.

