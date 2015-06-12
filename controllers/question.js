QandA.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);

      var question = this.get('model')
      question.set('title', this.get('title'));
      question.set('description', this.get('description'));
      question.set('date', this.get('date'));

      question.save()
    },

    delete: function() {
      if(confirm('Are you sure??')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
