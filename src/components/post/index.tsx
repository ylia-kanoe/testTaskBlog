import { useEffect, useState } from "react"
import { postsData } from "../../services/postsApi/types"
import './style.css'

type propsType = {
    post: postsData
}

export function Post(props: propsType) {
    const reactions = localStorage.getItem('reaction')?.split(',')

    const [like, setLike] = useState(reactions && Number(reactions[0]) || randomNumber())
    const [dislike, setDislike] = useState(reactions && Number(reactions[1]) || randomNumber())
    const [activeLike, setActiveLike] = useState(reactions && Number(reactions[2]) || 0)
    const [activeDislike, setActiveDislike] = useState(reactions && Number(reactions[3]) || 0)

    function randomNumber() {
        return Math.floor(Math.random() * 50)
    }

    useEffect(() => {
        delete localStorage.reaction
    }, [])

    return (
        <>{props.post &&
            <article className='postItem'>
                <div className="container">
                    <div className="postItemTop">
                        <div className="postItemLinkBack">
                            <a href="/">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="#0A0A0A" />
                                </svg>
                                Вернуться к статьям</a>
                        </div>
                        <div className="postItemIconContainer">
                            <div className={`postItemIcon ${activeLike ? 'active' : ''}`}
                                onClick={() => {
                                    if (activeLike) {
                                        setActiveLike(0)
                                        setLike(+like - 1)
                                    } else {
                                        setActiveLike(1)
                                        setLike(+like + 1)
                                        setActiveDislike(0)
                                    }
                                }}>
                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.666687 24.1667H3.33335C4.06669 24.1667 4.66669 23.5667 4.66669 22.8334V10.8334C4.66669 10.1 4.06669 9.50002 3.33335 9.50002H0.666687V24.1667ZM27.1067 14.6734C27.2534 14.34 27.3334 13.98 27.3334 13.6067V12.1667C27.3334 10.7 26.1334 9.50002 24.6667 9.50002H17.3334L18.56 3.30002C18.6267 3.00669 18.5867 2.68669 18.4534 2.42002C18.1467 1.82002 17.76 1.27335 17.28 0.793354L16.6667 0.166687L8.12002 8.71335C7.61335 9.22002 7.33335 9.90002 7.33335 10.6067V21.06C7.33335 22.7667 8.73335 24.1667 10.4534 24.1667H21.2667C22.2 24.1667 23.08 23.6734 23.56 22.8734L27.1067 14.6734Z" fill="#959298" />
                                </svg>
                                {like}
                            </div>
                            <div className={`postItemIcon ${activeDislike ? 'active' : ''}`}
                                onClick={() => {
                                    if (+dislike > 0) {
                                        if (activeDislike) {
                                            setActiveDislike(0)
                                            setDislike(+dislike - 1)
                                        } else {
                                            setActiveDislike(1)
                                            setDislike(+dislike + 1)
                                            setActiveLike(0)
                                        }
                                    }
                                }}>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66666 5.83331H5.33333C6.06666 5.83331 6.66666 6.43331 6.66666 7.16665V19.1666C6.66666 19.9 6.06666 20.5 5.33333 20.5H2.66666V5.83331ZM29.1067 15.3266C29.2533 15.66 29.3333 16.02 29.3333 16.3933V17.8333C29.3333 19.3 28.1333 20.5 26.6667 20.5H19.3333L20.56 26.7C20.6267 26.9933 20.5867 27.3133 20.4533 27.58C20.1467 28.18 19.76 28.7266 19.28 29.2066L18.6667 29.8333L10.12 21.2866C9.61333 20.78 9.33333 20.1 9.33333 19.3933V8.95331C9.33333 7.23331 10.7333 5.83331 12.4533 5.83331H23.2533C24.2 5.83331 25.0667 6.32665 25.5467 7.12665L29.1067 15.3266Z" fill="#3A3541" fillOpacity="0.54" />
                                </svg>
                                {dislike}
                            </div>
                        </div>
                    </div>
                    <div className="postItemInfo">
                        <p className='postItemTitle'>{props.post.title}</p>
                        <div className='postItemContainer'>
                            <div className='postItemImage'>
                                <img src="https://placehold.co/600x400" />
                            </div>
                            <p className='postItemText'>{props.post.body}</p>
                        </div>
                    </div>
                </div>
            </article >
        }
        </>
    )
}