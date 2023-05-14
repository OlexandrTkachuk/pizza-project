// system
import { useState } from 'react';

// styles
import {
  Counter,
  CounterButton,
  CounterIconDown,
  CounterIconUp,
  IngredientsText,
  IngredientsWrapper,
  PizzaItemBottomWrapper,
  PizzaItemButtonWrapper,
  PizzaItemImage,
  PizzaItemImageWrapper,
  PizzaItemIngredients,
  PizzaItemPriceText,
  PizzaItemPriceWrapper,
  PizzaItemTitle,
  PizzaItemWrapper,
  PizzaSelectorWrapper,
  SelectorItem,
  SelectorList,
} from './PizzaItem.styled';

// icons
import { TbCurrencyHryvnia } from 'react-icons/tb';

const PizzaItem = ({ item }) => {
  const { imageUrl, title, types, sizes, price, ingredients } = item;

  const [count, setCount] = useState(0);
  const [sizeActiveIndex, setSizeActiveIndex] = useState(0);
  const [typeActiveIndex, setTypeActiveIndex] = useState(0);
  const [isIngredientsShown, setIsIngredientsShown] = useState(false);

  const typeOptions = ['тонке', 'традиційне'];

  const handeSizeActiveIndex = index => setSizeActiveIndex(index);
  const handleTypeActiveIndex = index => setTypeActiveIndex(index);
  const handleCountIncrement = () => setCount(prev => prev + 1);
  const handleCountDecrement = () => {
    if (count <= 0) {
      return;
    }
    setCount(prev => prev - 1);
  };
  const handleIngredientsButton = () => {
    setIsIngredientsShown(!isIngredientsShown);
  };

  const handleFullPrice = () => {
    if (sizes[sizeActiveIndex] === 30) {
      return `${Math.round(price * 1.35)}`;
    } else if (sizes[sizeActiveIndex] === 40) {
      return `${Math.round(price * 1.65)}`;
    } else {
      return `${price * 1}`;
    }
  };

  return (
    <PizzaItemWrapper>
      <PizzaItemImageWrapper>
        <PizzaItemImage src={imageUrl} alt="Pizza" loading="lazy" />

        <IngredientsWrapper
          style={{
            opacity: !isIngredientsShown ? 0 : 0.95,
            zIndex: !isIngredientsShown ? 0 : 111,
          }}
        >
          {ingredients.map((ingredient, index) => (
            <IngredientsText key={index}>{ingredient}</IngredientsText>
          ))}
        </IngredientsWrapper>
      </PizzaItemImageWrapper>

      <PizzaItemTitle>{title}</PizzaItemTitle>

      <PizzaItemIngredients onClick={handleIngredientsButton}>
        Інгрідієнти
      </PizzaItemIngredients>

      <PizzaSelectorWrapper>
        <SelectorList>
          {types.map((option, index) => (
            <SelectorItem
              key={index}
              className={typeActiveIndex === index ? 'active' : ''}
              onClick={() => handleTypeActiveIndex(index)}
            >
              {typeOptions[option]}
            </SelectorItem>
          ))}
        </SelectorList>

        <SelectorList>
          {sizes.map((option, index) => (
            <SelectorItem
              onClick={() => handeSizeActiveIndex(index)}
              className={sizeActiveIndex === index ? 'active' : ''}
              key={index}
            >
              {option} см.
            </SelectorItem>
          ))}
        </SelectorList>
      </PizzaSelectorWrapper>

      <PizzaItemBottomWrapper>
        <PizzaItemPriceWrapper>
          <PizzaItemPriceText>{handleFullPrice()}</PizzaItemPriceText>
          <TbCurrencyHryvnia size={22} color="#000000" />
        </PizzaItemPriceWrapper>

        <div style={{ display: 'flex', gap: 4 }}>
          <Counter>
            <CounterButton size={16}>
              <CounterIconUp onClick={handleCountIncrement} />
            </CounterButton>

            <CounterButton size={16} disabled={count > 0 ? false : true}>
              <CounterIconDown onClick={handleCountDecrement} />
            </CounterButton>
          </Counter>

          <PizzaItemButtonWrapper onClick={handleCountIncrement}>
            <p> + Додати</p>
            <i>{count > 0 ? count : ' '}</i>
          </PizzaItemButtonWrapper>
        </div>
      </PizzaItemBottomWrapper>
    </PizzaItemWrapper>
  );
};

export default PizzaItem;
