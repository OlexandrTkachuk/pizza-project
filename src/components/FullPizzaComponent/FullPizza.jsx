import { Container, Image, PizzaInfo, Text, Title } from './FullPizza.styled';

const FullPizza = ({ item }) => {
  const { imageUrl, title, ingredients } = item;

  return (
    <Container>
      <Image src={imageUrl} alt="pizza name" width={450} />

      <PizzaInfo>
        <Title>{title}</Title>
        <Text>{ingredients}</Text>
      </PizzaInfo>
    </Container>
  );
};

export default FullPizza;
