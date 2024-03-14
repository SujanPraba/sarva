"use client"
import { Carousel } from 'primereact/carousel';
// import { ProductService } from './service/ProductService';

export default function Slider() {
    const slides = [
        { color: 'lightblue' },
        { color: 'lightgreen' },
        { color: 'lightcoral' }
    ];
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const slideTemplate = (slide) => {
        return (
            <div className="slide" style={{ width: '400px', height: '200px', backgroundColor: slide.color }}>
                {/* You can add any content you want within each slide */}
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={slides} numVisible={2} numScroll={1} itemTemplate={slideTemplate} responsiveOptions={responsiveOptions} className="custom-carousel" />
        </div>
    );
}

