const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,'../', 'data', 'reminders.json');

const getRemindersFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Reminder {
  constructor(t) {
    this.title = t;
  }

  save() {
    getRemindersFromFile(reminders => {
      reminders.push(this);
      fs.writeFile(p, JSON.stringify(reminders), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getRemindersFromFile(cb);
  }
};
