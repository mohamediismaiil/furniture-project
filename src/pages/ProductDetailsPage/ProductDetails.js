import { WashingMachine, Waves } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './components/accordion';
import { useState } from 'react';

export function ProductDetailsPage() {
    return (
        <div className="m-4 lg:grid lg:grid-cols-6 gap-4 max-w-[1200px] xl:mx-auto">
            <div className="col-span-3">
                <ImagePreviewLG />
                <ProductPreviewCarousel />
            </div>
            <div className="col-span-3">
                <h1 className="font-semibold text-2xl uppercase mb-2">
                    Modern wooden shelf
                </h1>
                <p className="font-normal text-sm mb-2">
                    3-seat sofa, with wide armrests/Hallarep grey
                </p>

                <h2 className="font-semibold text-2xl uppercase mb-2">$ 704.64</h2>
                <span>price include all taxes</span>
                <div className="flex gap-2 items-center mb-6">
                    <Stars />
                    <p>5</p>
                </div>
                <div className="h-[1px] bg-gray-200 mb-4" />
                <div className="flex gap-2 items-center mb-4 ">
                    <div className="w-5 h-5 bg-black text-white flex justify-center  text-sm">
                        4
                    </div>
                    <p className="ml-1">4 year warranty</p>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <Waves size={20} />
                    <p className="ml-1">Soft</p>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <WashingMachine size={20} />
                    <p className="ml-1">Washable cover</p>
                </div>
                <div className="h-[1px] bg-gray-200 mb-4" />
                <p className="font-medium text-lg uppercase mb-4">Quantity</p>
                <div className="flex w-[168px] border-2 rounded-md p-3 justify-between mb-6">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <h3 className="mb-4">
                    Choose your cover <span>Hallarp grey</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                    {IMAGES.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-20 h-20 rounded object-cover mb-6"
                        />
                    ))}
                </div>
                <div>
                    <button className="border-2 w-full p-2 rounded-md mb-4">
                        Shop now
                    </button>
                </div>
                <div>
                    <button className="border-2 w-full p-2 bg-[#D3B393] rounded-md mb-4">
                        Add to cart
                    </button>
                </div>

                <ProductFAQ />
            </div>
        </div>
    );
}

const IMAGES = [
    'https://picsum.photos/id/237/400/600',
    'https://picsum.photos/id/227/400/600',
    'https://picsum.photos/id/217/400/600',
    'https://picsum.photos/id/287/400/600',
    // "https://picsum.photos/id/247/400/600",
    // "https://picsum.photos/id/257/400/600",
];

function ProductPreviewCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="lg:hidden">
            <img
                src={IMAGES[activeIndex]}
                className="mb-3 mx-auto w-[300px] aspect-[400/600] rounded"
            />
            {/* dots to switch active image */}
            <div className="flex gap-2 justify-center">
                {IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                            activeIndex === index ? 'bg-black' : 'bg-gray-200'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

function ImagePreviewLG() {
    return (
        <div className="hidden lg:flex">
            <div className="flex flex-col gap-4">
                {IMAGES.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="w-20 h-20 rounded object-cover"
                    />
                ))}
            </div>
            <div className="flex flex-col gap-3 justify-cente flex-1 overflow-auto">
                {IMAGES.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="w-full max-w-[175px] mx-auto rounded object-cover"
                    />
                ))}
            </div>
        </div>
    );
}

function Stars() {
    return (
        <div className="flex">
            <svg
                className="scale-50"
                viewBox="0 0 1000 1000"
                width="1.8rem"
                height="1.8rem"
                aria-hidden="true"
            >
                <path
                    fill="gold"
                    d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                />
            </svg>
            <svg
                className="scale-50"
                viewBox="0 0 1000 1000"
                width="1.8rem"
                height="1.8rem"
                aria-hidden="true"
            >
                <path
                    fill="gold"
                    d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                />
            </svg>
            <svg
                className="scale-50"
                viewBox="0 0 1000 1000"
                width="1.8rem"
                height="1.8rem"
                aria-hidden="true"
            >
                <path
                    fill="gold"
                    d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                />
            </svg>
            <svg
                className="scale-50"
                viewBox="0 0 1000 1000"
                width="1.8rem"
                height="1.8rem"
                aria-hidden="true"
            >
                <path
                    fill="gold"
                    d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                />
            </svg>
            <svg
                className="scale-50"
                viewBox="0 0 1000 1000"
                width="1.8rem"
                height="1.8rem"
                aria-hidden="true"
            >
                <path
                    fill="gold"
                    d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                />
            </svg>
        </div>
    );
}

function ProductFAQ() {
    return (
        <Accordion type="multiple">
            <AccordionItem value="item-1">
                <AccordionTrigger>Product Details</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
                    laboriosam libero quibusdam accusantium voluptates ex quis voluptate?
                    Dolores doloribus, eligendi accusantium iste voluptates inventore
                    eaque numquam praesentium laudantium ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Labore fuga laboriosam libero quibusdam
                    accusantium voluptates ex quis voluptate? Dolores doloribus, eligendi
                    accusantium iste voluptates inventore eaque numquam praesentium
                    laudantium ab.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Safty & Compliance</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
                    laboriosam libero quibusdam accusantium voluptates ex quis voluptate?
                    Dolores doloribus, eligendi accusantium iste voluptates inventore
                    eaque numquam praesentium laudantium ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Labore fuga laboriosam libero quibusdam
                    accusantium voluptates ex quis voluptate? Dolores doloribus, eligendi
                    accusantium iste voluptates inventore eaque numquam praesentium
                    laudantium ab.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
                    laboriosam libero quibusdam accusantium voluptates ex quis voluptate?
                    Dolores doloribus, eligendi accusantium iste voluptates inventore
                    eaque numquam praesentium laudantium ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Labore fuga laboriosam libero quibusdam
                    accusantium voluptates ex quis voluptate? Dolores doloribus, eligendi
                    accusantium iste voluptates inventore eaque numquam praesentium
                    laudantium ab.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Measures</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
                    laboriosam libero quibusdam accusantium voluptates ex quis voluptate?
                    Dolores doloribus, eligendi accusantium iste voluptates inventore
                    eaque numquam praesentium laudantium ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Labore fuga laboriosam libero quibusdam
                    accusantium voluptates ex quis voluptate? Dolores doloribus, eligendi
                    accusantium iste voluptates inventore eaque numquam praesentium
                    laudantium ab.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Review</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
                    laboriosam libero quibusdam accusantium voluptates ex quis voluptate?
                    Dolores doloribus, eligendi accusantium iste voluptates inventore
                    eaque numquam praesentium laudantium ab. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Labore fuga laboriosam libero quibusdam
                    accusantium voluptates ex quis voluptate? Dolores doloribus, eligendi
                    accusantium iste voluptates inventore eaque numquam praesentium
                    laudantium ab.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
