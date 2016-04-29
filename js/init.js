 /* $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');

  });*/

$(document).ready(function(){
	$('ul.tabs').tabs();
	$(".button-collapse").sideNav();
	$('.materialboxed').materialbox();
	$('.collapsible-popout').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      /*ready: function() { alert('Ready'); }, // Callback for Modal open
      complete: function() { alert('Closed'); } // Callback for Modal close*/
    }
  );
});