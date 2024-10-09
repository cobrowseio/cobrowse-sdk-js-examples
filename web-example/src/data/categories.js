export const categories = {
  childcare: {
    label: 'Childcare',
    businesses: [
      {
        name: 'Bright Horizons'
        // url: 'https://help.brighthorizons.com/s/'
        // Reason: Fails to load on both sides
      },
      {
        name: 'KinderCare',
        url: 'https://www.kindercare.com/contact-kindercare/contact-us'
      },
      {
        name: 'Tutor Time',
        url: 'https://www.tutortime.com/about-us/contact-us/'
      },
      {
        name: 'Busy Bees',
        url: 'https://www.busybeeschildcare.com/contact'
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
        name: 'Tesco'
        // url: 'https://www.tesco.com/help/contact'
        // Reason: 403s & fails to load once 403s are resolved
      },
      {
        name: 'Walmart'
        // url: 'https://corporate.walmart.com/about/contact'
        // Reason: CSS fails to load
      },
      {
        name: 'Kroger'
        // url: 'https://www.kroger.com/hc/help/contact-us'
        // Reason: 403s fails to load once 403s are resolved
      },
      {
        name: "Sainsbury's",
        url: 'https://help.sainsburys.co.uk/help/contact-us'
      },
      {
        name: 'Asda',
        url: 'https://asda-stores.custhelp.com'
      },
      {
        name: 'Morrisons',
        url: 'https://www.morrisons.com/help/form/contact-us'
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
        url: 'https://help.netflix.com/en/contactus'
      },
      {
        name: 'Amazon Prime Video',
        url: 'https://www.primevideo.com/help'
      },
      {
        name: 'Hulu'
        // url: 'https://help.hulu.com/contact-us/account-and-billing'
        // Reason: Error page
      },
      {
        name: 'Now TV',
        url: 'https://help.nowtv.com/article/how-to-contact-now'
      },
      {
        name: 'Sky'
        // url: 'https://www.sky.com/help/home/sky-tv'
        // Reason: 404s
      },
      {
        name: 'Disney+'
        // url: 'https://help.disneyplus.com/contact-us'
        // Reason: 404s
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
        name: 'British Gas'
        // url: 'https://www.britishgas.co.uk/help-and-support/contact-us'
        // Reason: Causes app to throw error
      },
      {
        name: 'EDF Energy',
        url: 'https://www.edfenergy.com/help-support/contact-us'
      },
      {
        name: 'NPower',
        url: 'https://npowerbusinesssolutions.com/get-in-touch'
      },
      {
        name: 'EON'
        // url: 'https://www.eonenergy.com/contact.html'
        // Reason: CloudFlare human verification loops
      },
      {
        name: 'SSE'
        // url: 'https://www.sse.com/contact-us/'
        // Reason: CloudFlare human verification loops
      },
      {
        name: 'Verizon',
        url: 'https://www.verizon.com/support/residential/contact-us/contactuslanding.htm'
      },
      {
        name: 'AT&T'
        // url: 'https://www.att.com/support/contact-us/'
        // Reason: 403s
      },
      {
        name: 'Comcast'
        // url: 'https://www.xfinity.com/support/contact-us'
        // Reason: 403s
      }
    ],
    amountRange: [6000, 20000],
    color: '#5287a1',
    icon: 'lightbulb'
  }
}
