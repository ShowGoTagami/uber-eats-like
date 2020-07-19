import React from 'react';
import styled from 'styled-components';

// components
import { SubText } from './StyledText';

// constants
import { COLORS } from '../style_constants';

const Wrapper = styled.div`
  display: flex;
  width: 450px;
  height: 180px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
  border-image: initial;
  cursor: pointer;
`;

const FoodDetail = styled.div`
  padding: 24px 16px;
  width: 250px;
`;

const DescriptionWrapper = styled.div`
  height: 75px;
`

const PriceWrapper = styled.div`
  margin-top: 16px;
`

const FoodImageNode = styled.img`
  width: 250px;
`;

export const FoodWrapper = ({
  food,
  onClickFoodWrapper,
  imageUrl,
}) => (
  <Wrapper onClick={() => onClickFoodWrapper(food)}>
    <FoodDetail>
      {food.name}
      <DescriptionWrapper>
        <SubText>
          {food.description}
        </SubText>
      </DescriptionWrapper>
      <PriceWrapper>
        ¥{food.price}
      </PriceWrapper>
    </FoodDetail>
    <FoodImageNode src={imageUrl} />
  </Wrapper>
)
