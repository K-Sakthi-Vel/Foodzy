import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

type Props = {
  id: string;
  title: string;
  price: number;
  image?: string;
  type: string;
  rating: number;
  seller: string;
  originalPrice: number;
  tag: string | null;
  showSeller?: boolean;
  cardHeight?: string;
  fullWidthButton?: boolean;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  type,
  seller,
  originalPrice,
  tag,
  rating,
  showSeller = true,
  cardHeight = 'h-[465.38px]',
  fullWidthButton = false,
}: Props) {
  const getTagBgColor = () => {
    if (!tag) return '';
    if (tag.toLowerCase().includes('hot')) return 'bg-[#F74B81]';
    if (tag.toLowerCase().includes('sale')) return 'bg-[#67BCEE]';
    if (tag.toLowerCase().includes('new')) return 'bg-[#3BB77E]';
    if (tag.toLowerCase().includes('save')) return 'bg-[#3BB77E]';
    if (tag.toLowerCase().includes('best sale')) return 'bg-[#F59758]';
    return 'bg-[#F53E32]';
  };

  return (
    <div className={`w-[298px] ${cardHeight} rounded-[15px] border border-gray-200 p-3 flex flex-col relative font-poppins`}>
      {tag && (
        <div
          className={`absolute flex items-center justify-center rounded-tl-[15px] rounded-tr-0 rounded-br-[20px] rounded-bl-0 top-[-1px] left-[-1px] h-[31px] ${getTagBgColor()} text-white px-4 py-0.5 text-xs font-medium`}
        >
          {tag}
        </div>
      )}
      <div className="w-[296px] h-[278px] mx-auto flex items-center justify-center">
        <Link to={`/product/${id}`} className="w-[246px] h-[246px] flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </Link>
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <span className="text-[12px] text-gray-500 mb-1" style={{fontFamily:'Lato'}}>{type.charAt(0).toLocaleUpperCase() + type.slice(1)}</span>
        <h3 className="font-medium text-[15px] leading-6 tracking-[0.48px] text-[#253D4E] h-[48px] overflow-hidden">
          {title}
        </h3>
        <div className="flex items-center my-2">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span className="text-xs text-gray-500 ml-1.5">{`(${rating})`}</span>
        </div>
        {showSeller && <span className="text-xs text-gray-500 mb-2.5">By <span className='text-[#F53E32]'>{seller}</span></span>}
        <div className="flex-grow" />
        <div className={`flex ${fullWidthButton ? 'flex-col' : 'justify-between'} items-center mt-auto`}>
          <div className={`${fullWidthButton ? 'w-full text-start' : ''}`}>
            <span className="text-lg font-semibold text-[#3BB77E]">
              ₹{price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              ₹{originalPrice.toFixed(2)}
            </span>
          </div>
          <div className={`${fullWidthButton ? 'w-full mt-4' : ''}`}>
            {fullWidthButton ? (
               <button className="w-full bg-[#F53E32] hover:bg-[#D8372C] text-white rounded-md py-2 px-4 font-bold cursor-pointer">Add To Cart</button>
            ) : (
              <AddToCartButton
                item={{ id, name: title, price, qty: 1, image }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
