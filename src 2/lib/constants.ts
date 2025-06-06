
import type { FestivalEvent, Performer, CommunityCalendarEvent } from '@/types';

export const SCHEDULE_DATA: FestivalEvent[] = [
  {
    id: "s1",
    name: "Doors Open",
    time: "Saturday July 26th, 9:00 AM",
    description: "Welcome to the 2025 Libby Pride Festival! Enjoy Coffee and wonderful music by our awesome DJ.",
    location: ''
  },
  {
    id: "s2",
    name: "Abigail’s Opening Prayer",
    time: "Saturday July 26th, 10:00 AM",
    description: "Start the day with a heartfelt prayer from Abigail, grounding us in love, community, and intention.",
    location: ''
  },
  {
    id: "s3",
    name: "Welcome & Introductions",
    time: "Saturday July 26th, 10:00 AM",
    description: "Matt kicks off Pride with warm introductions and an overview of the day’s festivities — what to look forward to, where to go, and how to get involved!",
    location: ''
  },
  {
    id: "s4",
    name: "Doggie Show",
    time: "Saturday July 26th, 10:30 AM",
    description: "Strut your fluff! Come cheer on local pups as they show off their pride looks, tricks, and personalities. Prizes for best costume, best trick, and more!",
    location: ''
  },
  {
    id: "s5",
    name: "Morning Wrap-Up",
    time: "Saturday July 26th, 10:30 AM",
    description: "A brief thank you and reminder of upcoming events before the next stage kicks off.",
    location: ''
  },
  {
    id: "s6",
    name: "DJ Set",
    time: "Saturday July 26th, 11:30 AM",
    description: "Let the music flow! Enjoy upbeat tunes and danceable tracks as our local DJ sets the Pride vibe.",
    location: ''
  },
  {
    id: "s7",
    name: "Welcome Back",
    time: "Saturday July 26th, 12:00 PM",
    description: "Matt returns to welcome everyone back for the midday round of events and reintroduce our upcoming performers and presenters.",
    location: ''
  },
  {
    id: "s8",
    name: "Self-Defense Workshop (Tentative)",
    time: "Saturday July 26th, 12:00 PM",
    description: "Empower yourself with this intro to basic self-defense techniques. Learn how to stay safe and aware. (Note: workshop pending confirmation.)",
    location: ''
  },
  {
    id: "s9",
    name: "Introduction by Nova and Diana)",
    time: "Saturday July 26th, 12:15 PM",
    description: "Our fabulous co-hosts Nova and Diana set the stage for the first afternoon show.",
    location: ''
  },
  {
    id: "s10",
    name: "Drag Show – First Performance",
    time: "Saturday July 26th, 12:15 PM",
    description: "Our queens are ready to slay! High-energy performances full of talent, sparkle, and celebration. Family-friendly and fabulous!",
    location: ''
  },
  {
    id: "s11",
    name: "Speaker Intros",
    time: "Saturday July 26th, 1:30 PM",
    description: "Matt brings up voices from our community to share stories, inspiration, and insight.",
    location: ''
  },
  {
    id: "s12",
    name: "Vendor Speeches & Community Shoutouts",
    time: "Saturday July 26th, 1:30 PM",
    description: "Hear from local LGBTQIA+ friendly vendors and sponsors about their work, missions, and love for the community.",
    location: ''
  },
  {
    id: "s13",
    name: "Featured Speech – Sarah",
    time: "Saturday July 26th, 1:30 PM",
    description: "A heartfelt and powerful story from Sarah, a voice of strength and advocacy in our region.",
    location: ''
  },
  {
    id: "s14",
    name: "Poetry Reading – Stormy Miller",
    time: "Saturday July 26th, 1:30 PM",
    description: "A beautiful spoken word piece by local poet Stormy Miller — raw, emotional, and empowering.",
    location: ''
  },
  {
    id: "s15",
    name: "Comedy Show Introduction by Diana and Nova",
    time: "Saturday July 26th, 2:00 PM",
    description: "Your hosts introduce our comedy segment with charm and flair.",
    location: ''
  },
  {
    id: "s16",
    name: "Comedy Set",
    time: "Saturday July 26th, 2:15 PM",
    description: "A short but mighty set from a special guest comic who brings humor, queerness, and connection to the stage.",
    location: ''
  },
  {
    id: "s17",
    name: "Drag Show – Second Performance",
    time: "Saturday July 26th, 2:30 PM",
    description: "More queens, more glitter, more magic. A second round of show-stopping drag performances.",
    location: ''
  },
  {
    id: "s18",
    name: "Live DJ",
    time: "Saturday July 26th, 2:30 PM",
    description: "Dance breaks between acts? Yes, please. Our DJ keeps the energy high and the beats rolling.",
    location: ''
  },
  {
    id: "s19",
    name: "Raffle Announcements & Giveaways",
    time: "Saturday July 26th, 4:00 PM",
    description: "See if your number gets called! Prizes donated by generous local businesses and supporters.",
    location: ''
  },
  {
    id: "s20",
    name: "Thank You Moment",
    time: "Saturday July 26th, 4:00 PM",
    description: "A collective shout-out to all the volunteers, sponsors, performers, and YOU for making Pride amazing.",
    location: ''
  },
  {
    id: "s21",
    name: "Live DJ Continues",
    time: "Saturday July 26th, 4:00 PM",
    description: "Celebrate with tunes and community while winding down the day portion of Pride.",
    location: ''
  },
  {
    id: "s22",
    name: "Drag Show Bingo (All Ages)",
    time: "Saturday July 26th, 5:00 PM",
    description: "Classic bingo with a fabulous twist! Family-friendly, inclusive fun with performances and prizes in between numbers.",
    location: ''
  },
  {
    id: "s23",
    name: "Doors Close (Daytime)",
    time: "Saturday July 26th, 5:30 PM",
    description: "Time to reset the space for the evening events. Come back with your dancing shoes!",
    location: ''
  },
  {
    id: "s24",
    name: "18+ Evening Block",
    time: "Saturday July 26th, 7:00 PM - 11:30 PM",
    description: "Doors Reopen for 18+. Come back for a more mature and spicy night of Pride celebration. Must be 18+ to enter.\n\nFeaturing:\n• DJ Set: Kick off the night with high-energy beats and rainbow lighting.\n• Comedy Show: Our featured comedian brings the house down with humor that celebrates queer joy and lived experience.\n• Evening Drag Show: Full glam, full volume. This show is fierce, unapologetic, and unforgettable.\n• DEV Live Performance: Catch DEV, platinum-selling pop artist of Like a G6, live with her new single Big Bossy and more!\n⸻",
    location: ''
  },
  {
    id: "s25",
    name: "Closing Activities: Thank You, Photos, Dance",
    time: "Saturday July 26th, 11:30 PM",
    description: "• Thank You & Final Words: Closing remarks to honor the love, laughter, and solidarity shared throughout the day.\n• Group Performer Photos: One last glittery group pic — everyone say “Pride!”\n• Dance Floor Opens: Let’s close it out with dancing, community, and all the queer joy we can handle.\n⸻",
    location: ''
  },
  {
    id: "s26",
    name: "Festival Concludes - Venue Closes",
    time: "Saturday July 26th, 12:00 AM (Midnight)",
    description: "The venue closes and we say goodnight — but the memories, community, and pride carry on.",
    location: ''
  }
];

