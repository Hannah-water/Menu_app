/*
 *Click to display the detailed menu
*/
$('.paper .item').click(function () {
  $('.paper .item').not(this).removeClass('active');
  $('.paper .item .detail').hide();
  $(this).toggleClass('active');
  if ($('.paper .item').hasClass('active')) {
    $('.paper').addClass('item-active');
    $('.paper .item.active .detail').slideToggle(200);
  } 
  else {
    $('.paper').removeClass('item-active')
  };
});

/*
 * prevent close the order menu when click the counter
*/
$('.minus, .plus').click(function(ev){
  ev.stopPropagation();
});

/*
 * plus or minus
*/
$('.paper .plus').click(function(){
  var num = $(this).parent().find('.number');
  if(!isNaN(num.text()) && num.text() >= 0){
    num.html(function(num,oldNum){
    return oldNum * 1 + 1;
  });
  }
});
$('.paper .minus').click(function(){
  var num = $(this).parent().find('.number');
  if(!isNaN(num.text()) && num.text() > 0){
    num.html(function(num,oldNum){
      return oldNum * 1 - 1;
    });
  }
});

//count items-total
$('.paper .plus, .paper .minus').click(function(){
  var num = parseInt($(this).parent().find('.number').text());
  var itemsTotal = 0;
  $('.paper .number').each(function(){
    //traverse all number
    itemsTotal += $(this).text() * 1;
  });
  //show or hide items-total
  $('.paper #items-total').html(itemsTotal);
  if(itemsTotal > 0){
    $('.paper .action').show();
  }
  else{
    $('.paper .action').hide();
  }
  //show or hide number
  if(!isNaN(num) && num > 0){
    $(this).parent().find('.number').show();
  }
  else{
    $(this).parent().find('.number').hide();
  }
});