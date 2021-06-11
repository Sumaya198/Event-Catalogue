import { Fragment } from 'react';

import { useRouter } from 'next/router';

import { getAllEvents } from '../../data';
import EventList from '../../components/event-list/event-list.component';

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();


    return (
        <Fragment>
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage
