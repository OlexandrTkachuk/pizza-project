import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FullPizza from 'components/FullPizzaComponent/FullPizza';
import { Container } from 'components/FullPizzaComponent/FullPizza.styled';

const FullPizzaPage = () => {
  const { id } = useParams();
  const [pizzaItem, setPizzaItem] = useState();

  useEffect(() => {
    const FecthPizzaById = async () => {
      try {
        const { data } = await axios.get(
          `https://645604705f9a4f236138e078.mockapi.io/items/${id}`
        );
        setPizzaItem(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    FecthPizzaById();
  }, [id]);

  if (!pizzaItem) {
    return (
      <Container>
        Sry we cant get information about this pizza, try again!
      </Container>
    );
  }

  return <FullPizza item={pizzaItem} />;
};

export default FullPizzaPage;
