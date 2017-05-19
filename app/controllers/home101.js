import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
        Log_in:function(){

            this.transitionToRoute('home');

}
     },

});
