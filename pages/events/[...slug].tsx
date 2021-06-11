import { Fragment } from 'react';

import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../data'
import EventList from '../../components/event-list/event-list.component';
import ResultsTitle from '../../components/event-result/result-component';

const FilteredEvent = () => {
    const router = useRouter()

    const filteredData = router.query.slug;
    console.log('filter', filteredData)

    if (!filteredData) {
        return <p>Loading...</p>
    }

    const filteredYear = +filteredData[0]
    const filteredMonth = +filteredData[1]
    console.log('year', filteredYear)

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2030 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return <p>Invalid Filter</p>
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No Events</p>
    }

    const date = new Date(filteredYear, filteredMonth - 1)

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEvent
