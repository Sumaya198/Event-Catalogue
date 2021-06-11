import * as S from './logistics-item.styles';
function LogisticsItem(props) {
    const { icon: Icon } = props;

    return (
        <S.Item>
            <li>
                <span>
                    <S.Icons>
                        <Icon />
                    </S.Icons>
                </span>
                <span>{props.children}</span>
            </li>
        </S.Item>
    );
}

export default LogisticsItem;
