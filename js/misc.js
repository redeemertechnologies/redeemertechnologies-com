var dtCh= "/";
var minYear=1900;
var maxYear=2100;
function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr)
{
	//alert(dtStr)
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	var errorMsg="";
	if (pos1==-1 || pos2==-1){
		errorMsg=("The date format should be : dd/mm/yyyy")
		return errorMsg;
	}
	if (strMonth.length<1 || month<1 || month>12){
		errorMsg=("Please enter a valid month")
		return errorMsg;
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		errorMsg=("Please enter a valid day")
		return errorMsg;
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		errorMsg=("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return errorMsg;
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		errorMsg=("Please enter a valid date")
		return errorMsg;
	}
	return errorMsg;

}
function round_decimals(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places) {

    // Convert the number to a string
    var value_string = rounded_value.toString()

    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")

    // Is there a decimal point?
    if (decimal_location == -1) {

        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0

        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }

    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length

    if (pad_total > 0) {

        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++)
            value_string += "0"
        }
    return value_string
}

var imgRe = /^.+\.(jpg|jpeg|gif)$/i;
function previewImage(pathField, previewName)
{
    var path = pathField.value;
    if (path.search(imgRe) != -1)
    {
        document[previewName].src = 'file://'+path;
    }
    else
    {
        alert("Please select an image of type JPG or GIF");
    }
}

//function for window popup to show the list of records on image click
function popWindow()
{       window.open("recordlist.jsp","_blank","width=300,height=700,left=0,top=0,toolbar=No,location=No,scrollbars=No,status=No,resizable=No,fullscreen=No");
}
function allDel()
{
        if(document.screentwo.delall.checked)
        {
                for (var i=1;i<document.screentwo.elements.length;i=i+1)
                {
                        var e = document.screentwo.elements[i];
                        e.checked = true;
                }
        }
        else
        {
                for (var i=1;i<document.screentwo.elements.length;i=i+1)
                {
                        var e = document.screentwo.elements[i];
                        e.checked = false;
                }
        }
}

function isPhone(field)
{
        var id=field;
        len=id.length;
        if(len<5)
        {
                return false;
        }
        for (var i=0;i<len;i++)
        {
                var check=id.charAt(i);
                var s=0;

                if(isNaN(check))
                {
                        s=1;
                }
                if((i==0) && (check=="+"))
                {
                        s=0;
                }
                if((check==" ") || (check=="-") || (check=="(") || (check==")"))
                {
                        s=0;
                }
                if(s=='1')
                {
                        return false;
                }
        }
        return true;
}

function isPin(field)
{
        var id=field.value;
        len=id.length;
        if(len<6)
        {
                return false;
        }
        for (var i=0;i<len;i++)
        {
                var check=id.charAt(i);
                var s=0;

                if(isNaN(check))
                {
                        s=1;
                }
                if((check=="+") || (check=="-"))
                {
                        s=0;
                }
                if(s=='1')
                {
                        return false;
                }
        }
        return true;
}

//function to validate email
function isEmail(emailStr)
{

var checkTLD=1;


var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|co.in|in)$/;


var emailPat=/^(.+)@(.+)$/;


var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";


var validChars="\[^\\s" + specialChars + "\]";


var quotedUser="(\"[^\"]*\")";


var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;


var atom=validChars + '+';

var word="(" + atom + "|" + quotedUser + ")";


var userPat=new RegExp("^" + word + "(\\." + word + ")*$");


var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

var matchArray=emailStr.match(emailPat);

if (matchArray==null) {

return false;
}
var user=matchArray[1];
var domain=matchArray[2];


for (i=0; i<user.length; i++) {
if (user.charCodeAt(i)>127) {
return false;
   }
}
for (i=0; i<domain.length; i++) {
if (domain.charCodeAt(i)>127) {
return false;
   }
}


if (user.match(userPat)==null) {


return false;
}


var IPArray=domain.match(ipDomainPat);
if (IPArray!=null) {


for (var i=1;i<=4;i++) {
if (IPArray[i]>255) {
return false;
   }
}
return true;
}


var atomPat=new RegExp("^" + atom + "$");
var domArr=domain.split(".");
var len=domArr.length;
for (i=0;i<len;i++) {
if (domArr[i].search(atomPat)==-1) {
return false;
   }
}


