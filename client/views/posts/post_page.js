Template.postPage.htlpers({
	currentPost: function(){
		return Posts.findOne(Session.get('currentPostId'))
	}
});