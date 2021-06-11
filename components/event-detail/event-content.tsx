import * as S from './event-content.styles'

function EventContent(props) {
    return (
        <S.Content>
            {props.children}
        </S.Content>
    );
}

export default EventContent;
