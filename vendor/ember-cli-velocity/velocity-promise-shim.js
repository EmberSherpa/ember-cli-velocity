+(function($, Ember){
  if ($.Velocity && !$.Velocity.Promise) {
    $.Velocity.Promise = Ember.RSVP.Promise;
  }
})(jQuery, Ember);
