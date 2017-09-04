function Search(){
    $.ajax({
    method: "GET", 
    dataType: 'jsonp',
    contentType: 'application/json', 
    url:"https://en.wikipedia.org/w/api.php", 
    data:{
      action:"opensearch",
      search: $("#search").val(),  
      namespace:"0", 
      limit:"5",
      format:"json"       
    },
    success: function (data){
      var results = [];
      for(var i = 0; i < data[1].length; i++) {
        results.push({
          title: data[1][i],
          description: data[2][i],
          link: data[3][i]
        });
      }
      $("section").empty();
      results.forEach(function(item){
        var article = $("<article></article>");
        article.addClass("result");
        article.append("<h2>" + item.title + "</h2>");
        article.append("<p>" + item.description + "</p>");
        $("section").append(article);
      });
    }
  });
}