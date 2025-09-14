import './App.css'


const tracks = [
    {
        id: 1,
        isSelected: false,
        title: "Musicfun soundtrack",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        isSelected: false,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
        id: 3,
        isSelected: true,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
        id: 4,
        isSelected: false,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
]

const selectedTrackId = 1

export function App() {

    if (tracks === null) {
        return (
            <div>
                <h1>Musicfun player</h1>
                <span>Loading...</span>
            </div>
        )
    }

    if (tracks.length === 0) {
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
            <ul>
                {tracks.map((track) => (
                    <li key={track.id}
                        style={{border: track.id === selectedTrackId ? "1px solid orange" : "none"}}
                    >
                        <div>{track.title}</div>
                        <audio controls src={track.url}></audio>
                    </li>
                ))}
            </ul>
        </>
    )
}

export const name = "AppFileComponent"
