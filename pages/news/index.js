import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-grat-frametwork'>
            Nextjs Is A Great Frametwork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
