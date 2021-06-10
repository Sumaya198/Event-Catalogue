import React from 'react'
import EventItem from '../event-item/event-Item.component'
//import EventItem from '../event-item/event-Item.component'
//import * as S from './event-list.styles'

const EventList = ({ items }) => {

    return (
        <ul>
        {items.map( (event => 
            <EventItem 
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            />
        ))}
    </ul>
    )
}

export default EventList
