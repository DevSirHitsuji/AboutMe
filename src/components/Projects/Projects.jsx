import { useState } from "react"
import "./Projects.css"

export default function Projects(props) {
    const [open, setOpen] = useState(false)
    const [repository, setRepository] = useState({})

    const getRepository = () => {
        let res = localStorage.getItem("repository")
        let data = JSON.parse(res)
        setRepository(data)
    }

    const openRepos = (repository) => {
        localStorage.setItem("repository", JSON.stringify(repository))
        getRepository()
        setOpen(!open)
    }

    const getFullDate = (created_at) => {
        let date = new Date(created_at)
        let fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return fullDate
    }

    return (
        <div className="list-repos">
            <div className={open ? "close-repo" : ""}>
                {props.repositories.map((repos, index) => {           
                    return (
                        <div key={index} className="repos" onClick={() => openRepos(repos)}>
                            <div className="header">
                                <h1>Name: {repos.name}</h1>
                                <p>Date: {getFullDate(repos.created_at)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <div className={open ? "view-repos open apear" : "view-repos"}>
                <div className="close">
                    <h1 onClick={() => setOpen(false)}>X</h1>
                </div>
                <h1>{repository.name}</h1>
                <div className="descriptions">
                    <p className="description">{repository.description ? repository.description : <span> <p>🥸</p> This repository don't have a description, please open the link for more informations</span>}</p>
                    <p>Created at {getFullDate(repository.created_at)}</p>
                    <p>Last update: {getFullDate(repository.updated_at)}</p> 
                </div>
                
                <div className="more-infos">
                    <p>✍️ Language: {repository.language}</p>
                    <p>⭐️ Stars: {repository.stargazers_count ? repository.stargazers_count : "0 🥲"}</p>
                    <p>☢️ Forks: {repository.forks_count ? repository.forks_count : "0 😭"}</p>
                    <p>👀 Visits: {repository.watchers_count}</p>
                    <p className="link"> 🌐 Link for <a href={repository.html_url} target="_blank">repository</a></p>
                    <p>{repository.homepage ? (<>©️ Link of <a href={repository.homepage}>Static site</a></>) : ""}</p>
                </div>
            </div>
        </div>
    )
}