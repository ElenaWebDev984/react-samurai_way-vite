import './App.css'

function App() {

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

    const li1 = (
        <li>
            <div>{tracks[0].title}</div>
            <audio controls src={tracks[0].url}></audio>
        </li>
    )

    const li2 = (
        <li>
            <div>{tracks[1].title}</div>
            <audio controls src={tracks[1].url}></audio>
        </li>
    )


    return (
        <>
            <h1>Musicfun player</h1>
            <ul>
                {li1}
                {li2}
            </ul>
        </>
    )
}

export default App
