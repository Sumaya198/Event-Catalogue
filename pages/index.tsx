import EventList from '../components/event-list/event-list.component';
import { Hero } from '../components/hero/hero.style';
import { getFeaturedEvents } from '../data';

export default function Home(): JSX.Element {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Hero />
      <EventList items={featuredEvents} />
    </div>
  )
}
