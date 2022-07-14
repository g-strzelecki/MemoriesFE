import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Btn } from '../common/Btn';
import { FileUploader } from '../FileUploader/FileUploader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DataContext } from '../../contexts/posts.context';

import './Form.css';

const formDefault = {
  id: '',
  title: '',
  message: '',
  author: '',
  tags: '',
  selectedFile: '',
  likeCount: 0,
};

export const Form = () => {

  const { post, setPost, setPosts } = useContext(DataContext);

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [id, setId] = useState(null);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState(formDefault);

  useEffect(() => {
    post !== null && setForm(post);
  }, [post]);
  
  const refreshPosts = () => {
    (async () => {
      const res = await fetch('http://localhost:3001/post/search')
      const data = await res.json();
      setPosts(data);
    })();
  }
  
  if (loading) {
    return <h2>Creating post in progress...</h2>
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {

      if (!post) {
        
        if(file) {
          const data = new FormData();
    
          data.append('file', file);
    
          await axios.post('//localhost:3001/upload', data)
            .then((e) => {
              toast.success('Upload Success');
            })
            .catch((e) => {
              toast.error('Upload Failed');
            })
        }
  
        const postRes = await fetch('http://localhost:3001/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
  
        const data = await postRes.json();
        
        setId(data.id);

      } else {
        console.log('PATCH: ', form);
        const postRes = await fetch(`http://localhost:3001/post/${form.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        const data = await postRes.json();
        
        setId(data.id);

      }

    } finally {

      setLoading(false);
      setFile(null);
      setForm(formDefault);
      refreshPosts();
      setPost(null);
    }
  }

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }))
  }

  const fileUpload = (file: File) => {
    if (file) {
      updateForm('selectedFile', file.name);
      setFile(file);
    }
  };

  const formClear = () => {
    
    if (!post) {

      setForm(formDefault);

    } else {
      setForm({
        ...post,
        title: formDefault.title,
        message: formDefault.message,
        author: formDefault.author,
        tags: formDefault.tags,
      })
    }
    
  };

  const formNew = () => {

   if (post) {

    setForm(formDefault);
    setPost(null);

   }

  }
  
  return (

    <form 
      className="add-form" 
      action="" 
      onSubmit={handleSubmit}
    >
      {
        post 
        ? 
        <>
          <h2>Update Memory</h2>
          <h4>{`${post.title}`}</h4>
        </> 
        : 
        <h2>Create Memory</h2>
      }
      <p>
        <label>
          Creator: <br/>
          <input
            type="text"
            name="author"
            required
            maxLength={49}
            value={form.author}
            onChange={e => updateForm('author', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Title: <br/>
          <input
            type="text"
            name="title"
            required
            maxLength={99}
            value={form.title}
            onChange={e => updateForm('title', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Tags (coma separated): <br/>
          <input
            type="text"
            name="tags"
            required
            maxLength={99}
            value={form.tags}
            onChange={e => updateForm('tags', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message: <br/>
          <textarea
            name="message"
            required
            maxLength={999}
            value={form.message}
            onChange={e => updateForm('message', e.target.value)}
          />
        </label>
      </p>
      {(post === null) && <FileUploader onFileUpload={fileUpload}/>}
      {!(post === null) && <Btn type="button" text="NEW" onNewForm={formNew}/>}
      <Btn type="button" text="CLEAR" onClearForm={formClear}/>
      <Btn type="submit" text="SUBMIT"/>
    </form>
  )
};
