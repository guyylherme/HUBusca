import React from 'react';
import RepoItem from './Components/RepoItem'

const ListaRepo = ({repositorios}) => (
    <div className="boxListaRepo">
        {repositorios.map(repo => (
            <RepoItem repo={repo} />
        ))}
    </div>
)

export default ListaRepo;