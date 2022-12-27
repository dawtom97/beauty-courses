import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { convertBreadcrumb } from '../../../utils/convertBreadcrumb';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: absolute;
  top: -40px;

  & ol {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`;

const Crumb = styled.li`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 500;

  & a {
    &::after {
      margin-left: 1rem;
      content: '/';
      font-weight: 300;
    }
  }

  &:last-of-type a {
    color: ${({ theme }) => theme.primary};
    &::after {
      content: '';
    }
  }
`;

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<any>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray: any = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Wrapper aria-label='breadcrumbs'>
      <ol>
        <Crumb>
          <a href='/'>Homepage</a>
        </Crumb>
        {breadcrumbs.map((breadcrumb: any, i: any) => {
          return (
            <Crumb key={breadcrumb.href}>
              <Link href={breadcrumb.href}>
                <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
              </Link>
            </Crumb>
          );
        })}
      </ol>
    </Wrapper>
  );
};

export default Breadcrumbs;
