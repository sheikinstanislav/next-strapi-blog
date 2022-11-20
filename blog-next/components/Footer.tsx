import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer
      css={{
        padding: '35px 0',
        borderTop: '1px solid #E8E8E8',
        '@media (max-width: 576px)': {
          padding: '25px 0',
        },
      }}
    >
      <div className="container">
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '@media (max-width: 576px)': {
              flexDirection: 'column',
            },
          }}
        >
          <p
            css={{
              fontSize: '16px',
              '& span': {
                fontWeight: '700',
              },
              '@media (max-width: 576px)': {
                marginBottom: '20px',
              },
            }}
          >
            <span>hotcoffee </span>
            2022 copyright all rights reserved
          </p>
          <ul
            css={{
              display: 'flex',
              alignItems: 'center',
              '& li': {
                marginRight: '30px',
                '&:last-child': {
                  marginRight: '0',
                },
              },
            }}
          >
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_15)">
                    <path
                      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                      fill="#454444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_15">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_18)">
                    <path
                      d="M22.162 5.65599C21.3986 5.99368 20.589 6.21546 19.76 6.31399C20.6337 5.79142 21.2877 4.969 21.6 3.99999C20.78 4.48799 19.881 4.82999 18.944 5.01499C18.3146 4.34157 17.4804 3.89495 16.5709 3.74457C15.6615 3.59419 14.7279 3.74848 13.9153 4.18344C13.1026 4.6184 12.4564 5.30967 12.0771 6.14978C11.6978 6.98989 11.6067 7.93177 11.818 8.82899C10.1551 8.74564 8.52832 8.31351 7.04328 7.56065C5.55823 6.80779 4.24812 5.75104 3.19799 4.45899C2.82628 5.09744 2.63095 5.82321 2.63199 6.56199C2.63199 8.01199 3.36999 9.29299 4.49199 10.043C3.828 10.0221 3.17862 9.84277 2.59799 9.51999V9.57199C2.59819 10.5377 2.93236 11.4736 3.54384 12.221C4.15532 12.9685 5.00647 13.4815 5.95299 13.673C5.33661 13.84 4.6903 13.8646 4.06299 13.745C4.32986 14.5762 4.85 15.3032 5.55058 15.8241C6.25117 16.345 7.09712 16.6338 7.96999 16.65C7.10247 17.3313 6.10917 17.835 5.04687 18.1322C3.98458 18.4293 2.87412 18.5142 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.36199C20.089 8.18199 20.084 7.99999 20.076 7.82199C20.8949 7.23016 21.6016 6.49701 22.163 5.65699L22.162 5.65599Z"
                      fill="#454444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_18">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_21)">
                    <path
                      d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
                      fill="#454444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_21">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
