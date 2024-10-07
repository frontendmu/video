# Build a promo video for frontendmu

Install dependencies

```bash
pnpm install
```

## Usage

1. Specify the date of the meetup in scripts/getData.js

    ```js
    const meetupDate = '2024-06-22'; // Change this date to the desired meetup date
    ```

2. Run the script to extract the meetup data to `latest_meetup_details.json`

    ```bash
    pnpm run data
    ```

    `latest_meetup_details.template.json` is a template file that contains the structure of the data that will be extracted from the meetup page.

3. **Optional** - Add `speakerJob` to `latest_meetup_details.json` to display the speaker's job title.

    ```json

    {
      "speakerName": "Sandeep Ramgolam",
      "speakerGitHub": "MrSunshyne",
      "sessionTitle": "Open Discussions",
      "speakerJob": "Senior Frontend Engineer"
    },
    ```

    If `speakerJob` is not provided, it will **not** be displayed in  the video.

4. **Important** - Add a `sponsor.png` to `public` for the sponsor logo.

5. **Optional** - Change `audio.mp3` in `public` to your desired audio file, keeping the file name the same.

6. Start remotion

    ```bash
    pnpm run start
    ```

7. Render the video

    Click **Render** in `remotion studio`

    ![image](https://github.com/user-attachments/assets/d674e835-0475-4fd3-88fb-f82243e9f254)
