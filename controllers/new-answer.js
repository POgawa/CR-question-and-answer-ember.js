QandA.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        starting_price: this.get('starting_price'),
        backstory: this.get('backstory'),
        year_acquired: this.get('year_acquired'),
        image: this.get('image'),
        bid_number: Math.round(Math.random() * 100000),
      });


      answer.save();

      var question = this.get('controllers.question.model');
      question.get('items').pushObject(answer);
      question.save();


      this.set('title', '');
      this.set('description', '');
      this.set('owner', '');
      this.set('starting_price', '');
      this.set('backstory', '');
      this.set('year_acquired', '');
      this.set('image', '');

      this.transitionToRoute('question', question.id);
    }
  }


})
