import { useTypedMutation, useTypedQuery } from "../urql";

import { ProductCard } from '../modules/Products/Card'
import styled from 'styled-components';

interface ArticleForm {
  title: string;
  url: string;
}

const Background = styled.main`
  width: 100%;
  min-height: 100vh;

  background-color: #fff;
  
  padding: 1rem;
`

export function List() {
  const [articles] = useTypedQuery({
    query: {
      articles: {
        id: true,
        title: true,
        url: true
      }
    }
  });

  const [, createArticle] = useTypedMutation((opts: ArticleForm) => ({
    createArticle: [
      opts,
      {
        id: true,
        url: true
      }
    ]
  }));

  const handleCreateArticle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const fd = new FormData(e.currentTarget);
      
      createArticle({
        url: fd.get("url")!.toString(),
        title: fd.get("title")!.toString()
      });

      e.currentTarget.reset();
  }

  return (
    <Background>
      <ol>
        {articles.data?.articles.map(article => (
          <li>
            <ProductCard title={article.title} key={article.id} />
          </li>
        ))}
      </ol>
    </Background>
  );
}
