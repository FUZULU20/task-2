class Message {
    constructor(authorName, time, text) {
        this.authorName = authorName
        this.time = time   
        this.text = text
    }

    toString() {
         console.log(`${this.time} ${this.authorName} : ${this.text}`)
    }
}

class Messenger {

    constructor() {
        this.messages = []
    }

    show_history() {
        this.messages.map(message => message.toString())
    }

    send(author, text) {
        let message = new Message(author, new Date().getHours() + ':' + new Date().getMinutes() ,text )
        this.messages.push(message)
    }
}


let messenger = new Messenger()
messenger.send('Balash', 'Salam Füzuli')
messenger.send('Fuzuli', 'Salam Balaş')
messenger.show_history()