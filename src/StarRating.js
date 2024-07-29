import { FaRegStar, FaStar } from 'react-icons/fa';
import styled from "styled-components";
import { useState } from "react";

const StarSection = styled.div`
    .star {
        color: yellow;
        font-size: 45px;
        cursor: pointer;
    }
`;

const StarRating = ({ starScore, setStarScore }) => {
    const ratingStarHandler = () => {
        let result = [];
        for (let i = 0; i < 5; i++) {
            result.push(
                <span key={i + 1} onClick={() => setStarScore(i + 1)}>
                    {
                        i + 1 <= starScore ?
                            <FaStar className="star" />
                            :
                            <FaRegStar className="star" />
                    }
                </span>
            );
        }
        return result;
    };

    return (
        <StarSection>
            {ratingStarHandler()}
        </StarSection>
    );
};

export default StarRating;
