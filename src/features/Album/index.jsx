import React from 'react'
import AlbumList from '../Album/components/AlbumList'

AlbumFeature.propTypes = {};

export default function AlbumFeature(props) {
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
        </div>
    )
}
