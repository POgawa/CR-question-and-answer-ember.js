QandA.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  isEditing: false,
  actions: {
    save: function() {
      this.set('isEditing', false);

       var answer = this.get('model')
      answer.set('description', this.get('description'));

      answer.save()

    },
    delete: function() {
      if(confirm('Are you sure??')) {
        var answer = this.get('model');
        var question = this.get('controllers.question.model');
        question.get('answers').removeObject(answer);
        question.save();
        answer.destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
