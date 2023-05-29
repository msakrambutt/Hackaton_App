import { client } from "@/lib/SanityClient";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}



async function GetData() {
    const res = await client.fetch('*[_type == "products"]');
    return res;
}


async function Products() {
    const data = await GetData();

    return <div>
        <div>
            <h4 className="text-center mt-20 font-semibold text-[#0062f5]">
                PRODUCTS
            </h4>
            <h1 className="text-center md:text-4xl text-3xl mt-3 font-bold">
                Check What We Have
            </h1>
            <div className="md:grid grid-cols-3 mt-10 mx-20">
                {data.map((elem: any) => (
                    <div className="text-center" key={elem.id}>
                        <Image src={urlFor(elem.female.image).url()} alt="" width={350} height={350} className="shadow-lg" />
                        <h3 className="text-2xl font-bold mt-1">{elem.female.title}</h3>
                        <p className="text-xl font-semibold mt-1">${elem.female.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Products;
