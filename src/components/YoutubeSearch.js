import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YoutubeSearch = () => {

    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, [])

    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyClLd3wilAnzxG-7tTGcDoeR4fzKVB7amM',
                'type': 'video',
                'q': query
            }
        })

        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {

                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }

            setVideos(result);
        }

    }

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button" onClick={handleSearchYoutube}>Search</button>
            </div>

            {videos && videos.length > 0 &&

                videos.map(item => {
                    return (
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                                <iframe className="ifram-yt"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>

                                </iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="created-at">
                                    Created At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className="author">
                                    Author: {item.author}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "qfl23tVg1voEbenXIpQbcauL_ic",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Pp3BIXn_fKWKOkCti1hN-uEdTOM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Ke90Tje7VS0"
//         },
//         "snippet": {
//           "publishedAt": "2018-07-16T16:51:44Z",
//           "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
//           "title": "React JS - React Tutorial for Beginners",
//           "description": "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! Want to master React?",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Programming with Mosh",
//           "liveBroadcastContent": "none",
//           "publishTime": "2018-07-16T16:51:44Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "s_Jj9Lik5re3u6rDGcWaYt8UOPc",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "hQAHSlTtcmY"
//         },
//         "snippet": {
//           "publishedAt": "2019-10-22T16:00:07Z",
//           "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
//           "title": "Learn React In 30 Minutes",
//           "description": "IMPORTANT: Full React Course: https://courses.webdevsimplified.com/learn-react-today In this video I will be covering all of the ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/hQAHSlTtcmY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Web Dev Simplified",
//           "liveBroadcastContent": "none",
//           "publishTime": "2019-10-22T16:00:07Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "HIS7joGKh9RBcRkCMJNstbxB4bM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Y6aYx_KKM7A"
//         },
//         "snippet": {
//           "publishedAt": "2019-09-04T14:30:00Z",
//           "channelId": "UCsvqVGtbbyHaMoevxPAq9Fg",
//           "title": "What Is ReactJS? | ReactJS Basics | Learn ReactJS | ReactJS Tutorial For Beginners | Simplilearn",
//           "description": "In this video, we learn all about ReactJS, it's features and some basic concepts required to build a React Application. React is a ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Y6aYx_KKM7A/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Y6aYx_KKM7A/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Y6aYx_KKM7A/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Simplilearn",
//           "liveBroadcastContent": "none",
//           "publishTime": "2019-09-04T14:30:00Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "XLtCZnyEx4NrjJAnpMSLYhVr4uA",
//         "id": {
//           "kind": "youtube#playlist",
//           "playlistId": "PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
//         },
//         "snippet": {
//           "publishedAt": "2018-10-29T12:01:47Z",
//           "channelId": "UC80PWRj_ZU8Zu0HSMNVwKWw",
//           "title": "ReactJS Tutorial for Beginners",
//           "description": "React is an open source javascript library for building user interfaces. React is a project created and maintained by Facebook.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/QFaFIcGhPoM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/QFaFIcGhPoM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Codevolution",
//           "liveBroadcastContent": "none",
//           "publishTime": "2018-10-29T12:01:47Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Tsktk29o78by79nrNuDQE7VKDvM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "w7ejDZ8SWv8"
//         },
//         "snippet": {
//           "publishedAt": "2021-01-18T19:01:11Z",
//           "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
//           "title": "React JS Crash Course",
//           "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Traversy Media",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-01-18T19:01:11Z"
//         }
//       }
//     ]
//   }
