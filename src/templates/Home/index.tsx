import * as S from "./styles";
import mockProducts from "../../components/ItemCard/mock";
import ItemCard from "../../components/ItemCard";
import { useRouter } from "next/router";

const HomeTemplate = () => {
  const router = useRouter();

  return (
    <S.HomeWrapper>
      {mockProducts.map((product) => (
        <ItemCard
          onClick={() =>
            router.push(
              `/product?name=${product.title}&price=${product.price}&weight=${product.weight}&imgUrl=${product.imageSrc}`
            )
          }
          key={product.title}
          {...product}
        />
      ))}
    </S.HomeWrapper>
  );
};

export default HomeTemplate;
