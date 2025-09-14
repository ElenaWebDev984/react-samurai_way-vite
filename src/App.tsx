import './App.css'

export function App() {

    const tracks = [
        {
            title: "Musicfun soundtrack",
            url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
        },
        {
            title: "Musicfun soundtrack instrumental",
            url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        },
        {
            title: "Musicfun soundtrack instrumental",
            url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        },
        {
            title: "Musicfun soundtrack instrumental",
            url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        },
    ]

    const newLiReactElements = tracks.map((track) => (
        <li>
            <div>{track.title}</div>
            <audio controls src={track.url}></audio>
        </li>
    ))

    if(tracks.length === 0){
        return (
            <div>
                <h1>Musicfun player</h1>
                <span>No tracks</span>
            </div>
        )
    }


    return (
        <>
            <h1>Musicfun player</h1>
            <ul>{newLiReactElements}</ul>
        </>
    )
}

export const name = "AppFileComponent"
