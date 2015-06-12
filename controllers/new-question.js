QandA.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        description: this.get('description'),
        author: this.get('author'),
        date: Date.now(),
      });

      question.save();

      this.set('title', '');
      this.set('description', '');
      this.set('date', '');
      this.set('author', '');

      this.transitionToRoute('questions');

    }
  }
})
