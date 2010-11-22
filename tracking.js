// $Id$
/*
 * @file
 * Submits a consumption to the recommendation service.
 * 
 * When clicktracking is enabled, this javascript method is called whenever a user clicks
 * on a recommendation that is shown on the site. The appropriate consumption information
 * is submitted to the Sugestio service for analytics purposes.
 * 
 * @param url           The base url of the Sugestio service
 * @param account       The Sugestio account that was used to fetch the recommendations.
 * @param userid		The id of the current user 
 * @param itemid		The id of the recommended item
 * @param type			The type of the consumption (eg. VIEW, RATING,...)
 * @param detail		Details about the consumption (eg. RECOMMENDATION, THUMB:UP,...)
 */
function sugestio_clicked(var_url, var_account, var_userid, var_itemid, var_type, var_detail) {
	
	var url = var_url + "/api_GET.php?callback=?";	
	var now = "NOW";
	
	$.getJSON(url, {itemid:var_itemid,userid:var_userid,type:var_type, detail:var_detail,date:now,account:var_account});
	
}
