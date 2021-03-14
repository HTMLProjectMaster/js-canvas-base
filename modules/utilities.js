let utils = {	
	sleep: function(tick){
		return new Promise(resolve => setTimeout(resolve, tick))
	},
	rng: function(max){
		return Math.floor(Math.random() * Math.floor(max))
	}
}
