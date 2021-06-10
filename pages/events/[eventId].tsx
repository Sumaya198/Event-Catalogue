import React from 'react';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const SingleEvent = () => {
    const router = useRouter()

    const eventId = router.query.eventId;
    const event = getEventById(eventId)
    console.log('event', event)

    if (!event) {
        return <p>Event no found</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Link href='/'><a>Go Back</a></Link>

        </Fragment>
    )
}

export default SingleEvent
