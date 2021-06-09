import EventList from '../components/event-list/event-list.component';
import {getFeaturedEvents} from '../data';

export default function Home(): JSX.Element {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}
