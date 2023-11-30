
import { ArtistName } from './ArtistName.jsx'
import { CoverImage } from './CoverImage.jsx'
import { AlbumName } from './AlbumName.jsx'



export const Album = ({ albumProp }) => {
    console.log(albumProp);
    return (
        <div >
            {albumProp.map((album) => (

                <div className="albumWrap" key={album.id}>
                    <CoverImage images={album.images} />
                    <a href={album.external_urls.spotify}>
                        <AlbumName nameProp={album.name} />
                    </a>
                    <a href={album.external_urls.spotify}>
                        <ArtistName artistProp={album.artists} />
                    </a>
                </div>

            ))}
        </div>
    );
}
