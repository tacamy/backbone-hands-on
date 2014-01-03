window.App = {};
App.mediator = _.extend({}, Backbone.Events);

$(function() {
  // var schedules = new App.Schedules();

  var Router = Backbone.Router.extend({
    routes: {
      ':year/:month': 'calendar',
      '*default': 'today'
    },

    initialize: function() {
      this.schedules = new App.Schedules();
      this.schedules.fetch();

      this.calendarView = new App.CalendarView({
        el: '.calendar',
        collection: this.schedules
      });

      this.formDialogView = new App.FormDialogView({
        el: '.dialog',
        collection: this.schedules
      });

      this.calendarControlView = new App.CalendarControlView({
        el: '.calendar-control'
      });

      this.listenTo(App.mediator, 'route:change', this.changeRoute);
    },

    changeRoute: function(route) {
      this.navigate(route);
    },

    calendar: function(year, month) {
      this.calendarView.moveTo(year, month);
    },

    today: function() {
      this.calendarView.toToday();
    }
  });

  // App.router = new Router();
  new Router();

  Backbone.history.start();

  // schedules.add([
  //   { title: '打ち合わせ1', datetime: moment('2013-12-01 13:00') },
  //   { title: '打ち合わせ2', datetime: moment('2013-12-02 15:00') },
  //   { title: '打ち合わせ3', datetime: moment('2013-12-02 13:00') },
  //   { title: '打ち合わせ4', datetime: moment('2013-12-05 13:00') },
  //   { title: '打ち合わせ5', datetime: moment('2013-12-10 14:00') }
  // ]);
  // schedules.fetch();

  // var createFormView = new App.CreateFormView({
  //   el: '.createForm',
  //   collection: schedules
  // });

  // var calendarView = new App.CalendarView({
  //   el: '.calendar',
  //   collection: schedules
  // });

  // var formDialogView = new App.FormDialogView({
  //   el: '.dialog',
  //   collection: schedules
  // });

  // $('.calendar-newBtn').click(function() {
  //   App.formDialogView.open();
  // });

  // $('.calendar-prevBtn').click(function() {
  //   calendarView.toPrev();
  // });

  // $('.calendar-nextBtn').click(function() {
  //   calendarView.toNext();
  // });

  // $('.calendar-todayBtn').click(function() {
  //   calendarView.toToday();
  // });

  // var calendarControlView = new App.CalendarControlView({
  //   el: '.calendar-control'
  // });

  // $('.createForm').submit(function(e) {
  //   e.preventDefault();

  //   var title = $('input[name="title"]').val();
  //   var datetime = $('input[name="datetime"]').val();

  //   schedules.add({
  //     title: title,
  //     datetime: moment(datetime)
  //   }, { validate: true });
  // });

  // $('.filterForm').submit(function(e) {
  //   e.preventDefault();

  //   var date = $('input[name="filterDate"]').val();
  //   var results = schedules.findByDate(date);

  //   $('.count').html(results.length + '件の予定があります');
  //   $('.list').empty();

  //   _.each(results, function(model) {
  //     var $li = $('<li>').html(
  //       model.dateFormat('MM月DD日 HH時mm分') + ':' + model.get('title')
  //     );

  //     $('.list').append($li);
  //   });
  // });

  // schedules.on('add', function(model) {
  //   var $li = $('<li>').html(
  //     model.dateFormat('MM月DD日 HH時mm分') + ':' + model.get('title')
  //   );

  //   $('.list').append($li);

  //   $('.count').html(schedules.length + '件の予定があります');
  // });

  // schedules.on('invalid', function(model, message) {
  //   alert(message);
  // });

  // schedules.on('add', function(model) {
  //   var $p = $('<p>').html(
  //     model.dateFormat('MM月DD日 HH時mm分') + ':' + model.get('title')
  //   );

  //   $('body').append($p);
  // });

  // schedules.add({
  //   'title': '打ち合わせ',
  //   'datetime': moment('2013-10-26 15:00')
  // }, { validate: true });

  // schedules.add({
  //   'title': '打ち合わせ2',
  //   'datetime': moment('2013-10-26 15:00')
  // }, { validate: true });

  // schedule.on('change', function() {
  //   $('body').html(
  //     schedule.dateFormat('MM月DD日 HH時mm分') + ':' + schedule.get('title')
  //   );
  // });

  // schedule.on('invalid', function(model, message) {
  //   alert('Error: ' + message);
  // });

  // schedule.set({
  //   'title': '打ち合わせ',
  //   'datetime': moment('2013-10-26 15:00')
  // }, { validate: true });

});