import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { typeOptions } from 'constants/typeOptions';
import { addCartItem } from 'redux/slices/cartItemsSlice';
import {
  AddButton,
  ButtonWrapper,
  Card,
  ColorSpan,
  ContentBox,
  Image,
  ImageBox,
  InfoWrapper,
  Ingredient,
  PriceText,
  SizeSpan,
  SubTitle,
  Title,
} from './MagicItem.styled';

const MagicItem = ({ item }) => {
  const dispatch = useDispatch();

  const { imageUrl, title, types, sizes, price, ingredients, id } = item;

  const [count, setCount] = useState(0);
  const [sizeActiveIndex, setSizeActiveIndex] = useState(0);
  const [typeActiveIndex, setTypeActiveIndex] = useState(0);

  const handleCountIncrement = () => setCount(prev => prev + 1);
  const handeSizeActiveIndex = index => setSizeActiveIndex(index);
  const handleTypeActiveIndex = index => setTypeActiveIndex(index);

  const handleFullPrice = () => {
    if (sizes[sizeActiveIndex] === 30) {
      return `${Math.round(price * 1.35)}`;
    } else if (sizes[sizeActiveIndex] === 40) {
      return `${Math.round(price * 1.65)}`;
    } else {
      return `${price * 1}`;
    }
  };

  const handleAddItem = () => {
    handleCountIncrement();

    const cartItem = {
      id,
      imageUrl,
      title,
      price,
      type: types[typeActiveIndex],
      size: sizes[sizeActiveIndex],
    };

    dispatch(addCartItem(cartItem));

    // const alreadyExists = cartItems.findIndex(item => {
    //   const name = item.title.toLowerCase();
    //   const newName = cartItem.title.toLowerCase();

    //   return name === newName;
    // });

    // if (alreadyExists >= 0) {
    //   return;
    // } else {
    //   dispatch(addCartItem(cartItem));
    // }
  };

  return (
    <Card>
      <ImageBox className="ImageBox">
        <Image src={imageUrl} alt={title} loading="lazy" />
      </ImageBox>

      <ContentBox className="ContentBox">
        <Title>{title}</Title>

        <InfoWrapper className="SizeWrapper">
          <SubTitle style={{ marginBottom: '6px' }}>Тісто :</SubTitle>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
            }}
          >
            {types.map((option, index) => (
              <SizeSpan
                key={index}
                className={typeActiveIndex === index ? 'active' : ''}
                onClick={() => handleTypeActiveIndex(index)}
              >
                {typeOptions[option]}
              </SizeSpan>
            ))}
          </div>
        </InfoWrapper>

        <InfoWrapper className="ColorWrapper">
          <SubTitle>Розмір :</SubTitle>

          {sizes.map((option, index) => (
            <ColorSpan
              onClick={() => handeSizeActiveIndex(index)}
              className={sizeActiveIndex === index ? 'active' : ''}
              key={index}
            >
              {option}
            </ColorSpan>
          ))}
        </InfoWrapper>

        <ButtonWrapper className="StyledLink">
          <PriceText>{handleFullPrice()} грн.</PriceText>

          <AddButton onClick={handleAddItem}>
            <p> Додати</p>
            <i>{count > 0 ? count : ' '}</i>
          </AddButton>
        </ButtonWrapper>
      </ContentBox>

      <Ingredient className="Ingredients">{ingredients}</Ingredient>
    </Card>
  );
};

export default MagicItem;
