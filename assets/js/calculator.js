function calculate() {
	const find = input.get('find').raw();
	const principalP = input.get('principal_a').gt(0).val();
	const rateR = input.get('rate_a').gt(0).val();
	const timeT = input.get('time_a').gt(0).val();
	const timeDropdown = input.get('time_type_a').index().val();
	const totalA = input.get('total_p').gt(0).val();
	const rateR2 = input.get('rate_p').gt(0).val();
	const timeT2 = input.get('time_p').gt(0).val();
	const timeDropdown2 = input.get('time_type_p').index().val();
	const totalA2 = input.get('total_r').gt(0).val();
	const principalP2 = input.get('principal_r').gt(0).lt('total_r').val();
	const timeT3 = input.get('time_r').gt(0).val();
	const timeDropdown3 = input.get('time_type_r').index().val();
	const totalA3 = input.get('total_t').gt(0).val();
	const principalP3 = input.get('principal_t').gt(0).lt('total_t').val();
	const rateR3 = input.get('rate_t').gt(0).val();

	if(!input.valid()) return;

	let result = '';
	switch(find) {
		case 'a':
			result = 'A = ' + currencyFormat(principalP * (1 + ((rateR / 100) * timeInYears(timeDropdown, timeT))));
			break;
		case 'p':
			result = 'P = ' + currencyFormat(totalA / (1 + (rateR2 / 100) * timeInYears(timeDropdown2, timeT2)));
			break;
		case 'r':
			result = 'R = ' + +((((1 / timeInYears(timeDropdown3, timeT3)) * (totalA2 / principalP2 - 1)) * 100).toFixed(2)) + ' %/year';
			break;
		case 't':
			result = 'T = ' + +(((1 / (rateR3 / 100)) * (totalA3 / principalP3 - 1)).toFixed(2)) + ' years';
	}
	_('result-' + find).innerHTML = result;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function currencyFormat(price){
	return '$' + numberWithCommas(Number(price).toFixed(2));
}

function timeInYears(timePeriod, time) {
	switch(timePeriod){
		case 0:
			time = time / 365;
			break;
		case 1:
			time = time / 360;
			break;
		case 2:
			time = time / 52;
			break;
		case 3:
			time = time / 12;
			break;
		case 4:
			time = time / 4;
			break;
	}
	return time;
}


