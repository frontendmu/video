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

3. Add a `sponsor.png` file for the sponsor logo to `public`.

4. Change `audio.mp3` in `public` to your desired audio file, keeping the file name the same.

5. Start remotion

    ```bash
    pnpm run start
    ```

6. Render the video

    Click **Render** in `remotion studio`

    ![image](https://github.com/user-attachments/assets/d674e835-0475-4fd3-88fb-f82243e9f254)
