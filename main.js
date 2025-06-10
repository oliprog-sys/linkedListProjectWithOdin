import { LinkedList } from './LinkedList.js'

const list = new LinkedList();

list.append("dog");
list.prepend("lion");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size())
console.log(list.returnHead()); // return lion
console.log(list.returnTail()) // return turtle
console.log(list.toString()); // return the whole linked list

console.log(list.at(1)); // return animal name at index 1 which is dog

list.pop() // remove turtle

console.log(list.toString()); // output the linked list after removal

console.log(list.contains("turtle")) // check if the list contains turtle

console.log(list.find("parrot")); // return the index value of the given parrot if not found return -1

list.insertAt(2, "leopard"); // insert the word leapard at the index 2
list.removeAt(3); // remove the word at index 3
console.log(list.toString()); // shows the final list of linked list