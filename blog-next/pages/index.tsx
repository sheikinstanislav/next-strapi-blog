import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import CupImage from '../assets/cup-img.png';
import HeroImage from '../assets/hero-img.png';
import { BlogPostCard } from '../components/BlogPostCard';
import { api } from '../http/index';
import { Layout } from '../layout/Layout';
import { IPost } from '../types';

interface IPostsProps {
  posts: IPost[];
}

const PostPageImage = styled.picture`
  max-width: 475px;
  & img {
    width: 100%;
    @media (max-width: 575px) {
      height: auto;
      min-width: 350px;
    }
  }

  @media (max-width: 991px) {
    max-width: unset;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 30px 0 170px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Home: FC<IPostsProps> = ({ posts }) => {
  return (
    <Layout>
      <main>
        <div className="container">
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '70px 0',
              '@media (max-width: 991px)': {
                flexDirection: 'column-reverse',
                padding: '40px 0',
              },
            }}
            className="hero"
          >
            <div css={{ maxWidth: '355px' }} className="hero-left">
              <h1
                css={{
                  fontSize: '60px',
                  fontWeight: '700',
                  lineHeight: '73px',
                }}
              >
                Make better coffee{' '}
                <span>
                  <Image src={CupImage} alt="cup-img" />
                </span>
              </h1>
              <p
                css={{ fontSize: '30px', color: '#4A5568', marginTop: '20px' }}
              >
                why learn how to blog?
              </p>
            </div>
            <div className="hero-right">
              <PostPageImage>
                <Image src={HeroImage} alt="hero-img" />
              </PostPageImage>
            </div>
          </div>

          <PostsGrid>
            {posts &&
              posts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  {...{
                    title: post.attributes.title,
                    text: post.attributes.full_text,
                    imgUrl: post.attributes.image.data.attributes.url,
                    date: post.attributes.createdAt,
                    slug: post.attributes.slug,
                  }}
                />
              ))}
          </PostsGrid>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // get posts form our API
  const { data } = await api.get('/posts?populate=*');
  const posts = data.data;

  return {
    props: { posts },
  };
};

export default Home;
