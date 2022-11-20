import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BASE_URL } from '../http';
import { IPostCardInfo } from '../types';

const PostCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
  border-radius: 5px;
  max-width: 300px;
`;

const PostCardContent = styled.div`
  padding: 18px 18px 24px;
`;
//TODO check adaptive/responsive
const PostCardPicture = styled.picture`
  width: 100%;
  & img {
    width: 100%;
    height: auto;
    max-height: 450px;
  }
`;

const PostCardTitle = styled.h2`
  color: #2d3748;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostCardText = styled.p`
  font-weight: 400;
  line-height: 17px;
  font-size: 14px;
  margin-bottom: 20px;
  color: #718096;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostCardDate = styled.time`
  font-size: 12px;
  color: #718096;
`;

const PostCardLink = styled.div`
  font-size: 12px;
  color: #2d3748;
  font-weight: 700;
`;

export const BlogPostCard: FC<IPostCardInfo> = ({
  title,
  date,
  imgUrl,
  slug,
  text,
}) => {
  return (
    <Link
      css={{
        ' @media (max-width: 575px)': {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
      href={`/post/${slug}`}
    >
      <PostCard>
        <PostCardPicture>
          <Image
            className="img"
            src={`${BASE_URL}${imgUrl}`}
            width="300"
            height="180"
            css={{
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            alt={`${title}-img`}
          />
        </PostCardPicture>

        <PostCardContent>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardText>{text}</PostCardText>
          <PostCardBottom>
            <PostCardDate>{format(parseISO(date), 'MMM do yyyy')}</PostCardDate>
            <PostCardLink>Read more</PostCardLink>
          </PostCardBottom>
        </PostCardContent>
      </PostCard>
    </Link>
  );
};
