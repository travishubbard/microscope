Template.postEdit.helpers({
	post: function() {
		return Posts.findOne(Session.get('currentPostId'));
	}
});

Template.postEdit.events({

	'submit form': function(e){
		e.preventDefault();

		var currentPostId = Session.get('currentPostId');

		var postProperties = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		}

		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if (error) {
				//display error to the user
				alert(error.reason);
			} else {
				Meteor.Router.to('postPage', currentPostId);
			}
		});
	},

	'click .delete': function(e){
		e.preventDefault();

		if (confirm("Delete this post?\n\nDeleting a post can not be undone.")) {
			var currentPostId = Session.get('currentPostId');
			Posts.remove(currentPostId);
			Meteor.Router.to('postsList');
		}
	}
});