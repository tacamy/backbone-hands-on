App.Schedule = Backbone.Model.extend({
  defaults: {
    title: null,
    datetime: null
  },

  validate: function(attrs) {
    if (!attrs.title) {
      return 'タイトルは必須です';
    }
    if (!attrs.datetime) {
      return '日時は必須です'
    }
    if (!moment.isMoment(attrs.datetime) || !attrs.datetime.isValid()) {
      return '日時の形式が不正です'
    }
  },

  parse: function(attrs) {
    attrs.datetime = moment(attrs.datetime);
    return attrs;
  },

  dateFormat: function(f) {
    return this.get('datetime').format(f);
  }
});

App.Schedules = Backbone.Collection.extend({
  model: App.Schedule,

  localStorage: new Backbone.LocalStorage('calendar'),

  findByDate: function(date) {
    var format = 'YYYY-MM-DD';
    var targetDate = moment(date).format(format);

    // return this.select(function(model) {
    //   return model.dateFormat(format) === targetDate;
    // });

    return this.chain()
      .select(function(model) {
        return model.dateFormat(format) === targetDate;
      })
      .sortBy(function(model) {
        return model.get('datetime');
      })
      .value();
  }
});