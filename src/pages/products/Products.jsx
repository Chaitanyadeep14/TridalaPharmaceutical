import { useState } from 'react';
import BannerCarousel from '../../components/BannerCarousel.jsx';
import product1 from './../../assets/TridalaBanners/Products1.svg';
import product2 from './../../assets/TridalaBanners/Products2.svg';
import product3 from './../../assets/TridalaBanners/Products3.svg';
import img3 from './../../assets/productsPoster/3.svg';
import img4 from './../../assets/productsPoster/4.svg';
import img5 from './../../assets/productsPoster/5.svg';
import img6 from './../../assets/productsPoster/6.svg';
import img7 from './../../assets/productsPoster/7.svg';
import img8 from './../../assets/productsPoster/8.svg';
import img9 from './../../assets/productsPoster/9.svg';
import img10 from './../../assets/productsPoster/10.svg';
import img11 from './../../assets/productsPoster/11.svg';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Products() {
  const images = [product1, product2, product3];
  const [products, setProducts] = useState([
    {
      name: "OSELTRA 75",
      desc: "Oseltamivir 75mg",
      img: img3,
      collapsed: true,
    },
    {
      name: "Trilev M",
      desc: "Levocetrizine 5mg + Montelukast 10mg",
      img: img4,
      collapsed: true,
    },
    {
      name: "Pantri - D SR",
      desc: "Pantoprazole 40mg + Dimperidone 30mg SR",
      img: img5,
      collapsed: true,
    },
    {
      name: "BILFENA TH4",
      desc: "Aceclofenac 100mg + PCT 325mg + Thiocolchicoside  4mg",
      img: img6,
      collapsed: true,
    },
    {
      name: "TRILUSS PLUS",
      desc: "Bromhexine 2mg + Guaiphenesin 50mg + Trebutaline 1.25mg + Menthol 0.5mg",
      img: img9,
      collapsed: true,
    },
    {
      name: "BILFODOX CV",
      desc: "Cefpodoxime Proxetil 200mg + Clauvulanic Acid 125mg",
      img: img10,
      collapsed: true,
    },
    {
      name: "Roarvit",
      desc: "Multivitamin and Multimineral Syrup",
      img: img11,
      collapsed: true,
    },
    {
      name: "Triagel",
      desc: "Diclofenac Diethylamine 1.16% w/w + Linseed Oil 3% w/w +Methyl Salicylate 10% + Menthol 5% w/w + Benzyl Alcohol 1% w/w",
      img: img8,
      collapsed: true,
    },
    {
      name: "Pregabil NT",
      desc: "Pregabalin 75mg + Nortriptyline 10mg + Methyl Cobalamin (1500mcg)",
      img: img7,
      collapsed: true,
    },
  ]);

  const toggleCollapse = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, collapsed: !product.collapsed } : product
      )
    );
  };

  return (
    <>
      <div className='font-lato'>
        <div className='bg-[#E1EFF5]'>
          <BannerCarousel images={images} />
        </div>
        <FloatingWhatsApp phoneNumber="+918088113599" accountName="Tridala Pharma" />
        <div className="bg-[#179C8E]">
          <div className="flex justify-center py-5 md:py-10 xl:py-20">
            <div className="text-white font-bold text-2xl md:text-3xl xl:text-5xl">
              OUR PRODUCTS
            </div>
          </div>
          <div className='flex flex-col  items-center'>
            {products.map((item, index) => (
              <div key={index} className={`py-5 w-[70%] ${item.collapsed ? "border-b-2" : ""} `}>
                <button
                  onClick={() => toggleCollapse(index)}
                  className="rounded-md py-2 px-4 border border-transparent bg-[#1ab1a2] text-center text-sm text-white transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <div className='flex flex-col items-start'>
                    <div className='font-bold text-lg md:text-xl xl:text-2xl'>{item.name}</div>
                    <div className='font-thin text-sm md:text-lg xl:text-xl text-justify max-w-[800px]'>{item.desc}</div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${item.collapsed ? "max-h-0 opacity-0" : "h-auto opacity-100"
                    }`}
                >
                  <div className="relative mx-auto mt-4">
                    <img src={item.img} className={`xl:h-[500px] xl:w-fit ${item.collapsed ? "" : "border-b-2 py-5"} `} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='h-40 md:h-52 xl:h-64'></div>
        </div>
      </div>
    </>
  );
}
