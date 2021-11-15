const event = {
  // The date you gave had happend already, that's why I put my own date.
  // This date is my wedding day <3 //
  date: 1659776400000
};

const navigation = [
  {
    name: 'Home', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'Tickets', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/tickets', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'Line up', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/line-up', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'Camping', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/camping', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'Faq', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/practical', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'History', /*(string - de naam van het menuitem)*/
    link: 'https://www.rockwerchter.be/en/history', /*(string - de link naar de resource)*/
    type: 'internal', /*(string - type van link: internal of external)*/
  },
  {
    name: 'RWTV', /*(string - de naam van het menuitem)*/
    link: 'https://www.proximus.be/pickx/nl/festivals/rockwerchter/vod', /*(string - de link naar de resource)*/
    type: 'external', /*(string - type van link: internal of external)*/
  },
  {
    name: 'NWW', /*(string - de naam van het menuitem)*/
    link: 'https://northwestwalls.be/', /*(string - de link naar de resource)*/
    type: 'external', /*(string - type van link: internal of external)*/
  },
  {
    name: 'Buy tickets', /*(string - de naam van het menuitem)*/
    link: 'https://www.ticketmaster.be/feature/rockwerchter/?language=en-us&utm_source=rockwerchter.be&utm_medium=website&utm_campaign=rw22', /*(string - de link naar de resource)*/
    type: 'external', /*(string - type van link: internal of external)*/
  },
];


const lineup = [
  {
    id: 'ddee0179-bc3c-4891-8033-9493fa7d3c36', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Faith No More', /*(string)*/
      synopsis: 'Faith No More have always gone against the flow. The Americans do so with humour, a healthy sense of perspective, and a strong faith in their own talent.  This is not just an exceptional band; they are also of great historical importance. In the 1980s, they were the first to blend metal with funk and hip-hop as the founders of what became known as ‘crossover’. Hits like ‘We Care A Lot’ and ‘Epic’ paved the way for Nirvana, while they also inspired Korn and Limp Bizkit. These musical mavericks next shocked friend and foe alike with a smooth cover of ‘Easy’, the Commodores’ soul classic. This in turn made an impression on bands like System Of A Down and Deftones. The watchword is freedom, the outcome is modern metal. Following five years of inactivity, the San Francisco quintet is once again heading out on a world tour.', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://www.fnm.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/faithnomore', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/faithnomore', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/faithnomore', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/fnm-1500-60cc6b19a9efc.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/fnm-1500-60cc6b19a9efc.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: 'ZG_k5CSYKhg', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'Main Stage' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656756000000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656763200000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636209411334, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210887506, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: false, /*(boolean)*/
  },
  {
    id: '1f9717c4-0f16-40c1-8eef-5a4cb81c0921', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Imagine Dragons', /*(string)*/
      synopsis: 'Imagine Dragons are coming to Rock Werchter next summer! The American rock band announced their Mercury Tour, which takes them to Rock Werchter on Saturday 2 July. Hits like ‘Radioactive’, ‘Believer’ and ‘Thunder’ and their latest album ‘Mercury – Act 1’ proves that Imagine Dragons are among the biggest bands of their generation. With their swaggering songs full of heavy bass and intense drumming, big emotions and the powerful voice of Dan Reynolds, they will set the Festivalpark on fire. Are you ready?', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://www.imaginedragonsmusic.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/imaginedragons', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/imaginedragons', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/imaginedragons', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/id-website2000-617be270c6636.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/id-website2000-617be270c6636.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: 'Y2NkuFIlLEo', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'The Slope' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656763200000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656777600000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636209838723, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210910774, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: false, /*(boolean)*/
  },
  {
    id: '1961d21c-bc58-4958-80a9-34b1afeb5531', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Metallica', /*(string)*/
      synopsis: 'Metallica celebrate their fortieth birthday in October 2021, and have enjoyed huge acclaim for more than thirty years. The American band is an institution, and the first name that spontaneously comes to mind when you think of metal. They also helped to grow the genre with 1991’s ‘Metallica’, aka ‘The Black Album’. Hits like ‘Nothing Else Matters’ and ‘Enter Sandman’ gradually propelled the album to sales in excess of forty million. Metallica became the first metal band to headline a regular rock festival in 1993. And guess where? Werchter. Metallica is the group that has brought the largest number of fans to the festival over the last three decades. 2022 will – again – be a date with history.  Metallica will join The Chemical Brothers as the acts that have hit the festival stage the most times.', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://www.metallica.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/metallica', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/metallica', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/metallica', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/metallica-artiest-60c85d0413a36.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/metallica-artiest-60c85d0413a36.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: 'LxbNEjK2Hco', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'The Barn' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656669600000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656705600000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636209969142, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210815123, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: true, /*(boolean)*/
  },
  {
    id: 'c0d088f0-a8d0-46a8-9a03-f8183bef26f3', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Pearl Jam', /*(string)*/
      synopsis: 'Pearl Jam’s summer 2021 European tour has officially been rescheduled for June and July of 2022. The new European tour dates for the summer of 2022 are set. And so the first name for Rock Werchter 2022 is in. On Thursday, June 30, 2022, Pearl Jam will headline the opening day of the festival.', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://pearljam.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/pearljam', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/pearljam', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/pearljam', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: 'qM0zINtulhM', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'KluB C' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656583200000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656619200000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636210096371, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210820277, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: false, /*(boolean)*/
  },
  {
    id: 'f479bac4-f1a8-4d7b-8a5b-5637a89bbe17', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Red Hot Chili Peppers', /*(string)*/
      synopsis: 'Red Hot Chili Peppers are their own musical planet. The Californians introduced their original hybrid of rock and funk in the 1980s. Their danceable, distinctive and deeply energetic sound have provided a soundtrack that several generations have grown up to. The four-piece reached maturity with the album ‘Blood Sugar Sex Magik’ in 1991 – 30 years ago this year. ‘Give It Away’ and ‘Under The Bridge’ brought them their first taste of global fame, but it was ‘Californication’ (1999) – with ‘Scar Tissue’ and ‘Otherside’ - and ‘By the Way’ (2002) that really took the band to the top. The band have more than left their mark every time they’ve graced the Werchter stage, like when bassist Flea played in the nude in 1996. The group will be at its strongest in 2022, with star guitarist John Frusciante back on board.\n' +
        '\n', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://redhotchilipeppers.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/chilipeppers', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/chilipeppers', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/chilipeppers', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/rhcp-web-61543fbab0b59.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/rhcp-web-61543fbab0b59.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: 'Q0oIoR9mLwc', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'The Barn' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656842400000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656878400000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636210211927, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210969746, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: false, /*(boolean)*/
  },
  {
    id: '99edac78-2b26-4378-a4c1-393d660888aa', /*(string - de unieke identificatie van een concert, gebruik https://www.guidgenerator.com/ (Koppelingen naar een externe site.) om deze te genereren)*/
    artist: { /*(object) bestaat uit:*/
      name: 'Twenty One Pilots', /*(string)*/
      synopsis: 'Twenty One Pilots are among the greatest success stories of the 21st century. The numbers don’t lie. Their breakthrough, ‘Blurryface’ (2015), was the first album of the digital era on which all the songs have gone at least gold in the United States. The single ‘Stressed Out’ made the duo the first rock act to achieve more than a billion streams on Spotify. Drummer Josh Dun and keyboard wizard Tyler Joseph are born entertainers. On stage, this means fancy dress, a burning car and backflips off the piano.  Anything goes. Twenty One Pilots appeared at Werchter for the first time in 2014, early in the day in KluB C. They return as an undisputed top act, bringing the recently-released ‘Scaled and Icy’ with them.', /*(string)*/
      social: { /*(object) bestaat uit:*/
        website: 'https://www.twentyonepilots.com/', /*(string - link naar de website)*/
        facebook: 'https://www.facebook.com/twentyonepilots', /*(string - link naar de facebook)*/
        twitter: 'https://www.twitter.com/twentyonepilots', /*(string - link naar de twitter)*/
        instagram: 'https://www.instagram.com/twentyonepilots', /*(string - link naar de instagram)*/
        picture: { /*(object) bestaat uit:*/
          small: 'https://assets.rockwerchter.be/files/cache/medium/files/top-1500-60cc6b1984834.jpg', /*(string - link naar een online afbeelding)*/
          large: 'https://assets.rockwerchter.be/files/cache/large/files/top-1500-60cc6b1984834.jpg', /*(string - link naar een online afbeelding )*/
        },
      },
      media: [
        { /*(array van objecten). Object bestaat uit:*/
          type: 'youtube', /*(string - type van medium: image of youtube)*/
          sourceId: '2sBRnnnZyFw', /*(string)*/
        },
        { /*(array van objecten). Object bestaat uit:*/
          type: 'image', /*(string - type van medium: image of youtube)*/
          sourceId: 'QhXnMVNpi7', /*(string)*/
          alt: 'Dit is een test :D', /*(string)*/
        },
      ],
    },
    place: { /*(object) bestaat uit:*/
      name: 'Main Stage' /*(string - plaatsnaam waar het concert zal plaatsvinden: Main Stage, KluB C, The Barn of The Slope)*/
    },
    from: 1656777600000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    to: 1656792000000, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    createdAt: 1636210473475, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    modifiedAt: 1636210935675, /*(number - genereren via https://currentmillis.com/ (Koppelingen naar een externe site.))*/
    isHeadliner: true, /*(boolean)*/
  },
];


