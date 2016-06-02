import Store from 'fluxible/addons/BaseStore';
import { getMessagesStorage, setMessagesStorage } from './localStorage';
import staticMessages from '../staticMessages.js';

// Save to local storage as an array of key, value pairs
function saveMapToStorage(msgMap) {
  return setMessagesStorage([...msgMap]);
}

class MessageStore extends Store {
  static storeName = 'MessageStore';

  static handlers = {
    AddMessage: 'addMessage',
    MarkMessageAsRead: 'markMessageAsRead',
  };

  constructor(...args) {
    super(...args);
    this.messages = new Map(getMessagesStorage());
    staticMessages.forEach(this.addMessage);
  }

  /* Message format:
   * { id: id,
   *   content: { fi: "foo", sv: "bar" }
   * }
   */
  // TODO: Generate message id if missing
  addMessage = (msg) => {
    const message = { ...msg };
    if (this.messages.has(message.id)) {
      return;
    }

    message.read = false;
    this.messages.set(message.id, message);
    saveMapToStorage(this.messages);
    this.emitChange();
  }

  markMessageAsRead = (id) => {
    this.messages.get(id).read = true;
    saveMapToStorage(this.messages);
    this.emitChange();
  }
}

export default MessageStore;
