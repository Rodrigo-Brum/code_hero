import React, { useEffect, useState } from 'react'
import '../css/Character.css'
import api from '../service/api'
import Pagination from './Pagination'
import Search from './Search'


const Characters = () =>  {    
    const [character, setCharacters] = useState([]);
    const [info, setInfo] = useState(0);
    const [offSet, setOffset] = useState(0);
    const [name, setName] = useState('');

    console.log(name);

    const baseURL = 'http://gateway.marvel.com/v1/public/';
    const tipe = 'characters';
    const limit = 10;
    const url = `${baseURL}${tipe}?limit=${limit}&offset=${offSet}${api}`
    const url_name =`${baseURL}${tipe}?name=${name}&limit=${limit}${api}`

    useEffect(() => {
    
        if(name) {
            fetch(url_name)
                .then((response) => {return response.json();})
                .then((response)=> {
                    if(response.data.total > 0) {
                        setInfo(response.data.total);
                        setCharacters(response.data.results);
                    }
                })
        }

        if(name === '') {
            fetch(url)
                .then((response) => {return response.json();})
                .then((response)=> {
                    setInfo(response.data.total);
                    setCharacters(response.data.results);
                })
        }
   },[name, offSet]);

    return (
        <div> 
            <Search value ={ name } onChange = {(str) => setName(str)} />

            <div id='div-span-content'>
                <div><li><span>Personagens</span></li></div>
                <div id='div-series-character'><li><span>Séries</span></li></div>
                <div id='div-event-character'><li><span>Eventos</span></li></div>
            </div>

            {character.map( character => {
                return (
                    <a key={character.id} href={`#/${character.name}`}>
                        <div className="div-character">
                            <div className="group-heros">
                                <img 
                                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                                    alt={`Foto do ${character.name}`} 
                                    id='img-heros'/>

                                <span className="name-character">{character.name}</span>
                            </div>

                            <div className='div-series'>                  
                                <li className='list-series'><span>{character.series.items[0] != undefined && (character.series.items[0].name) }</span></li>
                                <li className='list-series'><span>{character.series.items[1] != undefined && (character.series.items[1].name) }</span></li>
                                <li className='list-series'><span>{character.series.items[2] != undefined && (character.series.items[2].name) }</span></li>
                            </div>

                            <div className='div-events'>  
                                <li className='list-events'><span>{character.events.items[0] != undefined && (character.events.items[0].name) }</span></li>
                                <li className='list-events'><span>{character.events.items[1] != undefined && (character.events.items[1].name) }</span></li>
                                <li className='list-events'><span>{character.events.items[2] != undefined && (character.events.items[2].name) }</span></li>
                            </div>
                        </div>
                    </a>
                )
            })} 
    
            <Pagination limit = {limit} total = {info} offSet = {offSet} setOffset = {setOffset}/>
        </div> 
    )
}

export default Characters;