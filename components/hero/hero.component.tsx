import React from "react";

import * as S from "./hero.style";

export const Hero = (): JSX.Element => {
    return (
        <S.Hero>
            <h1>this is a title</h1>
            <h2>sub heading goes here</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eget pretium tortor, sed risus. Vestibulum, purus ut consectetur sit tellus vel tellus. Quam dictum euismod ut risus. Turpis mi aliquet sed felis, arcu nisi vehicula elementum eleifend.
            </p>

        </S.Hero>
    );
}
