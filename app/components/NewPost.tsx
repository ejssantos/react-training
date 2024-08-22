//  Adding Event Listeners

/**
  Esse erro ocorre porque o Next.js, a partir da versão 13, introduziu o conceito de componentes de
  servidor e cliente. Por padrão, todos os componentes são considerados como componentes de servidor,
  a menos que sejam explicitamente marcados como componentes de cliente.

  Como o useState (e outros hooks como useEffect) só podem ser usados em componentes de cliente, você
  precisa marcar o seu componente como um componente de cliente usando a diretiva "use client" no topo
  do arquivo.
 */
"use client";

import React, { useState } from 'react';

function NewPost() {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(event.target.value);
    console.log(event.target.value);
  }

  function changeNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    // Aqui você pode adicionar lógica para processar os dados
    console.log('Submitted:', { body, name });
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={body}
          onChange={changeBodyHandler}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={changeNameHandler}
        />
      </p>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default NewPost;