import styled from "styled-components";
import {categoriestrend} from "../data";
import CategoriesTrendItem from "./CategoriesTrendItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const CategoriesTrend = () => {
  return (
    <Container>
      {categoriestrend.map(item=>(
          <CategoriesTrendItem item = {item}/>
      ))}
    </Container>
  )
}

export default CategoriesTrend
