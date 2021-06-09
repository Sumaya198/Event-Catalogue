const DATA_EVENTS = [
    {
      id: 'event1',
      title: 'Treasure Hunt',
      description:
        'Whether you are looking to bring your team together for a virtual social quiz, decipher clues and unleash your inner detective, unearth the secrets of a killer or explore your favourite city;',
      location: 'Somestreet 25, B1 8TF Birmingham',
      date: '2021-05-12',
      image: 'images/treasure.jpg',
      isFeatured: false,
    },
    {
      id: 'event2',
      title: 'Explore London',
      description:
        "Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
      location: 'New Wall Street 5, W4 5TH London',
      date: '2021-05-30',
      image: 'images/london.jpg',
      isFeatured: true,
    },
    {
      id: 'event3',
      title: 'Outdoor Cinema',
      description:
        'Join us at Luna Springs for an outdoor cinema experience like no other. Serving up the ultimate night out for any film fanatic.',
      location: 'My Street 12, E2 9EN London',
      date: '2022-04-10',
      image: 'images/cinema.jpg',
      isFeatured: true,
    },
    {
        id: 'event4',
        title: 'Pottery',
        description:
          'From our home at Birmingham’s Old Print Works in Balsall Heath, we offer pottery courses, workshops, and membership for all ages and abilities.',
        location: 'My Street 12, B3 8UL Birmingham',
        date: '2022-04-10',
        image: 'images/pottery.jpg',
        isFeatured: true,
      },
  ];
  
  export function getFeaturedEvents() {
    return DATA_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DATA_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DATA_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DATA_EVENTS.find((event) => event.id === id);
  }
  