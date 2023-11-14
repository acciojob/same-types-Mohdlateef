function isSameType(value1, value2) {
  //your js code here
	if(typeof(value1)==number&&typeof(value2)==number)
	{
		return true;
	}
	if(typeof(value1)==string&&typeof(value2)==string)
	{
		return false;
	}
	else
	{
		return true;
	}
	
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
