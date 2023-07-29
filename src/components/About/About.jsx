import "./About.css"

export default function About() {
    return (
        <div className="about">
            <h1>Basics</h1>
            <ul>
                <li>Name: Gustavo Silva</li>
                <li>Old: 21 anos</li>
                <li>Genrer: Masculino</li>
                <li>Cell: (98)99162-7829</li>
                <li>Email: gustavooficial2511@gmail.com</li>
            </ul>
            <h1>About</h1>
            <p>
                Jovem, gosto de jogar videogame e ouvir 
                musicas, me dedico no momento a ser 
                desenvolvedor web, gosto de aprender 
                sobre computacao e amo programar.
            </p>
            <h1>Formations</h1>
            <ol>
                <li>Desenvolvimento web | Programadores do amanha</li>
            </ol>
            <h1>Experiences</h1>
            <ol>
                <li>Hackathon dev mobile | MTM Tecnologia</li>
                <li>Projetos individuais (front, back e softwares)</li>
                <li>Projetos do curso</li>
            </ol>            
        </div>
    )
}