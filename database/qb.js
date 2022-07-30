class QueryBuilder {
  constructor() {
    this.chat = {}
    this.messages = [];
  }

  async setChat(chat) {
    this.chat = chat;
  }

  async addToPost(msg) {
    this.messages.push(msg);
  }
}

const qb = new QueryBuilder();

export default qb;
