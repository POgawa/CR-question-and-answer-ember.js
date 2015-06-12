QandA.Answer = DS.Model.extend({
  description: DS.attr(),
  owner: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
