import * as S from './event-summary.styles';

function EventSummary(props) {
    const { title } = props;

    return (
        <S.Summary>
            <h2>{title}</h2>
        </S.Summary>
    );
}

export default EventSummary;