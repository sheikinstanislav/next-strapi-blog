import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { api, BASE_URL } from '../../http';
import { Layout } from '../../layout/Layout';
import { IPost } from '../../types';

const PostPagePicture = styled.picture`
  width: 100%;
  & img {
    width: 100%;
    height: auto;
    max-height: 450px;
    object-fit: cover;
  }
`;

const PostPageContent = styled.div`
  padding-bottom: 30px;
  max-width: 760px;
`;

const PostPageHeading = styled.div`
  padding: 20px 0 30px;
  margin-bottom: 35px;
  border-bottom: 1px solid #e8e7e7;
`;

const PostPageTitle = styled.h2`
  font-weight: 700;
  font-size: 45px;
  color: #2d3748;
  margin-bottom: 20px;
`;

const PostPageAuthor = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #2d3748;
  margin-right: 30px;
`;

const PostPageDate = styled.time`
  font-size: 18px;
  line-height: 22px;
  color: #718096;
`;

const PostPageText = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #718096;
  & p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Post: FC<IPost> = (post) => {
  return (
    <Layout>
      <div className="container">
        <PostPagePicture>
          <Image
            src={`${BASE_URL}${post.attributes.image.data.attributes.url}`}
            width={900}
            height={400}
            alt={`${post.attributes.title}-img`}
          />
        </PostPagePicture>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <PostPageContent>
            <PostPageHeading>
              <PostPageTitle>{post.attributes.title}</PostPageTitle>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PostPageAuthor>
                  Written by {post.attributes.author}
                </PostPageAuthor>
                <PostPageDate>
                  {format(parseISO(post.attributes.createdAt), 'EEEE MMMM MM')}
                </PostPageDate>
              </div>
            </PostPageHeading>
            <PostPageText>
              <ReactMarkdown>{post.attributes.full_text}</ReactMarkdown>
            </PostPageText>
          </PostPageContent>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get posts form our API
  const { data } = await api.get('/posts');
  const posts = data.data;

  const paths = posts.map((post: IPost) => ({
    params: { slug: post.attributes.slug },
  }));

  console.log({
    paths,
    fallback: false,
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  // Get single post by slug
  const { data } = await api.get(
    `/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  const post = data.data[0];

  return {
    props: post,
  };
};

export default Post;
