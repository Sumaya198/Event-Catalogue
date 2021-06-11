
import * as S from './results.styles';

function ResultsTitle(props) {
    const { date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <S.Title>
            <h1>Events in {humanReadableDate}</h1>
            <a href='/events'>Show all events</a>
        </S.Title>
    );
}

export default ResultsTitle;
