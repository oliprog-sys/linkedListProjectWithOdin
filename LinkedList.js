class Node {
   constructor(data){
    this.data = data;
    this.next = null
   }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new Node(value);
        newNode.next = null
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }
        
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    size(){
        let temp = this.head;
        let count = 0
        while(temp){
            count += 1;
            temp = temp.next
        }
        return count
    }

    returnHead(){
        return this.head.data
    }

    returnTail(){
        return this.tail.data;
    }

    at(index){
        let temp = this.head

        for (let i = 0; i < this.size(); i++){
            if (i == index){
                return temp.data;
            }
            temp = temp.next
        }
        return null
    }

    pop(){
        let temp = this.head;

        while(temp.next != this.tail){
            temp = temp.next
        }

        this.tail = temp;
        this.tail.next = null
    }

    contains(value){
        let temp = this.head

        while(temp){
            if (temp.data == value){
                return true
            }
            temp = temp.next;
        }

        return false
    }

    find(value){
        let index = 0
        let temp = this.head;

        while(temp){
            if (temp.data == value){
                return index;
            }
            index += 1;
            temp = temp.next            
        }
        return -1
    }

    toString(){
        let temp = this.head;

        let result = "";

        while(temp) {
            result += " ( " + temp.data + " ) " + "->"
            temp = temp.next;
        }

        result += " null"
        return result;
    }

    insertAt(index, value){
        const newNode = new Node(value)

        if(index == 0){
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }

            newNode.next = this.head;
            this.head = newNode;
        }

        let temp = this.head;

        for (let i = 0; i < index-1; i++){
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode
    }

    removeAt(index){
        if (index == 0){
            this.head = this.head.next;
        }

        let temp = this.head;

        for (let i = 0; i < index-1; i++){
            temp = temp.next;
        }

        temp.next = temp.next.next
    }
}

export { LinkedList }