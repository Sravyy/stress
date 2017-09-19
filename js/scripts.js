$(function() {
  var warning = ["loss-of-sleep","overwhelmed","overconfident","tired"];
  var symptom =["high-bp","anxiety","thyroid","hairloss"];
  var method =["meditate","timemanagement","pet","yoga","exercise"];
  $("#form-stress").submit(function(event){
    event.preventDefault();

    $("#stress1").show();
    $("input:checkbox[name=warning]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#stress1').append(warningSigns + "<br>");
    });

    $("#stress2").show();
    $("input:checkbox[name=symptom]:checked").each(function(){
      var symptomSigns = $(this).val();
      $('#stress2').append(symptomSigns + "<br>");
    });

    $("#stress3").show();
    $("input:checkbox[name=method]:checked").each(function(){
      var methodSigns = $(this).val();
      $('#stress3').append(methodSigns  + "<br>");
    });

    $('#form-stress').hide();
  });
});
