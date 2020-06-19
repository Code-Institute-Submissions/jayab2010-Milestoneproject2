
			var results;
			
			function clearResults() {
				$(".form__error").html("");
				$('.results').html("");
			};
		
			$(function(){
				$('body').on('submit','form',{},function(e){
					e.preventDefault();	
					// clear previous results
					clearResults();
					// get our inputs
					var rawInputs = $(this).serializeArray();
					// convert these to numbers and create our argument array
					var args = {};
					for(var i = 0; i < rawInputs.length; i++) {
						args[rawInputs[i].name] = parseFloat(rawInputs[i].value);
					}
					// run the mortgage calculator
					results = mortgageCalculators.monthlyMortgagePayments(args);
					if(results.error) {
						$(".form__error").html(results.error);
					} else {
						$('.results').html('<p> Monthly mortgage payments of ' + results + '</p>')
					}
				});
			});
		