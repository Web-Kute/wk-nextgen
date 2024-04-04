let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jim'],
];

// Union
let pid: string | number;
pid = '22';

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = ({
  id: 5,
  name: 'John'
});

{5, 'Jim'} = user