if (checkTLD && domArr[domArr.length-1].length!=2 &&
domArr[domArr.length-1].search(knownDomsPat)==-1) {
return false;
}


if (len<2) {
return false;
}

return true;
}

//function to validate amount
function isValidAmount(field)
{
        var id=field.value;
        len=id.length;
        for (var i=0;i<len;i++)
        {
                var check=id.charAt(i);

                if(isNaN(check) && check!=".")
                {
                        return false;
                }
        }
        return true;
}

//function to validate integer
function isValidInt(field)
{
        var id=field.value;
        len=id.length;
        for (var i=0;i<len;i++)
        {
                var check=id.charAt(i);

                if(isNaN(check))
                {
                        return false;
                }
        }
        return true;
}

//function to validate register number
function isValidRegNo(field)
{
        var id=field.value;
        len=id.length;
        for (var i=0;i<len;i++)
        {
                var check=id.charAt(i);

                if(isNaN(check) && check!="/")
                {
                        return false;
                }
                if(check=="/" && i == len-1)
                {
                        return false;
                }
        }
        return true;
}

//function for save confirmation
function confirmSave()
{
var agree=confirm("Confirm registration?");
if(agree)
        return true ;
else
        return false ;
}

//function for delete confirmation
function confirmDelete()
{
	var agree=confirm("Are you sure you want to delete this record?");
	if(agree)
	{
		   document.getElementById("action").value="Delete";
			return true ;
	}else{
			return false ;
	}
}

//function for delete all confirmation
function confirmDeleteAll()
{
var agree=confirm("Are you sure you want to delete the selected records?");
if(agree)
        return true ;
else
        return false ;
}

