function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
     let val = Number(num);
	let rst="";
  //your code here
	while(val!=0){
     if(val>=obj[0][1]){
       rst+=obj[0][0];
		val = val - obj[0][1]

	 }

	else	if(val>=obj[1][1]){
       rst+=obj[1][0];
		val = val - obj[1][1]
	 }
		else	if(val>=obj[2][1]){
       rst+=obj[2][0];
	val = val - obj[2][1]
	 }

		else	if(val>=obj[3][1]){
       rst+=obj[3][0];
		val = val - obj[3][1]
	 }

		else	if(val>=obj[4][1]){
       rst+=obj[4][0];
		val = val - obj[4][1]
	 }

		else	if(val>=obj[5][1]){
       rst+=obj[5][0];
		val = val - obj[5][1]
	 }

		else	if(val>=obj[6][1]){
       rst+=obj[6][0];
		val = val - obj[6][1]

	 }
	}
    alert(rst)
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(789));




// do not edit below this line
module.exports = convertToRoman