const socials = [
  {
    name: 'Facebook', /*(string - de naam van het menuitem)*/
    link: 'https://www.facebook.com/rockwerchterfestival', /*(string - de link naar de resource)*/
    type: 'facebook', /*(string - type van link: facebook, twitter, instagram, spotify en youtube)*/
  },
  {
    name: 'Twitter', /*(string - de naam van het menuitem)*/
    link: 'https://www.twitter.com/rockwerchter', /*(string - de link naar de resource)*/
    type: 'twitter', /*(string - type van link: facebook, twitter, instagram, spotify en youtube)*/
  },
  {
    name: 'Instagram', /*(string - de naam van het menuitem)*/
    link: 'https://instagram.com/rockwerchterfestival', /*(string - de link naar de resource)*/
    type: 'instagram', /*(string - type van link: facebook, twitter, instagram, spotify en youtube)*/
  },
  {
    name: 'Spotify', /*(string - de naam van het menuitem)*/
    link: 'https://play.spotify.com/user/rockwerchterofficial', /*(string - de link naar de resource)*/
    type: 'spotify', /*(string - type van link: facebook, twitter, instagram, spotify en youtube)*/
  },
  {
    name: 'YouTube', /*(string - de naam van het menuitem)*/
    link: 'https://www.youtube.com/user/rockwerchterfestival', /*(string - de link naar de resource)*/
    type: 'youtube', /*(string - type van link: facebook, twitter, instagram, spotify en youtube)*/
  },
];

const data = {navigation, lineup, socials, event};