"use client";

import React, { useState } from 'react';
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import styles from "./page.module.css";
import Modal from './components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    // <main className={styles.main}>
    //   {/* <Post author="Eduardo José" body="Analista/Programador" />
    //   <Post author="Amanda Nunes" body="Administradora de Banco de Dados" />
    //   <Post author="Sergey Kadirov" body="Especialista em Segurança Digital" />
    //   <PostsList /> */}
      
    //   {/* <NewPost /> */}
    // </main>
    
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal show={showModal} onClose={handleCloseModal} title="My Modal Title">
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}