//function for triming
function trim(s)
{
  // Remove leading spaces and carriage returns
  while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r'))
  {
    s = s.substring(1,s.length);
  }

  // Remove trailing spaces and carriage returns

  while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r'))
  {
    s = s.substring(0,s.length-1);
  }
  return s;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//code for js calender
var weekend = [0,6];
var weekendColor = "#e0e0e0";
var fontface = "Arial, Helvetica, sans-serif";
var fontsize = 1;

var gNow = new Date();
var ggWinCal;
isNav = (navigator.appName.indexOf("Netscape") != -1) ? true : false;
isIE = (navigator.appName.indexOf("Microsoft") != -1) ? true : false;

Calendar.Months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

// Non-Leap year Month days..
Calendar.DOMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Leap year Month days..
Calendar.lDOMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Calendar(p_item, p_WinCal, p_month, p_year, p_format) {
        if ((p_month == null) && (p_year == null))        return;

        if (p_WinCal == null)
                this.gWinCal = ggWinCal;
        else
                this.gWinCal = p_WinCal;

        if (p_month == null) {
                this.gMonthName = null;
                this.gMonth = null;
                this.gYearly = true;
        } else {
                this.gMonthName = Calendar.get_month(p_month);
                this.gMonth = new Number(p_month);
                this.gYearly = false;
        }

        this.gYear = p_year;
        this.gFormat = p_format;
        this.gBGColor = "white";
        this.gFGColor = "black";
        this.gTextColor = "black";
        this.gHeaderColor = "black";
        this.gReturnItem = p_item;
}

Calendar.get_month = Calendar_get_month;
Calendar.get_daysofmonth = Calendar_get_daysofmonth;
Calendar.calc_month_year = Calendar_calc_month_year;
Calendar.print = Calendar_print;

function Calendar_get_month(monthNo) {
        return Calendar.Months[monthNo];
}

function Calendar_get_daysofmonth(monthNo, p_year) {
        /*
        Check for leap year ..
        1.Years evenly divisible by four are normally leap years, except for...
        2.Years also evenly divisible by 100 are not leap years, except for...
        3.Years also evenly divisible by 400 are leap years.
        */
        if ((p_year % 4) == 0) {
                if ((p_year % 100) == 0 && (p_year % 400) != 0)
                        return Calendar.DOMonth[monthNo];

                return Calendar.lDOMonth[monthNo];
        } else
                return Calendar.DOMonth[monthNo];
}

function Calendar_calc_month_year(p_Month, p_Year, incr) {
        /*
        Will return an 1-D array with 1st element being the calculated month
        and second being the calculated year
        after applying the month increment/decrement as specified by 'incr' parameter.
        'incr' will normally have 1/-1 to navigate thru the months.
        */
        var ret_arr = new Array();

        if (incr == -1) {
                // B A C K W A R D
                if (p_Month == 0) {
                        ret_arr[0] = 11;
                        ret_arr[1] = parseInt(p_Year) - 1;
                }
                else {
                        ret_arr[0] = parseInt(p_Month) - 1;
                        ret_arr[1] = parseInt(p_Year);
                }
        } else if (incr == 1) {
                // F O R W A R D
                if (p_Month == 11) {
                        ret_arr[0] = 0;
                        ret_arr[1] = parseInt(p_Year) + 1;
                }
                else {
                        ret_arr[0] = parseInt(p_Month) + 1;
                        ret_arr[1] = parseInt(p_Year);
                }
        }

        return ret_arr;
}

function Calendar_print() {
        ggWinCal.print();
}

function Calendar_calc_month_year(p_Month, p_Year, incr) {
        /*
        Will return an 1-D array with 1st element being the calculated month
        and second being the calculated year
        after applying the month increment/decrement as specified by 'incr' parameter.
        'incr' will normally have 1/-1 to navigate thru the months.
        */
        var ret_arr = new Array();

        if (incr == -1) {
                // B A C K W A R D
                if (p_Month == 0) {
                        ret_arr[0] = 11;
                        ret_arr[1] = parseInt(p_Year) - 1;
                }
                else {
                        ret_arr[0] = parseInt(p_Month) - 1;
                        ret_arr[1] = parseInt(p_Year);
                }
        } else if (incr == 1) {
                // F O R W A R D
                if (p_Month == 11) {
                        ret_arr[0] = 0;
                        ret_arr[1] = parseInt(p_Year) + 1;
                }
                else {
                        ret_arr[0] = parseInt(p_Month) + 1;
                        ret_arr[1] = parseInt(p_Year);
                }
        }

        return ret_arr;
}

// This is for compatibility with Navigator 3, we have to create and discard one object before the prototype object exists.
new Calendar();

Calendar.prototype.getMonthlyCalendarCode = function() {
        var vCode = "";
        var vHeader_Code = "";
        var vData_Code = "";

        // Begin Table Drawing code here..
        vCode = vCode + "<TABLE BORDER=1 BGCOLOR=\"" + this.gBGColor + "\">";

        vHeader_Code = this.cal_header();
        vData_Code = this.cal_data();
        vCode = vCode + vHeader_Code + vData_Code;

        vCode = vCode + "</TABLE>";

        return vCode;
}

Calendar.prototype.show = function() {
        var vCode = "";

        this.gWinCal.document.open();

        // Setup the page...
        this.wwrite("<html>");
        this.wwrite("<head><title>Calendar</title>");
        this.wwrite("</head>");

        this.wwrite("<body " +
                "link=\"" + this.gLinkColor + "\" " +
                "vlink=\"" + this.gLinkColor + "\" " +
                "alink=\"" + this.gLinkColor + "\" " +
                "text=\"" + this.gTextColor + "\">");
        this.wwriteA("<FONT FACE='" + fontface + "' SIZE=2><B>");
        this.wwriteA(this.gMonthName + " " + this.gYear);
        this.wwriteA("</B><BR>");

        // Show navigation buttons
        var prevMMYYYY = Calendar.calc_month_year(this.gMonth, this.gYear, -1);
        var prevMM = prevMMYYYY[0];
        var prevYYYY = prevMMYYYY[1];

        var nextMMYYYY = Calendar.calc_month_year(this.gMonth, this.gYear, 1);
        var nextMM = nextMMYYYY[0];
        var nextYYYY = nextMMYYYY[1];

        this.wwrite("<TABLE WIDTH='100%' BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR='#e0e0e0'><TR><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");

        this.wwrite("[<A HREF=\"" +
        "javascript:window.opener.Build(" +
        "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)-10) + "', '" + this.gFormat + "'" +
        ");" +
        "\"><<||<\/A>]</font></TD><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");


        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)-1) + "', '" + this.gFormat + "'" +
                ");" +
                "\"><<<\/A>]</font></TD><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', '" + prevMM + "', '" + prevYYYY + "', '" + this.gFormat + "'" +
                ");" +
                "\"><<\/A>]</font></TD><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', '" + nextMM + "', '" + nextYYYY + "', '" + this.gFormat + "'" +
                ");" +
                "\">><\/A>]</font></TD><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)+1) + "', '" + this.gFormat + "'" +
                ");" +
                "\">>><\/A>]</font></TD><TD ALIGN=center><font face=\"Arial, Helvetica, sans-serif\" size=\"1\">");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', '" + this.gMonth + "', '" + (parseInt(this.gYear)+10) + "', '" + this.gFormat + "'" +
                ");" +
                "\">>>||<\/A>]</font></TD></TR></TABLE><BR>");

        // Get the complete calendar code for the month..
        vCode = this.getMonthlyCalendarCode();
        this.wwrite(vCode);

        this.wwrite("</font></body></html>");
        //this.gWinCal.document.close();
}

