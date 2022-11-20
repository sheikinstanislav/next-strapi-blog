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
              <Image src={HeroImage} alt="hero-img" />
            </div>
          </div>

          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '20px',
              padding: '30px 0 170px',
            }}
          >
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
          </div>
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
