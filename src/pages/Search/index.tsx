import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css';

type dadosUser = {
    avatar_url: string,
    public_repos: number,
    followers: number,
    following: number,
    company: string,
    blog: string,
    location: string,
    created_at: string,
    html_url: string,
}


const Search = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [name, setName] = useState('');
    const [dados, setDados] = useState<dadosUser>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoader(true);
        
        makeRequest({url: name})
        .then(response => setDados(response.data))
        .finally(() => {
            setIsLoader(false);
        })
    }
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="search-content">
                <h1 className="text-title">Encontre um perfil Github</h1>
                <input 
                    placeholder="Usuário Github"
                    value={name}
                    name="name"
                    onChange={handleOnChange}
                />
                <div>
                    <Button text="Encontrar" />
                </div>                
            </div>
        </form>
        {isLoader && 
            <div className="search-content-loader">            
                <ImageLoader/> 
                <InfoLoader/>
            </div> } 
        {dados &&
            <div className="search-content-loader">
                <div className="search-btn-img">
                    <img src={dados.avatar_url} alt={name} className="search-img"/>
                    <a href={dados.html_url}>
                        <Button text="Ver Perfil" />
                    </a>
                </div>
               
               <div>
                    <div className="search-dados">
                        <h4 className="search-dados-text">Repositórios Públicos: {dados.public_repos}</h4>
                        <h4 className="search-dados-text">Seguidores: {dados.followers}</h4>
                        <h4 className="search-dados-text">Seguindo: {dados.following}</h4>
                    </div>
                    
                    <div className="search-info">
                        <h1 className="search-info-title">Informações</h1>
                        <h4 className="search-info-text"><strong>Empresa: </strong> {dados.company}</h4>
                        <h4 className="search-info-text"><strong>Website/Blog: </strong> {dados.blog}</h4>
                        <h4 className="search-info-text"><strong>Localidade: </strong> {dados.location}</h4>
                        <h4 className="search-info-text"><strong>Membro desde: </strong> {dados.created_at}</h4>
                    </div>
                </div>
                
            </div>
        }       
        </>
    );
}

export default Search;