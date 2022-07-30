class QueryBuilder {
  async setChat(chat) {
    this.chat = chat;
  }
}

const qb = new QueryBuilder();

export default qb;
