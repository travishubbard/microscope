// 29 AUG 2013 - by adding .fetch() the datatable worked...

Template.taxonomiesList.helpers({
	taxonomies: function() {
		return Taxonomies.find({}, {sort: {code: 1}}).fetch();
	},
});

Template.taxonomiesList.rendered = function() {
	$('#taxonomy_datatable').dataTable()
}