import { Fragment } from 'react'
import Link from 'next/link';

import * as S from './main-header.styles';

const MainHeader = () => {
    return (
        <Fragment>
            <S.Header>
                <S.Logo>
                    <Link href='/'>Next Events</Link>
                </S.Logo>
                <S.Nav>
                    <ul>
                        <li>
                            <Link href='/events'>Browse All Events</Link>
                        </li>
                    </ul>
                </S.Nav>
            </S.Header>
        </Fragment>
    )
}

export default MainHeader
