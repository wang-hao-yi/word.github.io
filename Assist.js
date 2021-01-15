function JsongetF(get){
	return JSON.parse(get);
}
function JsonsaveF(save){
	return JSON.stringify(save);
}
function CurrentScriptF(whereA,whereBset,get){
	var whereB = null;
	whereBset = whereBset.toLowerCase();
	if(whereBset.substr(0,1) == 'a'){
		whereB = 'after';
	}else if(whereBset.substr(0,1) == 'b'){
		whereB = 'before';
	}else{
		console.log(new ReferenceError('B輸入區首項錯誤(限A,B)'));
		return;
	}
	if(whereBset.substr(1,1) == 'b'){
		whereB = whereB + 'begin';
	}else if(whereBset.substr(1,1) == 'e'){
		whereB = whereB + 'end';
	}else{
		console.log(new ReferenceError('B輸入區末項錯誤(限B,E)'));
		return;
	}
	if(whereA !== '' && NUF(currentScript[whereA],[false,false],'and')){
		currentScript[whereA].insertAdjacentHTML(whereB,get);
		return;
	}else{
		console.log(new ReferenceError('查無A輸入項'));
		return;
	}
}
function NUF(get,checkset,logic){
	//Null && Undefined check
	var test = [true,false,'']
	var check = [0,null,undefined];
	if(logic.toLowerCase() === 'and'){
		check[0] = 0;
	}else if(logic.toLowerCase() === 'or'){
		check[0] = 1;
	}else{
		console.log(new ReferenceError('查無logic(限And,Or)'));
		return;
	}
	for(i=0;i<2;i++){
		if(test.indexOf(checkset[i]) == -1){
			console.log(new ReferenceError('查無比較數據第'+i+'項(限true,false,"")'));
			return;
		}
		if(get == check[i+1] && checkset[i] == true){
			check[0]++;
		}else if(get != check[i+1] && checkset[i] == false){
			check[0]++;
		}else if(checkset[i] === ''){
			check[0]++;
		}
	}
	if(check[0] >= 2){
		return true;
	}else{
		return false;
	}
}
function addTextF(get){
	var set = '"'+get+'"';
	return set;
}
function ChangeF(id,classset){
	for(i=0;i<id.length;i++){
		if(document.getElementById(id[i]).style.display === 'none'){
			document.getElementById(id[i]).style.display = 'inline'
		}else{
			document.getElementById(id[i]).style.display = 'none'
		}
	}
	for(i=0;i<classset.length;i++){
		var get = document.getElementsByClassName(classset[i]);
		for(j=0;j<get.length;j++){
			if(get[j].style.display === 'none'){
				get[j].style.display = 'inline'
			}else{
				get[j].style.display = 'none'
			}
		}
	}
}
function CreateF(get,gettext,id){
	var set = document.createElement(get);
	var t = document.createTextNode(gettext);
	set.appendChild(t);
	document.getElementById(id).appendChild(set);
}
function RegExpF(get){
	var set = new RegExp("^[ ]+$");
	return set.test(get);
}
function SBF(str){
	if (str==""){
		return true;
	}else{
		return RegExpF(str);
	}
}