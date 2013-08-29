// Fixture data
if (Posts.find().count() === 0) { 

	var now = new Date().getTime();

	// create two users
	var tomId = Meteor.users.insert({
		profile: { name: 'Tom Coleman' }
	});

	var tom = Meteor.users.findOne(tomId);

	var sachaId = Meteor.users.insert({
		profile: { name: 'Sacha Greif' }
	});

	var sacha = Meteor.users.findOne(sachaId);

	var telescopeId = Posts.insert({
		title: 'Introducing Telescope',
		userId: sacha._id,
		author: sacha.profile.name,
		url: 'http://sachagreif.com/introducing-telescope/', submitted: now - 7 * 3600 * 1000,
		commentsCount: 2
	});
	
	Comments.insert({
		postId: telescopeId,
		userId: tom._id,
		author: tom.profile.name,
		submitted: now - 5 * 3600 * 1000,
		body: 'Interesting project Sacha, can I get involved?'
	});

	Comments.insert({
		postId: telescopeId,
		userId: sacha._id,
		author: sacha.profile.name, submitted: now - 3 * 3600 * 1000, body: 'You sure can Tom!'
	});

	Posts.insert({
		title: 'Meteor',
		userId: tom._id,
		author: tom.profile.name,
		url: 'http://meteor.com', submitted: now - 10 * 3600 * 1000,
		commentsCount: 0
	});

	Posts.insert({
		title: 'The Meteor Book',
		userId: tom._id,
		author: tom.profile.name,
		url: 'http://themeteorbook.com', submitted: now - 12 * 3600 * 1000,
		commentsCount: 0
	});

	for (var i = 0; i < 10; i++){
		Posts.insert({
			title: 'Test post #' + i,
			author: sacha.profile.name,
			userId: sacha._id,
			url: 'http://google.com/?q=test-' + i,
			submitted: now - i * 3600 * 1000,
			commentsCount: 0
		});
	}
}

if (Taxonomies.find().count() === 0) { 
	Taxonomies.insert({
		code: '000Y00000X',
		type: 'Behavioral Health & Social Service Providers',
		classification: 'Counselor',
		specialization: 'Addiction (Substance Use Disorder)'
	});


	Taxonomies.insert({
		code: '111NX0800X',
		type: 'Chiropractic Providers	Chiropractor',
		classification: 'Orthopedic',
		specialization: ''
	});

	Taxonomies.insert({
		code:'122300000X',
		type: 'Dental Providers',
		classification: 'Dentist',	
		specialization: ''
	});

	Taxonomies.insert({
		code:'126900000X',
		type: 'Dental Providers',
		classification: 'Dental Laboratory Technician',
		specialization: ''
	});

	Taxonomies.insert({
		code:'132700000X',
		type: 'Dietary & Nutritional Service Providers',
		classification: 'Dietary Manager',
		specialization: ''	
	});

	Taxonomies.insert({
		code:'133N00000X',
		type: 'Dietary & Nutritional Service Providers',
		classification: 'Nutritionist',
		specialization: ''	
	});

	Taxonomies.insert({
		code:'133NN1002X',
		type: 'Dietary & Nutritional Service Providers',
		classification: 'Nutritionist',
		specialization: 'Nutrition, Education'
	});

	Taxonomies.insert({
		code:'133V00000X',
		type: 'Dietary & Nutritional Service Providers',
		classification: 'Dietitian, Registered',
		specialization: ''
	});

	Taxonomies.insert({
		code:'136A00000X',
		type: 'Dietary & Nutritional Service Providers',
		classification: 'Dietetic Technician, Registered',
		specialization: ''
	});

	Taxonomies.insert({
		code:'146D00000X',
		type: 'Emergency Medical Service Providers',
		classification: 'Personal Emergency Response Attendant'	,
		specialization: ''
	});

	Taxonomies.insert({
		code:'146L00000X',
		type: 'Emergency Medical Service Providers',
		classification: 'Emergency Medical Technician, Paramedic',
		specialization: ''	
	});

	Taxonomies.insert({
		code:'207SG0205X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Medical Genetics',
		specialization: 'Ph.D. Medical Genetics'
	});

	Taxonomies.insert({
		code:'207SM0001X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Medical Genetics',
		specialization: 'Molecular Genetic Pathology'
	});

	Taxonomies.insert({
		code:'207T00000X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Neurological Surgery',
		specialization: ''
	});

	Taxonomies.insert({
		code:'207U00000X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Nuclear Medicine',
		specialization: ''
	});

	Taxonomies.insert({
		code:'207W00000X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Ophthalmology',
		specialization: ''
	});

	Taxonomies.insert({
		code:'207Y00000X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Otolaryngology',
		specialization: ''
	});

	Taxonomies.insert({
		code:'207ZB0001X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Pathology',
		specialization: 'Blood Banking & Transfusion Medicine'
	});

	Taxonomies.insert({
		code:'207ZC0006X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Pathology',
		specialization: 'Clinical Pathology'
	});

	Taxonomies.insert({
		code:'207ZC0500X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Pathology',
		specialization: 'Cytopathology'
	});

	Taxonomies.insert({
		code:'207ZD0900X',
		type: 'Allopathic & Osteopathic Physicians',
		classification: 'Pathology',
		specialization: 'Dermatopathology'
	});

	Taxonomies.insert({
		code:'211D00000X',
		type: 'Podiatric Medicine & Surgery Service Providers',
		classification: 'Assistant, Podiatric',
		specialization: ''
	});

	Taxonomies.insert({
		code:'213E00000X',
		type: 'Podiatric Medicine & Surgery Service Providers',
		classification: 'Podiatrist',
		specialization: ''
	});

	Taxonomies.insert({
		code:'225XP0019X',
		type: 'Respiratory, Developmental, Rehabilitative and Restorative Service Providers',
		classification: 'Occupational Therapist	Physical Rehabilitation',
		specialization: ''
	});

	Taxonomies.insert({
		code:'225XP0200X',
		type: 'Respiratory, Developmental, Rehabilitative and Restorative Service Providers',
		classification: 'Occupational Therapist	Pediatrics',
		specialization: ''
	});

	Taxonomies.insert({
		code:'225XR0403X',
		type: 'Respiratory, Developmental, Rehabilitative and Restorative Service Providers',
		classification: 'Occupational Therapist	Driving and Community Mobility',
		specialization: ''
	});

	Taxonomies.insert({
		code:'231H00000X',
		type: 'Speech, Language and Hearing Service Providers',
		classification: 'Audiologist',
		specialization: ''
	});

	Taxonomies.insert({
		code:'231HA2400X',
		type: 'Speech, Language and Hearing Service Providers',
		classification: 'Audiologist',
		specialization: 'Assistive Technology Practitioner'
	});
}