Calendar.prototype.showY = function() {
        var vCode = "";
        var i;
        var vr, vc, vx, vy;                // Row, Column, X-coord, Y-coord
        var vxf = 285;                        // X-Factor
        var vyf = 200;                        // Y-Factor
        var vxm = 10;                        // X-margin
        var vym;                                // Y-margin
        if (isIE)        vym = 75;
        else if (isNav)        vym = 25;

        this.gWinCal.document.open();

        this.wwrite("<html>");
        this.wwrite("<head><title>Calendar</title>");
        this.wwrite("<style type='text/css'>\n<!--");
        for (i=0; i<12; i++) {
                vc = i % 3;
                if (i>=0 && i<= 2)        vr = 0;
                if (i>=3 && i<= 5)        vr = 1;
                if (i>=6 && i<= 8)        vr = 2;
                if (i>=9 && i<= 11)        vr = 3;

                vx = parseInt(vxf * vc) + vxm;
                vy = parseInt(vyf * vr) + vym;

                this.wwrite(".lclass" + i + " {position:absolute;top:" + vy + ";left:" + vx + ";}");
        }
        this.wwrite("-->\n</style>");
        this.wwrite("</head>");
        this.wwrite("<body " +
                "link=\"" + this.gLinkColor + "\" " +
                "vlink=\"" + this.gLinkColor + "\" " +
                "alink=\"" + this.gLinkColor + "\" " +
                "text=\"" + this.gTextColor + "\">");
        this.wwrite("<FONT FACE='" + fontface + "' SIZE=2><B>");
        this.wwrite("Year : " + this.gYear);
        this.wwrite("</B><BR>");

        // Show navigation buttons
        var prevYYYY = parseInt(this.gYear) - 1;
        var nextYYYY = parseInt(this.gYear) + 1;

        this.wwrite("<TABLE WIDTH='100%' BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR='#e0e0e0'><TR><TD ALIGN=center>");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', null, '" + prevYYYY + "', '" + this.gFormat + "'" +
                ");" +
                "\" alt='Prev Year'><<<\/A>]</TD><TD ALIGN=center>");
        this.wwrite("[<A HREF=\"javascript:window.print();\">Print</A>]</TD><TD ALIGN=center>");
        this.wwrite("[<A HREF=\"" +
                "javascript:window.opener.Build(" +
                "'" + this.gReturnItem + "', null, '" + nextYYYY + "', '" + this.gFormat + "'" +
                ");" +
                "\">>><\/A>]</TD></TR></TABLE><BR>");

        // Get the complete calendar code for each month..
        var j;
        for (i=11; i>=0; i--) {
                if (isIE)
                        this.wwrite("<DIV ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");
                else if (isNav)
                        this.wwrite("<LAYER ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");

                this.gMonth = i;
                this.gMonthName = Calendar.get_month(this.gMonth);
                vCode = this.getMonthlyCalendarCode();
                this.wwrite(this.gMonthName + "/" + this.gYear + "<BR>");
                this.wwrite(vCode);

                if (isIE)
                        this.wwrite("</DIV>");
                else if (isNav)
                        this.wwrite("</LAYER>");
        }

        this.wwrite("</font><BR></body></html>");
        this.gWinCal.document.close();
}

Calendar.prototype.wwrite = function(wtext) {
        this.gWinCal.document.writeln(wtext);
}

Calendar.prototype.wwriteA = function(wtext) {
        this.gWinCal.document.write(wtext);
}