export const PERFORMERS_DATA: Performer[] = [
  { id: "p1", name: "Dev", photoUrl: "https://placehold.co/300x400.png", bio: "Dev is the platinum-selling artist behind the chart-topping hit “Like a G6”—a cultural anthem that soared to #1 on the Billboard Hot 100. Known for her bold style, infectious energy, and genre-bending sound, Dev is back with her latest single “Big Bossy,” serving up fierce vibes and fearless empowerment. Get ready—Dev is bringing the heat to the stage!", type: "Musicians", dataAiHint: "musicians performing" },
  { id: "p2", name: "Aiden Park", photoUrl: "https://placehold.co/300x400.png", bio: "We’re thrilled to welcome comedian, motivational speaker, and award-winning author Aiden Park to this year’s Pride! Known for his sharp wit, infectious positivity, and powerful storytelling, Aiden brings both laughs and heart to every performance. As the author of “The Art of Being Yay!”, he’s helped thousands embrace joy and authenticity—even through life’s toughest moments. Get ready for inspiration, empowerment, and a whole lot of laughs!", type: "Speaker", dataAiHint: "speaker portrait" },
  { id: "p3", name: "Dr. Avery Kim", photoUrl: "https://placehold.co/300x400.png", bio: "Dr. Kim is a renowned activist and speaker on LGBTQ+ rights and history. Their insightful talks inspire action and foster understanding.", type: "Speaker", dataAiHint: "speaker portrait" },
  { id: "p4", name: "The Velvet Vixens", photoUrl: "https://placehold.co/300x400.png", bio: "A vibrant dance troupe that combines contemporary moves with queer expression. Their performances are both thought-provoking and visually captivating.", type: "Dance Troupe", dataAiHint: "dance troupe stage" },
  { id: "p5", name: "DJ Phoenix Rise", photoUrl: "https://placehold.co/300x400.png", bio: "Mixing beats that make you move, DJ Phoenix Rise is known for their inclusive and uplifting sets that span genres.", type: "DJ", dataAiHint: "DJ performing" },
  { id: "p6", name: "Laughing Out Proud", photoUrl: "https://placehold.co/300x400.png", bio: "A collective of hilarious queer comedians ready to tickle your funny bone with sharp wit and relatable humor.", type: "Comedy Collective", dataAiHint: "comedian stage" },
];

