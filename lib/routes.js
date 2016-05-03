if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('home');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect) {
    if (!Meteor.userId()) {
        route = FlowRouter.current();
        if (route.route.name != 'login' && route.route.name != 'register') {
            FlowRouter.go('home');
        }
    } else if (Meteor.userId()) {
        route = FlowRouter.current();
        if (route.route.name == 'login' || route.route.name == 'register') {
            FlowRouter.go('home');
        }
    }
}]);

FlowRouter.route('/', {
    name: "home",
    action() {
        BlazeLayout.render("MainLayout", {
            main: 'Home'
        });
    }
});

FlowRouter.route('/login', {
    name: "login",
    action() {
        BlazeLayout.render("MainLayout", {
            main: 'Login'
        });
    }
});

FlowRouter.route('/register', {
    name: "register",
    action() {
        BlazeLayout.render("MainLayout", {
            main: 'Register'
        });
    }
});

FlowRouter.route('/gb/new', {
    name: 'newgb',
    action() {
        BlazeLayout.render("MainLayout", {
            main: 'NewGroupbuy'
        });
    }
});

FlowRouter.route('/gb/explore', {
    name: 'Explore',
    action() {
        BlazeLayout.render("MainLayout", {
            main: 'Explore'
        });
    }
});

FlowRouter.route('/gb/:id',{
  name: 'gbSingle',
  action(){
    BlazeLayout.render("MainLayout", {
      main:'GBSingle'
    });
  }
});
