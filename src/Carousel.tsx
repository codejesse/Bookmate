import { useState, useRef, useEffect, useContext } from 'react';
import Searchbar from './components/Searchbar';
// import { Istate as Iprops } from "./components/Main"
import { BookContextType, Ibook } from './@types/types.books';
import { BookContext } from './context/bookContext';

// Data
import data from './data.json';
import { ArrowLeft, ArrowRight } from 'iconsax-react';

const Carousel: React.FC = ({  }) => {
  const { books } = useContext(BookContext) as BookContextType;
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);


  return (
    <div className="carousel mt-0 my-0 mx-auto">
      <div className="flex flex-row gap-4 leading-8 font-semibold mb-12 text-slate-700">
        <h2 className="text-2xl">Recommended</h2>
        <h2 className="text-xl text-slate-300">Recently read</h2>
        <button className="w-10 h-10 bg-white rounded-full mr-3" onClick={movePrev}><ArrowLeft style={{ color: 'blue', margin: '8px' }} /></button>
        <button className="w-10 h-10 bg-white rounded-full mr-3" onClick={moveNext}><ArrowRight style={{ color: 'blue', margin: '8px' }} /></button>
      </div>
      <div className="relative overflow-hidden gap-7">
        <div
          ref={carousel}
          className="carousel-container relative flex gap-5 w-full h-full overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {books.map((book, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-80 h-full snap-start"
              >
                <div className="w-60 h-[522px] bg-white shadow-lg rounded-2xl">
                  <div className="h-[346px] w-full object-fit m-auto rounded-t-2xl">
                    <img className="w-full h-full rounded-t-2xl" src={book.img} alt={book.title} />
                  </div>
                  <span
                    className="items-left gap-1 rounded-sm bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 w-[78px] h-[26px]"
                  >
                    {book.category}
                  </span>
                  <p className="text-left m-5 text-sm text-neutral-400">{book.description}</p>
                  <p className="text-left m-5 text-sm text-slate-900">{book.author}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
// width: 78px;
// height: 26px;

