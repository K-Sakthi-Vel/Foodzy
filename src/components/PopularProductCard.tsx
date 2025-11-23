import { ShoppingBag, Star } from 'lucide-react';
type Props = {
  id: string;
  title: string;
  price: number;
  image?: string;
  type: string;
  originalPrice: number;
  rating: number;
};

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

export default function PopularProductCard({
  title,
  price,
  image,
  type,
  originalPrice,
  rating,
}: Props) {
  return (
    <div className="relative bg-white rounded-[5px] p-[13px] text-center border border-gray-200 w-[306px] h-[477px] flex flex-col items-center">
      <div className=" w-[278px] h-[278px] rounded-[5px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-[167px] left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer bg-red-500 hover:bg-[#D8372C] hover:text-white transition-colors">
          <ShoppingBag size={18} />
        </div>
      </div>
      <div className="w-[280px] h-[171px] pt-7 flex flex-col items-center justify-center mt-auto">
        <p className="text-sm text-gray-500">{type}</p>
        <div className="flex items-center my-2">
            {renderStars(rating)}
            <span className="text-xs text-gray-400 ml-1.5">({rating})</span>
        </div>
        <h3 className="text-base font-semibold text-gray-800 h-12 flex items-center justify-center">
          {title}
        </h3>
        <div className="mt-auto">
          <span className="text-lg font-bold text-red-500">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through ml-2.5">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
