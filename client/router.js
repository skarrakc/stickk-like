FlowRouter.route('/', {

  action() {
    BlazeLayout.render('bodyLayout', { main: 'chooseGoal' });
  },
});

FlowRouter.route('/lose-weight', {

  action() {
    BlazeLayout.render('bodyLayout', { main: 'lose-weight' });
  },
});

FlowRouter.route('/dashboard', {

  action() {
    BlazeLayout.render('bodyLayout', { main: 'dashboard' });
  },
});

FlowRouter.route('/details', {

  action() {
    BlazeLayout.render('bodyLayout', { main: 'details' });
  },
});