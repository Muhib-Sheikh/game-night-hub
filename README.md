# WEB103 Project 3 - *Game Night Hub*

Submitted by: **Muhib Sheikh**

About this web app: **Game Night Hub is a virtual gaming community space where users can explore four themed gaming spaces and discover upcoming gaming events. Users can select locations through an interactive visual map and view events associated with each location. The application is built with React, Express, Node.js, and PostgreSQL, with the database hosted on Render.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x1] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [ ] An additional page shows all possible events
  - [ ] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='Web103 Project3 Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  macOS Screen Recorder.
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The main issue I ran into initially was configuring environment variables for the PostgreSQL connection and connecting React components to Express API endpoints. There were some isses where the env was not being imported correctly and certain components were not being recognized.

I also adjusted the CSS to improve readability by adding darker backgrounds to the location banners and event cards while keeping the interactive visual interface.

## License

Copyright [2026] [Muhib Sheikh]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.