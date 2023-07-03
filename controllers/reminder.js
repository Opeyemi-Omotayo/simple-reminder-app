const Reminder = require('../models/reminder');

const setReminder = (req, res, next) => {
  res.render('set-reminder', {
    pageTitle: 'Set Reminder',
    path: '/user/set-reminder',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

const postsetReminder = (req, res, next) => {
  const reminder = new Reminder(req.body.title);
  reminder.save();
  res.redirect('/');
};

const getNewReminders = (req, res, next) => {
  Reminder.fetchAll(Reminders => {
    res.render('list', {
      lists: Reminders,
      pageTitle: 'New Reminder',
      path: '/',
      hasReminders: Reminders.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

exports.setReminder = setReminder;
exports.postsetReminder = postsetReminder;
exports.getNewReminders = getNewReminders;

