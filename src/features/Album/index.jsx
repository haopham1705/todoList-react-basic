import React, { useEffect, useState } from 'react'
import AlbumList from '../Album/components/AlbumList'
import productApi from '../../api/productApi'


AlbumFeature.propTypes = {};

export default function AlbumFeature(props) {
    const [product, setProduct] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            }
            const productList = await productApi.getAll(params);
            setProduct(productList)
            console.log(productList);
        };
        fetchProducts();
    }, []);


    const albumList = [
        {
            id: 1,
            name: "Song No.1",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/4/a/b64a578646c561f84e4a29733b907d94.jpg"
        },
        {
            id: 2,
            name: "Song No.2",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/4/a/b64a578646c561f84e4a29733b907d94.jpg"
        },
        {
            id: 3,
            name: "Song No.3",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/4/a/b64a578646c561f84e4a29733b907d94.jpg"
        }
    ]
    return (
        <div>
            <h2 className="App-header">List Song in 2021</h2>
            <AlbumList albumList={albumList} />
            <div>
                <ul>
                    {product.map(product => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
