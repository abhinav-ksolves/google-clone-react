import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Search from './Search';

// https://cse.google.com/cse/create/new
function SearchResult() {
    const [{ searchTerm }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(searchTerm);

    return (
        <div className="SearchPage">
            <div className="header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="google-text-image" />
                </Link>
                <Search hidebuttons />
                <div className="searchResultOptions">
                    <div className="left">
                        <div>
                            <SearchIcon className="optionIcon" />
                            <Link to="/all">All</Link>
                        </div>
                        <div>
                            <DescriptionIcon className="optionIcon" />
                            <Link to="/news">News</Link>
                        </div>
                        <div>
                            <ImageIcon className="optionIcon" />
                            <Link to="/images">Images</Link>
                        </div>
                        <div>
                            <LocalOfferIcon className="optionIcon" />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div>
                            <RoomIcon className="optionIcon" />
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div>
                            <MoreVertIcon className="optionIcon" />
                            <Link to="/more">More</Link>
                        </div>

                    </div>
                    <div className="right">
                        <div>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>

            {data &&
                <div className="searchTime">
                    <p>
                        About {data && data.searchInformation.formattedTotalResults} results
                ({data && data.searchInformation.formattedSearchTime}) seconds for {searchTerm}
                    </p>
                </div>
            }
            <div className="results">
                {
                    data && data.items.map(item => {
                        return (
                            <div className="result">
                                <a href={item.link}>{item.displayLink}</a>

                                <a className="resultTitle" href={item.title}>
                                    <h2>
                                        {item.pagemap && item.pagemap.cse_image && item.pagemap.cse_image.length > 0 &&
                                            item.pagemap.cse_image[0].src && <img src={item.pagemap.cse_image[0].src} />}
                                        {item.title}
                                    </h2>
                                </a>
                                <p className="resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SearchResult;
