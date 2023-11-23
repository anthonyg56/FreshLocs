export interface IService {
  imageSrc: string;
  imageAlt: string;
  title: string;
  details: string;
  subTitle: string;
  options: IServiceOption[];
}

export interface IServiceOption {
  title: string;
  costFiat: number | undefined;
  costPoints: number | undefined;
  pointsEarned: number | undefined;
  link: string;
  disclaimer: string;
}

const services: IService[] = [
  {
    imageSrc: "/starter.jpg",
    imageAlt: "Starter Locs & Consultations",
    title: "Starter Locs & Consultations",
    subTitle: "Begin Your Loc Journey Here",
    details: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    options: [
      {
        title: "Loc Service Consultation",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: 5,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Consultation needed for any client that has never been serviced. Online Consultation is a fee of $25. Free walk-in Consultations are from 10am-3pm Tues-Sat."
      },
      {
        title: "Double Strand Starter Locs Consultation",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: 5,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Double Strand Starter Locs Consultation Only"
      },
      {
        title: "Straight Hair Starter Locs Consultation",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: undefined,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS; PICS OR A CONSULTATION IS NEEDED IN ORDER TO RECEIVE ACCEPTANCE FOR AN APPT - Free 10am-3pm after 3pm is a $50+ fee and must be paid in advance. /n Consultation is needed. This service is hourly and Crochet Method is used for this service. Half head can take 3-6 hours. Full head depending on length can take 6-12+ hours. Hrly Rate starts at $150.00+. Deposit is $150-300"
      },
      {
        title: "Loc Extensions or Instant Locs Consultation",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: undefined,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Consultation Only w/out service"
      },
    ]
  },
  {
    imageSrc: "/retwist.jpg",
    imageAlt: "loctician Retwisting Locs",
    title: "Retwists",
    subTitle: "Tighten Up Your Roots",
    details: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    options: [
      {
        title: "Re-Twist",
        costFiat: 75,
        costPoints: 500,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS; PICS OR A CONSULTATION IS NEEDED IN ORDER TO RECEIVE ACCEPTANCE FOR AN APPT. Locs are matted coils of hair. Locs are intentionally formed; because of the variety of different hair textures, various methods are used to encourage the formation of locs such as twisting/palm roll. Service starts at $100+ ***Holiday Service is an additional $50-100+"
      },
      {
        title: "Children Re-Twist",
        costFiat: 65,
        costPoints: 500,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS: Consultation may be needed before you can book. Shampoo & Retwist included. ***Holiday Service is an additional $25+"
      },
      {
        title: "Retwist and Basic Style",
        costFiat: 100,
        costPoints: 5000,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS; PICS OR A CONSULTATION IS NEEDED IN ORDER TO RECEIVE ACCEPTANCE FOR AN APPT. Your appt request will be denied if you book without a consultation first. ***Holiday Service is an additional $20+ Retwist and Loc Styling will include a Shampoo and Basic Styling. $135+"
      },
      {
        title: "Children Retwist & Basic Style",
        costFiat: 95,
        costPoints: 5000,
        pointsEarned: undefined,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Shampoo, Retwist & Basic Style included. These styles are not included; Ropebraids, 2 Strands, Curls, Beads. Those are Creative Styles and will cost more."
      },
      {
        title: "Retwist & Creative Loc Styling",
        costFiat: 120,
        costPoints: 5000,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS; PICS OR A CONSULTATION IS NEEDED IN ORDER TO RECEIVE ACCEPTANCE FOR AN APPT. Creative Styles start at $110 and up. Includes Barrel Rolls, Plait Braids to the Scalp, Basketweaves and etc. This service includes Retwist Service. We do not style the hair without a Retwist unless you have Sisterlocks. ***Holiday Service is an additional $20+"
      },
      {
        title: "Children Retwist & Creative Style",
        costFiat: 110,
        costPoints: undefined,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Shampoo, Retwist & Creative Style that last longer included. These styles are not included; Ropebraids, 2 Strands, Curls, Beads. Those are Creative Styles and will cost more."
      },
      {
        title: "Children Retwist & Creative Style",
        costFiat: 110,
        costPoints: undefined,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Shampoo, Retwist & Creative Style that last longer included. These styles are not included; Ropebraids, 2 Strands, Curls, Beads. Those are Creative Styles and will cost more."
      },
      {
        title: "Retwist & Ropebraids/Barrel Braids",
        costFiat: 130,
        costPoints: 5000,
        pointsEarned: 15,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "This service starts at $130+ and is based on Length and Amount of Locs. A Retwist Service is included. We do not style the hair without a Retwist unless you have Sisterlocks. The Price varies"
      },
      {
        title: "Retwist & 2 Strand Braids",
        costFiat: 165,
        costPoints: 5000,
        pointsEarned: 15,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Retwist & 2 Strand Braids"
      },
      {
        title: "Dizzy Locs",
        costFiat: 30,
        costPoints: 1500,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "One Dizzy Loc per 15-30 mins at $30+"
      },
      {
        title: "Retwist & Loc Curls",
        costFiat: 150,
        costPoints: 5000,
        pointsEarned: 15,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "One Dizzy Loc per 15-30 mins at $30+"
      },
    ]
  },
  {
    imageSrc: "/maintenace.jpg",
    imageAlt: "loctician treating hair",
    title: "Maintenace & Treatment",
    subTitle: "Freshen Up Your Locs",
    details: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    options: [
      {
        title: "Hot Oil Treatment",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: ""
      },
      {
        title: "Root Scalp Treatment Detox",
        costFiat: 25,
        costPoints: 5000,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "DO NOT BOOK THIS SERVICE AFTER 5PM: Detox the root area with a Peppermint Detox Tonic"
      },
      {
        title: "Shampoo Only",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Shampoo Only Service. Price varies based on condition, length of hair and texture. Dryer time of 30-45 mins Required"
      },
      {
        title: "Deep Cleanse Shampoo & Deep Conditioning",
        costFiat: 50,
        costPoints: undefined,
        pointsEarned: 5,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: ""
      },
    ]
  },
  {
    imageSrc: "/more.jpg",
    imageAlt: "Team",
    title: "More",
    subTitle: "Explore Your Options",
    details: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
    options: [
      {
        title: "Color Consultation/No Service",
        costFiat: 25,
        costPoints: undefined,
        pointsEarned: undefined,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "A consultation is needed to discuss pricing, hair texture, type of coloring and if your hair is healthy enough for locs. This is needed before booking an appointment."
      },
      {
        title: "Loc Trim/Cut Service",
        costFiat: 15,
        costPoints: undefined,
        pointsEarned: 15,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Trim is $15+, Cut is $25+"
      },
      {
        title: "Sisterlocks Style Only",
        costFiat: 35,
        costPoints: undefined,
        pointsEarned: 10,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "Only Sisterlocks Styles are allowed to be serviced for a Style Only without Maintenance. Styles start at $45 & up. ***Holiday Service is an additional $20+"
      },
      {
        title: "Full Service Crochet Method",
        costFiat: 300,
        costPoints: 5000,
        pointsEarned: 25,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "FIRST TIME CLIENTS; PICS OR A CONSULTATION IS NEEDED IN ORDER TO RECEIVE ACCEPTANCE FOR AN APPT. Crochet Method is a per hour rate and a Consultation is needed before scheduling this appointment. This is an hourly rate of $150+"
      },
      {
        title: "MINOR Crochet Maintenance",
        costFiat: 50,
        costPoints: 500,
        pointsEarned: 15,
        link: "https://www.vagaro.com/freshlocslocshopllc/book-now",
        disclaimer: "This service has to be approved from a previous service already done or a consultation has already been established. A consultation is needed in order to select this service. Please do not select if you have not been seen and/or quoted by a Loctician."
      },
    ]
  },
]

export default services