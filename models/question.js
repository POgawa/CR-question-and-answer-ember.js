QandA.Question = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
