$('.btn-group').on('click', '.btn', function() {
  $(this).addClass('active').siblings().removeClass('active');
});
$('#optionBanner').click(function() {
  $('.section').addClass('zonked');
  $('.banner-section').removeClass('zonked');
});
$('#optionFeatureSet').click(function() {
  $('.section').addClass('zonked');
  $('.featureset-section').removeClass('zonked');
});
$('#optionSummary').click(function() {
  $('.section').addClass('zonked');
  $('.summary-section').removeClass('zonked');
});
$('#optionStories').click(function() {
  $('.section').addClass('zonked');
  $('.stories-section').removeClass('zonked');
});
$('#optionFooter').click(function() {
  $('.section').addClass('zonked');
  $('.footer-section').removeClass('zonked');
});