Calendar.prototype.cal_header = function() {
        var vCode = "";

        vCode = vCode + "<TR>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Sun</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Mon</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Tue</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Wed</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Thu</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='14%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Fri</B></FONT></TD>";
        vCode = vCode + "<TD WIDTH='16%'><FONT SIZE='2' FACE='" + fontface + "' COLOR='" + this.gHeaderColor + "'><B>Sat</B></FONT></TD>";
        vCode = vCode + "</TR>";

        return vCode;
}

Calendar.prototype.cal_data = function() {
        var vDate = new Date();
        vDate.setDate(1);
        vDate.setMonth(this.gMonth);
        vDate.setFullYear(this.gYear);

        var vFirstDay=vDate.getDay();
        var vDay=1;
        var vLastDay=Calendar.get_daysofmonth(this.gMonth, this.gYear);
        var vOnLastDay=0;
        var vCode = "";

        /*
        Get day for the 1st of the requested month/year..
        Place as many blank cells before the 1st day of the month as necessary.
        */

        vCode = vCode + "<TR>";
        for (i=0; i<vFirstDay; i++) {
                vCode = vCode + "<TD WIDTH='14%'" + this.write_weekend_string(i) + "><FONT SIZE='2' FACE='" + fontface + "'> </FONT></TD>";
        }

        // Write rest of the 1st week
        for (j=vFirstDay; j<7; j++) {
                vCode = vCode + "<TD WIDTH='14%'" + this.write_weekend_string(j) + "><FONT SIZE='2' FACE='" + fontface + "'>" +
                        "<A HREF='#' " +
                                "onClick=\"self.opener.document." + this.gReturnItem + ".value='" +
                                this.format_data(vDay) +
                                "';window.close();\">" +
                                this.format_day(vDay) +
                        "</A>" +
                        "</FONT></TD>";
                vDay=vDay + 1;
        }
        vCode = vCode + "</TR>";

        // Write the rest of the weeks
        for (k=2; k<7; k++) {
                vCode = vCode + "<TR>";

                for (j=0; j<7; j++) {
                        vCode = vCode + "<TD WIDTH='14%'" + this.write_weekend_string(j) + "><FONT SIZE='2' FACE='" + fontface + "'>" +
                                "<A HREF='#' " +
                                        "onClick=\"self.opener.document." + this.gReturnItem + ".value='" +
                                        this.format_data(vDay) +
                                        "';window.close();\">" +
                                this.format_day(vDay) +
                                "</A>" +
                                "</FONT></TD>";
                        vDay=vDay + 1;

                        if (vDay > vLastDay) {
                                vOnLastDay = 1;
                                break;
                        }
                }

                if (j == 6)
                        vCode = vCode + "</TR>";
                if (vOnLastDay == 1)
                        break;
        }

        // Fill up the rest of last week with proper blanks, so that we get proper square blocks
        for (m=1; m<(7-j); m++) {
                if (this.gYearly)
                        vCode = vCode + "<TD WIDTH='14%'" + this.write_weekend_string(j+m) +
                        "><FONT SIZE='2' FACE='" + fontface + "' COLOR='gray'> </FONT></TD>";
                else
                        vCode = vCode + "<TD WIDTH='14%'" + this.write_weekend_string(j+m) +
                        "><FONT SIZE='2' FACE='" + fontface + "' COLOR='gray'>" + m + "</FONT></TD>";
        }

        return vCode;
}

Calendar.prototype.format_day = function(vday) {
        var vNowDay = gNow.getDate();
        var vNowMonth = gNow.getMonth();
        var vNowYear = gNow.getFullYear();

        if (vday == vNowDay && this.gMonth == vNowMonth && this.gYear == vNowYear)
                return ("<FONT COLOR=\"RED\"><B>" + vday + "</B></FONT>");
        else
                return (vday);
}

Calendar.prototype.write_weekend_string = function(vday) {
        var i;

        // Return special formatting for the weekend day.
        for (i=0; i<weekend.length; i++) {
                if (vday == weekend[i])
                        return (" BGCOLOR=\"" + weekendColor + "\"");
        }

        return "";
}

