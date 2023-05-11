import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={558}
    viewBox="0 0 280 558"
    backgroundColor="#e4e2e2"
    foregroundColor="#cbc3c3"
    {...props}
  >
    <rect x="16" y="378" rx="16" ry="16" width="248" height="86" />
    <rect x="70" y="330" rx="16" ry="16" width="140" height="26" />
    <rect x="16" y="498" rx="16" ry="16" width="248" height="42" />
    <circle cx="138" cy="143" r="124" />
    <rect x="42" y="281" rx="16" ry="16" width="200" height="24" />
  </ContentLoader>
);

export default Skeleton;
