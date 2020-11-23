import React from 'react';

const RepoItem = ({repo}) => (

    

    <a href={repo.html_url} key="{repo.id}" className="boxItemRepo" target="_blank">
        <img src={repo.owner.avatar_url}></img>
        <div className='teste'>
            <p>Nome: {repo.full_name}</p>
            <p>Login: {repo.owner.login}</p>
            <p>Localização: {repo.owner.location}</p>
        </div>
    </a>
)
export default RepoItem;