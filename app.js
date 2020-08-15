const feathers = require('@feathersjs/feathers');
const app = feathers();

class MessageService {
  constructor() {
    this.messages = [];
  }

  async find() {
    return this.messages;
  }

  async create(data) {
    const message = {
      id: this.messages.length,
      text: data.text,
    };

    this.messages.push(message);
    return message;
  }
}

app.use('messages', new MessageService());

app.service('messages').on('created', (message) => {
  console.log('new message has been created!');
});
