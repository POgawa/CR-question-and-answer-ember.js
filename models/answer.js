QandA.Answer = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bid_number: DS.attr(),
  starting_price: DS.attr(),
  backstory: DS.attr(),
  year_acquired: DS.attr(),
  image: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
