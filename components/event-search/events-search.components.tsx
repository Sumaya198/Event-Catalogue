import { useRef } from 'react';
import Link from 'next/link';

import * as S from './events-search.styles';

export default function EventSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth)

    }

    return (
        <S.Form>
            <form onSubmit={submitHandler}>
                <S.Controls>
                    <S.Control>
                        <label htmlFor="year">Year</label>
                        <select id="year" ref={yearInputRef}>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </S.Control>
                    <S.Control>
                        <label htmlFor="month">Month</label>
                        <select id="month" ref={monthInputRef}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </S.Control>

                </S.Controls>
                <button>Find Event</button>
            </form>
        </S.Form>
    )
}