import { Fragment } from 'react';

import { useRouter } from 'next/router';

import { getAllEvents } from '../../data';
import EventList from '../../components/event-list/event-list.component';
import EventSearch from '../../components/event-search/events-search.components';

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }


    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage
