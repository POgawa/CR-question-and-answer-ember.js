QandA.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        description: this.get('description'),
        owner: this.get('owner'),
        date: Date.now(),
      });


      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.set('description', '');
      this.set('owner', '');

      this.transitionToRoute('question', question.id);
    }
  }


})
