import React from 'react'

import * as S from './event-item.styles'

const EventItem = (props): JSX.Element => {
    const { title, image, date, location, id } = props

    const readabledate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n')

    const exploreLink = `/events/${id}`;

    return (
        <S.Hero>
            <li>
                <img src={'/' + image} alt={title} />
                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <div>{readabledate}</div>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                    <div>
                        <button><a href={exploreLink}>explore</a></button>
                    </div>
                </div>
            </li>
        </S.Hero>
    )
}

export default EventItem
