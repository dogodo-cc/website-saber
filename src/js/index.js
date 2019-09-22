$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://lab.kunyan.li/api/array',
    success:(data) => {
      $('body').html(data.join('-'));
    }
  })
})