export const COMMUNITY_EVENTS_DATA: CommunityCalendarEvent[] = [
  {
    id: "cc2",
    date: "2025-06-07", 
    title: "Spay, Neuter & Vaccination Event",
    time: "June 7th @ 8 AM - June 8th @ 2 PM",
    location: "150 Education Way, Libby, MT 59923",
    description: "We’re excited to announce an upcoming spay and neuter clinic for our community pets! Services include:\n✔️ Spay & Neuter\n✔️ Vaccinations\n✔️ Microchipping\n\n🗓 By Appointment Only\n📞 Call 406-334-7338 to schedule your pet!\n\n💙 Huge thanks to Lincoln County Health Department and Spay MT — we couldn’t do this without you!",
    chatTopics: [
      "Sponsor the event: Contact us directly",
      "Volunteer: Reach out to Megan at 406-293-5735 (please leave a voicemail or stop in during open hours to sign up)"
    ]
  },
  {
    id: "cc1",
    date: "2025-06-08", 
    title: "Pride Meeting & Tie-Dye at the Park!",
    time: "2:00 PM",
    location: "Fred Brown Pavilion (or the smaller one next door if it’s taken — look for the Pride flag!)",
    description: "Join us for a casual Pride meeting and some fun tie-dyeing! We’ll be making shirts to sell at the event — supplies provided! Everyone’s welcome — see you at the park! 🌈",
    chatTopics: [
      "Volunteer sign-ups",
      "Doggie Show",
      "Vendors"
    ]
  },
  {
    id: "cc3",
    date: "2025-06-13",
    title: "Screaming Brain Retreat: Music, Art, Skateboarding & Mental Wellness",
    time: "June 13th @ 4 PM - June 16th @ 2 AM",
    location: "Roosevelt Park, Troy, MT",
    description: "Join Big Feelings Nonprofit for the FREE three-day Screaming Brain Retreat! Celebrate music (30+ artists!), art, skateboarding (competition Saturday!), and mental wellness. Enjoy aerial/flow arts, food/art vendors, workshops, classes, and evening live music. Tent camping available.\nOur goals:\n- Share how music, art & movement support mental health.\n- Have as much fun as possible!\nSupport our mission and join the fun! Donations Highly Encouraged! All donations directly fund the event, paying artists, speakers, workshoppers, and more.\n\nDonation Link: https://linktr.ee/bigfeelingsnpo",
    chatTopics: [
      "Event goals: Share how music, art & movement support mental health, and have fun!",
      "Support the mission: Donations highly encouraged."
    ]
  },
  {
    id: "cc4",
    date: "2025-06-28",
    title: "Eureka Pride",
    time: "11:00 AM - 3:00 PM",
    location: "Lincoln County Fairground, Eureka Montana",
    description: "Come celebrate diversity, equity, inclusion, and love in the Tobacco Valley!\n\nWe're building community by grilling, tie-dyeing, and playing yard games.\nBring a friend, a camp chair, something white to tie-dye, and a dish to share if you are able. Burgers/hot dogs/veggie burgers provided (while they last). Donations accepted, but not expected.\n\nOnly love allowed; leave any desire to engage with hateful people at home.",
    chatTopics: [
      "Questions or comments? Email KrystenFitz@gmail.com"
    ]
  }
];
