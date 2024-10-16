const https = require('https');
const fs = require('fs');

// URL to fetch the data from
const url =
	'https://raw.githubusercontent.com/Front-End-Coders-Mauritius/frontend.mu/main/packages/frontendmu-data/data/meetups-raw.json';

const ASSET_PATH = 'https://directus.frontend.mu/assets/';
// The date of the meetup you want to fetch (format: 'YYYY-MM-DD')
const meetupDate = '2024-10-26'; // Change this date to the desired meetup date

function getSpecificMeetupDetail(specifiedMeetup) {
	const sessionDetails = specifiedMeetup.sessions.map((session) => ({
		speakerName: session.Session_id.speakers.name,
		speakerGitHub: session.Session_id.speakers.github_account,
		speakerJob: '',
		sessionTitle: session.Session_id.title,
	}));

	const sponsorsDetails = specifiedMeetup.sponsors.map((sponsor) => {
		const logo = sponsor.Sponsor_id.Logo.filename_disk;
		const pathToLogo = ASSET_PATH + logo;
		return {
			logo: pathToLogo,
			name: sponsor.Sponsor_id.Name,
			darkbg: sponsor.Sponsor_id.darkbg,
			venue: specifiedMeetup.Venue,
		};
	});

	const payload = {
		meetupDate: specifiedMeetup.Date,
		sessionDetails,
		sponsorsDetails,
		meetupId: specifiedMeetup.id,
		meetupTitle: specifiedMeetup.title,
	};

	return payload;
}

// Fetch the data from the URL
https
	.get(url, (response) => {
		let data = '';

		// A chunk of data has been received
		response.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received
		response.on('end', () => {
			// Parse the JSON data
			const meetups = JSON.parse(data);
			const formattedMeetups = meetups
				.map((meetup) => getSpecificMeetupDetail(meetup))
				.sort((a, b) => new Date(b.meetupDate) - new Date(a.meetupDate));

			// Write the details to a JSON file
			const outputFileName = `all-meetups.json`;

			fs.writeFile(
				outputFileName,
				JSON.stringify(formattedMeetups, null, 2),
				(err) => {
					if (err) throw err;
					console.log(
						`Meetup details for ${meetupDate} have been written to ${outputFileName}`,
					);
				},
			);
		});
	})
	.on('error', (err) => {
		console.log('Error fetching the data: ' + err.message);
	});
