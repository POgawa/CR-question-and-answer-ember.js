QandA.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);

       var answer = this.get('model')
      answer.set('title', this.get('title'));
      answer.set('description', this.get('description'));
      answer.set('starting_price', this.get('starting_price'));
      answer.set('backstory', this.get('backstory'));
      answer.set('year_acquired', this.get('year_acquired'));
      answer.set('image', this.get('image'));

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
