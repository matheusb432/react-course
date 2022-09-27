import { useDetailsParams } from '../hooks';

const ProductDetail = () => {
  const params = useDetailsParams();

  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.id}</p>
    </section>
  );
};

export { ProductDetail };
