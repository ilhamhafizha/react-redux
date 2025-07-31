interface Props {
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
}

export const ProductCard = (props: Props) => {
  const { imageUrl, name, price, stock } = props;

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-full" src={imageUrl} alt="product" />
      </div>
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-xl font-semibold">Rp {price.toLocaleString("id-ID")}</p>
        <p className="text-muted-foreground text-sm">In stock: {stock}</p>
      </div>
    </div>
  );
};
