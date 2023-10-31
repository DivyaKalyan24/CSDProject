import styled from "styled-components";
import { popularProducts } from "./data";
import '../App.css';
import EventItem from "./EventItem";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Events = () => {
  return (
    <div>
      <h2 className="heading">EXPLORE EVENTS</h2>
      <Container>
        {popularProducts.map((item) => (
          <EventItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Events;