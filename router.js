QandA.Router.map(function() {
  this.resource('answers');
  this.resource('answer', {path: 'answer/:answer_id'})
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'}, function(){
      this.resource('new-answer');
  })
  this.resource('new-question');
});
