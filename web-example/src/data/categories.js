export const categories = {
  childcare: {
    label: 'Childcare',
    businesses: [
      {
        name: 'Bright Horizons',
        // url: 'https://help.brighthorizons.com/s/'
        // Reason: Fails to load on both sides
        lat: 42.3788,
        lng: -71.2356
      },
      {
        name: 'KinderCare',
        url: 'https://www.kindercare.com/contact-kindercare/contact-us',
        lat: 45.4215,
        lng: -122.6741
      },
      {
        name: 'Tutor Time',
        url: 'https://www.tutortime.com/about-us/contact-us/',
        lat: 28.3378,
        lng: -81.5089
      },
      {
        name: 'Busy Bees',
        url: 'https://www.busybeeschildcare.com/contact',
        lat: 52.6837,
        lng: -1.8188
      }
    ],
    amountRange: [8000, 90000],
    color: '#5c52a1',
    icon: 'child_care'
  },
  groceries: {
    label: 'Groceries',
    businesses: [
      {
        name: 'Tesco',
        // url: 'https://www.tesco.com/help/contact'
        // Reason: 403s & fails to load once 403s are resolved
        lat: 51.7065,
        lng: -0.0977
      },
      {
        name: 'Walmart',
        // url: 'https://corporate.walmart.com/about/contact'
        // Reason: CSS fails to load
        lat: 36.3648,
        lng: -94.2179
      },
      {
        name: 'Kroger',
        // url: 'https://www.kroger.com/hc/help/contact-us'
        // Reason: 403s fails to load once 403s are resolved
        lat: 39.1031,
        lng: -84.5120
      },
      {
        name: "Sainsbury's",
        url: 'https://help.sainsburys.co.uk/help/contact-us',
        lat: 51.5141,
        lng: -0.0974
      },
      {
        name: 'Asda',
        url: 'https://asda-stores.custhelp.com',
        lat: 53.7967,
        lng: -1.5478
      },
      {
        name: 'Morrisons',
        url: 'https://www.morrisons.com/help/form/contact-us',
        lat: 53.7934,
        lng: -1.7568
      }
    ],
    amountRange: [1000, 20000],
    color: '#52a188',
    icon: 'shopping_cart'
  },
  leisure: {
    label: 'Leisure',
    businesses: [
      {
        name: 'Netflix',
        url: 'https://help.netflix.com/en/contactus',
        lat: 37.2586,
        lng: -121.9625
      },
      {
        name: 'Amazon Prime Video',
        url: 'https://www.primevideo.com/help',
        lat: 47.6205,
        lng: -122.3493
      },
      {
        name: 'Hulu',
        // url: 'https://help.hulu.com/contact-us/account-and-billing'
        // Reason: Error page
        lat: 34.1508,
        lng: -118.4637
      },
      {
        name: 'Now TV',
        url: 'https://help.nowtv.com/article/how-to-contact-now',
        lat: 51.5142,
        lng: -0.0931
      },
      {
        name: 'Sky',
        // url: 'https://www.sky.com/help/home/sky-tv'
        // Reason: 404s
        lat: 51.4871,
        lng: -0.3179
      },
      {
        name: 'Disney+',
        // url: 'https://help.disneyplus.com/contact-us'
        // Reason: 404s
        lat: 34.1588,
        lng: -118.3215
      }
    ],
    amountRange: [300, 2000],
    color: '#96a152',
    icon: 'palette'
  },
  utilities: {
    label: 'Utilities',
    businesses: [
      {
        name: 'British Gas',
        // url: 'https://www.britishgas.co.uk/help-and-support/contact-us'
        // Reason: Causes app to throw error
        lat: 51.5074,
        lng: -0.1278
      },
      {
        name: 'EDF Energy',
        url: 'https://www.edfenergy.com/help-support/contact-us',
        lat: 51.5074,
        lng: -0.1278
      },
      {
        name: 'NPower',
        url: 'https://npowerbusinesssolutions.com/get-in-touch',
        lat: 51.5074,
        lng: -0.1278
      },
      {
        name: 'EON',
        // url: 'https://www.eonenergy.com/contact.html'
        // Reason: CloudFlare human verification loops
        lat: 52.9548,
        lng: -1.1581
      },
      {
        name: 'SSE',
        // url: 'https://www.sse.com/contact-us/'
        // Reason: CloudFlare human verification loops
        lat: 55.8600,
        lng: -4.2619
      },
      {
        name: 'Verizon',
        url: 'https://www.verizon.com/support/residential/contact-us/contactuslanding.htm',
        lat: 25.8626,
        lng: -80.3833
      },
      {
        name: 'AT&T',
        // url: 'https://www.att.com/support/contact-us/'
        // Reason: 403s
        lat: 32.7795,
        lng: -96.8014
      },
      {
        name: 'Comcast',
        // url: 'https://www.xfinity.com/support/contact-us'
        // Reason: 403s
        lat: 33.8889,
        lng: -84.4706
      }
    ],
    amountRange: [6000, 20000],
    color: '#5287a1',
    icon: 'lightbulb'
  }
}
