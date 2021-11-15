(() => {
  const app = {
    init() {
      // Generate basic layout.
      this.generateLayout();
      // Cache basic layout
      this.cacheElements();
      // Generate full user interface.
      this.generateUI();
    },
    generateLayout() {
      // Create basic layout of index.html
      document.body.innerHTML = '<header></header>\n\n<main></main>\n\n<footer></footer>';
    },
    cacheElements() {
      // Cache basic generated elements.
      this.$header = document.querySelector('header');
      this.$main = document.querySelector('main');
      this.$footer = document.querySelector('footer');
    },
    generateUI() {
      /////////////////////
      // Generate header //
      /////////////////////
      this.$header.innerHTML = `<nav class="navigation"></nav>`;

      // Cache navigation element
      this.$navigation = document.querySelector('nav');

      // Generate navigation main layout.
      this.$navigation.innerHTML = `
            <input class="nav-hamburger navigation--button" type="checkbox">
            <span class="nav-hamburger navigation--hamburger"></span>
            <span class="nav-hamburger navigation--hamburger"></span>
            <span class="nav-hamburger navigation--hamburger"></span>
            <ul class="navigation--menu"></ul>`;

      // Cache navigation list.
      this.$navigationList = document.querySelector('.navigation--menu');
      // Generate navigation list content.
      this.$navigationList.innerHTML = data.navigation.map((navItem) => {
        if (navItem.type === 'external') {
          return `
            <li class="external">
                <a href="${navItem.link}" target="_blank" class="external">${navItem.name}</a>
            </li>`;
        } else if (navItem.type === 'internal') {
          return `
            <li>
                <a href="${navItem.link}">${navItem.name}</a>
            </li>`;
        }
      }).join('');


      ///////////////////
      // Generate main //
      ///////////////////
      this.$main.innerHTML = `
        <section class="sort-lineup top-space_3"></section>
        <section class="countdown"></section>
        <section class="lineup"></section>`;

      // cache countdown elements.
      this.$countdown = document.querySelector('.countdown');

      // Start interval and countdown function generator
      const countdownInterval = setInterval(() => {
        countdown(this.$countdown);
      }, 1000);
      countdown(this.$countdown);

      // Generate countdown content
      function countdown($countdown) {
        // Cache new date object.
        const now = new Date();
        // take date object from event date.
        let countdown = data.event.date - now.getTime();
        // Check if date has passed.
        if (countdown >= 0) {
          // Count time and set it to every value
          const weeks = countdown > 604800000 ? countdown / 604800000 : 0;
          countdown = countdown > 604800000 ? countdown % 604800000 : countdown;
          const days = countdown > 86400000 ? countdown / 86400000 : 0;
          countdown = countdown > 86400000 ? countdown % 86400000 : countdown;
          const hours = countdown > 3600000 ? countdown / 3600000 : 0;
          countdown = countdown > 3600000 ? countdown % 3600000 : countdown;
          const minutes = countdown > 60000 ? countdown / 60000 : 0;
          countdown = countdown > 60000 ? countdown % 60000 : countdown;
          const seconds = countdown > 1000 ? countdown / 1000 : 0;
          // Set just calculated time in countdown html.
          $countdown.innerHTML = `
            <p>
              <span class="time-unit tu_weeks">${Math.floor(weeks)}</span> weeks, 
              <span class="time-unit tu_days">${Math.floor(days)}</span> days, 
              <span class="time-unit tu_hours">${Math.floor(hours)}</span> hours, 
              <span class="time-unit tu_minutes">${Math.floor(minutes)}</span> minutes, 
              <span class="time-unit tu_seconds">${Math.floor(seconds)}</span> secconds
            </p>`;
          // If not 0 or higher set passed message!
        } else {
          $countdown.innerHTML = `<p>We're officially married now!</p>`;
          // Kill the countdown interval.
          clearInterval(countdownInterval);
        }
      }


      // Cache lineup sort elements.
      this.$sortLineup = document.querySelector('.sort-lineup');

      // Generate lineup sort content.
      this.$sortLineup.innerHTML = `
      <p class="sort_info">Sort by:</p>
      <ul class="sort">
        <li id="Sunday">Sunday</li>
        <li id="Monday">Monday</li>
        <li id="Tuesday">Tuesday</li>
        <li id="Wednesday">Wednesday</li>
        <li id="Thursday">Thursday</li>
        <li id="Friday">Friday</li>
        <li id="Saturday">Saturday</li>
      </ul>`;

      // cache sort buttons.
      const $sorts = document.querySelectorAll('.sort-lineup .sort li');

      // Add event listeners to all buttons.
      for (let sort of $sorts) {
        // sort event lister:
        sort.addEventListener('click', (ev) => {
          // Create variable with the current targets ID.
          const sortId = ev.currentTarget.id;
          // Clone the lineup data.
          let lineupData = JSON.parse(JSON.stringify(data.lineup));
          // Filter our the right day.
          lineupData = lineupData.filter((value) => {
            // Create data object with date.
            const date = new Date(value.from);
            // If day is the same as the current targets id return the value, else not. (so it drops it)
            if (app.getDay(date.getDay()) === sortId) {
              return value;
            }
          });
          // Cache the sort info element.
          const $sortsInfo = document.querySelector('.sort-lineup .sort_info');
          // Check if the lineup data is empty, if so stop filtering:
          if (lineupData.length === 0) {
            // Set sort info to default.
            $sortsInfo.innerHTML = `Sort by:`;
            // Create shake animation
            document.body.classList.add('shake');
            // Regenerate lineup data.
            this.generateLineup(data.lineup);
            // Create timout that kills itself.
            const shakeWait = setTimeout(() => {
              // Remove shake effect.
              document.body.classList.remove('shake');
              // Kill interval.
              clearInterval(shakeWait);
            }, 1000);
            // stop here.
            return;
          }
          // This code runs if the above check was false:
          // Call lineup builder.
          this.generateLineup(lineupData);
          // Set sort info to by what its sorted.
          $sortsInfo.innerHTML = `Sorted by: ${sortId}</p><p class="sort_stop">Click here to stop filtering`;

          // Cache sort_stop element.
          const $sortsStop = document.querySelector('.sort-lineup .sort_stop');
          // "Stop filtering" event listener.
          $sortsStop.addEventListener('click', () => {
            $sortsInfo.innerHTML = `Sort by:`;
            // Call lineup builder.
            this.generateLineup(data.lineup);
          });
        });
      }


      // Cache lineup elements.
      this.$lineup = document.querySelector('.lineup');

      // Generate lineup content.
      data.lineup.sort((a, b) => {
        return a.from - b.from;
      });
      // Call lineup builder.
      this.generateLineup(data.lineup);


      /////////////////////
      // Generate footer //
      /////////////////////
      this.$footer.innerHTML = `<ul class="socials"></ul>`;

      // Generate social elements.
      this.$socials = document.querySelector('.socials');

      // Generate social content. (looping thru the list)
      this.$socials.innerHTML = data.socials.map((socialItem) => {
        return `
        <li>
            <a href="${socialItem.link}">
                <div class="social-item social-${socialItem.type}">
                    <i class="fab fa-${socialItem.type}"></i>
                </div>
            </a>
        </li>`;
      }).join('');

      ////////////////////
      // End generation //
      ////////////////////
    },
    generateLineup(lineupData) {
      // set the inner content to the result of the map function.
      this.$lineup.innerHTML = (lineupData.map((lineupItem) => {
        // Create new date object with from value.
        const date = new Date(lineupItem.from);
        // Gets the day, to be used later.
        const day = this.getDay(date.getDay());
        // Gets if the item is a headliner.
        const headliner = lineupItem.isHeadliner ? ' headliner' : '';
        // Returns the layout.
        return `
        <article id="${lineupItem.id}" class="card${headliner}">
            <section class="about">
                <h2>${lineupItem.artist.name}</h2>
                <p class="day">${day}</p>
                <p class="place">${lineupItem.place.name}</p>
            </section>
            <div class="outer-image">
                <img src="${lineupItem.artist.social.picture.small}" alt="${lineupItem.artist.name}">
            </div>
        </article>`;
        // Join the arrays together and add the popup element.
      }).join('')) + `<aricle class="popup hide"></aricle>`;


      // Cache all card elements.
      const $cards = document.querySelectorAll('.card');
      // Loop thru the cards
      for (let card of $cards) {
        // Add a event listener to every card?
        card.addEventListener('click', (ev) => {
          // get current target's ID.
          const cardID = ev.currentTarget.id;
          // Finds the right cards data and gives it to a variable.
          const cardData = data.lineup.find((e) => e.id === cardID);
          // Open the popup with the right data.
          this.popupOpen(cardData);
        });
      }
    },
    popupOpen(data) {
      // Cache popup element.
      const $popup = document.querySelector('.popup');

      // Stop the body from scrolling.
      document.body.classList.add('stop-scrolling');
      // Open the popup element, by removing its hide class.
      $popup.classList.remove('hide');

      // Create new date object for the from lineup data. To be used later.
      const from = new Date(data.from);
      // Create new date object for the to lineup data. To be used later.
      const to = new Date(data.to);
      // Get day to be used later.
      const day = app.getDay(from.getDay());
      // Check if element is headliner. To be used later.
      const headliner = data.isHeadliner ? ' headliner' : '';
      $popup.innerHTML = `
        <section class="popup_background">
            <p>Click here to close</p>
        </section>
        <section class="popup_contents">
            <section class="popup_image">
                <section class="about">
                    <h2>${data.artist.name}</h2>
                    <p class="day">${day}</p>
                    <p class="place">${data.place.name}</p>
                </section>
                <img class="${headliner}" src="${data.artist.social.picture.small}" alt="${data.artist.name}">
            </section>
            <section class="popup_content">
                <h3>Starring ${day} at ${from.getHours()}h till ${to.getHours()}h:</h3>
                <p class="sypnosis">${data.artist.synopsis}</p>
                ${app.generateMedia(data.artist.media)}
                ${app.generatePopupSocials(data.artist.social)}
            </section>
        </section>`;

      // Cache popup background element.
      const $popupBackground = document.querySelector('.popup_background');
      // Add click event listener to the background element.
      $popupBackground.addEventListener('click', this.popupClose);
    },
    popupClose() {
      // Cache popup element.
      const $popup = document.querySelector('.popup');
      // Hide the popup element by adding the hide class.
      $popup.classList.add('hide');
      // Allow scrolling on the body.
      document.body.classList.remove('stop-scrolling');
    },
    getDay(dayNr) {
      // List all days in the Date.getDay index.
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      // Return the day string by dayNr
      return days[dayNr];
    },
    generateMedia(media) {
      // Return the result of the map function.
      return media.map((mediaItem) => {
        // If the type is youtube, return youtube layout
        if (mediaItem.type === 'youtube') {
          return `<iframe class="media" src="https://www.youtube.com/embed/${mediaItem.sourceId}"></iframe>\n`;
          // Else return image layout
        } else {
          return `<img class="media" src="https://cdn.lyttle.it/${mediaItem.sourceId}.png" alt="${mediaItem.alt}">\n`;
        }
        // Join all arrays together.
      }).join('');
    },
    generatePopupSocials(socials) {
      // Returns fixed socials layout.
      return `
        <ul class="socials space_below">
          <li>
            <a href="${socials.website}">
                <i class="fas fa-globe-europe"></i>
            </a>
          </i>
          <li>
            <a href="${socials.facebook}">
              <i class="fab fa-facebook"></i>
            </a>
          </i>
          <li>
            <a href="${socials.twitter}">
              <i class="fab fa-twitter"></i>
            </a>
          </i>
          <li>
            <a href="${socials.instagram}">
              <i class="fab fa-instagram"></i>
            </a>
          </i>
        </ul>`;
    },
  };
  // Start the app. (Start initialization)
  app.init();
})();