Calendar.prototype.format_data = function(p_day) {
        var vData;
        var vMonth = 1 + this.gMonth;
        vMonth = (vMonth.toString().length < 2) ? "0" + vMonth : vMonth;
        var vMon = Calendar.get_month(this.gMonth).substr(0,3).toUpperCase();
        var vFMon = Calendar.get_month(this.gMonth).toUpperCase();
        var vY4 = new String(this.gYear);
        var vY2 = new String(this.gYear.substr(2,2));
        var vDD = (p_day.toString().length < 2) ? "0" + p_day : p_day;

        switch (this.gFormat) {
                case "MM\/DD\/YYYY" :
                        vData = vMonth + "\/" + vDD + "\/" + vY4;
                        break;
                case "MM\/DD\/YY" :
                        vData = vMonth + "\/" + vDD + "\/" + vY2;
                        break;
                case "MM-DD-YYYY" :
                        vData = vMonth + "-" + vDD + "-" + vY4;
                        break;
                case "MM-DD-YY" :
                        vData = vMonth + "-" + vDD + "-" + vY2;
                        break;

                case "DD\/MON\/YYYY" :
                        vData = vDD + "\/" + vMon + "\/" + vY4;
                        break;
                case "DD\/MON\/YY" :
                        vData = vDD + "\/" + vMon + "\/" + vY2;
                        break;
                case "DD-MON-YYYY" :
                        vData = vDD + "-" + vMon + "-" + vY4;
                        break;
                case "DD-MON-YY" :
                        vData = vDD + "-" + vMon + "-" + vY2;
                        break;

                case "DD\/MONTH\/YYYY" :
                        vData = vDD + "\/" + vFMon + "\/" + vY4;
                        break;
                case "DD\/MONTH\/YY" :
                        vData = vDD + "\/" + vFMon + "\/" + vY2;
                        break;
                case "DD-MONTH-YYYY" :
                        vData = vDD + "-" + vFMon + "-" + vY4;
                        break;
                case "DD-MONTH-YY" :
                        vData = vDD + "-" + vFMon + "-" + vY2;
                        break;

                case "DD\/MM\/YYYY" :
                        vData = vDD + "\/" + vMonth + "\/" + vY4;
                        break;
                case "DD\/MM\/YY" :
                        vData = vDD + "\/" + vMonth + "\/" + vY2;
                        break;
                case "DD-MM-YYYY" :
                        vData = vDD + "-" + vMonth + "-" + vY4;
                        break;
                case "DD-MM-YY" :
                        vData = vDD + "-" + vMonth + "-" + vY2;
                        break;

                default :
                        vData = vMonth + "\/" + vDD + "\/" + vY4;
        }

        return vData;
}

function Build(p_item, p_month, p_year, p_format) {
        var p_WinCal = ggWinCal;
        gCal = new Calendar(p_item, p_WinCal, p_month, p_year, p_format);

        // Customize your Calendar here..
        gCal.gBGColor="white";
        gCal.gLinkColor="black";
        gCal.gTextColor="black";
        gCal.gHeaderColor="darkgreen";

        // Choose appropriate show function
        if (gCal.gYearly)        gCal.showY();
        else        gCal.show();
}

function show_calendar() {
        /*
                p_month : 0-11 for Jan-Dec; 12 for All Months.
                p_year        : 4-digit year
                p_format: Date format (mm/dd/yyyy, dd/mm/yy, ...)
                p_item        : Return Item.
        */

        p_item = arguments[0];
        if (arguments[1] == null)
                p_month = new String(gNow.getMonth());
        else
                p_month = arguments[1];
        if (arguments[2] == "" || arguments[2] == null)
                p_year = new String(gNow.getFullYear().toString());
        else
                p_year = arguments[2];
        if (arguments[3] == null)
                p_format = "DD/MM/YYYY";
        else
                p_format = arguments[3];

        vWinCal = window.open("", "Calendar",
                "width=250,height=225,status=no,resizable=no,top=340,left=580");
        vWinCal.opener = self;
        ggWinCal = vWinCal;

        Build(p_item, p_month, p_year, p_format);
}
/*
Yearly Calendar Code Starts here
*/
function show_yearly_calendar(p_item, p_year, p_format) {
        // Load the defaults..
        if (p_year == null || p_year == "")
                p_year = new String(gNow.getFullYear().toString());
        if (p_format == null || p_format == "")
                p_format = "MM/DD/YYYY";

        var vWinCal = window.open("", "Calendar", "scrollbars=yes");
        vWinCal.opener = self;
        ggWinCal = vWinCal;

        Build(p_item, null, p_year, p_format);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//end of code for javascript calender
